---
title: Custom chains
sidebar_position: 6
---

Creating a custom version of BDJuno is pretty straightforward. All you have to do is:

1. Fork the BDJuno repository.
2. Create a new branch for your project.
3. Add or update the dependencies based on your needs.
4. Add your application module managers.
5. (Optional) Implement a custom messages parser.

## Fork BDJuno
The first thing you need to do is [forking](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
our [BDJuno repository](https://github.com/forbole/bdjuno/).

This will allow you to create a new repository where you can work without any limits. It will also allow you to later
update the base repo to make sure you have a constantly updated BDJuno codebase that does not fall behind ours.

## Create a new branch
The next thing you want to do is create a new branch for your project. The best way to do this is by checking out one of
the `cosmos/` branches and then crete a new branch from there.

:::info Select the correct Cosmos branch Currently BDJuno supports multiple Cosmos versions (you can see them all [here](https://github.com/forbole/bdjuno/branches/all?query=cosmos%2F ))
It is important that when you create your
new branch you checkout the one that is most similar to the Cosmos SDK your project is based on.
:::

:::info Custom SDK implementations If you are developing a project with a custom Cosmos SDK implementation, don't worry.
We will see how to handle that later. For now, just check out the branch that is made for the Cosmos version most
similar to the one you are based on.
:::

To checkout the branch you desire, just run:

```shell
$ git checkout -t origin/v2/<branch-name>

# E.g.
# git checkout origin/v2/cosmos/stargate
```

Now that you have checked out the Cosmos branch, you can create your own branch:

```shell
$ git checkout -b chains/<project-name>

# E.g
# git checkout -b chains/my-project
```

This will create a new `chains/` branch that you can start working on.

## Add or update your dependencies
Now it's time to add the dependencies that your project needs. For these steps we will take as
example [Desmos](https://github.com/desmos-labs/desmos/).

The first thing we want to do is adding Desmos as a dependency:

```shell
$ go get -u github.com/desmos-labs/desmos@v2.3.0
```

This will edit your `go.mod` and `go.sum` file including the Desmos dependency.

Then, we need to make sure that the project we want to use does not uses some custom dependencies. To do this, we can
take a loot at [its `go.mod` file](https://github.com/desmos-labs/desmos/blob/v1.0.0/go.mod) and search for
any `replace` directives.

In our case, Desmos uses some custom dependencies:

```
replace github.com/gogo/protobuf => github.com/regen-network/protobuf v1.3.3-alpha.regen.1

replace github.com/cosmos/cosmos-sdk => github.com/desmos-labs/cosmos-sdk v0.43.0-alpha1.0.20211102084520-683147efd235

replace google.golang.org/grpc => google.golang.org/grpc v1.33.2

replace github.com/tendermint/tendermint => github.com/forbole/tendermint v0.34.13-0.20210820072129-a2a4af55563d
```

What we need to do, is edit BDJuno's `go.mod` file by adding the same `replace` directives. This will make sure that
BDJuno uses the same Cosmos SDK fork and other dependencies and does not error due to incompatibility problems.

## Add your application modules
Once you have added the dependency to your project, it is not time to use such dependency inside BDJuno.

This will be used to tell BDJuno which modules you support to make sure that it is able to properly deserialize all your
messages. Failing in doing this will result in BDJuno returning an error each time a custom message is to be parsed from
a transaction.

To tell BDJuno which modules you support, you need to change what the 
[`cmd/bdjuno/main.go#getBasicManages`](https://github.com/forbole/bdjuno/blob/v2/cosmos/stargate/cmd/bdjuno/main.go#L54-L58) 
function returns by adding your project's `ModuleBasics`. As an example, for Desmos we will change it to be

```go
func getBasicManagers() []module.BasicManager {
	return []module.BasicManager{
		simapp.ModuleBasics,
		desmosapp.ModuleBasics, // <--- We have added this line
	}
}
```

:::tip Your modules should be last
Make sure that you set your `ModuleBasics` to be the last one in the slice.
This will make sure that if you have any module that is named the same way as a Cosmos one (maybe because you use a custom implementation), the custom one will be used correctly.
If you set your modules first, the Cosmos ones will override them.
:::

## (Optional) Add your custom addresses parser
Inside BigDipper, when you visualize the details of an account you are able to see all the messages that it was involved in.
This is done by parsing each message to get the involved addresses.
By default, inside BDJuno we do this only with the Cosmos messages, and then we rely on the [`Msg#GetSigners` method](https://github.com/cosmos/cosmos-sdk/blob/3f8596c1955e40ef30e4abcd06f2237d132db3a9/types/tx_msg.go#L21).

Although this works great for most messages that involve a single user (the signer), your project might include some messages that involve more addresses.
For example, you might have a message that allows to send funds from one user to the other. Or a message that allows one user to perform a kind of action towards another one.

If this is the case, it is important that you build a custom addresses parser inside BDJuno to make sure that each message is associated with the proper list of addresses, and that the associated accounts are refreshed correctly once the message is parsed (especially if it edits both account balances).

To do this, what you can do is create a new file inside the `cmd/bdjuno` folder naming it after your project.
Inside that file, you need to create a function with the following signature:

```go
// CustomAddressesParser represents a MessageAddressesParser for the my custom module
func CustomAddressesParser(cdc codec.Marshaler, cosmosMsg sdk.Msg) ([]string, error)
```

This method should return either a list of all the parsed addresses, or `messages.MessageNotSupported(cosmosMsg)` is the message is not supported.

If you want to take a look at a reference implementation you can refer to the [Desmos one](https://github.com/forbole/bdjuno/blob/v2/chains/desmos/mainnet/cmd/bdjuno/desmos.go).

:::tip Combine multiple parsers
If you have multiple modules that should be parsed in different ways, we suggest you splitting them into different parsers and then combining that parsers together using the [`messages.JoinMessageParsers`](https://github.com/forbole/juno/blob/v2/cosmos-stargate/modules/messages/account_parser.go) method.
You can see how this is used for Desmos [here](https://github.com/forbole/bdjuno/blob/v2/chains/desmos/mainnet/cmd/bdjuno/desmos.go).
:::

Finally, once you have your custom addresses parser setup, you need to add it to the [`cmd/bdjuno/main.go#getAddressesParser`](https://github.com/forbole/bdjuno/blob/v2/chains/desmos/mainnet/cmd/bdjuno/main.go) method. Here is the example for Desmos:

```go
func getAddressesParser() messages.MessageAddressesParser {
	return messages.JoinMessageParsers(
		desmosMessageAddressesParser,
		messages.CosmosMessageAddressesParser,
	)
}
```

:::tip Your parser should be first
Make sure you set your parser to be the first one used. Otherwise, the `CosmosMessageAddressesParser` will default to using the `Msg#GetSigners` method and your parser will never be called, even though BDJuno will not return any error.
:::
