---
title: 2. Setup and run BDJuno
sidebar_position: 3
---

## Prepare the environment
To properly install and set up BDJuno you need to first prepare the environment by updating/upgrading the system and installing the libraries that are needed to install the BDJuno binary.

```shell
# Update the system
$ sudo apt-get update
$ sudo apt-get upgrade

# Install the libraries
$ sudo apt install git build-essential ufw curl docker-ce docker-ce-cli containerd.io
```


To verify if Docker is installed correctly run:
```shell
$ docker version
```

It should return the Docker version and the output should look similar to this:
```
Client: Docker Engine - Community
 Version:           20.10.12
 API version:       1.41
 Go version:        go1.16.12
 Git commit:        e91ed57
 Built:             Mon Dec 13 11:45:33 2021
 OS/Arch:           linux/amd64
 Context:           default
 Experimental:      true

Server: Docker Engine - Community
 Engine:
  Version:          20.10.12
  API version:      1.41 (minimum version 1.12)
  Go version:       go1.16.12
  Git commit:       459d0df
  Built:            Mon Dec 13 11:43:42 2021
  OS/Arch:          linux/amd64
  Experimental:     false
 containerd:
  Version:          1.4.12
  GitCommit:        7b11cfaabd73bb80907dd23182b9347b4245eb5d
 runc:
  Version:          1.0.2
  GitCommit:        v1.0.2-0-g52b36a2
 docker-init:
  Version:          0.19.0
  GitCommit:        de40ad0
```


Next, you need to install [Go 1.18+](https://golang.org/dl/) and set up its environment variables, to do this run: 
```shell
# Install go
$ sudo snap install go --classic

# Export environment variables
$ echo 'export GOPATH="$HOME/go"' >> ~/.profile
$ echo 'export GOBIN="$GOPATH/bin"' >> ~/.profile
$ echo 'export PATH="$GOBIN:$PATH"' >> ~/.profile
$ source ~/.profile
```
To verify if Go is installed correctly run:
```shell
$ go version
```
It should return Go version, the output should look similar to this:
```shell
go version go1.19 linux/amd64
```

## Installing BDJuno
After you finish setting up the environment, the first thing to do is to clone the GitHub repository. To do this you can run

```shell
$ git clone https://github.com/forbole/bdjuno.git
```

:::info Select the correct branch  
If you want to parse a chain that is **not** the Cosmos one, make sure you checkout the correct BDJuno branch before running `make install` command.

To view a list of all the available branches you can use

```shell
$ git branch -r
```

Then, you can checkout the branch you prefer using the `checkout` command:

```shell
$ git checkout -t origin/chains/<chain>

# E.g.
# git checkout -t origin/chains/osmosis
```

If you do not see a branch for the chain you would like to parse, please head to the [BDJuno repository](https://github.com/forbole/bdjuno/) and open an issue asking for the integration. 
:::

Then, you need to install the binary. To do this, run

```shell
$ make install
```

This will put the `bdjuno` binary inside your `$GOPATH/bin` folder. You should now be able to run `bdjuno` to make sure it's installed:

```
$ bdjuno
A Cosmos chain data aggregator. It improves the chain's data accessibility
by providing an indexed database exposing aggregated resources and models such as blocks, validators, pre-commits, 
transactions, and various aspects of the governance module. 
bdjuno is meant to run with a GraphQL layer on top so that it even further eases the ability for developers and
downstream clients to answer queries such as "What is the average gas cost of a block?" while also allowing
them to compose more aggregate and complex queries.

Usage:
  bdjuno [command]

Available Commands:
  help        Help about any command
  init        Initializes the configuration files
  migrate     Perform the migrations from the current version to the specified one
  parse       Parse some data without the need to re-syncing the whole database from scratch
  start       Start parsing the blockchain data
  version     Print the version information

Flags:
  -h, --help          help for bdjuno
      --home string   Set the home folder of the application, where all files will be stored (default "/home/riccardo/.bdjuno")

Use "bdjuno [command] --help" for more information about a command.
```

## Initializing the configuration
In order to correctly parse and store the data based on your requirements, BDJuno allows you to customize its behavior via a YAML file called `config.yaml`. To create the first instance of the `config.yaml` file you can run

```shell
$ bdjuno init
```

This will create such a file inside the `~/.bdjuno` folder.  
Note that if you want to change the folder used by BDJuno you can do this using the `--home` flag:

```shell
$ bdjuno init --home /path/to/my/folder
```

Once the file is created, you are required to edit it and change the different values. To do this you can run

```shell
$ nano ~/.bdjuno/config.yaml
```

For a better understanding of what each section and field refers to, please read the [config reference](config/config.md).

## Downloading the genesis file
Download the genesis file and save it inside `~/.bdjuno` directory
```shell 
$ curl [URL of genesis.json file] > $HOME/.bdjuno/genesis.json
```

## Parsing genesis file
You can parse the genesis file before starting parsing the node. BDJuno will read the genesis.json from the default path: `~/.bdjuno/genesis.json`.
To parse all registered genesis modules, simply run:

```shell
$ bdjuno parse genesis-file
```

You can also specify the genesis file path:

```shell
$ bdjuno parse genesis-file --genesis-file-path [/path/to/genesis.json]
```

## Running BDJuno
Once the configuration file has been set up and the genesis file parsed, you can run BDJuno using the following command:

```shell
$ bdjuno start
```

If you are using a custom folder for the configuration file, please specify it using the `--home` flag:


```shell
$ bdjuno start --home /path/to/my/config/folder
```

We highly suggest you run BDJuno as a system service so that it can be restarted automatically in the case it stops. To do this you can run:

```shell
$ sudo tee /etc/systemd/system/bdjuno.service > /dev/null <<EOF
[Unit]
Description=BDJuno parser
After=network-online.target

[Service]
User=$USER
ExecStart=$GOPATH/bin/bdjuno start
Restart=always
RestartSec=3
LimitNOFILE=4096

[Install]
WantedBy=multi-user.target
EOF
```

Then you need to enable and start the service:

```shell
$ sudo systemctl enable bdjuno
$ sudo systemctl start bdjuno
```
