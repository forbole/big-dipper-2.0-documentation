---
title: Setup
sidebar_position: 1
---

Docs curently based on: `v3.0.0`

:::info
Requires [bdjuno](https://github.com/forbole/bdjuno) to be on at least `v1.1.0` release to support hasura actions(GraphQL API server).
:::

Since `v3.0.0`, we have merged every chain's code base to be in a single branch under the [monorepo](https://en.wikipedia.org/wiki/Monorepo) concept.

The following will teach you how to add your own project to this repo and run big dipper 2.0 ui for your own explorer. If you have any other questions please feel free to open an [issue](https://github.com/forbole/big-dipper-2.0-cosmos/issues)

## Clone the repository
Fork, clone and check out our [latest release](https://github.com/forbole/big-dipper-2.0-cosmos/releases) for the most stable version or feel free to use the current documentation version.

```
$ git clone https://github.com/<user>/big-dipper-2.0-cosmos.git
$ git checkout tags/[latest release]
```
<!-- 
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
| `NEXT_PUBLIC_CHAIN_TYPE` | `testnet` / `mainnet` | -->

## Prepare project directory
To run your own Big Dipper 2.0 UI, you would need a new project directory. The following instructions will guide you to prepare it and we will take `example` as the project name to illustrate.

### Use the base project to create your own project
1. __Rename Directory__: The base project directory is at `apps/web`. We will rename it to `apps/web-example`. Now the project name is `web-example`.
2. __Update File__: Update the workspace name with the project name in `apps/web-example/package.json` at line 2:
```json
{
  // "name": "web", (delete this line)
  "name": "web-example",
  "version": "1.0.0",

  ...
}
```

### Remove unecessary projects (optional)
Under the `apps/` directory, you may find many projects such as `web-agoric`, `web-akash`..., etc. To shrink the project size, we can simply delete those `apps/web-*` directories and keep just `apps/web-example`.

## Prepare the config files

### Chain config
1. __Rename Chain Config File__: the base chain config file is located at `packages/shared-utils/configs/chains/base.json`. We need to rename it according to the project name. Now let's rename it from `base.json` to __`example.json`__. We can also delete the rest of config files under this folder and keep just `example.json`.

2. __Update File__: Update `chainName` with the chain name of your project. Must be identical to the config file name in point 1. For instance: 
```json
{
  "chainName" : "example"
}
```

3. For the rest of the config file, check [chain config reference](chain-config.md) for a better understanding of what each section and field refers to.


### General Config
In `packages/shared-utils/configs/general.json`, **update the json** to give proper maintainer credits as well as a way for users to submit bugs/ issues.
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
  "version": "v3.0.0"
}
```

### Networks Config
In `packages/shared-utils/configs/networks.json`, let's add the networks(`mainnet` / `testnet`). Below is an example:
```json
[
  {
    "name": "Example",
    "chainName": "Example",
    "logo": "https://raw.githubusercontent.com/exampleuser/myexamplechain/main/logos/Example.svg?sanitize=true",
    "cover": "https://raw.githubusercontent.com/exampleuser/myexamplechain/main/covers/Example.png?sanitize=true",
    "links": [
      {
        "chainType": "Testnet",
        "network": "example-testnet-3",
        "url": "https://testnet.explorer.network/example"
      },
      {
        "chainType": "Mainnet",
        "network": "example-mainnet",
        "url": "https://explorer.network/example"
      }
    ]
  }
]
```
:::info Chain ID
The `chainType` and `network` fields should be identical to those fields in `packages/shared-utils/configs/chains/example.json` (at line 186, 187 & 216, 217).
:::

## Add images

### Add logo and icon files
The logos and icons are located at `packages/shared-utils/assets/logos/*.svg` & `packages/shared-utils/assets/icons/*.svg`. 

Let's add our logo under `packages/shared-utils/assets/logos/` and our icon `packages/shared-utils/assets/icons/`. Same, you can simply remove the unnecessary logos and icons to shrink the project size.


### Import images
The logos and icons are imported in `packages/ui/src/components/ChainIcon/index.tsx`. We can now delete the uneccessary imports of other chains in this file and add our `example` logo and icon as follow:

```typescript
import exampleIconLight from 'shared-utils/assets/icons/example-light.svg';
import exampleLogoLight from 'shared-utils/assets/logos/example-light.svg';

  switch (chainName) {
    case 'example':
      [iconDark, iconLight] =
        type === 'icon'
          ? [exampleIconLight, exampleIconLight]
          : [exampleLogoLight, exampleLogoLight];
      break;
  }

```

<details>

<summary> this file should look like: </summary>

```typescript
import React from 'react';
import classnames from 'classnames';
import Image, { type ImageProps } from 'next/future/image';

// Images
import baseIconLight from 'shared-utils/assets/icons/base-light.svg';
import baseLogoLight from 'shared-utils/assets/logos/base-light.svg';
import exampleIconLight from 'shared-utils/assets/icons/example-light.svg';
import exampleLogoLight from 'shared-utils/assets/logos/example-light.svg';

import chainCoing from '@/chainConfig';
import { useStyles } from '@/components/ChainIcon/useStyles';

type IconProps = Omit<ImageProps, 'id' | 'src'> & {
  type: 'icon' | 'logo';
};

const ChainIcon = ({ className, type, ...props }: IconProps) => {
  const classes = useStyles();
  const { chainName } = chainCoing;

  let [iconDark, iconLight] =
    type === 'icon' ? [baseIconLight, baseIconLight] : [baseLogoLight, baseLogoLight];

  switch (chainName) {
    case 'example':
      [iconDark, iconLight] =
        type === 'icon'
          ? [exampleIconLight, exampleIconLight]
          : [exampleLogoLight, exampleLogoLight];
      break;
    default:
      throw new Error(`chain ${chainName} not supported`);
  }
  return (
    <span className={classnames(className, classes.container)}>
      <Image width={0} height={0} src={iconDark} {...props} className={classes.dark} unoptimized />
      <Image
        width={0}
        height={0}
        src={iconLight}
        {...props}
        className={classes.light}
        unoptimized
      />
    </span>
  );
};

export default ChainIcon;
```

</details>

## Check Hasura is in sync with our graphql operations
In `packages/ui/codegen.yml` change the __schema__ field to your graphql url to run `yarn run graphql:codegen`. If there are no errors it will regenerate the needed `src/graphql/types.tsx`. If there is an error this can indicate the backend hasura was not setup correctly.

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
Run `yarn install` and `corepack enable && yarn dev --filter [project name]` to start the dev mode.
```f
$ yarn install
$ corepack enable && yarn dev --filter web-example
```

## Build and Run a Production Docker Image
<!-- The following will build the docker image in production mode (replace the build arg values with your own).

```
$ docker build \
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
$ docker run -d --rm -p 3000:3000 <image-name>
``` -->
