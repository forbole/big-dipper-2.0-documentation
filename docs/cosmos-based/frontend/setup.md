---
title: Setup
sidebar_position: 1
---

## Setup the environment
Fork, clone and check out our [tag releases](https://github.com/forbole/big-dipper-2.0-cosmos/tags) for the most stable version. If you're feeling frisky feel free to use the `base` branch.

```
git clone https://github.com/<user>/big-dipper-2.0-cosmos.git
git checkout <tag>
npm ci
```

## Create .env

```
NODE_ENV=development
PORT=3000
NEXT_PUBLIC_GRAPHQL_URL=
NEXT_PUBLIC_GRAPHQL_WS=
NEXT_PUBLIC_URL=
NEXT_PUBLIC_WS_CHAIN_URL=
```

- `NODE_ENV` - `development` | `production`
- `PORT` - the port to run the app on
- `NEXT_PUBLIC_GRAPHQL_URL` - refers to the api hosted by [BDJuno](https://github.com/forbole/bdjuno)
- `NEXT_PUBLIC_GRAPHQL_WS` - refers to the websocket hosted by [BDJuno](https://github.com/forbole/bdjuno)
- `NEXT_PUBLIC_URL` - the api where you will be hosting the frontend of this explorer (make sure there is no `/` at the end ex: `https://morpheus.desmos.network` not `https://morpheus.desmos.network/`)
- `NEXT_PUBLIC_WS_CHAIN_URL` - refers to the rpc websocket


## Configure chain_config.json
In `src/configs/chain_config.json` update the json to fit your needs. For a better understanding of what each section and field refers to, please read the [chain config reference](chain-config.md).

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

## Configure general_config.json
In `src/configs/general_config.json` update the json to fit your needs.
For a better understanding of what each section and field refers to, please read the [general config reference](general-config.md).

## Start Big Dipper
```
npm run dev
```

## Available Scripts

```
npm run dev - starts the app in development mode using nodemon

npm run build - builds the app for production

npm run start - runs the build app in production mode

npm run type-check - typescript check

npm run lint - lint check

npm run test - jest

npm run graphql:codegen - rebuilds gql types if anything in the `src/graphql` folder has changed
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