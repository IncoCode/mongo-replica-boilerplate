#!/usr/bin/env bash

/config/wait-for-it.sh localhost:$PORT -- /config/mongo-replica-setup.sh &
/usr/bin/mongod --replSet rsmongo --bind_ip_all --wiredTigerCacheSizeGB 1 --port $PORT --auth --keyFile /config/mongodb.key