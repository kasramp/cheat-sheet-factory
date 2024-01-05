---
title: GIT
category: Version Control
layout: 2017/sheet
tags: [Featured]
updated: 2024-01-05
keywords:
  - "git"
  - "git cheat sheet"
intro: |
  GIT cheat sheet
---

## Shortcuts

{: .-two-column}

### Basics

| `git init .` | Create a local repo |
| `git commit -a` | Add commit staged files |
| `git checkout [commitHash] .` | Checkout to a particular commit |
| `git rm [fileName]` | Remove a file |
| `git revert [commitHash]` | Revert a commit |

### Configuration

```bash
$ git config --global user.name "USERNAME"
$ git config --global user.email "EMAIL_ADDRESS"
```

### Git logs

| `git log` | Get commit logs |
| `git log --oneline` | One liner logs |
| `git log -p` | Logs with details of affected files |
| `git log -- fileName` | Getting log of a particular file |
| `git log --author email` | Getting commit list of a particular author |
| `git log --grep="SearchKeywords"` | Search for a particular message |
| `git log --graph` | Tree view |

### Stash

| `git stash` | Stash the changes |
| `git stash pop` | Unstash the changes |

### Squash

| `git rebase -i HEAD~4` | Squash last four commits into one |
| `git push -f` | Force push the changes to upstream |

### Branching

| `git checkout -b [branch name]` | Branch out locally |
| `git push -u origin [branch name]` | Push local branch to upstream |

### Delete a branch

| `git branch -d [branch name]` | Delete a branch locally |
| `git branch -d [branch name] && git push` | Delete branch on upstream |

### Merging

| `git checkout master && git pull` | Pull latest master branch changes |
| `git checkout [branch name] && git merge master` | Merge master to branch name |

### Amend commit message

| `git commit --amend` | Amend commits message |

### Amend author

| `git commit --amend --author="NAME <AUTHOR_EMAIL>"` | Amend authoor name and email |

### Unstage local changes

| `git reset` | Unstage local changes |

### Cherry picking

| `git cherry-pick [Commit hash]` | Cherry pick a commit |
| `git cherry-pick [Commit hash] && git push` | Cherry pick a commit and pushes to upstream |

### Clean working directly

| `git clean -xdf` | Remove all files not in remote |

### Tagging

| `git tag` | Get tag list |
| `git tag -a [Tag name]` | Create a new tag |
| `git tag -d [Tag name]` | Delete a tag |

### Get rid of local commits

| `git reset --hard origin/[Branch name]` | Delete all local commits |

### Revert

| `git revert [Commit hash] && git push` | Revert commit hash and pushes changes to upstream |

### Uncommit local commits

| `git reset HEAD~` | Uncommit local commit |
| `git reset @~` | Uncommit last local commit |

### Change the URI for a remote repository

| `git remote set-url origin git://new.uri` | Set a new URI |

### Update a forked repository

- `git remote add upstream [repo]`
- `git fetch upstream`
- `git checkout master`
- `git rebase upstream/master`

If needed, have to force push: `git push -f origin master`

### Pull changes from a PR to the fork

Assuming, we forked a repository and now the upstream has an
open Pull Request which we want to merge to our fork repository
and not wait for the upstream.

In this case go the repository directory and run,

```bash
$ git pull https://github.com/user-created-the-pr/repo.git branch
```

Example,

```bash
$ git pull https://github.com/nikitamos/aqemu.git master
```

The branch is often master. However, if the PR owner has created another
branch, replace it with the branch name.

More info, [here](https://stackoverflow.com/questions/6022302/how-to-apply-unmerged-upstream-pull-requests-from-other-forks-into-my-fork)

### Checkout (pull) from a PR to verify

Let's say someone has created a PR to our repository, and we would like to
review the changes locally. For that, we need to pull the changes from
a PR (Pull Request).

```bash
$ git fetch origin pull/[PR_ID]/head:[ARBITARY_BRANCH_NAME]
$ git checkout [ARBITARY_BRANCH_NAME]
```

### Import a project from a git server to another

- `git clone [source URL]`
- `git remote add [a name] [destination url]`
- `git push --mirror [a name]`

### Archive a branch

#### Creating a tag

- `git tag archive/[branch name] [branch name]`
- `git branch -d [branch name]`

#### Restore the tag as branch

- `git checkout -b [branch name] archive/[branch name]`

### Submodule

| `git submodule add [submodule repo] [path]` | Add a submodule |
| `git submodule update` | Update a submodule |
| `git submodule update --init` | Add and update a submodule |
| `git submodule update --init --recursive` | Add and update recusively, submodule inside submodule |
| `git submodule update --remote --merge` | Merge submodule |

### Add existing project to Git

- `git remote add origin [repo]`
- `git remote -v`
- `git add . && git commit -m "message"`
- `git push origin master`

### Pull on forced push

- `git pull --rebase`

### Change commit order

In a branch run: `git rebase -i origin/master` and then in the editor change the commit orders

### Patching

To create a patch to submit via email from uncommitted local changes:

```bash
$ git diff > changes.patch
```

To apply the patch:

```bash
$ git apply < changes.patch
```

To create a patch from committed changes of a feature against master:

```bash
$ git format-patch origin/master..feature-branch-name
```

That generates patch files. One file per each commit.

To apply the patches:

```bash
$ git apply < changes.patch
```

### Reference

- Full cheat sheet, [here](https://github.com/kasramp/cheat-sheet-factory/blob/gh-pages/_docs/pdfs/Git%20Cheat%20sheet.pdf), and [here](https://github.com/kasramp/cheat-sheet-factory/blob/gh-pages/_docs/pdfs/Git%20Cheat%20Sheet%20Linux%20Academy.pdf).
- Submodule, [here](https://gist.github.com/kasramp/9908bfecc173eb6f425062f8acd24dcf)
