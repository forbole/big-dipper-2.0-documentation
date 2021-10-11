---
title: Custom Tx Messages
sidebar_position: 2
---

By default, message types that don't exist on the base chain (cosmos in this case) will be displayed as `unknown` but you can easily customize your own by doing the following:

## Create Tx Model

Setup a class model in `src/models/msg/<module>`. We have separated all tx msgs by their corresponding chain module making it easy to associate.

:::info
All class messages **must** contain the following:
1. `category` (module)
2. `type` (message type)
3. `json`
4. `fromJson` static method
:::

Example:

```
class MsgUnjail {
  public category: Categories; // required
  public type: string; // required
  public json: any; // required
  public validatorAddress: string;

  constructor(payload: any) {
    this.category = 'slashing'; // required
    this.type = payload.type; // required
    this.json = payload.json; // required
    this.validatorAddress = payload.validatorAddress;
  }

  static fromJson(json: any) {
    return new MsgUnjail({
      json,
      type: json['@type'],
      validatorAddress: json.validator_addr,
    });
  }
}
```

Import and export your model in `src/models/index.ts`

```
import MsgUnjail from './msg/slashing/msg_unjail';

export {
  MsgUnjail
}
```
## Set i18n Content

Create legible label in `public/locales/<lang>/message_labels.json`

```
"txUnjailLabel": "Unjail"
```

Create legible content in `public/locales/<lang>/message_contents.json`

```
"txUnjailContent": "<0>{{validator}}</0> unjailed"
```

:::info
We are using **[next-translate](https://www.npmjs.com/package/next-translate)**
:::

## Create UI Component

In `src/components/msg` create a corresponding component for your newly created model.

```
const Unjail = (props: {
  message: MsgUnjail;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;
  const validator = findAddress(message.validatorAddress);
  const validatorMoniker = validator ? validator?.moniker : message.validatorAddress;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txUnjailContent"
        components={[
          (
            <Name
              address={message.validatorAddress}
              name={validatorMoniker}
            />
          ),
        ]}
      />
    </Typography>
  );
};
```

Import and export your component in `src/components/msg/index.ts`

```
import Unjail from './slashing/unjail';

export {
  Unjail
}
```

## Update Utils

In `src/components/msg/utils.tsx` go to `customTypeToModel` and add your model in the following format

```
<message type>: {
  model: <Model>,
  content: <Component>,
  tagTheme: <tag color>,
  tagDisplay: <tag value>,
}

## example

'/cosmos.slashing.v1beta1.MsgUnjail': {
  model: MODELS.MsgUnjail,
  content: COMPONENTS.Unjail,
  tagTheme: 'five',
  tagDisplay: 'txUnjailLabel',
}
```

Your newly added transaction message should be showing up correctly.

## Update Message Filter

Edit the utils file in `src/components/transaction_messages_filter/utils.tsx`.

:::info
`key` value must exist in `src/models/msg/types.ts`
:::

```
export const getFilterLabels = () => {
  return ([
    {
      key: 'none',
      display: 'none',
    },
    {
      key: 'bank',
      display: 'bank',
    },
    {
      key: 'others',
      display: 'others',
    },
    ...
  ]);
};
```
