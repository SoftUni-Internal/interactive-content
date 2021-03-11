
[slide hideTitle]
# Exam Preparation: Shoe Shelf SPA

**Here is a link to the** [resources](https://videos.softuni.org/resources/javascript/javascript-applications/Exam_Preparation_ShoeShelf_Resourses.zip) **for this task.**

In this exam preparation, we are going to create a **Single Page Application** (SPA) using **HTML5**, **JavaScript**, **AJAX**, **REST** and **JSON** as well as utilizing a cloud-based backend (Firebase or Backendless).

Using libraries like **lit-html** and **page.js** is allowed but is **not obligatory**.

The app keeps **users** and **shoes.**

**Guests** should be able to register and log in.

Logged-in users should be able to view **all of the shoes**, **add new shoes**, **buy shoes**, see **details** about **shoes** and **logout**.

Logged-in users should also be able to **edit** or **delete** the **shoes that they have added.**

## Create a REST Service

Use any cloud-based database and create an application to keep your data on the cloud.

Create a collection called **shoes.**

Each shoes has a **name**, **price**, **imageUrl**, **description**, **brand**, **creator** and **people who have bought it.**
[/slide]

[slide hideTitle]

# HTML and CSS

You have been given the web design of the application as **HTML** \+ **CSS** files.

- Initially, all of the views and the forms are shown in the HTML files. 

Your application may **hide/show elements** using CSS (display: none) or **delete/reattach** all unneeded elements from and to the DOM, or just render the views it needs to displayed.

- You may render the views/forms/components with **JavaScript** or **lit-html**

- You are **allowed** to add **attributes** to any HTML element

## Important

Do not change the elements' **class names** and IDs.

Do not rename the form fields/links/IDs.

You may modify the **href attributes** of the links and add **actions/method attributes** to forms, to allow the use of a routing library.

[/slide]
[slide hideTitle]
# Navigation Bar (5 Pts)

Navigation links should correctly change the current page (view).

Clicking on the buttons on the navigation bar should display the view behind the link (views are represented as sections in the HTML code).

The navigation bar of the logged-in user should contain the following elements: `[Create new offer]` a **link** to the **Create page**, the Shoe Shelf logo \- a link to the listed shoes, the user caption `Welcome, {email}` and the `[Logout]` link.

[image assetsSrc="js-apps-exam-prep-1.png" /]

The navigation bar of the guest users should contain the following elements: **Shoe Shelf** with the logo in-between.

[image assetsSrc="js-apps-exam-prep-2.png" /]
[/slide]

[slide hideTitle]

# Home Page (Guest) (5 Pts)

The initial page (view) should display the **guest navigation bar** \+ **Guest Home Page** \+ **Footer.**

[image assetsSrc="js-apps-exam-prep-3.png" /]

[/slide]

[slide hideTitle]
# Register User (5 Pts)

The app should register a new user in the system using their email and password credentials.

- The following validations should be made
   * the **email** input must be **filled**

   * the password should be at least **6 characters long**

   * the **repeat** **password** value should be equal to the password

- Keep the user's data in the browser's **session or local storage**

- After a **successful registration**, redirect to **Home page**

- In case of an **error**, nothing should happen and the user should be able to fill in the form again

[image assetsSrc="js-apps-exam-prep-4.png" /]

[/slide]

[slide hideTitle]
# Login User (5 Pts)

 Тhe app should log in an existing user using their **email** and **password**

- Keep the user's data in the browser's **session or locale storage**

- After a **successful login**, redirect to the Home page

- In case of an **error**, nothing should happen and the user should be able to fill in the form again

[image assetsSrc="js-apps-exam-prep-5.png" /]

[/slide]
[slide hideTitle]

# Logout (5 Pts)

Successfully logged-in users should be able to logout from the app.

- The `logout` **REST** **service** at the back-end must be called at logout

- All local information in the browser (**user session data**) about the current user should be deleted

- After a **successful logout** redirect to **Login page**

[/slide]
[slide hideTitle]

# Home Page (Logged in User)  (30 Pts)

Successfully logged-in users should be welcomed when entering the **Home page.**

They should be able to see all of the added shoes:

[image assetsSrc="js-apps-exam-prep-6.png" /]

If there are **NO** shoes added, the following view should be displayed:

[image assetsSrc="js-apps-exam-prep-7.png" /]

[/slide]
[slide hideTitle]

# Create Offer(10 Pts)

Logged-in users should be able to **add shoes.** 

Clicking the `[Create new offer]` button, on the navgivation bar, should **display** the **Create page.**

- The form should contain the following validations

   * all **input** fields should be **filled**

   * **by default**, every newly created offer must have additional information

`Creator`: a string representing the current user;

`People bought it`: the data of the users who have bought the shoes;

   * after **successfully** creating a new offer, the application should redirect to the **Home page** 

- The newly added offer should be stored in the database collection `shoes`

[image assetsSrc="js-apps-exam-prep-8.png" /]

[/slide]

[slide hideTitle]
# Details (15 Pts)

Logged-in users should be able to **view the details** about an offer. 

Clicking on a **particular offer** should display the **Details page.**

- If the currently logged-in user is the creator, the `[Delete]` and `[Edit]` **buttons** should be set to **visible**. Otherwise there should be only 1 button `[Buy]`

[image assetsSrc="js-apps-exam-prep-9.png" /]

[image assetsSrc="js-apps-exam-prep-10.png" /]

[/slide]
[slide hideTitle]
# Edit Offer (10 Pts)

Logged-in users should be able to **edit** their own offers.

Clicking the `[Edit]` button of a particular offer on the **Details page** should **display** the **Edit page**, inserting the additional information of the shoes in the input fields:

[image assetsSrc="js-apps-exam-prep-11.png" /]

- After a successful edit, the user should be redirected to the current shoes **Details page**

[/slide]

[slide hideTitle]
# Buy Shoes (10 Pts)

Logged-in users should be able to **buy** shoes, added by another user.

**NOTE: A user should NOT be able to buy from offers, created by himself.**

Clicking on the `[Buy]` **button** (on the Details page) should **add the current user's email to the property** `People bought it`.

After successfully buying:

- Display the updated Details page

- By clicking the `[Buy]` button: 

[image assetsSrc="js-apps-exam-prep-12.png" /]

- It changes to `[You bought it]` span so users can not **buy an item** multiple times:

[image assetsSrc="js-apps-exam-prep-13.png" /]

[/slide]

[slide hideTitle]
# Delete Offer (5 Pts)

Logged-in users should be able to **delete their own offers.**

Clicking on the `[Delete]` **button** of an offer (on the Details page) should delete the **offer.**

- After **successfully deleting an offer**, the user should be redirected to the **home page**

## (BONUS) Order: (5 Pts)

The **home page** for a logged user should display the offers in **descending order by count** of **people who bought** the item.
[/slide]
