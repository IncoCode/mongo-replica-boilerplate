#!/usr/bin/env bash

if [ ! -f /data/mongo-init.flag ] && [ "$IS_PRIMARY" == "YES" ]; then
    echo "Init replicaset"
    mongo mongodb://localhost:$PORT mongo-setup.js
    touch /data/mongo-init.flag
else
    echo "Replicaset already initialized"
fi