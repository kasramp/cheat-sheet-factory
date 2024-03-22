---
title: cURL
category: Linux
layout: 2017/sheet
updated: 2024-03-22
keywords:
    - "curl"
    - "curl cheatsheet"
prism_languages: [bash]
intro: |
  cURL cheatsheet
---

Shortcuts
---------
{: .-one-column}

### Basics GET, POST, PUT, and DELETE

Get example,

```bash
$ curl -X GET "http://localhost:8080/api/v1/customers?p=1" -H "accept: application/json"
```

Post example,

```bash
$ curl -X POST "http://localhost:8080/api/v1/customers" -H  "accept: application/json" -H  "Content-Type: application/json" -d "{\"customer\":{\"firstName\":\"John\",\"lastName\":\"Doe\"},\"registration\":\"2024-03-20 10:30\"}"
```

Put example,

```bash
$ curl -X PUT "http://localhost:8080/api/v1/customers/1234" -H  "accept: application/json" -H  "Content-Type: application/json" -d "{\"customer\":{\"firstName\":\"John\",\"lastName\":\"Doe\"},\"registration\":\"2023-03-20 10:20\"}"
```

Patch example,

```bash
$ curl -X PATCH "http://localhost:8080/api/v1/customers/1234" -H  "accept: application/json" -H  "Content-Type: application/json" -d "{\"customerFirstName\":\"John\",\"customerLastName\":\"Doe\"}"
```

Delete example,

```bash
$ curl -X DELETE "http://localhost:8080/api/v1/customers/1234" -H  "accept: */*"```
