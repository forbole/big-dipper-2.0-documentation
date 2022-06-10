---
title: 2. Setup and run SolJuno
sidebar_position: 3
---

## Prepare the environment
To properly install and set up SolJuno you need to first prepare the environment by updating/upgrading the system and installing the libraries that are needed to install the SolJuno binary.

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


Next, you need to install [Go 1.16+](https://golang.org/dl/) and set up its environment variables, to do this run: 
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
go version go1.18 linux/amd64
```

## Installing SolJuno
In order to install SolJuno you are required to have [Go 1.16+](https://golang.org/dl/) installed on your machine. Once you have it, the first thing to do is to clone the GitHub repository. To do this you can run

```shell
$ git clone https://github.com/forbole/soljuno.git
```

Then, you need to install the binary. To do this, run

```shell
$ make install
```

This will put the `soljuno` binary inside your `$GOPATH/bin` folder. You should now be able to run `soljuno` to make sure it's installed:

```shell
$ soljuno
A Solana chain data aggregator. It improves the chain's data accessibility
by providing an indexed database exposing aggregated resources and models such as blocks, validators,
transactions, and various aspects of the epoch module. 
soljuno is meant to run with a GraphQL layer on top so that it even further eases the ability for developers and
downstream clients to answer queries such as "What is the average gas cost of a block?" while also allowing
them to compose more aggregate and complex queries.

Usage:
  soljuno [command]

Available Commands:
  db               Database subcommands
  fix              Fix subcommands
  help             Help about any command
  import-snapshot  Import a snapshot at specific slot
  import-tokenlist Import a tokenlist to the token unit table
  init             Initializes the configuration files
  parse            Start parsing the blockchain data
  proxy-start      Start actions proxy server for Hasura Actions
  version          Print the version information

Flags:
  -h, --help          help for soljuno
      --home string   Set the home folder of the application, where all files will be stored (default "/home/kilem/.soljuno")

Use "soljuno [command] --help" for more information about a command.
```

## Initializing the configuration
In order to correctly parse and store the data based on your requirements, Soljuno allows you to customize its behavior via a TOML file called `config.toml`. In order to create the first instance of the `config.toml` file you can run

```shell
$ soljuno init
```

This will create such file inside the `~/.soljuno` folder.  
Note that if you want to change the folder used by Soljuno you can do this using the `--home` flag:

```shell
$ soljuno init --home /path/to/my/folder
```

Once the file is created, you are required to edit it and change the different values. To do this you can run

```shell
$ nano ~/.soljuno/config.toml
```

For a better understanding of what each section and field refers to, please read the [config reference](config.md).

## Running Soljuno
Once the configuration file has been setup, you can run Soljuno using the following command:

```shell
$ soljuno parse
```

If you are using a custom folder for the configuration file, please specify it using the `--home` flag:


```shell
$ soljuno parse --home /path/to/my/config/folder
```

We highly suggest you running Soljuno as a system service so that it can be restarted automatically in the case it stops. To do this you can run:

```shell
$ sudo tee /etc/systemd/system/soljuno.service > /dev/null <<EOF
[Unit]
Description=SolJuno parser
After=network-online.target

[Service]
User=$USER
ExecStart=$GOPATH/bin/soljuno parse
Restart=always
RestartSec=3
LimitNOFILE=4096

[Install]
WantedBy=multi-user.target
EOF
```

Then you need to enable and start the service:

```shell
$ sudo systemctl enable soljuno
$ sudo systemctl start soljuno
```