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

### Retrieve information of Certificate Signing Request (CSR)

```bash
$ openssl req -in csr_req.csr -text -noout
```

## Generate a TLS certificate

In order to generate the certificate, first need to have the TLS key or generate one:

```bash
$ openssl genpkey -algorithm RSA -out tls.key
```

Or

```bash
$ openssl genrsa -out tls.key 2048
```

It's also possible to extract private and public keys:

```bash
$ openssl rsa -pubout -in tls.key -out tls.pub
```

The `tls.key` is the private key and should not be shared with anyone. It can be used when generating a CSR. While the `tls.pub` can be shared, for example in cases when setting up mutual TLS (mTLS).

Then create a CSR as follows:

```bash
$ openssl req -new -key tls.key -out csr_req.csr
```

Lastly, the CSR should be signed by Certificate Authority (CA):

```bash
$ openssl ca -cert ca.crt -keyfile ca.key -in csr_req.csr -out tls.crt
```

If the CA is not available, can generate one (to create a self-signed cert which is not trusted by browsers).

## Generating a self-signed CA

Creating the CA private key:

```bash
$ openssl genpkey -algorithm RSA -out ca.key
```

Then generating the CA certificate:

```bash
$ openssl req -new -x509 -key ca.key -out ca.crt
```

To sign a CSR with the self-signed CA:

```bash
$ openssl x509 -req -in csr_req.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out tls.crt
```

To check the details of the produced TLS cert (`tls.crt`):

```bash
$ openssl x509 -in tls.crt -text -noout
```

The `tls.crt` file can be used to install on a server. However, it will not be recognized by any browsers since it's a self-signed certificate.
