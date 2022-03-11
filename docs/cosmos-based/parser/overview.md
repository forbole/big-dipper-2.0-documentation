---
title: Overview
sidebar_position: 1
---

<<<<<<< HEAD
Docs curently based on: `v1.2.0` `v1.2.0-stargate`
=======
Docs curently based on: `v2.0.0` `v2.0.0-stargate`
>>>>>>> aaron/fix_v2

The old version of BigDipper relied on a chain node's LCD and RPC endpoints in order to get the data. Although this worked pretty good, we saw that there were some cases in which the node was not able to handle all the queries properly. This would result in the UI not displaying the data correctly or crashing.

In order to provide a better service and allow BigDipper to show the data faster and in a more reliable way, with BigDipper 2.0 we changed how we handle the data. Instead of relying on a chain fullnode directly, we have created an intermediary layer that acts as a _cache_ storing the data inside a relational database. This has two main advantages:

1. Relational databases are known to be very fast when quering the data, which results in a better performance for BigDipper.
2. Since we store the data inside a [PostgreSQL](https://www.postgresql.org/) database, we can expose a GraphQL endpoint on top of it automatically using [Hasura](https://hasura.io). This makes it possible to query the data easier and to subscribe to data changes without having to do the wiring ourselves.

This setup has allowed us to increase the performances quite a bit, but it also has its downsides. The main one is that developers now need to setup three things: the PostgreSQL database, the BDJuno binary and the Hasura endpoint for BigDipper 2.0 to work properly. To do this, we have prepared the following guides:

1. [Setup your database](database.md).
2. [Setup and run BDJuno](setup.md).
3. [Setup Hasura](hasura.md)

:::info Custom chains support
As the Cosmos ecosystem keeps growing, everyday it becomes harder to maintain something so specific like BDJuno for everyone.
For this reason, we have decided that we will maintain official support for BDJuno only for a restricted number of projects.
All of these projects can be viewed inside our repository by looking at the [different branches which names start with the `chains/` prefix](https://github.com/forbole/bdjuno/branches/all?query=chains%2F).

If you are the developer of a new chain and would like to run a custom instance of BDJuno, however, you can still do so.
All you have to do is follow the [**"Custom chains"** guide](custom-chains.md).
:::
