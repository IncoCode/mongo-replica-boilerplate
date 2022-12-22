rsconf = {
    _id : "rsmongo",
    members: [
        {
            "_id": 0,
            "host": "mongodb1:27017",
            "priority": 3
        },
        {
            "_id": 1,
            "host": "mongodb2:27018",
            "priority": 2
        },
        {
            "_id": 2,
            "host": "mongodb3:27019",
            "priority": 1
        }
    ]
}

rs.initiate(rsconf);
admin = db.getSiblingDB("admin")
sleep(15000)
admin.createUser({ user: "root", pwd: "root", roles: [ { role: "userAdminAnyDatabase", db: "admin" } ] });

// db.createUser({user: 'admin', pwd: 'admin', roles: ['readWrite']});

// admin.createUser({ user: "root", pwd: "root", roles: [ { role: "userAdminAnyDatabase", db: "admin" } ] })