const { MongoClient } = require('mongodb')
const client = new MongoClient('mongodb://localhost:27017/')

client.connect()
    .then(
        (client) => {
            console.log('Connected Successfully');
            const db = client.db("sampleapp");
            // New Collection
            db.createCollection("mycollection")
                .then(()=>{console.log("Created")})
                .catch((err)=>console.log(err))
        })
    .catch(error => console.log('Failed to connect', error))
