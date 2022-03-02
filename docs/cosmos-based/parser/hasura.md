---
title: 3. Run Hasura
sidebar_position: 4
---

Once you have successfully started BDJuno, the last step that you can do is set up [Hasura](https://hasura.io/) to expose the parsed data using a GraphQL endpoint. To do this you have to:

1. Install Hasura
2. Import the metadata we provide you with

## Installing Hasura
The easiest way to install Hasura is to follow the [official guide](https://hasura.io/docs/latest/graphql/core/getting-started/docker-simple.html). This will allow you to have a Hasura instance up and running in matter of minutes.

:::caution Role variable    
When starting Hasura make sure you specified the following environmental variable:
```
HASURA_GRAPHQL_UNAUTHORIZED_ROLE="anonymous"
```
:::

This will make sure that even non-authenticated users will be able to access the endpoint correctly.

Once this is done, you will also need to install [Hasura CLI](https://hasura.io/docs/latest/graphql/core/hasura-cli/install-hasura-cli.html#install-hasura-cli) on the same machine where you cloned the BDJuno repository.

## Importing the metadata
When you have installed both Hasura and Hasura CLI, you are now ready to import the metadata. This will allow you to easily set up all the queries that BigDipper will later need. To do this, you can simply run the following commands:

```shell
# Move into the hasura folder inside the root of BDJuno
$ cd /path/to/BDJuno/hasura

# Import the metadata into the remote server
$ hasura metadata apply --endpoint <your-endpoint> --admin-secret <hasura_password>
```

:::info Verify endpoint  
Make sure that `<your-endpoint>` represents your full GraphQL endpoint (eg. `http://localhost:8080`) and `<hasura_password>` matches the console secret you specified while starting Hasura. If you did not use a secret, then you can remove the flag.

Once the metadata is successfully applied, you will be able to start using it properly.
:::

:::caution Metadata error    
If Hasura is complaining about metadata not being valid after importing them, please head into the _Metadata status_ page, delete all the metadata and try re-importing them. This should fix all the issues.
:::

## Start Hasura Actions

To activate Hasura actoins, simply run: 
```
$ bdjuno hasura-actions
```

It is also recommended to run Hasura Actions as a system service:
```shell
$ sudo tee /etc/systemd/system/hasura-actions.service > /dev/null <<EOF
[Unit]
Description=BDJuno Hasura Actions
After=network-online.target

[Service]
User=$USER
ExecStart=$GOPATH/bin/bdjuno hasura-actions
Restart=always
RestartSec=3
LimitNOFILE=4096

[Install]
WantedBy=multi-user.target
EOF
```

Enable and start the service: 
```shell
$ sudo systemctl enable hasura-actions
$ sudo systemctl start hasura-actions
```