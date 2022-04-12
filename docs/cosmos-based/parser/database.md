---
title: 1. Setup the database
sidebar_position: 2
---

Since BDJuno relies on a PostgreSQL database in order to store the parsed data, one of the most important things is to create such a database. To do this the first thing you need to do is install [PostgreSQL](https://www.postgresql.org/).

Once installed, you need to create a new database and a new user that is going to read and write data inside it. Then, you need to run the SQL queries that you can find inside the [`database/schema` folder](https://github.com/forbole/bdjuno/tree/cosmos/v0.44.x/database/schema).

:::info Select the correct branch  
Please make sure you select the correct branch inside the BDJuno repository to view the correct schema for the chain you want to parse.
:::
