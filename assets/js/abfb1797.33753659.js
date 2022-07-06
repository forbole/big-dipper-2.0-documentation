"use strict";(self.webpackChunkbig_dipper_2_0_docs=self.webpackChunkbig_dipper_2_0_docs||[]).push([[566],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(a),m=r,b=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(b,s(s({ref:t},u),{},{components:a})):n.createElement(b,s({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6186:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=a(2122),r=a(9756),o=(a(7294),a(3905)),s=["components"],i={title:"1. Setup the database",sidebar_position:2},c=void 0,l={unversionedId:"solana/parser/database",id:"solana/parser/database",isDocsHomePage:!1,title:"1. Setup the database",description:"SolJuno relies on a PostgreSQL database to store the parsed data, hence the first thing you need to do is install PostgreSQL.",source:"@site/docs/solana/parser/database.md",sourceDirName:"solana/parser",slug:"/solana/parser/database",permalink:"/solana/parser/database",version:"current",lastUpdatedAt:1657100553,formattedLastUpdatedAt:"7/6/2022",sidebarPosition:2,frontMatter:{title:"1. Setup the database",sidebar_position:2},sidebar:"mySidebar",previous:{title:"Overview",permalink:"/solana/parser/overview"},next:{title:"2. Setup and run SolJuno",permalink:"/solana/parser/setup"}},u=[{value:"Backup accounts status",id:"backup-accounts-status",children:[]}],p={toc:u};function d(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"SolJuno relies on a PostgreSQL database to store the parsed data, hence the first thing you need to do is install ",(0,o.kt)("a",{parentName:"p",href:"https://www.postgresql.org/"},"PostgreSQL"),".\nOnce installed, you need to create a new database and a new user that is going to read and write data inside it. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# login to the database\n$ sudo su - postgres\n$ psql\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# create database and user\nCREATE DATABASE soljuno;\nCREATE USER '<your_user>' WITH ENCRYPTED PASSWORD '<your_password>';\nGRANT ALL PRIVILEGES ON DATABASE soljuno TO '<your_user>';\n")),(0,o.kt)("p",null,"Then, you need to run the soljuno database init command with the schema folder that you can find inside the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/forbole/soljuno/tree/master/db/schema"},(0,o.kt)("inlineCode",{parentName:"a"},"db/schema")," folder"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd /path/to/soljuno/database\n$ soljuno db init ./schema --yes \n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Select the correct branch  ")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please make sure you select the correct branch inside the SolJuno repository to view the correct schema for the chain you want to parse."))),(0,o.kt)("h2",{id:"backup-accounts-status"},"Backup accounts status"),(0,o.kt)("p",null,"To backup all the accounts status for migrating to the new instance from old one, execute the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pg_dump soljuno --table=account_balance --table=multisig --table=nonce_account \\\n    --table=program_account --table=program_data_account --table=stake_account \\\n    --table=stake_delegation --table=stake_lockup --table=token --table=token_account \\\n    --table=token_account_balance --table=token_delegation --table=token_supply \\\n    --table=validator --table=validator_config \\\n    --section=data --column-inserts --on-conflict-do-nothing -f backup.dump\n")))}d.isMDXComponent=!0}}]);