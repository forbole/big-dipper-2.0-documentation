---
title: Chain Config Reference
sidebar_position: 3
---

This config file will help the explorer display each chain uniquely.


## Type

### General
| Attribute | Type  | Description | Example |
| :-------: | :---  | :---------- | :------ |
| `chainName` | `string`  | Title of your block explorer. Used for SEO purposes | `"examplenet"` |
| `title` | `string`  | Title of your block explorer. Used for SEO purposes | `"Examplenet Block Explorer"` |
| `extra.profile` | `boolean`  | If `true` we will be displaying desmos profiles with a fallback to use keybase and on-chain descriptions | - |
| `themes` | See [Themes](#themes) | The configs for different themes, see below | - |
| `chains` | See [Chains](#chains) | The configs for different chains(`mainnet` / `testnet`), see below | - |

### Themes
| Attribute | Type  | Description | Example |
| :-------: | :---  | :---------- | :------ |
| `default` | `string`  | The default theme used when user first accesses the explorer | `"light"` |
| `themeList` | `[]string`  | The list of themes that are available for the explorer. | `["light", "dark", "deuteranopia", "tritanopia"]` |
| `dark` | -  | The hex color codes for `dark` mode which can be modified according to your design | - |
| `light` | -  | The hex color codes for `light` mode which can be modified according to your design | - |

:::info Default themes
- The `deuteranopia` & `tritanopia` are the default themes whose colors are hard-coded in the codes. In case you want to modify them, check out the file `packages/ui/src/styles/theme/deuteranopia.ts` & `packages/ui/src/styles/theme/tritanopia.ts`.

- You can refer to other chain's configs located at `apps/web-*/src/chain.json`, pick the `dark` / `light` theme you prefer, and copy-paste them in your own config file to apply them.
:::

### Chains
An array of objects that contains the chain configs.

| Attribute | Type  | Description | Example |
| :-------: | :---  | :---------- | :------ |
| `network` | `string`  | The chain ID of the blockchain | - |
| `chainType` | `string`  | Mainnet or Testnet | - |
| `genesis` | `{time: string, height: number}`  | Checks if countdown component will be displayed | - |
| `prefix` | `{consensus: string,  validator: string, account: string}`  | Consist of prefixes by address role `consensus`, `validator`, `account` | `"prefix": { "consensus": "examplenetvalcons", "validator": "examplenetvaloper", "account": "examplenet" }` |
| `primaryTokenUnit` | `string`  | This would most likely be the staking unit. Used for converting token in to the correct denom display. | `excoin` |
| `primaryTokenUnit` | `string`  | Used to display voting power correctly. If the VP is not the same as `primaryTokenUnit` please create a new TokenUnit and place the name here | `excoin` |
| [`tokenUnits`](#tokenUnits) | `{[key: string]: {display: string, exponent: number}}`  | Used to display chain data and convert base denoms. When adding a new token unit please follow the logic `the base token needs [x] exponents to display the following token unit` |  `"excoin": {  "display": "excoin", "exponent": 6 }` |
| `endpoints.graphql` | `string`  | The GraphQL endpoint  | `"https://gql.examplenet.com/v1/graphql"` |
| `endpoints.graphqlWebsocket` | `string`  | The GraphQL web socket endpoint | `"wss://gql.examplenet.com/v1/graphql"` |
| `endpoints.publicRpcWebsocket` | `string`  | The public rpc web socket endpoint for consensus state | `"wss://rpc.examplenet.com/websocket"` |


### Token Units

If you have trouble understanding **tokenUnits** please insert it as the following `the base token needs [x] exponents to display the following token unit`


```
"tokenUnits": {
    "excoin": {
      "display": "excoin",
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
