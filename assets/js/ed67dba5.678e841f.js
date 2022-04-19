"use strict";(self.webpackChunkbig_dipper_2_0_docs=self.webpackChunkbig_dipper_2_0_docs||[]).push([[942],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,g=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5981:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=["components"],s={title:"v2.0.0 to v3.0.0",sidebar_position:2},l=void 0,d={unversionedId:"cosmos-based/parser/migrations/v3.0.0",id:"cosmos-based/parser/migrations/v3.0.0",isDocsHomePage:!1,title:"v2.0.0 to v3.0.0",description:"This guide provides details for the upgrade from v2.0.0 to v3.0.0.",source:"@site/docs/cosmos-based/parser/migrations/v3.0.0.md",sourceDirName:"cosmos-based/parser/migrations",slug:"/cosmos-based/parser/migrations/v3.0.0",permalink:"/cosmos-based/parser/migrations/v3.0.0",version:"current",lastUpdatedAt:1650374390,formattedLastUpdatedAt:"4/19/2022",sidebarPosition:2,frontMatter:{title:"v2.0.0 to v3.0.0",sidebar_position:2},sidebar:"mySidebar",previous:{title:"v1.0.0 to v2.0.0",permalink:"/cosmos-based/parser/migrations/v2.0.0"},next:{title:"Setup",permalink:"/cosmos-based/frontend/setup"}},p=[{value:"Update branch to v3",id:"update-branch-to-v3",children:[{value:"Migrate config file to v3",id:"migrate-config-file-to-v3",children:[]},{value:"Remove Hasura Actions service",id:"remove-hasura-actions-service",children:[]},{value:"Update service",id:"update-service",children:[]}]},{value:"Migration to PostgreSQL table partitioning",id:"migration-to-postgresql-table-partitioning",children:[{value:"Prepare for the migration",id:"prepare-for-the-migration",children:[]},{value:"Start the migration",id:"start-the-migration",children:[]},{value:"Hasura",id:"hasura",children:[]},{value:"Migration completed",id:"migration-completed",children:[]},{value:"Revert",id:"revert",children:[]}]}],c={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide provides details for the upgrade from v2.0.0 to v3.0.0.",(0,i.kt)("br",{parentName:"p"}),"\n","If you are ",(0,i.kt)("strong",{parentName:"p"},"NOT")," using PostgreSQL database, you should ",(0,i.kt)("ins",null,"only"),"\nfollow the steps described in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Update branch to v3")," section and skip the rest of the guide. "),(0,i.kt)("h2",{id:"update-branch-to-v3"},"Update branch to v3"),(0,i.kt)("p",null,"Pull the changes from ",(0,i.kt)("inlineCode",{parentName:"p"},"v3.0.0-stargate")," (v0.42.x/stargate) or ",(0,i.kt)("inlineCode",{parentName:"p"},"v3.0.0")," (v0.44.x and above)\ntag to your branch depending on the cosmos sdk version being used in your project. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ git fetch --tags\n$ git checkout <your chain base>\n$ git checkout -b merge/v3.0.0-stargate\n$ git merge base-v3.0.0-stargate\n")),(0,i.kt)("p",null,"Fix all merge conflicts and then install the latest BDJuno version "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ make install\n")),(0,i.kt)("h3",{id:"migrate-config-file-to-v3"},"Migrate config file to v3"),(0,i.kt)("p",null,"Once installed you will need to migrate ",(0,i.kt)("inlineCode",{parentName:"p"},"config.yaml")," file to v3. To do that run: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ bdjuno migrate v3\n")),(0,i.kt)("p",null,"This will create additional sections inside ",(0,i.kt)("inlineCode",{parentName:"p"},".yaml")," file for table partition and hasura actions config. "),(0,i.kt)("h3",{id:"remove-hasura-actions-service"},"Remove Hasura Actions service"),(0,i.kt)("p",null,"From ",(0,i.kt)("inlineCode",{parentName:"p"},"v3.0.0")," Hasura Actions have been merged with BDJuno' to run on a single ",(0,i.kt)("inlineCode",{parentName:"p"},"start")," command.\nThis improves the BDJuno setup making it easier for users to follow. Find out more details how to enable and configure ",(0,i.kt)("a",{parentName:"p",href:"/cosmos-based/parser/hasura#configure-hasura-actions"},"Hasura Actions")),(0,i.kt)("p",null,"If you run Hasura Actions as a background service you should now stop it and remove it from the system. "),(0,i.kt)("h3",{id:"update-service"},"Update service"),(0,i.kt)("p",null,"If you are running BDJuno as a background service, you will need to update it before restarting. Edit ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system/bdjuno.service")," file and replace ",(0,i.kt)("inlineCode",{parentName:"p"},"parse")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"start")," command at the ExecStart line. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo nano /etc/systemd/system/bdjuno.service\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[Unit]\nDescription=BDJuno parser\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$GOPATH/bin/bdjuno start\nRestart=always\nRestartSec=3\nLimitNOFILE=4096\n\n[Install]\nWantedBy=multi-user.target\n")),(0,i.kt)("p",null,"Then reload the configuration files"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ sudo systemctl daemon-reload\n")),(0,i.kt)("p",null,"\u26a0\ufe0f  ",(0,i.kt)("strong",{parentName:"p"},"Do ",(0,i.kt)("strong",{parentName:"strong"},"NOT")," restart BDJuno yet if you're using PostgreSQL"),"\n",(0,i.kt)("strong",{parentName:"p"},"database and you are going to perform table migration. Proceed to the next step instead."),"  "),(0,i.kt)("p",null,"If you are not using the PostgreSQL database you can now start BDJuno "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ bdjuno start\n")),(0,i.kt)("p",null,"or if you are running it as a background service run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo systemctl restart bdjuno.service\n")),(0,i.kt)("h2",{id:"migration-to-postgresql-table-partitioning"},"Migration to PostgreSQL table partitioning"),(0,i.kt)("p",null,"In order to efficiently query the database with large amount of transactions and messages,\nwe've implemented PostgreSQL ",(0,i.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/10/ddl-partitioning.html"},"Table Partitioning"),"\nfeature starting from ",(0,i.kt)("inlineCode",{parentName:"p"},"v3.0.0")," which turns the ",(0,i.kt)("inlineCode",{parentName:"p"},"transaction")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"message")," tables into\npartitioned tables and creates partitions by a certain interval of heights set inside\n",(0,i.kt)("a",{parentName:"p",href:"/cosmos-based/parser/config/config#database"},"config.yaml file"),". "),(0,i.kt)("h3",{id:"prepare-for-the-migration"},"Prepare for the migration"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add custom address parser inside ",(0,i.kt)("inlineCode",{parentName:"li"},"bdjuno/database/migrate/utils.go")," file,\nor leave it empty if no custom address parser is needed. ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// If no custom address parser\nvar CustomAccountParser = []string{}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// Take desmos chain as example:\nvar CustomAccountParser = []string{\n  "sender", "receiver", "user", "counterparty", "blocker", "blocked",\n}\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Update partition values inside config.yaml file  ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"database:\n    # How many blocks for each partition. \n    # In this example partition is created per 100,000 blocks.\n    partition_size: 100000\n    \n    # How many rows of transactions are migrated per batch \n    partition_batch: 1000 \n")),(0,i.kt)("p",null,"Read ",(0,i.kt)("a",{parentName:"p",href:"/cosmos-based/parser/config/config#database"},"Database Config Reference")," for more information."),(0,i.kt)("h3",{id:"start-the-migration"},"Start the migration"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Make sure BDJuno is stopped before the migration."),(0,i.kt)("br",{parentName:"p"}),"\n","We recommend setting up the migration process as a system service and being patient\nas the migration might take some time, depending on the database size."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo tee /etc/systemd/system/bdjuno-migrate-v3.service > /dev/null <<EOF\n[Unit]\nDescription=BDJuno Table Partition Migration v3\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$GOPATH/bin/bdjuno migrate v3\nLimitNOFILE=4096\nRestart=no\n\n[Install]\nWantedBy=multi-user.target\nEOF\n")),(0,i.kt)("p",null,"Then you need to enable and start the service:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo systemctl enable bdjuno-migrate-v3.service\n$ sudo systemctl start bdjuno-migrate-v3.service\n")),(0,i.kt)("p",null,"BDJuno will now start migration which will:  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"rename ",(0,i.kt)("inlineCode",{parentName:"li"},"transaction")," & ",(0,i.kt)("inlineCode",{parentName:"li"},"message")," tables to ",(0,i.kt)("inlineCode",{parentName:"li"},"transaction_old")," & ",(0,i.kt)("inlineCode",{parentName:"li"},"message_old"),"  "),(0,i.kt)("li",{parentName:"ul"},"rename related transaction and message indexes; "),(0,i.kt)("li",{parentName:"ul"},"create new ",(0,i.kt)("inlineCode",{parentName:"li"},"transaction")," & ",(0,i.kt)("inlineCode",{parentName:"li"},"message")," tables with partition;"),(0,i.kt)("li",{parentName:"ul"},"create indexes for new transaction and message table  "),(0,i.kt)("li",{parentName:"ul"},"migrate rows with data by batch from old to new tables;"),(0,i.kt)("li",{parentName:"ul"},"drop old function ",(0,i.kt)("inlineCode",{parentName:"li"},"messages_by_address")," and create a new one;")),(0,i.kt)("p",null,"While the migration is ongoing, you can already restart BDJuno to start\nsyncing the latest data and it will be stored inside new partitioned tables:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ bdjuno start\n")),(0,i.kt)("h3",{id:"hasura"},"Hasura"),(0,i.kt)("p",null,"Since ",(0,i.kt)("inlineCode",{parentName:"p"},"v3.0.0"),", Hasura actions' handlers can use custom endpoints other than http://localhost:3000.\nHasura will read from the ",(0,i.kt)("inlineCode",{parentName:"p"},"ACTION_BASE_URL")," environmental variable as the action handler's base URL.\nTo update it, you will need to re-create a new docker container, specifying the variable with the ",(0,i.kt)("inlineCode",{parentName:"p"},"-e")," flag:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'-e ACTION_BASE_URL="Base URL for Hasura Actions Handlers"\n')),(0,i.kt)("p",null,"For more details, check out ",(0,i.kt)("a",{parentName:"p",href:"/cosmos-based/parser/hasura#installing-hasura"},"Installing Hasura")),(0,i.kt)("p",null,"You will also need to re-apply hasura metadata to match the latest table setup:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd /path/to/bdjuno/hasura\n$ hasura metadata apply --endpoint <your-endpoint> --admin-secret <hasura_password>\n")),(0,i.kt)("h3",{id:"migration-completed"},"Migration completed"),(0,i.kt)("p",null,"Once all transactions and messages have been migrated to new partitioned tables the migration is completed. For the safety reasons\nit does ",(0,i.kt)("strong",{parentName:"p"},"not")," drop old tables ",(0,i.kt)("inlineCode",{parentName:"p"},"transaction_old")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"message_old"),".\nYou might want to drop them after the data consistency is verified and they are no longer needed.   "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE transaction_old;\nDROP TABLE message_old;\n")),(0,i.kt)("h3",{id:"revert"},"Revert"),(0,i.kt)("p",null,"In any case that the migration fails, you can always revert the changes without losing any data.\nYou might find the below SQL script helpful for altering tables and indexes back to the original names.\nRemember to drop the new ",(0,i.kt)("inlineCode",{parentName:"p"},"transaction")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"message")," tables, along with the messages_by_address function."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Please ensure BDJuno is stopped prior to running the script.")," "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE transaction_old RENAME TO transaction;\nALTER INDEX transaction_old_pkey RENAME TO transaction_pkey;\nALTER INDEX transaction_old_hash_index RENAME TO transaction_hash_index;\nALTER INDEX transaction_old_height_index RENAME TO transaction_height_index;\nALTER TABLE transaction RENAME CONSTRAINT transaction_old_height_fkey TO transaction_height_fkey;\n\nALTER TABLE message_old RENAME TO message;\nALTER INDEX message_old_involved_accounts_addresses RENAME TO message_involved_accounts_addresses;\nALTER INDEX message_old_transaction_hash_index RENAME TO message_transaction_hash_index;\nALTER INDEX message_old_type_index RENAME TO message_type_index;\nALTER TABLE message RENAME CONSTRAINT message_old_transaction_hash_fkey TO message_transaction_hash_fkey;\n\nCREATE FUNCTION messages_by_address(\n    addresses TEXT[],\n    types TEXT[],\n    "limit" BIGINT = 100,\n    "offset" BIGINT = 0)\n    RETURNS SETOF message AS\n$$\nSELECT message.transaction_hash, message.index, message.type, message.value, message.involved_accounts_addresses\nFROM message\n         JOIN transaction t on message.transaction_hash = t.hash\nWHERE (cardinality(types) = 0 OR type = ANY (types))\n  AND addresses && involved_accounts_addresses\nORDER BY height DESC\nLIMIT "limit" OFFSET "offset"\n$$ LANGUAGE sql STABLE;\n')),(0,i.kt)("p",null,"When the tables are altered back, install and run your previous BDJuno branch which\nwill continue to parse the data from the height before the migration started."))}u.isMDXComponent=!0}}]);