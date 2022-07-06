"use strict";(self.webpackChunkbig_dipper_2_0_docs=self.webpackChunkbig_dipper_2_0_docs||[]).push([[942],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(a),u=o,g=c["".concat(l,".").concat(u)]||c[u]||m[u]||r;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5981:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var n=a(2122),o=a(9756),r=(a(7294),a(3905)),i=["components"],s={title:"v2.0.0 to v3.0.0",sidebar_position:2},l=void 0,d={unversionedId:"cosmos-based/parser/migrations/v3.0.0",id:"cosmos-based/parser/migrations/v3.0.0",isDocsHomePage:!1,title:"v2.0.0 to v3.0.0",description:"This guide provides details for the upgrade from v2.0.0 to v3.0.0.",source:"@site/docs/cosmos-based/parser/migrations/v3.0.0.md",sourceDirName:"cosmos-based/parser/migrations",slug:"/cosmos-based/parser/migrations/v3.0.0",permalink:"/cosmos-based/parser/migrations/v3.0.0",version:"current",lastUpdatedAt:1657100553,formattedLastUpdatedAt:"7/6/2022",sidebarPosition:2,frontMatter:{title:"v2.0.0 to v3.0.0",sidebar_position:2},sidebar:"mySidebar",previous:{title:"v1.0.0 to v2.0.0",permalink:"/cosmos-based/parser/migrations/v2.0.0"},next:{title:"Setup",permalink:"/cosmos-based/frontend/setup"}},p=[{value:"Update branch to v3",id:"update-branch-to-v3",children:[{value:"Migrate config file to v3",id:"migrate-config-file-to-v3",children:[]},{value:"Remove Hasura Actions service",id:"remove-hasura-actions-service",children:[]},{value:"Stop BDJuno",id:"stop-bdjuno",children:[]},{value:"Update BDJuno service (optional)",id:"update-bdjuno-service-optional",children:[]},{value:"Start BDJuno",id:"start-bdjuno",children:[]}]},{value:"Migration to PostgreSQL table partitioning",id:"migration-to-postgresql-table-partitioning",children:[{value:"Prepare for the migration",id:"prepare-for-the-migration",children:[]},{value:"Start the migration",id:"start-the-migration",children:[]},{value:"Start BDJuno",id:"start-bdjuno-1",children:[]},{value:"Hasura",id:"hasura",children:[]},{value:"Migration completed",id:"migration-completed",children:[]},{value:"Revert (optional)",id:"revert-optional",children:[]}]}],m={toc:p};function c(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide provides details for the upgrade from v2.0.0 to v3.0.0.  "),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you are ",(0,r.kt)("strong",{parentName:"p"},"NOT")," using PostgreSQL database, you should ",(0,r.kt)("ins",null,"only"),"\nfollow the steps described in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Update branch to v3")," section and skip the rest of the guide.  "))),(0,r.kt)("h2",{id:"update-branch-to-v3"},"Update branch to v3"),(0,r.kt)("p",null,"Pull the changes from ",(0,r.kt)("inlineCode",{parentName:"p"},"v3.0.0-stargate")," (v0.42.x/stargate) or ",(0,r.kt)("inlineCode",{parentName:"p"},"v3.0.0")," (v0.44.x and above)\ntag to your branch depending on the cosmos sdk version being used in your project. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ git fetch --tags\n$ git checkout <your chain base>\n$ git checkout -b merge/v3.0.0-stargate\n$ git merge base-v3.0.0-stargate\n")),(0,r.kt)("p",null,"Fix all merge conflicts and then install the latest BDJuno version "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ make install\n")),(0,r.kt)("h3",{id:"migrate-config-file-to-v3"},"Migrate config file to v3"),(0,r.kt)("p",null,"Once installed you will need to migrate ",(0,r.kt)("inlineCode",{parentName:"p"},"config.yaml")," file to v3. To do that run: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ bdjuno migrate v3\n")),(0,r.kt)("p",null,"This will create additional sections inside the ",(0,r.kt)("inlineCode",{parentName:"p"},".yaml")," file for table partition and hasura actions config.",(0,r.kt)("br",{parentName:"p"}),"\n","Don't panic if you see the message pops up: ",(0,r.kt)("inlineCode",{parentName:"p"},"partition batch size is set to 0, skipping migration")," as this is expected.\nYou will need to modify the values of the newly added ",(0,r.kt)("inlineCode",{parentName:"p"},"partition_size")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"partition_batch")," sections before starting the migration. Make sure you set both values to ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," if you are not using the PostgreSQL database and want to skip the migration part. Read ",(0,r.kt)("a",{parentName:"p",href:"/cosmos-based/parser/config/config#database"},"Database Config Reference")," for more information."),(0,r.kt)("h3",{id:"remove-hasura-actions-service"},"Remove Hasura Actions service"),(0,r.kt)("p",null,"From ",(0,r.kt)("inlineCode",{parentName:"p"},"v3.0.0")," Hasura Actions have been merged with BDJuno' to run on a single ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," command.\nThis improves the BDJuno setup making it easier for users to follow. Find out more details how to enable and configure ",(0,r.kt)("a",{parentName:"p",href:"/cosmos-based/parser/hasura#configure-hasura-actions"},"Hasura Actions")),(0,r.kt)("p",null,"If you run Hasura Actions as a background service you should now stop it and remove it from the system. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo systemctl stop hasura-actions.service\n$ sudo rm /etc/systemd/system/hasura-actions.service\n")),(0,r.kt)("h3",{id:"stop-bdjuno"},"Stop BDJuno"),(0,r.kt)("p",null,"Now you need to stop BDJuno by running ",(0,r.kt)("inlineCode",{parentName:"p"},"CTRL + C"),", or if you are running it as a system service run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo systemctl stop bdjuno.service\n")),(0,r.kt)("h3",{id:"update-bdjuno-service-optional"},"Update BDJuno service (optional)"),(0,r.kt)("p",null,"If you are running BDJuno as a background service, you will need to update it before restarting. Edit ",(0,r.kt)("inlineCode",{parentName:"p"},"bdjuno.service")," file and replace ",(0,r.kt)("inlineCode",{parentName:"p"},"parse")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," command at the ExecStart line. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo nano /etc/systemd/system/bdjuno.service\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[Unit]\nDescription=BDJuno parser\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$GOPATH/bin/bdjuno start\nRestart=always\nRestartSec=3\nLimitNOFILE=4096\n\n[Install]\nWantedBy=multi-user.target\n")),(0,r.kt)("p",null,"Then reload the configuration files"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ sudo systemctl daemon-reload\n")),(0,r.kt)("h3",{id:"start-bdjuno"},"Start BDJuno"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),(0,r.kt)("strong",{parentName:"h5"},"Do ",(0,r.kt)("strong",{parentName:"strong"},"NOT")," start BDJuno if you're using PostgreSQL database and you are going to perform table migration. Proceed to the next step instead."),"  ")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"})),(0,r.kt)("p",null,"If you are not using the PostgreSQL database you can now start BDJuno and continue the parsing as usual"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ bdjuno start\n")),(0,r.kt)("p",null,"If you are running it as a background service run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo systemctl start bdjuno.service\n")),(0,r.kt)("h2",{id:"migration-to-postgresql-table-partitioning"},"Migration to PostgreSQL table partitioning"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Skip the rest of this guide if you are ",(0,r.kt)("strong",{parentName:"p"},"NOT")," using the PostgreSQL database or if you don't want to perform the migration to PostgreSQL table partitioning."))),(0,r.kt)("p",null,"In order to efficiently query the database with large amount of transactions and messages,\nwe've implemented PostgreSQL ",(0,r.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/10/ddl-partitioning.html"},"Table Partitioning"),"\nfeature starting from ",(0,r.kt)("inlineCode",{parentName:"p"},"v3.0.0")," which turns the ",(0,r.kt)("inlineCode",{parentName:"p"},"transaction")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," tables into\npartitioned tables and creates partitions by a certain interval of heights set inside\n",(0,r.kt)("a",{parentName:"p",href:"/cosmos-based/parser/config/config#database"},"config.yaml")," file. "),(0,r.kt)("h3",{id:"prepare-for-the-migration"},"Prepare for the migration"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Update partition values inside config.yaml file. ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"database:\n    # How many blocks for each partition. \n    # In this example partition is created per 100,000 blocks.\n    partition_size: 100000\n    \n    # How many rows of transactions are migrated per batch \n    partition_batch: 1000 \n")),(0,r.kt)("p",null,"Read ",(0,r.kt)("a",{parentName:"p",href:"/cosmos-based/parser/config/config#database"},"Database Config Reference")," for more information."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"If the chain implements custom messages that are different to standard cosmos messages, you will need to update the custom account parser ",(0,r.kt)("strong",{parentName:"li"},"(optional)"),".")),(0,r.kt)("p",null,"To update custom account parser follow the steps below: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Fork ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/forbole/juno"},"Juno")," repository."),(0,r.kt)("li",{parentName:"ol"},"Clone forked juno repository to your local machine.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ git clone https://github.com/forbole/juno\n$ cd juno\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Open juno repository in code editor of your choice and add your custom account parser inside ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/forbole/juno/blob/cosmos/v0.44.x/database/migrate/utils/utils.go#L3"},(0,r.kt)("inlineCode",{parentName:"a"},"juno/database/migrate/utils/utils.go")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// Take desmos chain as example:\nvar CustomAccountParser = []string{\n  "sender", "receiver", "user", "counterparty", "blocker", "blocked",\n}\n')),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Push the changes to github and copy the commit hash."),(0,r.kt)("li",{parentName:"ol"},"Change directory back to bdjuno")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd ~/bdjuno\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Open ",(0,r.kt)("inlineCode",{parentName:"li"},"go.mod")," file and replce the juno version with the commit hash you just copied."),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"go mod tidy")," to reload the packages."),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"make install")," to install the latest changes.")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Your custom Juno version should only be used during the migration process. When the migration is completed you should revert to using previous Juno version. "))),(0,r.kt)("h3",{id:"start-the-migration"},"Start the migration"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),(0,r.kt)("strong",{parentName:"h5"},"Please ensure BDJuno is stopped before starting the migration."),"   ")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"})),(0,r.kt)("p",null,"We recommend setting up the migration process as a system service and being patient\nas the migration might take some time, depending on the database size."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo tee /etc/systemd/system/bdjuno-migrate-v3.service > /dev/null <<EOF\n[Unit]\nDescription=BDJuno Table Partition Migration v3\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$GOPATH/bin/bdjuno migrate v3\nLimitNOFILE=4096\nRestart=no\n\n[Install]\nWantedBy=multi-user.target\nEOF\n")),(0,r.kt)("p",null,"Then you need to enable and start the service:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo systemctl enable bdjuno-migrate-v3.service\n$ sudo systemctl start bdjuno-migrate-v3.service\n")),(0,r.kt)("p",null,"BDJuno will now start migration which will:  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"rename ",(0,r.kt)("inlineCode",{parentName:"li"},"transaction")," & ",(0,r.kt)("inlineCode",{parentName:"li"},"message")," tables to ",(0,r.kt)("inlineCode",{parentName:"li"},"transaction_old")," & ",(0,r.kt)("inlineCode",{parentName:"li"},"message_old")),(0,r.kt)("li",{parentName:"ul"},"rename related transaction and message indexes "),(0,r.kt)("li",{parentName:"ul"},"create new ",(0,r.kt)("inlineCode",{parentName:"li"},"transaction")," & ",(0,r.kt)("inlineCode",{parentName:"li"},"message")," tables with partition"),(0,r.kt)("li",{parentName:"ul"},"create indexes for new transaction and message table"),(0,r.kt)("li",{parentName:"ul"},"migrate rows with data by batch from old to new tables"),(0,r.kt)("li",{parentName:"ul"},"drop old function ",(0,r.kt)("inlineCode",{parentName:"li"},"messages_by_address")," and create a new one")),(0,r.kt)("h3",{id:"start-bdjuno-1"},"Start BDJuno"),(0,r.kt)("p",null,"While the migration is ongoing, you can already restart BDJuno to start\nparsing the latest data and it will be stored inside new partitioned tables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ bdjuno start\n")),(0,r.kt)("p",null,"If you are running it as a background service run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo systemctl start bdjuno.service\n")),(0,r.kt)("h3",{id:"hasura"},"Hasura"),(0,r.kt)("p",null,"Since ",(0,r.kt)("inlineCode",{parentName:"p"},"v3.0.0"),", Hasura actions' handlers can use custom endpoints other than ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),".\nHasura will read from the ",(0,r.kt)("inlineCode",{parentName:"p"},"ACTION_BASE_URL")," environmental variable as the action handler's base URL.\nTo update it, you will need to re-create a new docker container, specifying the variable with the ",(0,r.kt)("inlineCode",{parentName:"p"},"-e")," flag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'-e ACTION_BASE_URL="Base URL for Hasura Actions Handlers"\n')),(0,r.kt)("p",null,"For more details, check out ",(0,r.kt)("a",{parentName:"p",href:"/cosmos-based/parser/hasura#installing-hasura"},"Installing Hasura")),(0,r.kt)("p",null,"You will also need to re-apply hasura metadata to match the latest table setup:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd /path/to/bdjuno/hasura\n$ hasura metadata apply --endpoint <your-endpoint> --admin-secret <hasura_password>\n")),(0,r.kt)("h3",{id:"migration-completed"},"Migration completed"),(0,r.kt)("p",null,"Once all transactions and messages have been migrated to new partitioned tables the migration is completed. For the safety reasons\nit does ",(0,r.kt)("strong",{parentName:"p"},"not")," drop old tables ",(0,r.kt)("inlineCode",{parentName:"p"},"transaction_old")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"message_old"),".\nYou might want to drop them after the data consistency is verified and they are no longer needed.   "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE transaction_old;\nDROP TABLE message_old;\n")),(0,r.kt)("h3",{id:"revert-optional"},"Revert (optional)"),(0,r.kt)("p",null,"In any case that the migration fails, you can always revert the changes without losing any data.\nYou might find the below SQL script helpful for altering tables and indexes back to the original names.\nRemember to drop the new ",(0,r.kt)("inlineCode",{parentName:"p"},"transaction")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," tables, along with the messages_by_address function."),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),(0,r.kt)("strong",{parentName:"h5"},"Please ensure BDJuno is stopped prior to running the script."),"  ")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE transaction_old RENAME TO transaction;\nALTER INDEX transaction_old_pkey RENAME TO transaction_pkey;\nALTER INDEX transaction_old_hash_index RENAME TO transaction_hash_index;\nALTER INDEX transaction_old_height_index RENAME TO transaction_height_index;\nALTER TABLE transaction RENAME CONSTRAINT transaction_old_height_fkey TO transaction_height_fkey;\n\nALTER TABLE message_old RENAME TO message;\nALTER INDEX message_old_involved_accounts_addresses RENAME TO message_involved_accounts_addresses;\nALTER INDEX message_old_transaction_hash_index RENAME TO message_transaction_hash_index;\nALTER INDEX message_old_type_index RENAME TO message_type_index;\nALTER TABLE message RENAME CONSTRAINT message_old_transaction_hash_fkey TO message_transaction_hash_fkey;\n\nCREATE FUNCTION messages_by_address(\n    addresses TEXT[],\n    types TEXT[],\n    "limit" BIGINT = 100,\n    "offset" BIGINT = 0)\n    RETURNS SETOF message AS\n$$\nSELECT message.transaction_hash, message.index, message.type, message.value, message.involved_accounts_addresses\nFROM message\n         JOIN transaction t on message.transaction_hash = t.hash\nWHERE (cardinality(types) = 0 OR type = ANY (types))\n  AND addresses && involved_accounts_addresses\nORDER BY height DESC\nLIMIT "limit" OFFSET "offset"\n$$ LANGUAGE sql STABLE;\n')),(0,r.kt)("p",null,"When the tables are altered back, install and run your previous BDJuno branch which\nwill continue to parse the data from the height before the migration started."))}c.isMDXComponent=!0}}]);