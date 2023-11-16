#!/usr/bin/env bash

# Exit script as soon as a command fails.
set -o errexit

# Get the choice of client: ganache-cli is default
bc_client="ganache"

echo "Chosen client $bc_client"

bc_client_port=7545
mnemonic="oil foam cement clerk open rough entry swarm poverty length tail portion"

start_ganache() {
  node_modules/.bin/ganache -a 101 -m="$mnemonic" --port=7545 >/dev/null 2>&1 &
}

echo "Starting our own $bc_client client instance at port $bc_client_port"
  start_ganache