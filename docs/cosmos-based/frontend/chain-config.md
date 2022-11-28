---
title: Chain Config Reference
sidebar_position: 3
---

This config file will help the explorer display each chain uniquely.


## Type

| Attribute | Type | Required | Description | Example |
| :-------: | :--- | :------ | :---------- | :------ |
| `title` | `string` | true | Title of your block explorer. Used for SEO purposes | `"Desmos Block Explorer"` |
<!-- | `network` | `string` | true | Chain ID | `"morpheus-apollo-2"` | -->
| `icon` | `string` | true | The smaller chain icon that appears in the nav bar with a dropdown to the networks tab | - |
| `logo` | `{default: string, [key: string]: string}` | true | Displays the logo on countdown, initial load, and home page by theme. Fallback to `logo.default` if no logo for that theme is found  | `"logo": { "default": <default logo>, "dark": <dark theme logo> }` |
| `prefix` | `{consensus: string,  validator: string, account: string}` | true | Consist of prefixes by address role `consensus`, `validator`, `account` | `"prefix": { "consensus": "desmosvalcons", "validator": "desmosvaloper", "account": "desmos" }` |
| `genesis` | `{time: string, height: number}` | true | Checks if countdown component will be displayed | - |
| `primaryTokenUnit` | `string` | true | This would most likely be the staking unit. Used for converting token in to the correct denom display. | `udaric` |
| `primaryTokenUnit` | `string` | true | Used to display voting power correctly. If the VP is not the same as `primaryTokenUnit` please create a new TokenUnit and place the name here | `udaric` |
| [`tokenUnits`](#tokenUnits) | `{[key: string]: {display: string, exponent: number}}` | true | Used to display chain data and convert base denoms. When adding a new token unit please follow the logic `the base token needs [x] exponents to display the following token unit` |  `"udaric": {  "display": "daric", "exponent": 6 }` |
| `extra.profile` | `boolean` | true | If `true` we will be displaying desmos profiles with a fallback to use keybase and on-chain descriptions | - |


### Token Units

If you have trouble understanding **tokenUnits** please insert it as the following `the base token needs [x] exponents to display the following token unit`


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
