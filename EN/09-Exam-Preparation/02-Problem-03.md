# User AUTH, Catalog and Details Pages

[slide hideTitle]

# Navigation Bar and Home Page

## Navigation Bar
// Video: 04.1: Home page (Navigation bar). 

Implement a **NavBar** for the app: navigation links should correctly change the current screen (view).

The navigation links should change the current page (view). 

**Guests** (un-authenticated visitors) can see the links to  the "**Home Page**", "**All Memes**" page, as well as the links to the "**Login**" and "**Register**" pages.

Authenticated users should be able to access the links to the "**All Memes**" page, the "**Create Meme**" page, the "**My Profile**" page and a link for the **Logout** action. 
 
The navbar should be able to greet the user: "**Welcome**, \{ **user's email address** \}"

**User** navigation example:
[image assetsSrc="js-application-exap-prep-1.png" /]

**User** navigation example: 

[image assetsSrc="js-application-exap-prep-2.png" /]

## Home Screen 
The initial screen should display the navigation, register, login and the initial image + footer.

**Note:** This page should be only visible for guest users. 

Logged-in users should be redirected to the "**All Memes**" page.


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

By providing an **email and password** the app should login a user in the system if there are no empty **fields** nor incorrect data.

[image assetsSrc="js-application-exap-prep-4.png" /]

Send the following **request** to perform registration:
```
Method: POST
URL: /users/login
```
The required **headers** are described in the documentation. 

The service expects a body with the following structure:
```
{ 
  email,
  password
} 
```
Upon success, the **REST service** will return the information of the existing user along with an "**accessToken**" property, which contains the **session token** for the user. 

This information needs to be stored using a "**sessionStorage**" or a "**localStorage**" in order to be able to perform authenticated requests.


If the login was successful, **redirect** the user to the "**All Memes**" page.

If there is an error, display an appropriate error message using a system dialog ("**window.alert**").


## Register User 

The **Register** page contains a form for registrating a new user. 

By providing a **username**, an **email**, a **password** and **gender** (**Male or Female**) the app should register a new user in the system.  the app should register a new user in the system if there are no empty **fields** nor incorrect data.

[image assetsSrc="js-application-exap-prep-5.png" /]

Send the following **request** to perform a registration: 
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
Upon a registering successfully, the **REST service** will return the newly created object with an automatically generated `_id` property and an "**accessToken**" property, which contains the **session token** for the user. 

This information needs to be stored using a "**sessionStorage**" or a "**localStorage**" in order to be able to perform authenticated requests.

If the registration was successful, **redirect** the user to the "**All Memes**" page. 

If there is an error, or the **validations** do not pass, display an appropriate error message, using a system dialog (**window.alert**).


## Logout 




[/slide]


[slide hideTitle]
# All Listings Page

// Video: 05.1: All-listings (Catalog) page 

 
[/slide]

[slide hideTitle]
# Details

// Video: 05.2: Tests + Details page (including delete functionality); 



[/slide]


