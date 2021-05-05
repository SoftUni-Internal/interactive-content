# Application Requirements

[slide hideTitle]

# Home Screen 

//Video: JS-APPS-Meme-Lounge-Home-4
//Video: JS-APPS-Meme-Lounge-Home-5

The initial screen should display the navigation, register, login, the initial image and a footer.

**Note:** This page should be only displayed to guest users. 

Logged-in users should be redirected to the **All Memes page**.

[image assetsSrc="js-application-exap-prep-3.png" /]

[/slide]

[slide hideTitle]
# Navigation Bar

//Video: JS-APPS-Meme-Lounge-Navigation-6
//VIdeo: JS-APPS-Meme-Lounge-Navigation-7

Implement a **NavBar** for the app: navigation links should change the current screen (view).


The navigation links should change the current page (view). 

**Guests** (un-authenticated visitors) can see the links to the **Home Page**, **All Memes page**, as well as the links to the Login and Register pages. 

Authenticated users should be able to access the links to the **All Memes page**, the **Create Meme page**, the **My Profile page** and a link for the **Logout action**. 

The navbar should hold a user greeting: "**Welcome,** \{ **user’s email address** \}"

User navigation example:

[image assetsSrc="js-application-exap-prep-1.png" /]

**Guest** navigation example: 

[image assetsSrc="js-application-exap-prep-2.png" /]
[/slide]


[slide hideTitle]
# Login Page

// Video: JS-APPS-Meme-Lounge-Login-8
//Video: JS-APPS-Meme-Lounge-Login-9

The **included REST service** comes with the following **premade** user accounts, which you may use for development:

```
{ "email": "peter@gmail.com", "password": "123456" }
{ "email": "mary@gmail.com", "password": "123456" }
```
The "**Login**" page contains a form for existing user authentication. 

The **Login page** contains a form for existing user authentication. 

By providing an **email and a password** the app should log a user into the system if there are no empty fields or incorrect data.

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

[/slide]

[slide hideTitle]
# Register User 
//Video: JS-APPS-Meme-Lounge-Register-10
//Video: JS-APPS-Meme-Lounge-Register-11

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

If there are an error, or the **validations** does not pass, display the corresponding error message, using a system dialog (**window.alert**).

[/slide]

[slide hideTitle]
# Logout 

//Video: JS-APPS-Meme-Lounge-Logout-12

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

// Video: JS-APPS-Meme-Lounge-All-Memes-13
//Video: JS-APPS-Meme-Lounge-All-Memes-14

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
# Create Meme Screen 

// Video: JS-APPS-Meme-Lounge-Create-Meme-15

The **Create** page is available to logged-in users. 

It contains a form for creating a new meme. 

Check if all the fields are filled before you send the request.

[image assetsSrc="js-application-exap-prep-6.png" /]

To create a meme, send the following request:

```
Method: POST
URL: /data/memes
```

The required **headers** are described in the documentation. 

The service expects a body with the following structure:

```
{
  title,
  description,
  imageUrl
}
```

The service will return the newly created record. 

Upon success, **redirect** the user to the **All Memes** page.


[/slide]

[slide hideTitle]
# Meme Details

// Video: JS-APPS-Meme-Lounge-Details-16
// Video: JS-APPS-Meme-Lounge-Details-17
// Video: JS-APPS-Meme-Lounge-Details-18

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


[slide hideTitle]
# Edit Meme Screen 

// Video: JS-APPS-Meme-Lounge-Edit-19
// Video: JS-APPS-Meme-Lounge-Edit-Meme-20

The **Edit** page is available to logged-in users and allows the author to **edit** their **own** meme. 

Each meme`s Details page should hold a link which redirects us to its edit page. 

It contains a form with input fields for all relevant properties. Check if all the fields are filled before you send the request.

[image assetsSrc="js-application-exap-prep-10.png" /]

To edit a meme, send the following request:

```
Method: PUT
URL: /data/memes/:id
```

Where `:id` is the **id** of the desired listing.

The service expects a body with the following structure:

```
{
  title,
  description,
  imageUrl
}
```

The required **headers** are described in the documentation. 

The service will return the modified record. 

If successful, redirect the user to the **Details** page.

**Note:** **PUT** requests **do not** merge properties and will instead **replace** the entire record. 

[/slide]

[slide hideTitle]
# Delete Meme  

// Video: JS-APPS-Meme-Lounge-Delete-21
// Video: JS-APPS-Meme-Lounge-Delete-22

The delete functionality is available to **logged-in** users and only for memes that they have created. 

When the author clicks **Delete**, a confirmation dialog should be displayed. 

Upon completing this dialog, the meme should be deleted from the system.

To delete a meme, send the following request:

```
Method: DELETE
URL: /data/memes/:id
```

The `:id` is the **id** of the desired listing. 

The required **headers** are described in the documentation. 

The service will return an object, containing the deletion time. 

Upon success, **redirect** the user to the **All Memes page**.


[/slide]

[slide hideTitle]
# User Profile

// Video: JS-APPS-Meme-Lounge-Profile-23
// Video: JS-APPS-Meme-Lounge-Profile-24

Each **logged-in user** should be able to view their profile by clicking on the `[My Profile]` button. 

The fields for the  **Username**, **Email** and **My memes count** should be filled with the data of the current user.

Note that the gender field of the user determines which picture is displayed as their avatar.

[image assetsSrc="js-application-exap-prep-11.png" /]

If there are no memes, the following view should be displayed:

[image assetsSrc="js-application-exap-prep-12.png" /]

Send the following request to read the list of ads:

```
Method: GET
URL: /data/memes?where=_ownerId%3D%22{userId}%22&sortBy=_createdOn%20desc
```
Where `{userId}` is the id of the currently logged-in user.

The required **headers** are described in the documentation. 

The service will return an array of listings.

[/slide]

[slide hideTitle]
# Bonus: Notifications 

//Video: JS-APPS-Meme-Lounge-Notifications-25
//Video: JS-APPS-Meme-Lounge-Notifications-26

In case of an **error that is caused by the user’s actions**, the application should display an **error notification message**, which disappears after 3 seconds. 

There is a styled section with id "notifications" in the provided HTML file.

Errors may include **validation errors** or error **messages returned** by the REST service, such as incorrect user credentials, on the following pages: **Register**, **Login**, **Create** and **Edit**.

**c**
[image assetsSrc="js-application-exap-prep-13.png" /]

**Register Page:**
[image assetsSrc="js-application-exap-prep-14.png" /]
 
[/slide]