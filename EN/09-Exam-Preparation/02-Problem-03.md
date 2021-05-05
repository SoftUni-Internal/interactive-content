# User AUTH, Catalog and Details Pages

[slide hideTitle]

# Navigation Bar and Home Page

## Navigation Bar
// Video: 04.1: Home page (Navigation bar). 

Implement a **NavBar** for the app: navigation links should change the current screen (view).


The navigation links should change the current page (view). 

**Guests** (un-authenticated visitors) can see the links to  the **Home Page**, **All Memes page**, as well as the links to the Login and Register pages. 

Authenticated users should be able to access the links to the **All Memes page**, the **Create Meme page**, the **My Profile page** and a link for the **Logout action**. 

The navbar should hold a user greeting: "**Welcome,** \{ **user’s email address** \}"

User navigation example:

[image assetsSrc="js-application-exap-prep-1.png" /]

**Guest** navigation example: 

[image assetsSrc="js-application-exap-prep-2.png" /]

## Home Screen 

The initial screen should display the navigation, register, login, the initial image and a footer.

**Note:** This page should be only displayed to guest users. 

Logged-in users should be redirected to the **All Memes page**.

[image assetsSrc="js-application-exap-prep-3.png" /]

[/slide]

[slide hideTitle]
# Login and Registration

## Login Page

// Video: 04.2: Login + Register pages 

The **included REST service** comes with the following **premade** user accounts, which you may use for development:

```
{ "email": "peter@gmail.com", "password": "123456" }
{ "email": "mary@gmail.com", "password": "123456" }
```
The "**Login**" page contains a form for existing user authentication. 

The **Login page** contains a form for existing user authentication. 

By providing an **email and a password** the app should log a user in to the system if there are no empty fields or incorrect data.

[image assetsSrc="js-application-exap-prep-4.png" /]

Use the following **request** to perform a registration:
```
Method: POST
URL: /users/login
```
The required **headers** are described in the documentation. The service expects a body with the following structure:

The service expects a body with the following structure:
```
{ 
  email,
  password
} 
```
If successful, the **REST service** will return the information of the user along with an **accessToken** property, which contains the **session token** for the user. 

This information needs to be stored using **sessionStorage** or **localStorage** in order to be able to perform authenticated requests.

If the login was successful, **redirect** the user to the **All Memes page**. 

If there is an error, display an error message using a system dialog (**window.alert**).

## Register User 

The **Register** page contains a form for registering a new user. 

By providing a **username**, an **email**, a **password** and **gender** (**Male or Female**) the app should register a new user in the system.  

It should only accept new users if all the fields are not blank and contain valid data.

[image assetsSrc="js-application-exap-prep-5.png" /]

Use the following **request** to perform a user registration:
```
Method: POST 
URL: /users/register 
```
The required **headers** are described in the documentation. 

The service expects a body with the following structure: 
```
{ 
  username,
  email,
  password,
  gender
} 
```
Upon registering successfully, the **REST service** will return the newly created object with an automatically generated `_id` property and an **accessToken** property, which contains the **session token** for the user. 

This information needs to be stored using **sessionStorage** or **localStorage** in order to be able to perform authenticated requests.

If the registration was successful, **redirect** the user to the **All Memes page**. 

If there is an error, or the **validations** does not pass, display the corresponding error message, using a system dialog (**window.alert**).

## Logout 

The logout action is available to logged-in users. Send the following request to log a user out:

```
Method: GET
URL: /users/logout
```

The required **headers** are described in the documentation. 

Upon a successful logout, the **REST service** will return an **empty response**. 

Clear any session information that is stored in browser storage.

If the logout was successful, **redirect** the user to the **Home page**.

[/slide]


[slide hideTitle]
# All Memes

// Video: 05.1: All-listings (Catalog) page 

This page displays a list of all memes in the system. 
 
Clicking on the **details** button in the cards leads to the details page of the selected meme. 
 
This page should be visible to guests and logged-in users.

[image assetsSrc="js-application-exap-prep-7.png" /]

If there are no memes, the following view should be displayed:

[image assetsSrc="js-application-exap-prep-8.png" /]

Send the following **request** to read the list of ads:

```
Method: GET
URL: /data/memes?sortBy=_createdOn%20desc
```

The required **headers** are described in the documentation. The service will return an array of listings.


[/slide]

[slide hideTitle]
# Meme Details

// Video: 05.2: Tests + Details page (including delete functionality); 

All users should be able to **view the details page** of the memes. 

Clicking on the **Details** link should **display** the **Details** page on the specific meme. 

If the currently **logged-in user is the creator** of the meme, the **Edit** and **Delete** buttons should be displayed.

[image assetsSrc="js-application-exap-prep-9.png" /]

Send the following request to view a meme:
```
Method: GET
URL: /data/memes/:id
```
The `:id` is the id of the desired meme. 

The required **headers** are described in the documentation. 

The service will return a single object.

[/slide]


