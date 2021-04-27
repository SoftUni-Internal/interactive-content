# Homework

[slide hideTitle]

# Working with Remote Data

For the solution of some of the following tasks, you will need to use an up-to-date version of the **local REST service**, provided in the lesson's resources archive. 

You can read the documentation [here](https://github.com/softuni-practice-server/softuni-practice-server).

## Implement Furniture Store

You can make requests to the following endpoints: 

- Register User (POST): `http://localhost:3030/users/register`
- Login User (POST): `http://localhost:3030/users/login`
- Logout User (GET): `http://localhost:3030/users/logout`

- Create Furniture (POST): `http://localhost:3030/data/catalog`
- All Furniture (GET): `http://localhost:3030/data/catalog`
- Furniture Details (GET): `http://localhost:3030/data/catalog/:id`
- Update Furniture (PUT): `http://localhost:3030/data/catalog/:id`
- Delete Furniture (DELETE):  `http://localhost:3030/data/catalog/:id`
- My Furniture (GET): `http://localhost:3030/data/catalog?where=_ownerId%3D%22{userId}%22`

## All Furniture

List **all furniture** inside the store. 

Display the appropriate links in the navigation bar, based on user session.

Clicking on any of the `[Details]` buttons should **redirect to details**.

[image assetsSrc="js-application-applocatopns-routing-furniture-store-1.png" /]

[/slide]

[slide hideTitle]

# Application Users

## Register User

You need to create a functionality for registering new users. 

By clicking on the `[Register]` button you have to load the registration form. 

When the `[Register]` button on the form is clicked, you need to send a post request.

If the registration is **successful**, you can **redirect to dashboard page**.

## Login User

If the user **has already registered**, he can login by using **the login form**. 

After a **successful** login, the user should be **redirected to dashboard page**. 

Save the returned token in the session storage and send it with every request.

## Logout User

The **logged in user** can be **logged out by** clicking the `[Logout]` **button**. 

Create the functionality for this action.

[/slide]

[slide hideTitle]

# Create Furniture

[image assetsSrc="js-application-applocatopns-routing-furniture-store-2.png" /]

**Validate fields:**
- The **make** and the **model** must be **at least 4 symbols long**
- The year must be **between 1950 and 2050**
- The description must be **more than 10 symbols**
- The price must be a **positive number**
- The image **URL is required**
- The material is **optional**

If the input is valid, you should **add the** "**is-valid**" class to the input field and **if it is invalid** - **the** "**is-invalid**" **class**.

**Redirect to dashboard page if the values are valid.**

[/slide]

[slide hideTitle]
# Furniture Details

Retrieve the **id** from the **URL** and **display** the information. 

If **the logged user is the creator**, the buttons `[Edit]` and `[Delete]` should be **visible and functional**.

[image assetsSrc="js-application-applocatopns-routing-furniture-store-3.png" /]

[/slide]

[slide hideTitle]

# Update and Delete Furniture

## Update Furniture

If the **logged in user** is **the creator**, he can edit the furniture data. 

When the form is **loaded**, **all of the fields** must be **filled up** with the **information from the server**.

The **validations** should be the same as the validations when creating a new furniture.

A **PUT request** must be send.

[image assetsSrc="js-application-applocatopns-routing-furniture-store-4.png" /]

## Delete Furniture

By clicking on the `[Delete]` button, the user needs to **confirm the deletion** (you can use an alert or another custom made notification) then the application should send a **DELETE request** to the back-end and **delete the furniture**. 

Then **redirect** to the **dashboard page**.
[/slide]

[slide hideTitle]
# My Furniture
A logged-in user can see a list of their own publications by clicking on the link `[My Publications]` in the navigation bar. 

Display a page similar to the main catalog (dashboard) but only show the records that are associated with the currently logged-in user.

[image assetsSrc="js-application-applocatopns-routing-furniture-store-5.png" /]
[/slide]
