# JS Applications Exam: Shoe Shelf SPA

[slide hideTitle]
# Description

[code-task title="Shoe Shelf SPA" taskId="js-applications-exam-preparation-shoe-shelf-spa" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(){
  // Write your code here
}
```
[/code-editor]
[task-description]

# Description

[Download resources here!](https://mega.nz/file/TZQjTSrR#5GpCJ1i5TtPw3zGn1rG95c6NSHV0ivw6lZpBV7QXg5o)

You are assigned to implement a **Single Web Application** (SPA) using **HTML5**, **JavaScript**, **AJAX**, **REST** and **JSON** with cloud-based backend ([Firebase](https://firebase.google.com), **Backendless** or other).

Using libraries like  **Handlebars** and **Sammy** is allowed but is not obligatory.

The app keeps **users** and **shoes.**

**Guests** should be able to register and log in.

Logged\-in users should be able to view **all shoes**, **add shoes**, **buy shoes**, see **details** about a **shoes** and **logout**.

Logged-in users should also be able to **edit** or **delete** the **shoes they have added.**

**1. Create a REST Service**

Use any cloud-based database and create an application to keep your data in the cloud.

Create a collection called **shoes.**

Each shoes has a **name**, **price**, **imageUrl**, **description**, **brand**, **creator** and **people bought it.**

**2. mCreate Shoes Application**

## HTML and CSS
You have been given the web design of the application as **HTML** \+ **CSS** files.

- Initially all views and forms are shown by the HTML. 

Your application may **hide/show elements** by CSS (display: none) or delete/reattach from and to the DOM all unneeded elements, or just display the views it needs to display.

- You may render the views/forms/components with **JavaScript** or **Handlebars**.

- You are **allowed** to add **attributes** to any HTML elements.

## Important

Do not change the elements' **class names** and ids.

Do not rename form fields/link/ids.

You may modify **href attributes** of links and add **action/method attributes** to forms, to allow the use of a routing library.

## Client-Side Web Application

Design and implement a client-side front-end app (SPA).

Implement the functionality described below.

## Navigation Bar (5 Pts)

- Clicking on the links in the **NavBar** should display the view behind the navigation link.

- Your application may **hide/show elements** by CSS (display: none) or **delete/reattach** from and to the DOM all unneeded elements, or just display the views it needs to display.

- The Logged\-in user navbar should contain the following elements: `[Create new offer]` a **link** to the **Create page**, the Shoe Shelf logo \- link to the listed shoes, the user caption `Welcome, {email}` and `[Logout]` link.

[image assetsSrc="js-apps-exam-prep-1.png" /]

- The guest users navbar should contain the following elements: **Shoe Shelf** with the logo in-between.

[image assetsSrc="js-apps-exam-prep-2.png" /]

## Home Page (Guest) (5 Pts)

The initial page (view) should display the **guest navigation bar** \+ **Guest Home Page** \+ **Footer.**

[image assetsSrc="js-apps-exam-prep-3.png" /]

## Register User (5 Pts)

By given **email** and **password**, the app should register a new user in the system.

- The following validations should be made:
   - The **email** input must be **filled**

   - The password should be at least **6 characters long**

   - The **repeat** **password** should be equal to the password

- Keep the user data in the browser's **session or local storage.**

- After a **successful registration** redirect to **Home page.**

- In case of **error**, nothing happens, the user should be able to fill in the form again.

[image assetsSrc="js-apps-exam-prep-4.png" /]

## Login User (5 Pts)

By given **email** and **password**, the app should log in as an existing user.

- Keep the user data in the browser's **session or locale storage.**

- After a **successful login** redirect to the Home page.

- In case of **error**, nothing happens, the user should be able to fill in the login form again.

[image assetsSrc="js-apps-exam-prep-5.png" /]

## Logout (5 Pts)

Successfully logged in users should be able to logout from the app.

- The `logout` **REST** **service** at the back-end must be called at logout.

- All local information in the browser \(**user session data**\) about the current user should be deleted.

- After a **successful logout** redirect to **Login page.**

## Home Page(Logged in User)  (30 Pts)

Successfully logged-in users should be welcomed by the **Home page.**

They should be able to see all added shoes:

[image assetsSrc="js-apps-exam-prep-6.png" /]

If there are **NO** such, the following view should be displayed:

[image assetsSrc="js-apps-exam-prep-7.png" /]

## Create Offer(10 Pts)

Logged-in users should be able to **add shoes.** 

Clicking the `[Create new offer]` button in the navbar should **display** the **Create page.**

- The form should contain the following validations:

   - All **input** fields shouldn't be **empty**. 

   - **By default**, every newly created offer must have additional information:

`Creator`: a string representing the current user;

`People bought it`: keeping data of users bought the shoes;

   - After a **successful** creating **Home page** should be shown. 

- The newly added offer should be stored in the database collection `shoes`.

[image assetsSrc="js-apps-exam-prep-8.png" /]

## Details (15 Pts)

Logged-in users should be able to **view details** about an offer. 

Clicking on a **particular offer** should display the **Details page.**

- If the currently logged-in user is the creator, the `[Delete]` and `[Edit]` **buttons** should be set to **visible**, otherwise there should be only 1 button `[Buy]`.

[image assetsSrc="js-apps-exam-prep-9.png" /]

[image assetsSrc="js-apps-exam-prep-10.png" /]

## Edit Offer (10 Pts)

Logged-in users should be able to **edit** offers, added by them.

Clicking the `[Edit]` button of a particular offer on the **Details page** should **display** the **Edit page** inserting the additional information of the shoes in the input fields:

[image assetsSrc="js-apps-exam-prep-11.png" /]

- After a successful edit user should be redirected to the current shoes **Details page.**

## Buy Shoes (10 Pts)

Logged-in users should be able to **buy** shoes, added by another user.

**NOTE: A user should NOT be able to buy an offer, created by himself.**

Clicking the `[Buy]` **button** (on the Details page) should **add the current user email to the property People bought it**.

After successfully buying:

- Display the updated Details page

- By clicking the `[Buy]` button changes to `[You bought it]` span so users can't **buy an item** multiple times.

[image assetsSrc="js-apps-exam-prep-12.png" /]

[image assetsSrc="js-apps-exam-prep-13.png" /]

## Delete Offer (5 Pts)

Logged-in users should be able to **delete their offers.**

Clicking the `[Delete]` **button** of an offer (on the Details page) should delete the **offer.**

- After **successful delete** - **Home page** should be **shown.**

## (BONUS) Order: (5 Pts)

**Home page** for a logged user should display offers in **descending order by count** of **people bought** the item.

[/task-description]
[code-io /]
[tests]
[test open]
[input]

[/input]
[output]

[/output]
[/test]
[test open]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[/tests]
[/code-task]
[/slide]
