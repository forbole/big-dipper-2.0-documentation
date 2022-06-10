---
title: 1. Setup the database
sidebar_position: 2
---
SolJuno relies on a PostgreSQL database to store the parsed data, hence the first thing you need to do is install [PostgreSQL](https://www.postgresql.org/).
Once installed, you need to create a new database and a new user that is going to read and write data inside it. 
```shell
# login to the database
$ sudo su - postgres
$ psql
```
``` bash
# create database and user
CREATE DATABASE soljuno;
CREATE USER '<your_user>' WITH ENCRYPTED PASSWORD '<your_password>';
GRANT ALL PRIVILEGES ON DATABASE soljuno TO '<your_user>';
```

Then, you need to run the soljuno database init command with the schema folder that you can find inside the [`db/schema` folder](https://github.com/forbole/soljuno/tree/master/db/schema).
```shell
$ cd /path/to/soljuno/database
$ soljuno db init ./schema --yes 
```

:::info Select the correct branch  
Please make sure you select the correct branch inside the SolJuno repository to view the correct schema for the chain you want to parse.
:::

## Backup accounts status

To backup all the accounts status for migrating to the new instance from old one, execute the following command:

```bash
pg_dump soljuno --table=account_balance --table=multisig --table=nonce_account \
    --table=program_account --table=program_data_account --table=stake_account \
    --table=stake_delegation --table=stake_lockup --table=token --table=token_account \
    --table=token_account_balance --table=token_delegation --table=token_supply \
    --table=validator --table=validator_config \
    --section=data --column-inserts --on-conflict-do-nothing -f backup.dump
```