# Application Requirements 

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
# Create Car Listing

// Video: 06: Create Car Listing page 

The Create page is available to logged-in users. 

It contains a form for creating new listings. Check if all the fields are filled before sending the request. 

[image assetsSrc="js-application-cartube-workshop-15.gif" /]

To create a listing, send the following **request**: 

```
Method: POST 
URL: /data/cars 
```
The required **headers** are described in the documentation. 

The service expects a body with the following structure: 
```
{ 
  brand, 
  model, 
  description, 
  year, 
  imageUrl, 
  price 
} 
```
The required **headers** are described in the documentation. 

The values for the **year** and the **price** must be positive numbers. 

The service will return the newly created record. 

Upon a success, **redirect** the user to the "**All Listings**" page. 
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

[slide hideTitle]
# Edit Listing

// Video: 07: Edit Listing page 

The "**Edit**" page is available to logged-in users and allows the author to **edit** their **own** listings. 

Clicking on the "**Edit**" link of a specific listing on the "**Details**" page should display the Edit page. 

It contains a form with input fields for all relevant properties. 

Check if all the fields are filled before you send the request. 

[image assetsSrc="js-application-cartube-workshop-17.gif" /]

To edit a listing, send the following **request**: 

```
Method: PUT 
URL: /data/cars/:id 
```

Where `:id` is the **id** of the desired listing. 

The service expects a body with the following shape: 

```
{ 
  brand, 
  model, 
  description, 
  year, 
  imageUrl, 
  price 
} 
```
The required **headers** are described in the documentation. 

The values for the **year** and the **price** must be positive numbers. 

The service will return the modified record. 

Upon success, **redirect** the user to the "**Details**" page. 

**Note:** "**PUT**" requests **do not** merge properties and will instead **replace** the entire record.  

## Delete Listing 

The delete action is available to **logged-in** users and for the listing that they have created. 

When the author clicks on the "**Delete**" action on any of their listing, a confirmation dialog should be displayed. 

Upon confirming this dialog, the listing should be deleted from the system. 

To delete a listing, send the following **request**: 

```
Method: DELETE 
URL: /data/cars/:id 
```

The `:id` is the **id** of the desired listing. 

The required headers are described in the documentation. 

The service will return an object, containing the deletion time. 

Upon success, **redirect** the user to the "**All Listings**" page. 

[/slide]

[slide hideTitle]
# My Listings

// Video: 08: My Listings page + Tests 

This page displays a list of all listings made by the current user.  

[image assetsSrc="js-application-cartube-workshop-18.gif" /]

If there are no listings, the following view should be displayed: 

[image assetsSrc="js-application-cartube-workshop-19.gif" /]

Send the following **request** to read the list of ads: 

```
Method: GET 
URL: /data/cars?where=_ownerId%3D%22{userId}%22&sortBy=_createdOn%20desc 
```

The `{userId}` is the id of the currently logged-in user. 

The required **headers** are described in the documentation. 

The service will return an array of listings. 
[/slide]


[slide hideTitle]
# BONUS: Search

// Video: 09: Search page + Tests

The Search page allows users to filter listings by their production year. It contains an input field and, upon submitting a query, a list of all matching listings. 

[image assetsSrc="js-application-cartube-workshop-20.gif" /]

If there are no results, the following view should be displayed: 

[image assetsSrc="js-application-cartube-workshop-21.gif" /]

Send the following **request** to read a filtered list of ads by their production year: 

```
Method: GET 
URL: /data/cars?where=year%3D{query} 
```
The `{query}` is the search query that the user has entered in the input field. 

The required **headers** are described in the documentation. 

The service will return an array of listings. 

If there are no matches, display the text "**No matching listings**" instead. 
[/slide]

