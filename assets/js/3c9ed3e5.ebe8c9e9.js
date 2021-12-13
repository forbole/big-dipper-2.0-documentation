"use strict";(self.webpackChunkbig_dipper_2_0_docs=self.webpackChunkbig_dipper_2_0_docs||[]).push([[568],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4494:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var n=a(2122),r=a(9756),o=(a(7294),a(3905)),i=["components"],s={title:"3. Run Hasura",sidebar_position:4},l=void 0,p={unversionedId:"cosmos-based/parser/hasura",id:"cosmos-based/parser/hasura",isDocsHomePage:!1,title:"3. Run Hasura",description:"Once you have successfully started BDJuno, the last step that you can do is set up Hasura to expose the parsed data using a GraphQL endpoint. To do this you have to:",source:"@site/docs/cosmos-based/parser/hasura.md",sourceDirName:"cosmos-based/parser",slug:"/cosmos-based/parser/hasura",permalink:"/cosmos-based/parser/hasura",version:"current",lastUpdatedAt:1639400633,formattedLastUpdatedAt:"12/13/2021",sidebarPosition:4,frontMatter:{title:"3. Run Hasura",sidebar_position:4},sidebar:"mySidebar",previous:{title:"2. Setup and run BDJuno",permalink:"/cosmos-based/parser/setup"},next:{title:"BDJuno v2",permalink:"/cosmos-based/parser/config/config"}},u=[{value:"Installing Hasura",id:"installing-hasura",children:[]},{value:"Importing the metadata",id:"importing-the-metadata",children:[]}],d={toc:u};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Once you have successfully started BDJuno, the last step that you can do is set up ",(0,o.kt)("a",{parentName:"p",href:"https://hasura.io/"},"Hasura")," to expose the parsed data using a GraphQL endpoint. To do this you have to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install Hasura"),(0,o.kt)("li",{parentName:"ol"},"Import the metadata we provide you with")),(0,o.kt)("h2",{id:"installing-hasura"},"Installing Hasura"),(0,o.kt)("p",null,"The easiest way to install Hasura is to follow the ",(0,o.kt)("a",{parentName:"p",href:"https://hasura.io/docs/latest/graphql/core/getting-started/docker-simple.html"},"official guide"),". This will allow you to have a Hasura instance up and running in matter of minutes."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Role variable    ")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When starting Hasura make sure you specified the following environmental variable:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},'HASURA_GRAPHQL_UNAUTHORIZED_ROLE="anonymous"\n')))),(0,o.kt)("p",null,"This will make sure that even non-authenticated users will be able to access the endpoint correctly."),(0,o.kt)("p",null,"Once this is done, you will also need to install ",(0,o.kt)("a",{parentName:"p",href:"https://hasura.io/docs/latest/graphql/core/hasura-cli/install-hasura-cli.html#install-hasura-cli"},"Hasura CLI")," on the same machine where you cloned the BDJuno repository."),(0,o.kt)("h2",{id:"importing-the-metadata"},"Importing the metadata"),(0,o.kt)("p",null,"When you have installed both Hasura and Hasura CLI, you are now ready to import the metadata. This will allow you to easily set up all the queries that BigDipper will later need. To do this, you can simply run the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Move into the hasura folder inside the root of BDJuno\n$ cd /path/to/BDJuno/hasura\n\n# Import the metadata into the remote server\n$ hasura metadata apply --endpoint <your-endpoint> --admin-secret <hasura_password>\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Verify endpoint  ")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Make sure that ",(0,o.kt)("inlineCode",{parentName:"p"},"<your-endpoint>")," represents your full GraphQL endpoint (eg. ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8080"),") and ",(0,o.kt)("inlineCode",{parentName:"p"},"<hasura_password>")," matches the console secret you specified while starting Hasura. If you did not use a secret, then you can remove the flag."),(0,o.kt)("p",{parentName:"div"},"Once the metadata is successfully applied, you will be able to start using it properly."))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Metadata error    ")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If Hasura is complaining about metadata not being valid after importing them, please head into the ",(0,o.kt)("em",{parentName:"p"},"Metadata status")," page, delete all the metadata and try re-importing them. This should fix all the issues."))))}c.isMDXComponent=!0}}]);