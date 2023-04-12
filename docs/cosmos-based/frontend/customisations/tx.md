---
title: Custom Tx Messages
sidebar_position: 2
---

By default, message types that don't exist on the base chain (cosmos in this case) will be displayed as `unknown` but you can easily customize your own by doing the following:

## Create Tx Model

Setup a class model in `packages/ui/src/models/msg/<module>`. We have separated all tx msgs by their corresponding chain module making it easy to associate.

:::info
All class messages **must** contain the following:
1. `category` (module)
2. `type` (message type)
3. `json`
4. `fromJson` static method
:::

Example:

```ts
class MsgUnjail {
  public category: Categories; // required
  public type: string; // required
  public json: object; // required
  public validatorAddress: string;

  constructor(payload: object) {
    this.category = 'slashing'; // required
    this.type = R.pathOr('', ['type'], payload); // required
    this.validatorAddress = R.pathOr('', ['validatorAddress'], payload);
    this.json = R.pathOr({}, ['json'], payload); // required
  }

  static fromJson(json: object): MsgUnjail {
    return {
      category: 'slashing',
      json,
      type: R.pathOr('', ['@type'], json),
      validatorAddress: R.pathOr('', ['validator_addr'], json),
    };
  }
}
```

Export your model in `packages/ui/src/models/index.ts`.

```ts
export { default as MsgUnjail } from '@/models/msg/slashing/msg_unjail';
```
## Set i18n Content

Create legible label in `apps/web-examplenet/public/locales/<lang>/message_labels.json`

```ts
"txUnjailLabel": "Unjail"
```

Create legible content in `apps/web-examplenet/public/locales/<lang>/message_contents.json`

```ts
"txUnjailContent": "<0>{{validator}}</0> unjailed"
```

:::info
We are using **[next-i18next](https://www.npmjs.com/package/next-i18next)**.
:::

## Create UI Component

In `packages/ui/src/components/msg/slashing/unjail/index.tsx` create a corresponding component for your newly created model.

```typescript
import Typography from '@mui/material/Typography';
import { Trans } from 'next-i18next';
import { FC } from 'react';
import Name from '@/components/name';
import { type MsgUnjail } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const Unjail: FC<{ message: MsgUnjail }> = (props) => {
  const { message } = props;
  const validator = useProfileRecoil(message.validatorAddress);
  const validatorMoniker = validator ? validator?.name : message.validatorAddress;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txUnjailContent"
        components={[<Name address={message.validatorAddress} name={validatorMoniker} />]}
      />
    </Typography>
  );
};

export default Unjail;
```

Import and export your component in `packages/ui/src/components/msg/index.ts`

```ts
export { default as Unjail } from '@/components/msg/slashing/unjail';
```

## Update Utils

In `src/components/msg/utils.tsx` go to `customTypeToModel` and add your model in the following format

```ts
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

Edit the utils file in `packages/ui/src/components/transaction_messages_filter/utils.tsx`.

:::info
`key` value must exist in `packages/ui/src/models/msg/types/index.ts`
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
