---
title: Yaml format
sidebar_position: 1
---

Here's an example of `config.yaml` file:

```yaml
chain:
    bech32_prefix: cosmos
    modules: 
        - modules
        - messages
        - auth
node:
    type: remote
    config:
        rpc:
            client_name: juno
            address: http://localhost:26657
            max_connections: 20
        grpc:
            address: http://localhost:9090
            insecure: true
parsing:
    workers: 1
    listen_new_blocks: true
    parse_old_blocks: true
    parse_genesis: true
    start_height: 1
    fast_sync: true
    genesis_file_path: [Path to the genesis file]
    average_block_time: 3s
database:
    name: database-name
    host: localhost
    port: 5432
    user: user
    password: password
    schema: public
    max_open_connections: 10
    max_idle_connections: 10
    partition_size: 100000
    partition_batch: 1000
logging:
    level: debug
    format: text
telemetry:
    port: 5000
pruning:
    keep_recent: 100
    keep_every: 500
    interval: 10
pricefeed:
    tokens:
        - name: Atom
          units:
            - denom: uatom
              exponent: 0
            - denom: atom
              exponent: 6
              price_id: cosmos
        - name: Photino
          units:
            - denom: uptn
              exponent: 0
            - denom: ptn
              exponent: 6
actions:
    port: 3000
```
:::tip Migrate from TOML file
If you previously ran bdjuno with a `config.toml` file, you can simply migrate to the new `config.yaml` file by running:
```shell
$ bdjuno migrate v2
```
A `config.yaml` file will be generated based on the exsisting `config.toml` file.
:::

Let's see what each section refers to:

