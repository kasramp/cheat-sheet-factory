---
title: openssl
category: Linux
layout: 2017/sheet
updated: 2024-01-03
keywords:
    - "openssl"
    - "openssl cheatsheet"
prism_languages: [bash]
intro: |
  OpenSSL cheatsheet
---

Shortcuts
---------
{: .-one-column}

### Install OpenSSL

```bash
$ sudo apt install openssl
```

### Get a certificate expiry date

```bash
$ echo "CERTIFICATE_CONTENT" | openssl x509 -noout -enddate
```

### Get a certificate expiry date encoded

```bash
$ echo "CERTIFICATE_CONTENT" | base64 -d | openssl x509 -noout -enddate
```

### Retrieve complete certificate information

```bash
$ echo "CERTIFICATE_CONTENT" | openssl x509 -noout -text
```
