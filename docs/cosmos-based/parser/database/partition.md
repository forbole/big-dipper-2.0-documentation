---
title: Table partitioning
sidebar_position: 2
---

In order to efficiently query the database over the enormous amount of transactions and messages, 
we implemented PostgreSQL [Table Partitioning](https://www.postgresql.org/docs/10/ddl-partitioning.html) feature
starting from the version __new_version_tag?__ which turns the `transaction` and `message` tables into partitioned
tables and creates partitions according to the `partition_size` set up in the [config.yaml file](../config/config.md#database). 

If you are running a previous version of bdjuno, we prepared a [migration script](https://github.com/forbole/migrate_script) from the original tables 
to the new partitioned tables(due to time contraint it is currently built in node.js, the version in golang is on the way).

### Migration To Table Partitioning

Follow the below instructions for the migration.

#### Environment Setup
1. Create the .env file with psql connection credentials along with the configs for migration and partition. Here's an example:
```
PGUSER=psql_user_name
PGHOST=psql_host
PGPASSWORD=psql_password
PGDATABASE=db_name
PGPORT=psql_port

BATCH=5000  // How many rows in transaction to be migrated per batch
PARTITION_SIZE=100000 // The number of block heights per partition 
```
2. Add custom account address parser in `utils/messageParse.js` if any or leave the array empty if there's no custom address parse. Take desmos chain as an example:
```javascript
let customAccountParser = ["receiver", "user", "counterparty", "blocker", "blocked"]
```

#### Start the migration
1. Stop and upgrade the bdjuno version to which supports table partitioning (don't restart yet)
2. Prepare tables with executing the command __npm run prepare-tables__, which will: 
  - Rename the `transaction` table to `transaction_old`; `message` table to `message_old`
  - Rename all the related indexes of `transaction_old` and `message_old` tables with adding `_old` tag
  - Create new `transaction` & `message` tables with new indexes
3. Once the tables are ready, restart the upgraded bdjuno
4. Start migrating with __npm run migrate__, which will: 
  - Read from `transaction_old` and insert into `transaction` and `message` tables by batch(the size of batch needs to be configured in the .env file)
  - When the migration is completed, old function messages_by_address is dropped and a new one is created
5. Let the script run until it says the migration is completed.

For safety reason it does not drop the old tables `transaction_old` and `message_old`. 
You might want to do it after the data consistency is verified.

