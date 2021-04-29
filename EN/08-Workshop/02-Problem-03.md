# User AUTH, Catalog and Details Pages

[slide hideTitle]

# Navigation Bar and Home Page

## Navigation Bar
// Video: 04.1: Home page (Navigation bar). 

The navigation links should change the current page (view).

**Guests** (un-authenticated visitors) can see the links to the "**All Listings**" page, as well as the links to the "**Login**" and "**Register**" pages.

Authenticated users should be able to access the links to the "**All Listings**" page, the "**Create**" page, and a link for the "**Logout**" action. 

**Guest** navigation example:

[image assetsSrc="js-application-cartube-workshop-8.gif" /]

**User** navigation example: 

[image assetsSrc="js-application-cartube-workshop-9.gif" /]

## Home Page
All users should be welcomed by the "**Home page**", where they could redirect to the "**Listings**" view. 

[image assetsSrc="js-application-cartube-workshop-12.gif" /]

[/slide]

[slide hideTitle]
# Login and Registration

## Login Page

// Video: 04.2: Login + Register pages 

The **included REST** service comes with the following **premade** user accounts, which you may use for development: 

```
{ "username": "Peter", "password": "123456" } 
{ "username": "John", "password": "123456" } 
```
The Login page contains a form for authenticating users. 

By providing a **username** and **password**, the app should log in a user in the system if there are no empty **fields** nor incorrect data. 

[image assetsSrc="js-application-cartube-workshop-10.jpg" /]

Send the following **request** to perform a login: 
```
Method: POST 
URL: /users/login 
```
The required **headers** are described in the documentation. 

The service expects a body with the following structure: 
```
{ 
  username, 
  password 
} 
```
Upon success, the **REST service** will return the information of the existing user along with an **accessToken** property, which contains the **session token** for the user. 

This information needs to be stored using a **sessionStorage** or a **localStorage** to be able to perform authenticated requests. 

If the login was successful, **redirect** the user to the "**All Listings**" page. 

If there is an error, display an appropriate error message using a system dialog ("**window.alert**"). 

## Register User 

The "**Register page**" contains a form for the registration of a new user. 

By providing a **username** and **password**, the app should register a new user in the system if there are no empty **fields** nor incorrect data. 

[image assetsSrc="js-application-cartube-workshop-11.gif" /]

Send the following request to perform a registration: 
```
Method: POST 
URL: /users/register 
```
The required **headers** are described in the documentation. 

The service expects a body with the following structure: 
```
{ 
  username, 
  password 
} 
```
Upon registering successfully, the **REST service** will return the newly created object with an automatically generated `_id` property and an **accessToken** property, which contains the **session token** for the user. 

This information needs to be stored using a **sessionStorage** or a **localStorage** to be able to perform authenticated requests. 

If the registration was successful, **redirect** the user to the All Listings page. 

If there is an error, or the **validations** do not pass, display an appropriate error message, using a system dialog ("**window.alert**"). 
[/slide]


[slide hideTitle]
# All Listings Page

// Video: 05.1: All-listings (Catalog) page 

This page displays a list of all listings in the system. 

Clicking on the **details** button in the cards leads to the details page of the selected listing. 

[image assetsSrc="js-application-cartube-workshop-13.gif" /]

If there are no listings, the following view should be displayed: 

[image assetsSrc="js-application-cartube-workshop-14.gif" /]

Send the following **request** to read the list of ads: 

```
Method: GET 
URL: /data/cars?sortBy=_createdOn%20desc 
```

The required **headers** are described in the documentation. 

The service will return an array of listings. 
[/slide]

[slide hideTitle]
# Details

// Video: 05.2: Tests + Details page (including delete functionality); 

All users should be able to **view details** about listings. 

Clicking on the **Details** link in the **car ad** should **display** the "**Details**" page. 

If the currently logged-in user is the creator of the listing, the "**Edit**" and "**Delete**" buttons should be displayed. 

[image assetsSrc="js-application-cartube-workshop-16.gif" /]

Send the following request to read a single listing: 
```
Method: GET 
URL: /data/cars/:id 
```
The `:id` is the id of the desired listing. 

The required **headers** are described in the documentation. 

The service will return a single object. 

[/slide]


