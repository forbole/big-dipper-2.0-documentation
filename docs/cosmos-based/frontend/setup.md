---
title: Setup
sidebar_position: 1
---

Docs curently based on: `base-v2.0.0`

:::info
Requires [bdjuno](https://github.com/forbole/bdjuno) to be on at least `v1.1.0` release if it's being used.
:::

The following will teach you how to run big dipper 2.0 ui for dev mode. If you have any other questions please feel free to open an [issue](https://github.com/forbole/big-dipper-2.0-cosmos/issues)
## Setup the environment
Fork, clone and check out our [latest base release](https://github.com/forbole/big-dipper-2.0-cosmos/releases) for the most stable version or feel free to use the current documentation version. If you're feeling frisky feel free to use the `base` branch.

```
git clone https://github.com/<user>/big-dipper-2.0-cosmos.git
git checkout <tag>
npm ci
```

## Create .env

Setup your `.env` file with the following key and adjust the values to your needs.

```
NEXT_PUBLIC_GRAPHQL_URL=http://localhost:8080/v1/graphql
NEXT_PUBLIC_GRAPHQL_WS=ws://localhost:8080/v1/graphql
NODE_ENV=development
PORT=3000
NEXT_PUBLIC_URL=http://localhost:3000
NEXT_PUBLIC_RPC_WEBSOCKET=ws://localhost:26657/websocket
NEXT_PUBLIC_CHAIN_TYPE=testnet
```

| Key | Description |
| :------- | :------- |
| `NEXT_PUBLIC_GRAPHQL_URL` | The api exposed by hasura using [BDJuno](https://github.com/forbole/bdjuno) |
| `NEXT_PUBLIC_GRAPHQL_WS` | The websocket exposed by hasura using [BDJuno](https://github.com/forbole/bdjuno) |
| `NODE_ENV` | `development` / `production` |
| `PORT` | The port to run the app on |
| `NEXT_PUBLIC_URL` | The api where you will be hosting the frontend of this explorer. Used for SEO and url preview purposes |
| `NEXT_PUBLIC_RPC_WEBSOCKET` | RPC websocket (used for the consensus module) |
| `NEXT_PUBLIC_CHAIN_TYPE` | `testnet` / `mainnet` |

## Configure General Config
In `src/configs/general_config.json` **update the json** to give proper maintainer credits as well as a way for users to submit bugs/ issues.
For a better understanding of what each section and field refers to, please read the [general config reference](general-config.md).

:::info
We will not be handling any opened issues directly related to your explorer as we won't have the proper info
:::

```json
{
  "maintainer": {
    "name": "Forbole", // update
    "url": "https://forbole.com" // update
  },
  "github": {
    "reportIssue": "https://github.com/forbole/big-dipper-2.0-cosmos/issues" // update
  },
  "version": "base-v2.0.0"
}
```

## Configure Chain Config
Depending on you value in `NEXT_PUBLIC_CHAIN_TYPE`, update `src/configs/chain_config.(testnet | mainnet).json` to fit your chain needs.

For a better understanding of what each section and field refers to, please read the [chain config reference](chain-config.md).

:::info
If you have trouble understanding **tokenUnits** please insert it as the following `the base token needs [x] exponents to display the following token unit`
:::

```
"tokenUnits": {
    "udaric": {
      "display": "daric",
      "exponent": 6
    },
    "upretz": {
      "display": "pretz",
      "exponent": 18
    },
    "ubar": {
      "display": "pretz",
      "exponent": 6
    },
  },
```

## Check Hasura is in sync with our graphql operations
In `codegen.yml` change the following to your graphql url to run `npm run graphql:codegen`. If there are no errors it will regenerate the needed `src/graphql/types.tsx`. If there is an error this can indicate the backend hasura was not setup correctly.

```yaml {11}
overwrite: true
config:
  # omitOperationSuffix: true
  skipTypeNameForRoot: true
generates:
  ./src/graphql/types.tsx:
    documents:
      - './src/**/*.graphql'
      - './src/**/*_actions.ts'
      - '!./src/**/desmos_profile.graphql'
    schema: <your graphql url>
    plugins:
      - "typescript"
      - "typescript-operations"
      - "typescript-react-apollo" # To generate custom hooks per query
  ./src/graphql/desmos_profile.ts:
    schema: https://gql.mainnet.desmos.network/v1/graphql
    documents:
      - 'src/graphql/desmos_profile_graphql.ts'
    plugins:
      - "typescript"
      - "typescript-operations"

```


## Start Development mode
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

## Build and Run a Production Docker Image
The following will build the docker image in production mode (replace the build arg values with your own).

```
docker build \
--build-arg NEXT_PUBLIC_GRAPHQL_URL=http://localhost:8080/v1/graphql \
--build-arg NEXT_PUBLIC_GRAPHQL_WS=ws://localhost:8080/v1/graphql \
--build-arg NODE_ENV=production \
--build-arg PORT=3000 \
--build-arg NEXT_PUBLIC_URL=http://localhost:3000 \
--build-arg NEXT_PUBLIC_WS_CHAIN_URL=ws://localhost:26657/websocket \
--build-arg NEXT_PUBLIC_CHAIN_TYPE=testnet \
-t <image-name> .
```

Run the image

```
docker run -d --rm -p 3000:3000 <image-name>
```
