---
title: Toml format
sidebar_position: 2
---

The default `config.toml` file should look like the following:

```toml

[chain]
  modules = []

[database]
  host = "localhost"
  max_idle_connections = 1
  max_open_connections = 1
  name = "database-name"
  password = "password"
  port = 5432
  schema = "public"
  ssl_mode = ""
  user = "user"

[logging]
  format = "text"
  level = "debug"

[parsing]
  listen_new_blocks = true
  parse_old_blocks = true
  start_slot = 1
  workers = 1

[pruning]
  interval = 10000
  keep_every = 10000
  keep_recent = 10000

[rpc]
  address = "http://localhost:8899"
  client_name = "soljuno"

[telemetry]
  port = 9487

[worker]
  pool-size = 1000000
```

Let's see what each section refers to:

- [`chain`](#chain)
- [`pricefeed`](#pricefeed)
- [`rpc`](#rpc)
- [`grpc`](#grpc)
- [`parsing`](#parsing)
- [`database`](#database)
- [`pruning`](#pruning)
- [`logging`](#logging)
- [`telemetry`](#telemetry)

## `chain`

This section contains the details of the chain configuration regarding the Solana.

| Attribute | Type | Description | Example |
| :-------: | :---: | :--------- | :------ |
| `modules` | `array` | List of modules that should be enabled | `[ "block", "bank", "system" ]` |

### Supported modules

Currently, we support the followings modules:

- `block` to parse the ` block` data
- `txs` to parse the transaction data inside a separate table
- `instructions` to parse the various instructions inside a separate table
- `bank` to parse the `balance` data of accounts
- `consensus` to parse the consensus data. This includes:
   - average block times (since genesis, in a day, in an hour, in a minute)
- `pricefeed` to get the token prices
- `system` to parse the `system` program data
- `stake` to parse the `stake` program data
- `vote` to parse the `vote` program data
- `token` to parse the `token` program data
- `config` to parse the `config` program data
- `bpfloader` to parse the `bpfloader` program data
- `epoch` to parse the data related to epoch
- `history` to store historical data. This is currently limited to
  - historical price data, stored every time the price changes
  - historical account balance, which includes:
     - the available balance
     - the available token balance
  - historical validator status

## `rpc`

This section contains the details of the chain RPC to which SolJuno will connect.

| Attribute | Type | Description | Example |
| :-------: | :---: | :--------- | :------ |
| `address` | `string` | Address of the RPC endpoint | `http://localhost:8899` |
| `client_name` | `string` | Client name used when subscribing to the Solana websocket | `soljuno` |

## `parsing`

| Attribute | Type | Description | Example |
| :-------: | :---: | :--------- | :------ |
| `listen_new_blocks` | `boolean` | Whether Soljuno should parse new blocks as soon as they get created | `true` | 
| `parse_old_blocks` | `boolean` | Whether Soljuno should parse old chain blocks or not | `true` | 
| `start_slot` | `integer` | Slot at which SolJuno should start parsing old blocks | `250000` | 
| `workers` | `integer` | Number of works that will be used to fetch the data and store it inside the database | `5` |

## `database`

This section contains all the different configurations related to the PostgreSQL database where SolJuno will write the
data.

| Attribute | Type | Description | Example |
| :-------: | :---: | :--------- | :------ |
| `host` | `string` | Host where the database is found | `localhost` | 
| `port` | `integer` | Port to be used to connect to the PostgreSQL instance | `5432` |
| `name` | `string` | Name of the database to which connect to | `soljuno` | 
| `user` | `string` | Name of the user to use when connecting to the database. This user must have read/write access to all the database. | `soljuno` | 
| `password` | `string` | Password to be used to connect to the database instance | `password` | 
| `schema` | `string` | Schema to be used inside the database (default: `public`) | `public` | 
| `ssl_mode` | `string` | [PostgreSQL SSL mode](https://www.postgresql.org/docs/9.1/libpq-ssl.html) to be used when connecting to the database. If not set, `disable` will be used. | `verify-ca` |
| `max_idle_connections` | `integer` | Max number of idle connections that should be kept open (default: `1`) | `10` |
| `max_open_connections` | `integer` | Max number of open connections at any time (default: `1`) | `15` | 

## `pruning`

This section contains the configuration about the pruning options of the database. Note that this will have an effect only
if you add the `"pruning"` entry to the `modules` field of the [`chain` config](#chain).

| Attribute | Type | Description | Example |
| :-------: | :---: | :--------- | :------ |
| `interval` | `integer` | Number of blocks that should pass between one pruning and the other (default: prune every `10000` blocks) | `10000` | 
| `keep_every` | `integer` | Keep the state every `nth` block, even if it should have been pruned | `10000` | 
| `keep_recent` | `integer` | Do not prune this amount of recent states | `10000` |

## `logging`

This section allows to configure the logging details of SolJuno.

| Attribute | Type | Description | Example |
| :-------: | :---: | :--------- | :------ |
| `format` | `string` | Format in which the logs should be output (either `json` or `text`) | `json` | 
| `level` | `string` | Level of the log (either `verbose`, `debug`, `info`, `warn` or `error`) | `error` | 

## `telemetry`

This section allows to configure the telemetry details of SolJuno. e. Note that this will have an effect only
if you add the `"telemetry"` entry to the `modules` field of the [`chain` config](#chain).

| Attribute | Type | Description | Example |
| :-------: | :---: | :--------- | :------ |
| `port` | `uint` | Port on which the telemetry server will listen | `9487` | 

:::tip    
If the telemetry server is enabled, a new endpoint at the provided port and path `/metrics` will expose [Prometheus](https://prometheus.io/) data.
:::

## `worker`
This section allows to configure the worker pool details of Soljuno.

| Attribute | Type | Description | Example |
| :-------: | :---: | :--------- | :------ |
| `pool-size` | `uint` | Size of the worker pool | `5000` | 