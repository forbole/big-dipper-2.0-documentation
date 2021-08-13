---
title: General Config Reference
sidebar_position: 4
---

<details>

<summary>The default `/src/configs/general_config.json` file should look like the following:</summary>

```json
{
  "maintainer": {
    "name": "Forbole",
    "url": "https://forbole.com"
  },
  "github": {
    "reportIssue": "https://github.com/forbole/big-dipper-2.0-cosmos/issues"
  }
}
```

</details>


## Type

| Attribute | Type | Required | Description | Example |
| :-------: | :---: | :------ | :---------- | :------ |
| `maintainer` | `string` | true | Displays who forked and is maintaining the ui | - |
| `reportIssue` | `string` | true | Displays where to report an explorer error on the 500 page. If you forked our report please replace it with your repo link. | - |
