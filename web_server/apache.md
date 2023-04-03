---
title: Apache
category: Web server
layout: 2017/sheet
updated: 2023-04-02
keywords:
    - "apache"
    - "apache web server"
    - "apache cheat sheets"
prism_languages: [bash]
intro: |
  List of useful Apache commands
---

Shortcuts
---------
{: .-one-column}

### Run Apache in Docker (for testing)

```bash
$ docker run -dit --name my-apache-app -p 8090:80 -v "$PWD":/usr/local/apache2/htdocs/ httpd:2.4
```

### Apachectl

```bash
$ sudo pachectl status
$ sudo apachectl start
$ sudo apachhectl stop # sudden stop, drops current connections
$ sudo apachectl graceful-stop # serve whatever that's currently serving and then drops
$ sudo apachectl restart # parent doesn't get killed, only children gets killed
$ sudo apachectl graceful # similar to restart but graceful
$ sudo apachectl reload # reload apache
```

The above commands can be replaced with systemd counterparts:

```bash
$ sudo systemctl status apache2
$ sudo systemctl stop apache2
$ sudo systemctl restart apache2
```

Additionally, one can use `httpd -k` command,

```bash
$ sudo httpd -k restart
$ sudo httpd -k stop
$ sudo httpd -k graceful
```
