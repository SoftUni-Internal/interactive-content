# Homework

[slide hideTitle]

# Team Manager

**Here is a link to the** [resources](https://videos.softuni.org/resources/javascript/javascript-applications/07-JS-Applications-Routing.zip) **for this task.**

Create a JS application for managing teams.

Use **lit-html** for rendering, `page.js` for routing and a remote database as a backend provider.

Structure your work so that it is easy to manage.

The example is styled using [Bootstrap](https://getbootstrap.com/).

[/slide]

[slide hideTitle]

# App Structure

- **Home Page**: show the relevant info, depending on the status of the user.

- **Catalog**: a list of all registered teams

- **About**: a dummy page that would hold information about the app

- **Register User**

- **Create Team**

- **Edit Team**

- **View Team Details**: a detailed page that shows all of the members of the team and management controls

Create a header that is shared across all pages and place links to the relevant sections in it.

[/slide]

[slide hideTitle]

# CRUD Operations

The app must support user registration, login, and logout.

Store the user credential in the **session storage**.

Once logged in, the user is free to browse all of the registered teams and **join** or **create** a new team.

At any point, the user is able to **leave** the team that he is a member of.

The user can only join **one** team at a time.

When a user **creates** a team he **automatically** joins it.

He **cannot** create a team **again** unless he leaves the newly created team.

[/slide]

[slide hideTitle]
# Entity Structure

A **team** has a **name** and a **comment** that is displayed while browsing.

A **user** has a **username**.

You may create databases and entries as you see fit.

A sample collection structure is as follows:

```
teams {
  name,
  comment
}
```

Add a column named **teamId** to the default **users** collection, that will show which team they have joined.

When determining whether a person is the owner of a team, look at the property `_acl.creator` of the team record.

[/slide]

[slide hideTitle]

# Screenshots

Use this information as a guideline.

You may style and structure your solution differently, as long as the required functionality is present.

**The home page when the user is not logged in:**

[image assetsSrc="JS-Applications-Routing-5.png" /]

**The user registration form:**

[image assetsSrc="JS-Applications-Routing-6.png" /]

**The user login form:**

[image assetsSrc="JS-Applications-Routing-7.png" /]

**Home page view for a registered user:**

Note that the header navigation has changed to reflect that.

[image assetsSrc="JS-Applications-Routing-8.png" /]

**Team browser**:

[image assetsSrc="JS-Applications-Routing-9.png" /]

**Create team and edit team forms are identical:**

[image assetsSrc="JS-Applications-Routing-10.png" /]

**Team details with the option to join the team and a list of all current members:**

[image assetsSrc="JS-Applications-Routing-11.png" /]

**Team management:**

- If the user is a member, they can leave the team

- If the user is the creator, they can edit it

- If the team does not have members, the creator can delete it
[/slide]
