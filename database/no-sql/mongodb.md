---
title: MongoDB
category: NoSQL
layout: 2017/sheet
updated: 2022-07-18
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

### Create

In MongoDB, if a collection doesn't exist, upon the first insertion the collection is created.

MongoDB guarantees atomicity at the individual document level.

```mongodb
> db.collection.insertOne()  // Inserts a single document
> db.collection.insertMany() // Inserts many documents
```
