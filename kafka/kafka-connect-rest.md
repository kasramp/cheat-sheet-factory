---
title: kafka connect rest
category: Kafka
layout: 2017/sheet
updated: 2019-01-29
keywords:
    - "kafka connect"
    - "kafka connect rest"
    - "kafka connect rest cheat sheet"
intro: |
  Cheat sheet for Kafka connect rest APIs
---

Shortcuts
---------
{: .-one-column}

### Rest APIs

| `curl /connectors` | Get list of connectors |
| `cur -X POST -H "Content-Type: application/json" /connectors -d 'json'` | Create a connector |
| `curl /connectors/[name]` | Get information about a single connector |
| `curl /connectors/[name]/config` | Get config of a single connector |
| `curl -X PUT -H "Content-Type: application/json" /connectors/[name]/config -d 'json` | Create or update a connector config |
| `curl /connectors/[name]/status` | Get the status of a connector |
| `curl -X POST /connectors/[name]/restart` | Restart a connector |
| `curl -X PUT /connectors/[name]/pause` | Pause a connector |
| `curl -X PUT /connectors/[name]/resume` | Resume a connector |
| `curl -X DELETE /connectors/[name]` | Delete a connector |
| `curl /connectors/[name]/tasks` | Get list of tasks for a connector |
| `curl /connectors/[name]/tasks/[number]/status` | Get the status of a single task |
| `curl -X POST /connectors/[name]/tasks/[number]/restart` | Restart a single task |
| `curl /connector-plugins/` | Get list of plugins |
{: .-shortcuts}
