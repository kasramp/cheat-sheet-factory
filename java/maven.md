---
title: maven
category: Java
layout: 2017/sheet
updated: 2019-04-17
keywords:
    - "maven"
    - "maven cheat sheet"
prism_languages: [java]
intro: |
  Maven cheat sheet
---

Shortcuts
---------
{: .-one-column}

### Useful commands

| `mvn dependency:tree` | Get dependency tree |
| `mvn archetype:generate` | Generate a maven project |
| `mvn archetype:generate -DgroupId=com.madadipouya.eris -DartifactId=eris-weather-service` | Generate a maven project with `artifactId` and `groupId` |
| `mvn clean dependency:copy-dependencies package` | Run a goal with a phase | 

### Notes

+ What are **transitive dependencies**? Transitive dependencies are dependencies of a project dependency.
+ What are the use **maven plugins**? To define custom **maven goals**.
+ Dependencies can be bound to a different scope. Scopes could be *compile* or *test*. For instance, Junit dependency only needed for running test not while the application running.
+ Maven has three main groups of actions which are: `Goals`, `Phases`, and `Lifecycles`.
+ Goal is task. For instance, compile, or packaging a jar file.
+ The stage that a goal is executed is a phase. For instance, `compiler:compile` that `compiler` phase calls `compile` goal.
+ Maven lifecycle is a collection of phases: `compile`, `test`, `package`, `install`, `deploy`.
+ Lifecycles contain phases. Phases map to goals.
+ Sample paths that maven look into: `src > test > java` for unit tests. Or `src > main > java` for source codes. Or `src > main > resources` for resource files. Or `src > main > webapp` for java web applications. The same can be applied to groovy without any further configurations. All these locations are scanned automatically without any configuration to maven. Though, the locations can be changed by manipulating the configurations.
+ Run the main class when jar file built without any plugins (Specifying the main entry class in the app): `java -cp [jar file.jar] com.madadipouya.eris.HelloWorld`.
+ `mvn package` vs `mvn install` phase? Package phase is done before install phase and only jar file is created in target folder. However, install phase copy the jar file after package phase in local repository directory which is typically located in `.m2` folder of the user's home.
+ Print dependency tree: `mvn dependency:tree`.
+ Test report can be found at `target/surefire-reports`.
+ Generate a basic maven project: `mvn archetype:generate`. The parameters such as `groupId` can be passed using `-D` command. `mvn archetype:generate -DgroupId=com.madadipouya.eris -DartifactId=eris-weather-service`.
+ What does `archetype:generate` means? It means `archetype` plugin and the goal `generate`.
+ Sample groupId: `com.madadipouya.eris`.
+ Sample artifactId: `eris-weather-service`.
+ List content of a jar file: `java -tf [jar file name]`.
+ Maven has three default built-in lifecycles which are: `default`, `clean`, and `site`. `default` lifecycle is responsible to handle the project deployment. `clean` is for cleaning the project. And `site` is for generating documentations.
+ Each maven lifecycle consists of multiple phases. For instance, `default` lifecycles have the following phases:
    + `validate`: validate the project is correct and all necessary information is available.
    + `compile`: compile the source code of the project.
    + `test`: test the compiled source code using a suitable unit testing framework. These tests should not require the code be packaged or deployed.
    + `package`: take the compiled code and package it in its distributable format, such as a JAR.
    + `verify`: run any checks on results of integration tests to ensure quality criteria are met.
    + `install`: install the package into the local repository, for use as a dependency in other projects locally.
    + `deploy`: done in the build environment, copies the final package to the remote repository for sharing with other developers and projects.
+ For complete list of phases of different maven lifecycles look at [here](https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html#Lifecycle_Reference).
+ A maven goal is a plugin which can add functionality to a maven phase. A goal might bound to zero to many phases. If a goal is not bound to any phase that means the goal should be execute separately.
+ The phases named with hyphenated-words (`pre-*, post-*, or process-*`) are not usually directly called from the command line. These phases sequence the build, producing intermediate results that are not useful outside the build. In the case of invoking `integration-test`, the environment may be left in a hanging state.
+ A goal can run with phase like: `mvn clean dependency:copy-dependencies package`.