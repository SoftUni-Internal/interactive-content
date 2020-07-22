# Introduction to Git

[slide]
# What is Git?

**Distributed version control** is a form of **version control** in which the **project’s code**, including its **full history** (change log), is **mirrored** on every **worker’s computer**.

It offers **automatic management** such as **branching** and **merging**.

It improves the ability to **work offline** and doesn’t rely on a **single location** for **backups**.

The most popular **source-control system** nowadays is **Git**.

Two of the reasons that it is the most popular are that it is **free** and **open-source**.

As we already know, the **repositories** where we store code and files can be **local** and **remote**.

This applies too when working with Git.

**Git** works mainly with a **variety of text commands**.

**Git bash** is the **command line interface** where we **enter our commands**.

It looks like a **console application**.

There are also **GUI clients** that make work with Git much easier.

It runs on the most famous operating systems – **Linux**, **MacOS**, and **Windows**.

There is the [link](https://git-scm.com/) where you can download git.

[/slide]

[slide]
# Using Git

There are **several ways** to use **git**.

## Console-based Client

The first one is by using a **console-based client**.

The most famous one is **GitBash**.

## Graphical User Interface Client

There is also a **graphical user interface client**, called **TortoiseGit**.

It is often used by **newbie developers** because it makes **using git much easier**.

More **experienced developers** prefer **typing command lines** on their own as they are much more flexible.

**GitHub** is the world’s leading software development platform.

It has its own **desktop client**, a **GUI client**, that allows you to make **git operations**, **similar** to **TortoiseGit**.

## Plug-ins

There are **plug-ins** for some of the **IDEs**.

They allow you to make **git operations** **without leaving the IDE** and that can be very comfortable.

There are **many options** you can choose from for **working with git**.

Make sure to choose the **most comfortable** one for you.

[/slide]

[slide]
# Installing Git

For those of you, who use Windows, you can download Git from this [link](https://git-scm.com/).

The installation is easy, just **keep pressing** the "**Next**" **button**.

When some **options** to **select** appear, make sure that you **select** the "**Use Git Bash only**" and "**Checkout Windows-style, commit Unix-style endings**" options.

They should be **selected by default**, but in case they aren’t – **select them**.

If you are using **Linux**, install Git with the following **command line**: "**sudo apt-get install git**".

For MacOS users, you can download the Git binary installer from this [link](https://git-scm.com/download/mac).

[/slide]

[slide]
# Basic Commands

All commands start with the word "**git**".

## Clone

To **clone** an **existing Git repository**, use the "**git clone**" command **followed** by the **URL of the repository**.

```
git clone [remote url]
```

## Pull

To **download** (**fetch and merge**) **locally** the **latest version** of the **remote repository**, use the "**git pull**" command.

```
git pull
```

## Commit

**Before** commit to the **local repository**, you have to **select** which **files** to be **committed**.

This is done with the "**git add**" command, **followed** by the **name of the file**.

```
git add [filename]
```

In case you want to add **every file**, you can type in a **dot** instead of a file name.

Very often the **dot** in the **programming world** means "**everything**".

```
git add .
```

When you are **ready with selecting** the files you want to commit, you can **proceed to commit**.

This is done with the "**git commit**" command.

```
git commit
```

If you want to add a **commit message**, you have to add "**-m**" to the command, **followed** by the **message** itself.

```
git commit -m [message]
```

## Check Status

To check all the **local changes** you’ve made **since** your **last pull**, you can use the "**git status**" command.

```
git status
```

## Initialize Repository

To **create** a **new local repository**, use the "**git init**" command.

```
git init
```

It comes from "**initialize**".

The local repository will be initialized in the **current directory**.

## Create Remote Repository

To **create** a **remote repository**, use the "**git remote add**" command.

It takes **two arguments**:
 - The **first** one is for the **remote repository name**, which has to be **unique**;
 - The **second** one is for the **remote URL**.

```
git remote add [remote name] [remote url]
```

## Push

When you decide to **send the changes** you’ve made on the **local repository** to the **remote one**, use the "**git push**" command.

You can specify the **remote name** to which the changes will be sent and the **local name** from which the changes will be sent.

```
git push [remote name] [local name]
```

[/slide]