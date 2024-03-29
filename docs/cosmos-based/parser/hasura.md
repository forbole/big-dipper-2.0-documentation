---
title: 3. Setup and run Hasura
sidebar_position: 4
---

Once you have successfully started BDJuno, the last step is to set up [Hasura](https://hasura.io/) to expose the parsed data using a GraphQL endpoint. To do this you have to:

1. Install Hasura
2. Import the metadata we provide you with
3. Configure Hasura Actions 

## Installing Hasura
The easiest way to install Hasura is to follow the [official guide](https://hasura.io/docs/latest/graphql/core/getting-started/docker-simple.html). This will allow you to have a Hasura instance up and running in a matter of minutes.

:::caution env variables
When starting Hasura, make sure you specify the following environmental variables:
- __Role:__
```
-e HASURA_GRAPHQL_UNAUTHORIZED_ROLE="anonymous"
```
This will make sure that even non-authenticated users will be able to access the endpoint correctly.

- __Hasura Actions Base URL:__
```
-e ACTION_BASE_URL="[Base URL for Hasura Actions Handlers]"
```
This allows you to set up custom endpoints for Hasura Actions handlers. 

By default, the Hasura Actions service runs on `http://localhost:3000`, so you may want to set it up as below: 
```
-e ACTION_BASE_URL="http://localhost:3000"
```

:::

To verify if the docker container is running with success run:
```shell
$ docker ps
```
It should return the list of running Docker containers and the output should look similar to this:
```
CONTAINER ID   IMAGE                          COMMAND                  CREATED        STATUS        PORTS     NAMES
aa7b17f7fe4b   hasura/graphql-engine:v2.0.3   "graphql-engine serve"   1 minute ago   Up 1 minute             hasura-bdjuno
```

Once this is done, you will also need to install [Hasura CLI](https://hasura.io/docs/latest/graphql/core/hasura-cli/install-hasura-cli.html#install-hasura-cli) on the same machine where you cloned the BDJuno repository.

## Importing the metadata
When you have installed both Hasura and Hasura CLI, you are now ready to import the metadata. This will allow you to easily set up all the queries that BigDipper will later need. To do this, you can simply run the following commands:

```shell
# Change to hasura directory inside bdjuno repository
$ cd /path/to/bdjuno/hasura

# Import the metadata into the remote server
$ hasura metadata apply --endpoint <your-endpoint> --admin-secret <hasura_password>
```

:::info Verify endpoint  
Make sure that `<your-endpoint>` represents your full GraphQL endpoint (eg. `http://localhost:8080`) and `<hasura_password>` matches the console secret you specified while starting Hasura. You can remove the flag if you did not use a secret.

Once the metadata is successfully applied, you will be able to start using it properly.
:::

:::caution Metadata error    
If Hasura is complaining about metadata not being valid after importing them, please head into the _Metadata status_ page, delete all the metadata, and try re-importing them. This should fix all the issues.
:::


## Configuring Hasura Actions
Hasura Actions allows querying certain address-specific data from the node when needed instead of storing it in the database. It starts on `bdjuno start` command and runs together with BDJuno on the same instance. It can be enabled inside `modules` section inside `config.yaml` file.
```yaml
chain:
    bech32_prefix: desmos
    modules:
        - actions
```
It runs by default on `127.0.0.1:3000` but it can be modified inside the `actions` section inside the `config.yaml` file.
```yaml
actions:
    host: 127.0.0.1
    port: 3000
```

### Testing Hasura Actions
To verify if Hasura Actions are working properly you should run a test query eg.:
```
$ curl http://localhost:3000/account_balance \
    --data '{ "input": { "address": "desmos16fc5kd5d4f5sjq5wz3v8gkyk4xd8f7hrax27xw"} }'
```
It should return the account balance and the output should look similar to this:

```
{"coins":[{"amount":"608146112","denom":"udsm"}]}
```

### Configuring Hasura Actions Custom Endpoints (Optional)
By default Hasura Actions will listen to default node address. If you would like to use custom endpoints for hasura actions, you can set them inside `config.yaml` file.
```yaml
actions:
    host: 127.0.0.1
    port: 3000
    node:
        rpc:
            client_name: hasura-actions
            address: http://localhost:26657
            max_connections: 20
        grpc:
            address: http://localhost:9090
            insecure: true
```

Remember to restart the `bdjuno` service after applying any changes to the Hasura Actions config.
```shell
$ sudo systemctl restart bdjuno
```