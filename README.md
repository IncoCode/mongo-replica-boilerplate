# mongo-replica-boilerplate

This repository shows how to deploy a MongoDB replica set via Docker Compose.<br />
The configuration is done automatically.


# How to Run

Run
`docker compose up`
then wait for about 15-30 seconds for nodes initialization and `root` user creation. If `15 seconds` sleep time is not enough for you you can increase it in `mongo-setup.js`, then stop and delete all the container and volumes and try again.

# How to Connect

In order to connect to the Replica Set from your host machine you have to modify you `hosts` file and add the following:
```
127.0.0.1 mongodb1
127.0.0.1 mongodb2
127.0.0.1 mongodb3
```

Then use the following string to connect (for example, via `Studio 3T`): `mongodb://root:root@localhost:27017,localhost:27018,localhost:27019/?replicaSet=rsmongo&readPreference=primary&serverSelectionTimeoutMS=5000&connectTimeoutMS=10000&authSource=admin&authMechanism=SCRAM-SHA-1`.
