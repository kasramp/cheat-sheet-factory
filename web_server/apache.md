---
title: Apache
category: Web Server
layout: 2017/sheet
updated: 2023-04-13
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
$ sudo apachectl status
$ sudo apachectl start
$ sudo apachectl stop # sudden stop, drops current connections
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

### Configuration location

Depends on the server and Linux, the configuration location varies. On Debian-based distro, the config file is either on:

```bash
$ /usr/local/apache2/conf/httpd.conf
$ /etc/apache2/apache2.conf
```

If none worked, an easier way to find out is:

```bash
$ apachectl -V
```

Which prints information about Apache and its configuration location.

Changes in the configuration can be tested by:

```bash
$ apachectl -t
```

### Log files

Apache error log configurations are defined in the `ErrorLog` directive. Usually when inspecting the `apache2.conf`, you see something like,

```
ErrorLog ${APACHE_LOG_DIR}/error.log
```

The `${APACHE_LOG_DIR}` is an Apache environment variable which is set in `envvars` file. Inspecting that should give exact address of log files.

Under Debian based distribution, the location is `/var/log/apache2`.

The `LogLevel` directive controls the verbosity of the log. Complete list is [here](https://httpd.apache.org/docs/2.4/mod/core.html#loglevel). The default is `warn`.

To customize log for each virtual host, one can open `/site-availables/*.conf` file and define log directives. For example,

```
ErrorLog ${APACHE_LOG_DIR}/test-error.log
LogLevel info
CustomLog ${APACHE_LOG_DIR}/test-access.log combined
```

### Apache directive

A directive is an instruction that tells Apache what to do. It is one per line. A list of all directive can be found [here](https://httpd.apache.org/docs/2.4/mod/directives.html).

One important directive is `DocumentRoot` which determines the location that Apache serves files from,

```
DocumentRoot "/usr/local/apache2/docs/dummy-host2.example.com"
```

Apache configuration can be overriden in the `.htaccess` file making main Apache config needless. What confiugration can be overriden inside of `.htaccess` is determined by the main Apache config. Changes on `.htaccess` file is immediate, and do not require any reload or restart.

`.htaccess` in general are not recommended due to security complications and slowness since for each request, the file is read and apply the configuration.

### Virtual hosting

Apache allows to server multiple domains from the same server. It is the concept used by the shared hosting platforms.

To list down all the configured virtual host:

```bash
$ apachetl -t -D DUMP_VHOSTS
```

### Apache modules

There are two types of modules:

- Static: compiled into the Apache (included when compiling the program)
- Shared: dynamically loaded and do not require compilation, provides flexibility but slower

Modules have directives. To ensure Apache functions if a module is not present, it is a good idea to wrap the needed functionality in the `IfModule` syntax:

```
<IfModule mod_xyz.c>
</IfModule>
```

To get list of all modules,

```bash
$ apachectl -t -D DUMP_MODULES
```

On Debian modules are enabled and disabled by `a2enmod` and `a2dismod` which underneath creates and remove symlinks `/etc/apache2/mods-enabled`. All modules are available under `/etc/apace2/mods-available`.
