---
title: Setup
sidebar_position: 1
---

Docs curently based on: `v3.0.0`

:::info
Requires [bdjuno](https://github.com/forbole/bdjuno) to be on at least `v1.1.0` release to support hasura actions(GraphQL API server).
:::

Since `v3.0.0`, we have merged every chain's Big Dipper UI to be in a single branch according to the [monorepo](https://en.wikipedia.org/wiki/Monorepo) concept.

The following will teach you how to add your own project to this repo and run big dipper 2.0 ui for your own explorer. If you have any other questions please feel free to open an [issue](https://github.com/forbole/big-dipper-2.0-cosmos/issues)

## Clone the repository
Fork, clone, and check out our [latest release](https://github.com/forbole/big-dipper-2.0-cosmos/releases) for the most stable version or feel free to use the current documentation version.

```
$ git clone https://github.com/<user>/big-dipper-2.0-cosmos.git
$ git checkout tags/[latest release]
```

## Prepare project directory
To run your own Big Dipper 2.0 UI, you would need a new project directory. The following instructions will guide you to prepare it and we will take `examplenet` as the chain name to illustrate.

### Use the base project to create your own project
1. __Rename Directory__: The base project directory is `apps/web`. Since our chain is `examplenet`, we will rename it to `apps/web-examplenet`. Now the project name is `web-examplenet`.
2. __Update `package.json`__: Update the workspace name with the project name `web-examplenet` in `apps/web-examplenet/package.json` at line 2:
```json {2}
{
  "name": "web-examplenet",
  "version": "1.0.0",

  ...
}
```

### Remove unecessary projects (optional)
Under the `apps/` directory, you may find many projects such as `web-agoric`, `web-akash`..., etc. To shrink the project size, we can simply delete those `apps/web-*` directories and keep just `apps/web-examplenet`.

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

## Add images

### Add logo and icon files
The logos and icons are located at `packages/shared-utils/assets/logos/*.svg` & `packages/shared-utils/assets/icons/*.svg`. 

Let's add our logo under `packages/shared-utils/assets/logos/` and our icon under `packages/shared-utils/assets/icons/`. Same, you can simply remove the unnecessary logos and icons to shrink the project size.


### Import images
The logos and icons are imported in `packages/ui/src/components/ChainIcon/index.tsx`. We can now delete the uneccessary imports of other chains in this file and add our `examplenet` logo and icon as follow:

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

<summary> this file should look like: </summary>

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
  const classes = useStyles();

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
In `apps/web-examplenet/codegen.yml` change the __schema__ field to your graphql url to run `yarn run graphql:codegen`. If there are no errors it will regenerate the needed `src/graphql/types.tsx`. If there is an error this can indicate the backend hasura was not setup correctly.

```yaml {9}
overwrite: true
config:
  # omitOperationSuffix: true
  skipTypeNameForRoot: true
generates:
  ./src/graphql/types/general_types.ts:
    documents:
      - 'src/graphql/general/*'
    schema: <your graphql url>
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
1. In `docker-compose.yml`, modify the `web` service under `services` to your own project name, for example: 
```yaml {1,6}
  web-examplenet:
    build:
      context: .
      dockerfile: ./docker/web.Dockerfile
      args:
        PROJECT_NAME: web-examplenet
        NEXT_PUBLIC_CHAIN_TYPE: ${NEXT_PUBLIC_CHAIN_TYPE:-mainnet}
        TURBO_TEAM: ${TURBO_TEAM:-}
        TURBO_TOKEN: ${TURBO_TOKEN:-}
    restart: always
    platform: linux/amd64
    ports:
      - 3000:3000
    networks:
      - app_network
```

2. Run `docker-compose up web-examplenet` to build and run the project's docker image

## List the explorer
In case you would like to list your explorer among the rest of the BigDipper explorers, you may open a PR to [this Repository](https://github.com/forbole/big-dipper-networks) by modifying the `networks.json` file with your network information.
