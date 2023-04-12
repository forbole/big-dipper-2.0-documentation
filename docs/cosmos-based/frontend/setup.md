---
title: Setup
sidebar_position: 1
---

Docs curently based on: `v3.0.0`

:::info
Requires [BDJuno](https://github.com/forbole/bdjuno) to be on at least `v1.1.0` release to support hasura actions(GraphQL API server).
:::

Since `v3.0.0`, we have merged every chain's Big Dipper UI to be in a single branch according to the [monorepo](https://en.wikipedia.org/wiki/Monorepo) concept.

The following will guide you how to prepare and setup Big Dipper 2.0 UI for your own explorer. If you have any other questions please feel free to open an [issue](https://github.com/forbole/big-dipper-2.0-cosmos/issues) with your enquiry.

## Clone the repository
Fork, clone, and check out our [latest release](https://github.com/forbole/big-dipper-2.0-cosmos/releases) for the most stable version or feel free to use the current documentation version.

```
$ git clone https://github.com/<user>/big-dipper-2.0-cosmos.git
$ cd big-dipper-2.0-cosmos/
$ git checkout tags/[latest release]
```

## Prepare project directory
To run your own Big Dipper 2.0 UI, you will need to create new project directory. The following instructions will guide you how to correctly prepare it. For this example we will take `examplenet` as the chain name to illustrate it.

### Use the base project to create your own project
1. __Rename Directory__: Duplicate `apps/web` base project directory and rename it according to the chain name, in our case we will rename it to `apps/web-examplenet`.
2. __Update `package.json`__: Update the workspace name with the project name `web-examplenet` in `apps/web-examplenet/package.json` at line 2:
```json {2}
{
  "name": "web-examplenet",
  "version": "1.0.0",

  ...
}
```

### Remove unnecessary projects (optional)
Under the `apps/` directory, you may find many projects such as `web-agoric`, `web-akash`..., etc. To reduce the project size, you can simply delete those `apps/web-*` directories and keep just `apps/web-examplenet`.

## Prepare the config files

### Chain config
The chain config file is located at `apps/web-examplenet/src/chain.json`. To customize your explorer, you need to: 
1. Update `chainName` field with the chain name of your project. For instance: 
```json
{
  "chainName" : "examplenet"
}
```

2. For the rest of the configs, including colors, themes, endpoints, etc., check [chain config reference](chain-config.md) for a better understanding of what each section and field refers to.

### General Config
In `src/configs/general_config.json`, **update the json** to give proper maintainer credits as well as a way for users to submit bugs/issues.
For a better understanding of what each section and field refers to, please read the [general config reference](general-config.md).

:::info
We will not be handling any opened issues directly related to your explorer as we won't have the proper info.
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


### Enviroment Variables
Create `.env` file inside the root of the project and update the environment variables

``` shell
  GRAPHQL_URL=http://localhost:8080/v1/graphql
  GRAPHQL_WS=ws://localhost:8080/v1/graphql
  NODE_ENV=development
  PORT=3000
  RPC_WEBSOCKET=http://localhost:26657/websocket
  NEXT_PUBLIC_CHAIN_TYPE=mainnet
  PROJECT_NAME=web-examplenet
```

## Add images

### Add logo and icon files
The logos and icons are located at `packages/shared-utils/assets/logos/*.svg` & `packages/shared-utils/assets/icons/*.svg`. 

Add your chain logo under `packages/shared-utils/assets/logos/examplenet-light.svg` and your chain icon under `packages/shared-utils/assets/icons/examplenet-light.svg`. To reduce the project size you can remove unnecessary logos and icons inside those folders. 


### Import images
The logos and icons are imported in `packages/ui/src/components/ChainIcon/index.tsx`. You can now delete the uneccessary imports of other chains in this file and add our `examplenet` logo and icon as follow:

```ts
import examplenetIconLight from 'shared-utils/assets/icons/examplenet-light.svg';
import examplenetLogoLight from 'shared-utils/assets/logos/examplenet-light.svg';

  switch (chainName) {
    case 'examplenet':
      [iconDark, iconLight] =
        type === 'icon'
          ? [examplenetIconLight, examplenetIconLight]
          : [examplenetLogoLight, examplenetLogoLight];
      break;
  }

```

<details>

<summary>Example of index.tsx: </summary>

```ts
import chainCoing from '@/chainConfig';
import { useStyles } from '@/components/ChainIcon/useStyles';
import classnames from 'classnames';
import Image, { type ImageProps } from 'next/future/image';

import baseIconLight from 'shared-utils/assets/icons/base-light.svg?url';
import baseLogoLight from 'shared-utils/assets/logos/base-light.svg?url';
import examplenetIconLight from 'shared-utils/assets/icons/examplenet-light.svg';
import examplenetLogoLight from 'shared-utils/assets/logos/examplenet-light.svg';

interface IconProps extends Omit<ImageProps, 'id' | 'src'> {
  type: 'icon' | 'logo';
  chainName?: string;
}

const ChainIcon = ({
  className,
  type,
  chainName = chainCoing().chainName,
  ...props
}: IconProps) => {
  const { classes, cx } = useStyles();

  let [iconDark, iconLight] =
    type === 'icon' ? [baseIconLight, baseIconLight] : [baseLogoLight, baseLogoLight];
  switch (chainName) {
    case 'examplenet':
      [iconDark, iconLight] =
        type === 'icon'
          ? [examplenetIconLight, examplenetIconLight]
          : [examplenetLogoLight, examplenetLogoLight];
      break;


    default:
      throw new Error(`chain ${chainName} not supported`);
  }
  return (
    <span className={cx(className, classes.container)}>
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

## Check Hasura is in sync with your graphql operations
In `apps/web-examplenet/codegen.yml` change the __schema__ field to your graphql url to run `yarn run graphql:codegen`. It will regenerate the needed `src/graphql/types.tsx`. If an error occurs, it can indicate that the backend hasura was not setup correctly.

```yaml {6}
overwrite: true
generates:
  ./src/graphql/types/general_types.ts:
    documents:
      - 'src/graphql/general/*'
    schema: <your graphql url>
    config:
      # omitOperationSuffix: true
      skipTypeNameForRoot: true
    plugins:
      - "typescript"
      - "typescript-operations"
      - "typescript-react-apollo" # To generate custom hooks per query


```


## Start Development mode
Run `yarn install` and `corepack enable && yarn dev --filter [project name]` to start the dev mode.
```f
$ yarn install
$ corepack enable && yarn dev --filter web-examplenet
```

## Build and Run the Docker Image
Run `docker-compose up` to build and run the project's docker image. It reads the args from `.env` file, so if you want to run different project you should update the `PROJECT_NAME` variable inside the `.env` file.

## List the explorer
If you would like to list your explorer among the rest of the BigDipper explorers, you can open a PR in [this Repository](https://github.com/forbole/big-dipper-networks) with your network information added inside the `networks.json` file.

<details>

<summary>Example of networks.json file </summary>

```yaml 
[
    {
    "name": "exampleNet",
    "logo": "https://raw.githubusercontent.com/examplenet/examplenet/main/logos/examplenet.svg?sanitize=true",
    "cover": "https://raw.githubusercontent.com/examplenet/examplenet/main/covers/examplenet.png?sanitize=true",
    "links": [
      {
        "name": "Mainnet",
        "chain_id": "examplenet-1",
        "url": "https://examplenet.explorer.net"
      }
    ]
  }
]
```
</details>