# Softuni Forum Workshop: Part 2

[slide]

# Task Requirements
[Download resources here!](https://mega.nz/file/Sc532CZD#_xp-APUjJZCaLc--5pm8cuFspbfakoPp86-NLzGwqVw)

So far, we have created one dynamic page which lists all the themes sorted by two different criteria. 

The next step is to implement few more pages and route between them. 

You will be provided with **HTML** and **CSS** skeleton for all other additional pages that you must create. 

There is one catch, half of these pages require **authentication**. 

You must create some properties or services that **fake this authentication**. 

Because we do not know yet how to manipulate forms properly or the real case with the authentication and authorization, we will fix that later when we have the knowledge to do so.

[/slide]

[slide]

# Logged in navigation bar

**Logged in**" "**user**" should be able to see the following navigations:

[image assetsSrc="Angular-Modules-And-Routing-Workshop.png" /]

The mini nav-bar includes:

**User's profile** - this tag should refer to the profile page `localhost:4200/profile`.

**Logout** - a tag that refers to the logout URL `localhost:4200/logout`.

The nav-bar below the logo of the SoftUni forum includes:

**Home** - a tag that leads tp the **Home** page `localhost:4200/home`.

**Themes** - a tag that leads to all **Theams** page `localhost:4200/themes`.

**New Theme** - a tag for creating a **Theme** `localhost:4200/add-theme`.

[/slide]

[slide]

# Not logged in navigation bar

"**Not logged in**" users should see the following navigations:

[image assetsSrc="Angular-Modules-And-Routing-Workshop(1).png" /]

The mini nav-bar includes:

**Login** - a tag that leads to the **Home** page `localhost:4200/login`.

**Register** - a tag that leads to the **Register** page `localhost:4200/register`.

[/slide]

[slide]

# Home page - Not Logged in

This is the home page URL `localhost:4200/home`. This is a welcome user page. 

We can reuse the **Welcome** component here.

All "**users**" can access this page when they visit the forum. 

Here is how it looks like before user has logged in:

[image assetsSrc="Angular-Modules-And-Routing-Workshop(2).png" /]

[/slide]

[slide]

# Home page - Logged in

Logged in users will see the following view:

[image assetsSrc="Angular-Modules-And-Routing-Workshop(3).png" /]

[/slide]

[slide]

# Register - Not Logged in

This is the URL of the register page `localhost:4200/register`. 

At this point change the fake **isLoggedIn** property to **true**. 

For now, we do not have a database with user registration, so make sure each registered user is stored in **userService** or some other appropriate place. 

This way each of them can be logged in successfully.

[image assetsSrc="Angular-Modules-And-Routing-Workshop(4).png" /]

[/slide]

[slide]

# Login - Not Logged in

This is the URL of the login page `localhost:4200/login`. 

Change the fake **isLoggedIn** property to **true**. 

For now, we do not have a database with user registration, so make sure each registered user is stored in **userService** or some other appropriate place. 

[image assetsSrc="Angular-Modules-And-Routing-Workshop(5).png" /]

[/slide]

[slide]

# Themes page - Not Logged in

This is the themes page URL `localhost:4200/themes`. This is the page we already have. 

All "**users**" can access this page when they visit the main forum page. 

By clicking the title of a theme, you will be redirect to the theme content view. 

There are several differences between the logged and anonymous user. 

The anonymous user should see the following:

[image assetsSrc="Angular-Modules-And-Routing-Workshop(6).png" /]

[/slide]

[slide]

# Themes page - Logged in

This is the themes page URL `localhost:4200/themes` for logged in users.

Note: Because you are still not really logged in, you can **hardcode** this userId `5fa64b162183ce1728ff371d` in your service to write your logic for subscribed users - **Red** and **Green** buttons.

[image assetsSrc="Angular-Modules-And-Routing-Workshop(7).png" /]

[/slide]

[slide]

# Theme comments - Not Logged in

This is the theme comments URL `localhost:4200/themes/:themeId`, where the user can see all the posts for the selected theme.

[image assetsSrc="Angular-Modules-And-Routing-Workshop(8).png" /]

[/slide]

[slide]

# Theme comments - Logged in

**Logged in** user can write new comment or like other user's posts.

[image assetsSrc="Angular-Modules-And-Routing-Workshop(9).png" /]

[/slide]

[slide]

# Create New Theme - Logged in only

This is the create new theme page URL `localhost:4200/themes` where each logged in user can create his or her own theme.

When "**Post**" button is clicked, you can try to make "**POST**" request to `localhost:4200/themes` with the given theme information. 

After successful creation, redirect the current "**user**" to the theme comments page of his or her new created theme.

When "**Cancel**" button is clicked, redirect the user to the **Home** page.

[image assetsSrc="Angular-Modules-And-Routing-Workshop(10).png" /]

[/slide]

[slide]

# Profile - Logged in

This is the profile page URL `localhost:4200/profile`. 

This page will show the information about the currently logged in user. 

For now, the data in this page will be static, except if you create more than the fake **isLoggedIn** property. 

The "**Edit**" button will replace the information fields with input fields, but this will be made in the next workshop, when you learn more about handling forms.

[image assetsSrc="Angular-Modules-And-Routing-Workshop(11).png" /]

[/slide]

[slide]

# Invalid routes

This is the page URL for all invalid routes `localhost:4200/??????`. 

Use it if an invalid path or wrong one is accessed.

[image assetsSrc="Angular-Modules-And-Routing-Workshop(12).png" /]

[/slide]

[slide]

# Protected routes

Make sure all logged in users pages are protected. 

That means if your fake "**isLoggedIn**" property is **false** the logged in pages cannot be accessed. 

Create authentication guards.

[/slide]

