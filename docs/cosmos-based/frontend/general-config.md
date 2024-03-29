---
title: General Config Reference
sidebar_position: 4
---

The default `/src/configs/general_config.json` file should look like the following:

```json
{
  "maintainer": {
    "name": "Forbole",
    "url": "https://forbole.com"
  },
  "github": {
    "reportIssue": "https://github.com/forbole/big-dipper-2.0-cosmos/issues"
  },
  "version": "v3.0.0"
}
```

## Type

| Attribute | Type | Required | Description | Example |
| :-------: | :---: | :------ | :---------- | :------ |
| `maintainer` | `object` | true | Displays who forked and is maintaining the UI. | - |
| `reportIssue` | `string` | true | Displays where to report an explorer error on the 500 page. If you forked our repository please replace it with your repo link. | - |
