---
title: git
category: Version Control
layout: 2017/sheet
tags: [Featured]
updated: 2018-11-19
keywords:
    - "git"
    - "git cheat sheet"
intro: |
    git cheat sheet
---

Shortcuts
---------
{: .-two-column}

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

### Change the URI for a remote repository

| `git remote set-url origin git://new.uri` | Set a new URI |

### Reference

- Full cheat sheet, [here](https://github.com/kasramp/cheat-sheet-factory/blob/gh-pages/_docs/pdfs/Git%20Cheat%20sheet.pdf)