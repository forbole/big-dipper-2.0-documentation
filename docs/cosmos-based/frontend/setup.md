---
title: Setup
sidebar_position: 1
---

Docs based on: `base-v1.0.9`.

The following will teach you how to run big dipper 2.0 ui for dev mode. If you have any other questions please feel free to open an [issue](https://github.com/forbole/big-dipper-2.0-cosmos/issues)
## Setup the environment
Fork, clone and check out our [tag releases](https://github.com/forbole/big-dipper-2.0-cosmos/tags) for the most stable version or current documentation version. If you're feeling frisky feel free to use the `base` branch.

```
git clone https://github.com/<user>/big-dipper-2.0-cosmos.git
git checkout <tag>
npm ci
```

## Create .env

Setup your `.env` file with the following key and adjust the values to your needs.

```
NEXT_PUBLIC_GRAPHQL_URL=https://gql.morpheus.desmos.network/v1/graphql
NEXT_PUBLIC_GRAPHQL_WS=wss://gql-ws.morpheus.desmos.network/v1/graphql
NODE_ENV=development
PORT=3000
NEXT_PUBLIC_URL=https://morpheus.desmos.network
NEXT_PUBLIC_WS_CHAIN_URL=wss://rpc.morpheus.desmos.network/websocket
NEXT_PUBLIC_CHAIN_STATUS=testnet
```

| Key | Description |
| :------- | :------- |
| `NEXT_PUBLIC_GRAPHQL_URL` | The api exposed by hasura using [BDJuno](https://github.com/forbole/bdjuno) |
| `NEXT_PUBLIC_GRAPHQL_WS` | The websocket exposed by hasura using [BDJuno](https://github.com/forbole/bdjuno) |
| `NODE_ENV` | `development` / `production` |
| `PORT` | The port to run the app on |
| `NEXT_PUBLIC_URL` | The api where you will be hosting the frontend of this explorer (make sure there is no `/` at the end ex: `https://morpheus.desmos.network` not `https://morpheus.desmos.network/`) |
| `NEXT_PUBLIC_WS_CHAIN_URL` | RPC websocket (used for the consensus module) |
| `NEXT_PUBLIC_CHAIN_STATUS` | `testnet` / `mainnet` |


## Configure Chain Config
Depending on you value in `NEXT_PUBLIC_CHAIN_STATUS`, update `src/configs/chain_config.(testnet | mainnet).json` to fit your chain needs.

For a better understanding of what each section and field refers to, please read the [chain config reference](chain-config.md).

:::info
If you have more than one native token please insert it as the following `the base token needs [x] exponents to display the following token unit`
:::

```
"tokenUnits": {
    "udaric": {
      "display": "daric",
      "exponent": 6
    },
    "upretz": {
      "display": "pretz",
      "exponent": 3
    },
    "ubar": {
      "display": "pretz",
      "exponent": 6
    },
  },
```

:::tip
Turn `desmosProfile` on if you want to display desmos profile for users that have a link.
:::

:::tip
Turn `forboleX` on if your chain uses Forbole X.
:::

## Configure General Config
In `src/configs/general_config.json` update the json to fit your needs.
For a better understanding of what each section and field refers to, please read the [general config reference](general-config.md).

## Start Big Dipper
```
npm run dev
```

## Available Scripts

```
# Starts the app in development mode using nodemon
npm run dev

# Builds the app for production
npm run build

# Runs the build app in production mode
npm run start

# Typescript check
npm run type-check

# Lint check
npm run lint

# Jest
npm run test

# Rebuilds gql types if anything in the `src/graphql` folder has changed.
# Make sure the schema url in src/codegen.yml is updated if you use this
npm run graphql:codegen
```

<!-- ## Docker
If you want to use this with docker update the following ENV Variables inside the `Dockerfile`:

```
ENV NEXT_PUBLIC_GRAPHQL_URL <your_url>
ENV NEXT_PUBLIC_GRAPHQL_WS <your_url>
ENV NEXT_PUBLIC_URL <your_url>
ENV NEXT_PUBLIC_WS_CHAIN_URL <your_url>
ENV NODE_ENV production
ENV PORT 3000
```

```
docker build
```

 -->

## Conclusion
This will spin up a generic big dipper ui which will require customisation.
