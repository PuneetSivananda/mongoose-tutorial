[//]: <> ( reference https://github.com/bstashchuk/MongoDB-Aggregation-Tutorial)
[//]: <> (https://www.youtube.com/watch?v=s44QWegr2l8&list=PLWkguCWKqN9OwcbdYm4nUIXnA2IoXX0LI&index=2)
[//]: <> (https://mongoosejs.com/docs/api/aggregate.html)
[//]: <> (https://medium.com/@minoffline/how-to-install-mongodb-on-macos-locally-in-2023-ab84140ae595)

mongod --dbpath ~/mongo_data/data/db --logpath ~/mongo_data/data/log/mongodb/mongo.log --fork
ps aux | grep -v grep | grep mongod
  
db.persons.insert(
     {
    "index": NumberInt(0),
    "name": "Aurelia Gonzales",
    "isActive": false,
    "registered": ISODate("2015-02-11T04:22:39+0000"),
    "age": NumberInt(20),
    "gender": "female",
    "eyeColor": "green",
    "favoriteFruit": "banana",
    "company": {
      "title": "YURTURE",
      "email": "aureliagonzales@yurture.com",
      "phone": "+1 (940) 501-3963",
      "location": {
        "country": "USA",
        "address": "694 Hewes Street"
      }
    },
    "tags": [
      "enim",
      "id",
      "velit",
      "ad",
      "consequat"
    ]
  })

### Execute a script
load('3.mongodb-aggregations/listCollections.js')