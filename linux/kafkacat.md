---
title: kafkacat
category: Linux
layout: 2017/sheet
updated: 2019-04-03
keywords:
    - "kafkacat"
intro: |
  Kafkacat consumes messages of a Kafka topic and prints the content
---

Shortcuts
---------
{: .-two-column}

### How to use

+ `kafkacat -C -t com.kafka.topic -p 0 -b broker`
+ `kafkacat -b "broker1,broker2" -C -X security.protocol=SASL_SSL -X sasl.mechanisms=SCRAM-SHA-256 -X sasl.username=username -X sasl.password=password -p 1 -t com.kafka.topic`
