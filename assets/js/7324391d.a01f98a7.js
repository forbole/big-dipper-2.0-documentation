"use strict";(self.webpackChunkbig_dipper_2_0_docs=self.webpackChunkbig_dipper_2_0_docs||[]).push([[56],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7029:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],p={title:"Setup",sidebar_position:1},s=void 0,l={unversionedId:"cosmos-based/frontend/setup",id:"cosmos-based/frontend/setup",isDocsHomePage:!1,title:"Setup",description:"Docs curently based on: base-v2.0.0",source:"@site/docs/cosmos-based/frontend/setup.md",sourceDirName:"cosmos-based/frontend",slug:"/cosmos-based/frontend/setup",permalink:"/cosmos-based/frontend/setup",version:"current",lastUpdatedAt:1646895489,formattedLastUpdatedAt:"3/10/2022",sidebarPosition:1,frontMatter:{title:"Setup",sidebar_position:1},sidebar:"mySidebar",previous:{title:"v1.1.0",permalink:"/cosmos-based/parser/migrations/v1.1.0"},next:{title:"Themes",permalink:"/cosmos-based/frontend/customisations/theme"}},d=[{value:"Setup the environment",id:"setup-the-environment",children:[]},{value:"Create .env",id:"create-env",children:[]},{value:"Configure General Config",id:"configure-general-config",children:[]},{value:"Configure Chain Config",id:"configure-chain-config",children:[]},{value:"Check Hasura is in sync with our graphql operations",id:"check-hasura-is-in-sync-with-our-graphql-operations",children:[]},{value:"Start Development mode",id:"start-development-mode",children:[]},{value:"Available Scripts",id:"available-scripts",children:[]},{value:"Build and Run a Production Docker Image",id:"build-and-run-a-production-docker-image",children:[]}],c={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Docs curently based on: ",(0,o.kt)("inlineCode",{parentName:"p"},"base-v2.0.0")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Requires ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/forbole/bdjuno"},"bdjuno")," to be on at least ",(0,o.kt)("inlineCode",{parentName:"p"},"v1.1.0")," release if it's being used."))),(0,o.kt)("p",null,"The following will teach you how to run big dipper 2.0 ui for dev mode. If you have any other questions please feel free to open an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/forbole/big-dipper-2.0-cosmos/issues"},"issue")),(0,o.kt)("h2",{id:"setup-the-environment"},"Setup the environment"),(0,o.kt)("p",null,"Fork, clone and check out our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/forbole/big-dipper-2.0-cosmos/releases"},"latest base release")," for the most stable version or feel free to use the current documentation version. If you're feeling frisky feel free to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"base")," branch."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/<user>/big-dipper-2.0-cosmos.git\ngit checkout <tag>\nnpm ci\n")),(0,o.kt)("h2",{id:"create-env"},"Create .env"),(0,o.kt)("p",null,"Setup your ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file with the following key and adjust the values to your needs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"NEXT_PUBLIC_GRAPHQL_URL=http://localhost:8080/v1/graphql\nNEXT_PUBLIC_GRAPHQL_WS=ws://localhost:8080/v1/graphql\nNODE_ENV=development\nPORT=3000\nNEXT_PUBLIC_URL=http://localhost:3000\nNEXT_PUBLIC_RPC_WEBSOCKET=ws://localhost:26657/websocket\nNEXT_PUBLIC_CHAIN_TYPE=testnet\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Key"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"NEXT_PUBLIC_GRAPHQL_URL")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The api exposed by hasura using ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/forbole/bdjuno"},"BDJuno"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"NEXT_PUBLIC_GRAPHQL_WS")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The websocket exposed by hasura using ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/forbole/bdjuno"},"BDJuno"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"NODE_ENV")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"development")," / ",(0,o.kt)("inlineCode",{parentName:"td"},"production"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"PORT")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The port to run the app on")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"NEXT_PUBLIC_URL")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The api where you will be hosting the frontend of this explorer. Used for SEO and url preview purposes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"NEXT_PUBLIC_RPC_WEBSOCKET")),(0,o.kt)("td",{parentName:"tr",align:"left"},"RPC websocket (used for the consensus module)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"NEXT_PUBLIC_CHAIN_TYPE")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"testnet")," / ",(0,o.kt)("inlineCode",{parentName:"td"},"mainnet"))))),(0,o.kt)("h2",{id:"configure-general-config"},"Configure General Config"),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"src/configs/general_config.json")," ",(0,o.kt)("strong",{parentName:"p"},"update the json")," to give proper maintainer credits as well as a way for users to submit bugs/ issues.\nFor a better understanding of what each section and field refers to, please read the ",(0,o.kt)("a",{parentName:"p",href:"/cosmos-based/frontend/general-config"},"general config reference"),"."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We will not be handling any opened issues directly related to your explorer as we won't have the proper info"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "maintainer": {\n    "name": "Forbole", // update\n    "url": "https://forbole.com" // update\n  },\n  "github": {\n    "reportIssue": "https://github.com/forbole/big-dipper-2.0-cosmos/issues" // update\n  },\n  "version": "base-v2.0.0"\n}\n')),(0,o.kt)("h2",{id:"configure-chain-config"},"Configure Chain Config"),(0,o.kt)("p",null,"Depending on you value in ",(0,o.kt)("inlineCode",{parentName:"p"},"NEXT_PUBLIC_CHAIN_TYPE"),", update ",(0,o.kt)("inlineCode",{parentName:"p"},"src/configs/chain_config.(testnet | mainnet).json")," to fit your chain needs."),(0,o.kt)("p",null,"For a better understanding of what each section and field refers to, please read the ",(0,o.kt)("a",{parentName:"p",href:"/cosmos-based/frontend/chain-config"},"chain config reference"),"."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you have trouble understanding ",(0,o.kt)("strong",{parentName:"p"},"tokenUnits")," please insert it as the following ",(0,o.kt)("inlineCode",{parentName:"p"},"the base token needs [x] exponents to display the following token unit")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"tokenUnits": {\n    "udaric": {\n      "display": "daric",\n      "exponent": 6\n    },\n    "upretz": {\n      "display": "pretz",\n      "exponent": 18\n    },\n    "ubar": {\n      "display": "pretz",\n      "exponent": 6\n    },\n  },\n')),(0,o.kt)("h2",{id:"check-hasura-is-in-sync-with-our-graphql-operations"},"Check Hasura is in sync with our graphql operations"),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"codegen.yml")," change the following to your graphql url to run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run graphql:codegen"),". If there are no errors it will regenerate the needed ",(0,o.kt)("inlineCode",{parentName:"p"},"src/graphql/types.tsx"),". If there is an error this can indicate the backend hasura was not setup correctly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{11}","{11}":!0},'overwrite: true\nconfig:\n  # omitOperationSuffix: true\n  skipTypeNameForRoot: true\ngenerates:\n  ./src/graphql/types.tsx:\n    documents:\n      - \'./src/**/*.graphql\'\n      - \'./src/**/*_actions.ts\'\n      - \'!./src/**/desmos_profile.graphql\'\n    schema: <your graphql url>\n    plugins:\n      - "typescript"\n      - "typescript-operations"\n      - "typescript-react-apollo" # To generate custom hooks per query\n  ./src/graphql/desmos_profile.ts:\n    schema: https://gql.mainnet.desmos.network/v1/graphql\n    documents:\n      - \'src/graphql/desmos_profile_graphql.ts\'\n    plugins:\n      - "typescript"\n      - "typescript-operations"\n\n')),(0,o.kt)("h2",{id:"start-development-mode"},"Start Development mode"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm run dev\n")),(0,o.kt)("h2",{id:"available-scripts"},"Available Scripts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Starts the app in development mode using nodemon\nnpm run dev\n\n# Builds the app for production\nnpm run build\n\n# Runs the build app in production mode\nnpm run start\n\n# Typescript check\nnpm run type-check\n\n# Lint check\nnpm run lint\n\n# Jest\nnpm run test\n\n# Rebuilds gql types if anything in the `src/graphql` folder has changed.\n# Make sure the schema url in src/codegen.yml is updated if you use this\nnpm run graphql:codegen\n")),(0,o.kt)("h2",{id:"build-and-run-a-production-docker-image"},"Build and Run a Production Docker Image"),(0,o.kt)("p",null,"The following will build the docker image in production mode (replace the build arg values with your own)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker build \\\n--build-arg NEXT_PUBLIC_GRAPHQL_URL=http://localhost:8080/v1/graphql \\\n--build-arg NEXT_PUBLIC_GRAPHQL_WS=ws://localhost:8080/v1/graphql \\\n--build-arg NODE_ENV=production \\\n--build-arg PORT=3000 \\\n--build-arg NEXT_PUBLIC_URL=http://localhost:3000 \\\n--build-arg NEXT_PUBLIC_WS_CHAIN_URL=ws://localhost:26657/websocket \\\n--build-arg NEXT_PUBLIC_CHAIN_TYPE=testnet \\\n-t <image-name> .\n")),(0,o.kt)("p",null,"Run the image"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -d --rm -p 3000:3000 <image-name>\n")))}u.isMDXComponent=!0}}]);