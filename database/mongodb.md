---
title: MongoDB
category: Database
layout: 2017/sheet
updated: 2023-05-22
keywords:
    - "mongodb"
    - "mongo"
    - "mongodb cheat sheets"
prism_languages: [mongodb]
intro: |
  List of useful MongoDB commands
---

Shortcuts
---------
{: .-one-column}

### MongoDB clients

There are many clients for MongoDB. The most notable ones are [MongoDB Shell](https://www.mongodb.com/try/download/shell) and [MongoDB Compass](https://www.mongodb.com/products/compass).


### Mongosh

Mongosh allows to write JavaScript code to interact with the database. For example to print all data from all collections,

```javascript
let collections = db.getCollectionNames();
collections.forEach(c => db.getCollection(c).find().forEach(printjson));
```

Connect to the database,

```bash
$ mongosh mongodb://localhost:27017
```

### Database interactions

```mongodb
> show databases
> db // Which database currently connected to
> use [database-name] // Switches to the database, even if not exist. With first insertion database is created
> show collections
> db.createCollection("user")
```

### Create

In MongoDB, if a collection doesn't exist, upon the first insertion the collection is created.

MongoDB guarantees atomicity at the individual document level.

```mongodb
> db.collection.insertOne()  // Inserts a single document
> db.user.insertOne({firstName: "John", lastName: "Wick", age: 40});
> db.collection.insertMany() // Inserts many documents
> db.collection.insertMany([{firstName: "John", lastName: "Wick", age: 40}, {firstName: "Robert", lastName: "McCall", age: 55}])
```

### Query

```mongodb
> db.collection.find() // List all data in the collection
> db.user.find()
> db.user.find().pretty()
```

### Export a collection with `mongoexport`

First, download [MongoDB Database Tools](https://www.mongodb.com/try/download/database-tools). Then, run:

```bash
$ mongoexport --uri=[DB_URI] --db=[DB_NAME] --collection=[COLLECTION_NAME] --out=[PATH_FILE_NAME]
```

### Ensure a collection is a timeseries collection

Timeseries is a special collection type that allows fast data aggregation, especially useful for stock market, weather, fleet, etc.

```mongodb
> db.getCollectionInfos({name:"quoteHistory"});
```

Should produce an output like this:

```json
[
  {
    name: 'quoteHistory',
    type: 'timeseries',
    options: { timeseries: [Object] },
    info: { readOnly: false }
  }
]
```
