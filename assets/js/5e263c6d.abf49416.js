"use strict";(self.webpackChunkbig_dipper_2_0_docs=self.webpackChunkbig_dipper_2_0_docs||[]).push([[649],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return p}});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)o=s[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)o=s[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var d=a.createContext({}),l=function(e){var t=a.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},c=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,s=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(o),p=n,h=u["".concat(d,".").concat(p)]||u[p]||m[p]||s;return o?a.createElement(h,r(r({ref:t},c),{},{components:o})):a.createElement(h,r({ref:t},c))}));function p(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=o.length,r=new Array(s);r[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,r[1]=i;for(var l=2;l<s;l++)r[l]=o[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},97:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var a=o(2122),n=o(9756),s=(o(7294),o(3905)),r=["components"],i={title:"Custom chains",sidebar_position:5},d=void 0,l={unversionedId:"cosmos-based/parser/custom-chains",id:"cosmos-based/parser/custom-chains",isDocsHomePage:!1,title:"Custom chains",description:"Creating a custom version of BDJuno is pretty straightforward. All you have to do is:",source:"@site/docs/cosmos-based/parser/custom-chains.md",sourceDirName:"cosmos-based/parser",slug:"/cosmos-based/parser/custom-chains",permalink:"/cosmos-based/parser/custom-chains",version:"current",lastUpdatedAt:1633922948,formattedLastUpdatedAt:"10/11/2021",sidebarPosition:5,frontMatter:{title:"Custom chains",sidebar_position:5},sidebar:"mySidebar",previous:{title:"Config reference",permalink:"/cosmos-based/parser/config"},next:{title:"Setup",permalink:"/cosmos-based/frontend/setup"}},c=[{value:"Forking BDJuno",id:"forking-bdjuno",children:[]},{value:"Create a new branch",id:"create-a-new-branch",children:[]},{value:"Add or update your dependencies",id:"add-or-update-your-dependencies",children:[]},{value:"Add your application modules",id:"add-your-application-modules",children:[]},{value:"(Optional) Add your custom addresses parser",id:"optional-add-your-custom-addresses-parser",children:[]}],m={toc:c};function u(e){var t=e.components,o=(0,n.Z)(e,r);return(0,s.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Creating a custom version of BDJuno is pretty straightforward. All you have to do is:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Fork the BDJuno repository."),(0,s.kt)("li",{parentName:"ol"},"Create a new branch for your project."),(0,s.kt)("li",{parentName:"ol"},"Add or update the dependencies based on your needs."),(0,s.kt)("li",{parentName:"ol"},"Add your application module managers."),(0,s.kt)("li",{parentName:"ol"},"(Optional) Implement a custom messages parser.")),(0,s.kt)("h2",{id:"forking-bdjuno"},"Forking BDJuno"),(0,s.kt)("p",null,"The first thing you need to do is ",(0,s.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/quickstart/fork-a-repo"},"forking"),"\nour ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/forbole/bdjuno/"},"BDJuno repository"),"."),(0,s.kt)("p",null,"This will allow you to create a new repository where you can work without any limits. It will also allow you to later\nupdate the base repo to make sure you have a constantly updated BDJuno codebase that does not fall behind ours."),(0,s.kt)("h2",{id:"create-a-new-branch"},"Create a new branch"),(0,s.kt)("p",null,"The next thing you want to do is create a new branch for your project. The best way to do this is by checking out one of\nthe ",(0,s.kt)("inlineCode",{parentName:"p"},"cosmos/")," branches and then crete a new branch from there."),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Select the correct Cosmos branch Currently BDJuno supports multiple Cosmos versions (you can see them")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"all ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/forbole/bdjuno/branches/all?query=cosmos%2F"},"here"),"). It is important that when you create your\nnew branch you checkout the one that is most similar to the Cosmos SDK your project is based on."))),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Custom SDK implementations If you are developing a project with a custom Cosmos SDK implementation, don't worry.")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"We will see how to handle that later. For now, just check out the branch that is made for the Cosmos version most\nsimilar to the one you are based on."))),(0,s.kt)("p",null,"To checkout the branch you desire, just run:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout -t origin/<branch-name>\n\n# E.g.\n# git checkout origin/cosmos/v0.43.x\n")),(0,s.kt)("p",null,"Now that you have checked out the Cosmos branch, you can create your own branch:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout -b chains/<project-name>\n\n# E.g\n# git checkout -b chains/my-project\n")),(0,s.kt)("p",null,"This will create a new ",(0,s.kt)("inlineCode",{parentName:"p"},"chains/")," branch that you can start working on."),(0,s.kt)("h2",{id:"add-or-update-your-dependencies"},"Add or update your dependencies"),(0,s.kt)("p",null,"Now it's time to add the dependencies that your project needs. For these steps we will take as\nexample ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/desmos-labs/desmos/"},"Desmos"),"."),(0,s.kt)("p",null,"The first thing we want to do is adding Desmos ad a dependency:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"go get -u github.com/desmos-labs/desmos@v1.0.0\n")),(0,s.kt)("p",null,"This will edit your ",(0,s.kt)("inlineCode",{parentName:"p"},"go.mod")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"go.sum")," file including the Desmos dependency."),(0,s.kt)("p",null,"Then, we need to make sure that the project we want to use does not uses some custom dependencies. To do this, we can\ntake a loot at ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/desmos-labs/desmos/blob/v1.0.0/go.mod"},"its ",(0,s.kt)("inlineCode",{parentName:"a"},"go.mod")," file")," and search for\nany ",(0,s.kt)("inlineCode",{parentName:"p"},"replace")," directives."),(0,s.kt)("p",null,"In our case, Desmos uses some custom dependencies:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"replace github.com/gogo/protobuf => github.com/regen-network/protobuf v1.3.3-alpha.regen.1\n\nreplace github.com/cosmos/cosmos-sdk => github.com/desmos-labs/cosmos-sdk v0.42.5-0.20210814123412-0e951b4cec31\n\nreplace google.golang.org/grpc => google.golang.org/grpc v1.33.2\n\nreplace github.com/cosmos/ledger-cosmos-go => github.com/desmos-labs/ledger-desmos-go v0.11.2-0.20210814121638-5d87e392e8a9\n")),(0,s.kt)("p",null,"What we need to do, is edit BDJuno's ",(0,s.kt)("inlineCode",{parentName:"p"},"go.mod")," file by adding the same ",(0,s.kt)("inlineCode",{parentName:"p"},"replace")," directives. This will make sure that\nBDJuno uses the same Cosmos SDK fork and other dependencies and does not error due to incompatibility problems."),(0,s.kt)("h2",{id:"add-your-application-modules"},"Add your application modules"),(0,s.kt)("p",null,"Once you have added the dependency to your project, it is not time to use such dependency inside BDJuno."),(0,s.kt)("p",null,"This will be used to tell BDJuno which modules you support to make sure that it is able to properly deserialize all your\nmessages. Failing in doing this will result in BDJuno returning an error each time a custom message is to be parsed from\na transaction."),(0,s.kt)("p",null,"To tell BDJuno which modules you support, you need to change what the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/forbole/bdjuno/blob/cosmos/v0.43.x/cmd/bdjuno/main.go#L37"},(0,s.kt)("inlineCode",{parentName:"a"},"cmd/bdjuno/main.go#getBasicManages"))," function returns by adding your project's ",(0,s.kt)("inlineCode",{parentName:"p"},"ModuleBasics"),". As an example, for Desmos we will change it to be"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},"func getBasicManagers() []module.BasicManager {\n    return []module.BasicManager{\n        simapp.ModuleBasics,\n        desmosapp.ModuleBasics, // <--- We have added this line\n    }\n}\n")),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Your modules should be last")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Make sure that you set your ",(0,s.kt)("inlineCode",{parentName:"p"},"ModuleBasics")," to be the last one in the slice.\nThis will make sure that if you have any module that is named the same way as a Cosmos one (maybe because you use a custom implementation), the custom one will be used correctly.\nIf you set your modules first, the Cosmos ones will override them."))),(0,s.kt)("h2",{id:"optional-add-your-custom-addresses-parser"},"(Optional) Add your custom addresses parser"),(0,s.kt)("p",null,"Inside BigDipper, when you visualize the details of an account you are able to see all the messages that it was involved in.\nThis is done by parsing each message to get the involved addresses.\nBy default, inside BDJuno we do this only with the Cosmos messages, and then we rely on the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/3f8596c1955e40ef30e4abcd06f2237d132db3a9/types/tx_msg.go#L21"},(0,s.kt)("inlineCode",{parentName:"a"},"Msg#GetSigners")," method"),"."),(0,s.kt)("p",null,"Although this works great for most messages that involve a single user (the signer), your project might include some messages that involve more addresses.\nFor example, you might have a message that allows to send funds from one user to the other. Or a message that allows one user to perform a kind of action towards another one."),(0,s.kt)("p",null,"If this is the case, it is important that you build a custom addresses parser inside BDJuno to make sure that each message is associated with the proper list of addresses, and that the associated accounts are refreshed correctly once the message is parsed (especially if it edits both account balances)."),(0,s.kt)("p",null,"To do this, what you can do is create a new file inside the ",(0,s.kt)("inlineCode",{parentName:"p"},"cmd/bdjuno")," folder naming it after your project.\nInside that file, you need to create a function with the following signature:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},"// CustomAddressesParser represents a MessageAddressesParser for the my custom module\nfunc CustomAddressesParser(cdc codec.Marshaler, cosmosMsg sdk.Msg) ([]string, error)\n")),(0,s.kt)("p",null,"This method should return either a list of all the parsed addresses, or ",(0,s.kt)("inlineCode",{parentName:"p"},"messages.MessageNotSupported(cosmosMsg)")," is the message is not supported."),(0,s.kt)("p",null,"If you want to take a look at a reference implementation you can refer to the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/forbole/bdjuno/blob/v2/chains/desmos/mainnet/cmd/bdjuno/desmos.go"},"Desmos one"),"."),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Combine multiple parsers")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"If you have multiple modules that should be parsed in different ways, we suggest you splitting them into different parsers and then combining that parsers together using the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/forbole/juno/blob/v2/cosmos-stargate/modules/messages/account_parser.go"},(0,s.kt)("inlineCode",{parentName:"a"},"messages.JoinMessageParsers"))," method.\nYou can see how this is used for Desmos ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/forbole/bdjuno/blob/v2/chains/desmos/mainnet/cmd/bdjuno/desmos.go"},"here"),"."))),(0,s.kt)("p",null,"Finally, once you have your custom addresses parser setup, you need to add it to the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/forbole/bdjuno/blob/v2/chains/desmos/mainnet/cmd/bdjuno/main.go"},(0,s.kt)("inlineCode",{parentName:"a"},"cmd/bdjuno/main.go#getAddressesParser"))," method. Here is the example for Desmos:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},"func getAddressesParser() messages.MessageAddressesParser {\n    return messages.JoinMessageParsers(\n        desmosMessageAddressesParser,\n        messages.CosmosMessageAddressesParser,\n    )\n}\n")),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Your parser should be first")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Make sure you set your parser to be the first one used. Otherwise, the ",(0,s.kt)("inlineCode",{parentName:"p"},"CosmosMessageAddressesParser")," will default to using the ",(0,s.kt)("inlineCode",{parentName:"p"},"Msg#GetSigners")," method and your parser will never be called, even though BDJuno will not return any error."))))}u.isMDXComponent=!0}}]);