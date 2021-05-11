# User AUTH, Catalog and Details Pages

[slide hideTitle]

# Navigation Bar and Home Page

## Navigation Bar
// Video: 04.1: Home page (Navigation bar). 

The navigation links should change the current page (view). 

**Guests** (unauthenticated visitors) can see the links to the **All Listings** page, as well as the links to the **Login** and **Register** pages. 

Authenticated users should be able to access the links to the **All Listings** page, the **Create** page and a link to **Logout**.

**Guest** navigation example: 

[image assetsSrc="js-application-cartube-workshop-8.png" /]

**User** navigation example: 

[image assetsSrc="js-application-cartube-workshop-9.gif" /]

## Home Page
All users should be welcomed by the **Home page**, from where they can go to the **Listings** view.

[image assetsSrc="js-application-cartube-workshop-12.gif" /]

[/slide]

[slide hideTitle]
# Login and Registration

## Login Page

// Video: 04.2: Login + Register pages 

The **included REST** service comes with the following premade user accounts, which you may use for development: 

```
{ "username": "Peter", "password": "123456" } 
{ "username": "John", "password": "123456" } 
```
The **Login** page contains a form to authenticate users. 

By providing a **username** and a **password**, the app should log a user in to the system if there are no empty **fields** and incorrect data.

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

If successful, the **REST service** will return the information of the user along with an **accessToken** property, which contains the **session token** for the user. 

This information needs to be stored using **sessionStorage** or **localStorage** in order to be able to perform authenticated requests.

If the login was successful, **redirect** the user to the **All Listings** page. 

If there is an error, display an error message using a system dialog (**window.alert**).

## Register User 

The **Register** page contains a form to register a new user. 

By providing a **username** and a **password**, the app should register a new user in the system if there are no empty **fields** or incorrect data.

[image assetsSrc="js-application-cartube-workshop-11.gif" /]

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
  password 
} 
```
After a successful registration the **REST service** will return a newly created object with an automatically generated `_id` property and an **accessToken** property, which contains the **session token** for the user. 

This information needs to be stored using **sessionStorage** or **localStorage** in order to be able to perform authenticated requests.


If the registration was successful, **redirect** the user to the **All Listings** page. 

If there is an error, or the **validations** do not pass, display an error message, using a system dialog (**window.alert**).

## Logout 

The logout action is available for logged-in users. 

Send the following **request** to perform a logout:

```
Method: GET
URL: /users/logout
```
The required **headers** are described in the documentation. 

Upon a successful logout, the **REST service** will return an **empty response**. 

Clear any session information that is stored in browser storage.

If the logout was successful, **redirect** the user to the **Home** page.

[/slide]


[slide hideTitle]
# All Listings Page

// Video: 05.1: All-listings (Catalog) page 

This page displays all listings in the system. 

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

Clicking on the **Details** link in the **car ad** should **display** the **Details** page. 

If the currently logged-in user is the creator of the listing, the **Edit** and **Delete** buttons should be displayed.

[image assetsSrc="js-application-cartube-workshop-16.gif" /]

Send the following **request** to read a single listing:
```
Method: GET 
URL: /data/cars/:id 
```
The `:id` is the **id** of the desired listing. 

The required **headers** are described in the documentation. 

The service will return a single object. 

[/slide]