- [`chain`](#chain)
- [`node`](#node)
- [`pricefeed`](#pricefeed)
- [`rpc`](#rpc)
- [`grpc`](#grpc)
- [`parsing`](#parsing)
- [`database`](#database)
- [`pruning`](#pruning)
- [`logging`](#logging)
- [`telemetry`](#telemetry)
- [`actions`](#actions)

## `chain`

This section contains the details of the chain configuration regarding the Cosmos SDK.

| Attribute | Description | Example |
| :-------: | :--------- | :------ |
| `bech32_prefix` | Bech 32 prefix of the addresses | cosmos | 
| `modules` | List of modules that should be enabled | - modules<br />  - messages<br />  - auth |

### Supported modules

Currently, we support the followings Cosmos modules:

- `modules` to get the list of enabled modules inside BDJuno
- `messages` to parse the various messages inside a separate table
- `auth` to parse the `x/auth` data
- `bank` to parse the `x/bank` data
- `consensus` to parse the consensus data. This includes:
   - the genesis details
   - average block times (since genesis, in a day, in an hour, in a minute)
- `gov` to parse the `x/gox` data
- `mint` to parse the `x/mint` data
- `pricefeed` to get the token price every 2 mins and store historical price data every 1 hour
- `slashing` to parse the `x/slashing` data
- `staking` to parse the `x/staking` data
- `distribution` to parse the `x/distribution` data
- `actions` to support Hasura Actions


:::caution Module order  
When listing the different modules to be used, please note that there is some order that must be respected. In particular: 

- `modules` should be listed before every other module
- `messages` should be listed after the `modules` module and before every other module 
- `distribution` must be listed **after** the `staking` module

:::

## `node`
This section defines from which source bdjuno will parse the data.

| Attribute | Description | Example | 
| :-------: | :--------- | :--------- | 
| `type` | Read from a running node, or from the chain's db of the same machine | `remote` or `local` |
| `config` | Config according to the node type | [`example`](#node-type-example) |

### Node type example
```yaml
# node type : remote
node:
    type: remote
    config:
        rpc:
            client_name: juno
            address: http://localhost:26657
            max_connections: 20
        grpc:
            address: http://localhost:9090
            insecure: true

# node type : local
node:
    type: local
    config:
        home: path/to/.desmos
```

## `pricefeed`
This section contains the data used by the `pricefeed` to fetch token prices using the [CoinGecko](https://www.coingecko.com/en) APIs.

The only field required in this section is the `tokens` field which contains two subfields:
- `name` represents the human-readable name of the token 
- `units` contains a list of token units, each of them having the following attributes: 
  - `denom` 
  - `exponent`
  - (optional) `aliases`
  - (optional) `price_id`

:::tip Provide a valid `price_id`  
When fetching token prices, BDJuno will search for prices based on the `price_id` of the units that you provide. 
For this reason, you need to make sure that you provide correct `price_id` value that is listed inside the [CoinGecko coins list API](https://api.coingecko.com/api/v3/coins/list).

E.g. 
If you have a token that is named `MyToken` and is listed inside CoinGecko with the ticker `$MTKN` and id `mytoken`, make sure you specify a token unit having `denom = "mtkn"`, `price_id = "mytoken"`  and `exponent = 6` (or whatever amount of decimal places your token unit has inside your chain). This will make sure the price is always fetched correctly.
:::

## `rpc`

This section contains the details of the chain RPC to which BDJuno will connect.

| Attribute | Type | Description | Example |
| :-------: | :---: | :--------- | :------ |
| `address` | `string` | Address of the RPC endpoint | `http://localhost:26657` |
| `client_name` | `string` | Client name used when subscribing to the Tendermint websocket | `bdjuno` |
| `max_connections` | `int` | Max number of connections that can created towards the RPC node (any value less or equal to `0` means to use the default one instead) | `20` |

## `grpc`

This section contains the details of the gRPC endpoint that BDJuno will use to query the data.

| Attribute | Type | Description | Example |
| :-------: | :---: | :--------- | :------ |
| `address` | `string` | Address of the gRPC endpoint | `https://0.0.0.1:9090` |
| `insecure` | `boolean` | Whether the gRPC endpoint is insecure or not | `false` |

## `parsing`

| Attribute | Type | Description | Example |
| :-------: | :---: | :--------- | :------ |
| `listen_new_blocks` | `boolean` | Whether BDJuno should parse new blocks as soon as they get created | `true` | 
| `parse_genesis` | `boolean` | Whether BDJuno needs to parse the genesis state or not | `true` |
| `parse_old_blocks` | `boolean` | Whether BDJuno should parse old chain blocks or not | `true` | 
| `start_height` | `integer` | Height at which BDJuno should start parsing old blocks | `250000` | 
| `workers` | `integer` | Number of works that will be used to fetch the data and store it inside the database | `5` |
| `average_block_time` | `time` | The average block time for setting the frequency of querying new block heights. Default is 3 seconds.| `3s` |

## `database`

This section contains all the different configurations related to the PostgreSQL database where BDJuno will write the
data.

| Attribute | Type | Description | Example |
| :-------: | :---: | :--------- | :------ |
| `host` | `string` | Host where the database is found | `localhost` | 
| `port` | `integer` | Port to be used to connect to the PostgreSQL instance | `5432` |
| `name` | `string` | Name of the database to which connect to | `bdjuno` | 
| `user` | `string` | Name of the user to use when connecting to the database. This user must have read/write access to all the database. | `bdjuno` | 
| `password` | `string` | Password to be used to connect to the database instance | `password` | 
| `schema` | `string` | Schema to be used inside the database (default: `public`) | `public` | 
| `ssl_mode` | `string` | [PostgreSQL SSL mode](https://www.postgresql.org/docs/9.1/libpq-ssl.html) to be used when connecting to the database. If not set, `disable` will be used. | `verify-ca` |
| `max_idle_connections` | `integer` | Max number of idle connections that should be kept open (default: `1`) | `10` |
| `max_open_connections` | `integer` | Max number of open connections at any time (default: `1`) | `15` | 
| `partition_size` | `integer` | PostgreSQL [table partition](https://www.postgresql.org/docs/10/ddl-partitioning.html) height interval (since [v3.0.0](./../migrations/v3.0.0.md)) | `100000` | 
| `partition_batch` | `integer` | Max number of transaction rows to migrate in each batch (since [v3.0.0](./../migrations/v3.0.0.md)) | `1000` | 


## `pruning`

This section contains the configuration about the pruning options of the database. Note that this will have effect only
if you add the `"pruning"` entry to the `modules` field of the [`cosmos` config](#cosmos).

| Attribute | Type | Description | Example |
| :-------: | :---: | :--------- | :------ |
| `interval` | `integer` | Number of blocks that should pass between one pruning and the other (default: prune every `10` blocks) | `100` | 
| `keep_every` | `integer` | Keep the state every `nth` block, even if it should have been pruned | `500` | 
| `keep_recent` | `integer` | Do not prune this amount of recent states | `100` |

## `logging`

This section allows to configure the logging details of BDJuno.

| Attribute | Type | Description | Example |
| :-------: | :---: | :--------- | :------ |
| `format` | `string` | Format in which the logs should be output (either `json` or `text`) | `json` | 
| `level` | `string` | Level of the log (either `verbose`, `debug`, `info`, `warn` or `error`) | `error` | 

## `telemetry`

This section allows to configure the telemetry details of Juno.

| Attribute | Type | Description | Example |
| :-------: | :---: | :--------- | :------ |
| `enabled` | `bool` | Whether the telemetry should be enabled or not | `false` | 
| `port` | `uint` | Port on which the telemetry server will listen | `8000` | 

:::tip    
If telemetry server is enabled, a new endpoint at the provided port and path `/metrics` 
will expose [Prometheus](https://prometheus.io/) data.
:::

## `actions`

This section allows to configure Hasura Actions.

| Attribute | Type | Description | Example |
| :-------: | :---: | :--------- | :------ |
| `port` | `uint` | Port on which the hasura actions service will run | `3000` | 
| `rpc` | `uint` | RPC port on which the hasura actions service will listen | `26657` | 
| `grpc` | `uint` | gRPC port on which the hasura actions service will listen | `9090` | 
| `insecure` | `boolean` | Whether the gRPC endpoint is insecure or not | `false` |
