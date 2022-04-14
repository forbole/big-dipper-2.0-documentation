---
title: 1. Setup the database
sidebar_position: 2
---
BDJuno relies on a PostgreSQL database to store the parsed data, hence the first thing you need to do is install [PostgreSQL](https://www.postgresql.org/).
Once installed, you need to create a new database and a new user that is going to read and write data inside it. 
```shell
# login to the database
$ sudo su - postgres
$ psql
```
``` bash
# create database and user
CREATE DATABASE bdjuno;
CREATE USER '<your_user>' WITH ENCRYPTED PASSWORD '<your_password>';
GRANT ALL PRIVILEGES ON DATABASE bdjuno TO '<your_user>';
```

Then, you need to run the SQL queries that you can find inside the [`database/schema` folder](https://github.com/forbole/bdjuno/tree/cosmos/v0.44.x/database/schema).
```shell
$ cd /path/to/bdjuno/database/schema
$ psql -U '<your_user>' -d bdjuno -f 00-cosmos.sql
$ psql -U '<your_user>' -d bdjuno -f 01-auth.sql
$ psql -U '<your_user>' -d bdjuno -f 02-bank.sql
$ psql -U '<your_user>' -d bdjuno -f 03-staking.sql
$ ...

# do it for all the SQL files in this folder
```


:::info Select the correct branch  
Please make sure you select the correct branch inside the BDJuno repository to view the correct schema for the chain you want to parse.
:::
