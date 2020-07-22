# Software Configuration Management

[slide]
# Definition

**Management** is needed **during work** on **projects**.

There are the so-called **version control systems** that make all the work **easier** for **software developers** and **project managers**.

Version control systems include **work techniques**, **practices**, and **tools**, etc. for **working in a team** on **shared source code** and **files**.

[image assetsSrc="git-and-github-image-1.png" /]

This makes **managing work** and **tasks easier**.

There are mechanisms that **strive** to make **code management**, **control**, and **change tracking** more **manageable**.

**Tracking changes** means having a **log** that **keeps information** on **what changes** have been made **by whom**.

You can also **revert changes** in case something’s gone wrong.

The version control system allows you to **manage the changes**.

You can **control** how changes are **applied** or how different versions are **merged** into one.

It is always helpful to have a **clearly defined process** of change management.

Another benefit of using a version control system is that it keeps **track of the changes** happening over time.

That allows **project managers** to be **up to date** with what’s been **finished** or is **in process** that is vital for their work.

Due to **differences** in versions, **conflicts** can appear.

This happens when **changes** are made on the **same part of the code** from **different versions**.

In this case, versions **cannot be merged** into one automatically and for this conflict to be **resolved**, a **manual check** is demanded.

[/slide]

[slide]
# Change Log

A **changelog** (**history**) allows you to access **information about each version**.

The **higher** the **version number**, the **more recent** the **version**.

Every version is **based on the previous** one.

On the screenshot below, you can see a **changelog** from the **SVN control system**.

[image assetsSrc="git-and-github-chagelog-screenshot.png" /]

In the column "**Author**" is shown **who** has made the change.

The column "**Date**" shows **when** the change has been made.

The author of the change can **leave a message** (column "**Message**") that tells **why** (and **what**) has been changed.

Messages are **optional** but they **should always be filled adequately**.

In the column "**Actions**" can be seen **what** changes have been applied – file editing, adding, or removal, with its respecting icons.

**Old versions** can be **accessed** and **restored**.

This is usually done when something **breaks** and it is **hard to fix** it.

[/slide]

[slide]
# Repositories

There is a **site** where our code is **stored**.

It is called a **repository**, or for short – "**repo**".

It can be **locally** on **your storage**, **remotely** on a **different computer**, or on the **Internet** in **cloud storage**.

**Remote repositories** are usually stored on a **server**.

**Local repositories** are stored on the **computer you are working on**.

## Cloning a Repository

[image assetsSrc="git-and-github-image-2.png" /]

Most often you **download a copy** of the **project** from the **remote repository** to your **local storage**.

This process is called "**cloning**".

## Committing

[image assetsSrc="git-and-github-image-3.png" /]

After **cloning** the project, you **start working on it**.

You make **changes to the local repository**, the one that’s stored only on your computer.

Any time you **add something new** to the project, for example, a new functionality, you need to **save those changes locally**.

That process is called "**commit**".

So far the **changes** are **only applied** to your **local repository**.

## Syncing

[image assetsSrc="git-and-github-image-4.png" /]

There will be **several local storages**, for **each person working** on the project.

Then, all local storages are merged into one, the remote repository.

This is why you **first save the changes** to **your local repository**.

Anytime you can **download** all **changes** made by **other people working** on the project.

This is called "**pull**".

Doing so **downloads** the **most recent version** of the project on the **remote storage** to **your local repository**.

If **someone else** **commits** their changes while you’ve been working on your **local repository**, a **conflict** can occur.

This happens because there has been **committed** a **newer version** to the **remote repository**.

The **conflict** occurs only to you, **locally**, and **prevents from such conflicts** on the **remote repository**.

That’s the reason why you **cannot commit** until you **resolve** the **conflict**.

That process is called "**merge**".

You have to make it possible to **combine** the **newest version** and the one you are trying to committing.

After doing so, you can **safely commit** your changes to the **remote repository**.

That process is called "**push**".

After **pushing** the changes you’ve made, the other people working on the project can **pull** the **newest version** that **includes your last changes**.

[/slide]

[slide]
# Branches

## Definition

**Branches diverge** from the **main line** of development and **continue to do work** without messing with the main line.

In other words, this allows many **parallel versions** to **co-exist** until they are **merged** into the **main branch**.

## Master Branch

The **main branch** is called "**master**".

It can be **branched out** to **other branches** which allows you to develop something different.

## Custom Branches

Most often the **master branch** contains a **working project** that **users can access and use**.

When the **need** for a **new feature** comes up, you should **create a new branch** and **work there**.

The new branch is a **parallel version** of the **master branch** in which you add your work.

This is done to **protect** your **already working project** from **bugs** that **originate** from the **new feature**.

[/slide]

[slide]
# Branch Merging

Once the new feature is **polished out of bugs** and **tested enough**, you can **merge** the **new branch** to the **master branch**.

That’s when the feature is **ready to appear** on the **project** accessed **publicly** by its users.

You may find it familiar, this is called "**merging**".

This time you **merge** different **branches** to the **master** one.

In doing so, **conflicts** may appear.

We already mentioned what conflict means.

Upon **resolving**, the **code is merged** to the **master branch**.

**Branching** is done so that you can **develop new features** in an **isolated environment** until it is **polished** and **ready** for **public** use.

[/slide]