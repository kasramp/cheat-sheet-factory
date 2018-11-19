---
title: git
category: Version Controll
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

| `git stash` | Stashes the changes |
| `git stash pop` | Unstashes the changes |

### Squash

| `git rebase -i HEAD~4` | Squashes last four commits into one |
| `git push -f` | Force pushes the changes to upstream 

### Branching

| `git checkout -b [branch name]` | Branch out locally |
| `git push -u origin [branch name]` | Pushes local branch to upstream |


### Delete a branch

| `git branch -d [branch name]` | Deletes a branch locally |
| `git branch -d [branch name] && git push` | Deletes branch on upstream |

### Merging

| `git checkout master && git pull` | Pulls latest master branch changes |
| `git checkout [branch name] && git merge master` | Merges master to branch name |

### Amend commit message

| `git commit --amend` | Amends commits message |


### Unstage local changes

| `git reset` | Unstages local changes |

### Cherry picking

| `git cherry-pick [Commit hash]` | Cherry picks a commit |
| `git cherry-pick [Commit hash] && git push` | Cherry picks a commit and pushes to upstream |


### Clean working directly

| `git clean -xdf` | Removes all files not in remote |


### Tagging

| `git tag` | Gets tag list |
| `git tag -a [Tag name]` | Creates a new tag |
| `git tag -d [Tag name]` | Deletes a tag |
 
### Get rid of local commits

| `git reset --hard origin/[Branch name]` | Deletes all local commits |

### Revert

| `git revert [Commit hash] && git push` | Reverts commit hash and pushes changes to upstream |


### Uncommit local commits

| `git reset HEAD~` | Uncommits local commit |

### Reference

- Full cheat sheet, [here]()