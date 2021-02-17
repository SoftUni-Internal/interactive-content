
[slide hideTitle]
# Exam: SoftBay App

**Here is a link to the** [resources](www.li.com) **for this task.**

You are assigned to implement a **Web application** (SPA) using HTML5, JavaScript, AJAX, REST, and JSON with a cloud-based backend (Firebase or Backendless). 

Initially, all views and forms are shown by the HTML. 

Your application must display the current views depends on the routing URL. 

You may render the views/forms/components with **lit-Html**.

You are **allowed** to use libraries like **jQuery**, **lit-html** and **Page.js**. 

Frameworks and libraries like React, Angular, Vue are **not permitted**.

## Important
Do not change the elements' **class names and ids**. 

You **are allowed** to add **data attributes** to any elements. 

You may modify **href attributes** of links and add **action/method** attributes to **forms**, to allow the use of a routing library.

[/slide]

[slide hideTitle]
# Create a REST Service
Use any cloud-based database and create an application to keep your data in the cloud.

Create a collection called **softbay**. 

## HTML and CSS

You have been given the web design of the application as **HTML** + **CSS** files.

- Initially, all views and forms are shown by the **HTML**

Your application may hide/show elements by **CSS** **(display: none)** or **delete/reattach** from and to the DOM all unneeded elements, or just display the views it needs to display.

- You may render the views/forms/components with JavaScript or Handlebars

- You are **allowed** to **add attributes** to any **HTML** elements

[/slide]
[slide hideTitle]
# SoftBay: Client-Side Web Application

**Design** and **implement** a client-side front-end app (SPA) for managing **offers**. 

Implement the functionality described below.

## Navigation Bar (Header) (5 Pts)

Navigation links should correctly change the current page (view).

Clicking on the links in the **NavBar** should display the view behind the link (views are represented as sections in the HTML code).

Your application must display the views it needs to display.

The **Logged-in user** navbar should contain the following elements: `[SoftBay]`, `[Dashboard]`, `[Create Offer]` and `[Logout]`.

[image assetsSrc="js-apps-new-exam-1.png" /]

The guest users navbar should contain the following elements: `[SoftBay]` and `[Login]`.

[image assetsSrc="js-apps-new-exam-2.png" /]

## Footer

[image assetsSrc="js-apps-new-exam-3.png" /]
[/slide]

[slide hideTitle]

# Register Page (5 Pts)

By given **email** and **password**, the app should register a new user in the system.

- The following validations should be made:

   - The **email** and **password** must be a non-empty string

   - The **re-password** should be **equal to the password**

- After a **successful registration**, **home page** should be displayed **with the right navbar**

- Keep the user session data in the browser's **session or local storage**

[image assetsSrc="js-apps-new-exam-4.png" /]

`[Login]` link should refer to the login form (view)

[/slide]

[slide hideTitle]
# Login Page and Logout (10 Pts)

## Login (5 Pts)

By given **email** and **password**, the app should log in as an existing user.

- After a **successful login**, a **home page** should be displayed with the **right navbar**

- Keep the user session data in the browser's **session or local storage**

[image assetsSrc="js-apps-new-exam-5.png" /]

`[Register]` link should refer to the registration form (view)

## Home Page (5 Pts)

Successfully logged-in users should be able to logout from the app.

- After a **successful** logout the **home page for guest users** should be shown

- All local information in the browser **(user session data)** about the current user **should be deleted**

[/slide]

[slide hideTitle]
# Home Page (5 Pts)

The initial page (view) should display the **navigation bar for guest users** + **Home Page** + **Footer**. 

`[SoftBay]` **button** should refer to the **home page** (view)

[image assetsSrc="js-apps-new-exam-6.png" /]

If user is logged-in the page (view) should display the **navigation bar logged-in users** + **Home Page** + **Footer**.

[image assetsSrc="js-apps-new-exam-7.png" /]

[/slide]
[slide hideTitle]
# Create Offer (15 Pts)

Logged-in users should be able to Create offers

Clicking the `[Create Offer]` **link** in the **NavBar** should **display** the **Create Offer page**.

- The form should contain the following validations:

   - The input fields for **product**, **description** and price should be **non-empty strings**

   - The input field for **imageUrl**, must be **valid url** (starts with `https://`)

After a **successful** offer creation the **Dashboard** should be shown.

The newly created offer should be stored in the database collection "**offers**".

[image assetsSrc="js-apps-new-exam-8.png" /]

[/slide]
[slide hideTitle]

# Dashboard (25 Pts)

By clicking over the `[Dashboard]` button, the currently logged-in user should be able to see all created offers.

The initial page (view) should display the **navigation bar for logged-in users** + **Dashboard** + **Footer**.

If there are **NO** such offers, the following view should be displayed.

[image assetsSrc="js-apps-new-exam-9.png" /]

If there is at least **one registered offer**, the offer must be shown as the example below in the format:

|\#| **Name**| **Description** |**Price**| **Details** |**Actions**|
|:---:|:---:|:---:|:---:|:---:|:---:|
|Current offer **index**|Current product **name**|Current product **description**|Current product **price**|`[Order details]` button which refers to the details for the current offer/product|`[Delete]` `[Edit]` Buttons, only if the currently logged-in user is the creator of that offer. Where both buttons refer to the delete and edit view (pages) for the current offer/product|

[image assetsSrc="js-apps-new-exam-10.png" /]
[/slide]

[slide hideTitle]
# Edit Offer (15 Pts)

Logged-in users should be able to **edit** their **own** offers. 

Clicking the `[Edit]` **link** of a **particular offer**, **Edit Offer Page** should be displayed with **already filled** input fields with the current offer information. 

By clicking the `[Edit]` button, a put request should be sent to the **offers collections** and the current offer **should be changed**.


[image assetsSrc="js-apps-new-exam-11.png" /]

[/slide]
[slide hideTitle]
# Delete Offer (5 Pts)

Logged-in users should be able to **delete their** offers. 

Clicking the `[Delete]` **link** of a **particular offer** the **Offer Delete page** should be displayed with already filled information about that offer, but all input fields are disabled.

If the `[Delete]` button in the **Offer Delete Page** is clicked, the current offer must be **deleted** from the DOM and the **database** collection.

After **successful offer deletes a Dashboard page** must be shown. 


[image assetsSrc="js-apps-new-exam-12.png" /]

[/slide]

[slide hideTitle]
# Offer Details (15 Pts)

Logged-in users should be able to **view details** about offers. 

Clicking the `[Order details]` **link** in of a **particular offer** should display the **Offer Details page**, where the **product name**, **picture**, **description** and the **price** are shown in the format below on the picture.

[image assetsSrc="js-apps-new-exam-12.png" /]

[/slide]

[slide hideTitle]
# Bonus: Notifications (5 Pts)

In case of a **successful** action (create an offer, login, registration, edit, delete), a **notification message (green)** should be shown, which disappears after **3 seconds**.

[image assetsSrc="js-apps-new-exam-13.png" /]

In case of **error** (wrong passwords, wrong ajax call, authorization, etc...), **an error notification message (red)** should be shown, which disappears after **3 seconds** or **on user click**.

[image assetsSrc="js-apps-new-exam-14.png" /]

**Note**: The notification should stay visible also when redirected to another page. 

By default, all notifications are styled with `display: none`.
[/slide]

[slide hideTitle]
# Bonus: Buy an item and Profile page (10 Pts)

In these cases when some of the offers are **not made** from the currently logged-in user, in the section "**Actions**" must be added a `[Buy]` button.

By clicking the `[Buy]` button the current product must be successfully bought by the user.

There are no quantities on the products, so you do not have to remove them from the list or something else, just store the number of purchases in the database for the current user.

[image assetsSrc="js-apps-new-exam-15.png" /]


[image assetsSrc="js-apps-new-exam-16.png" /]

## Profile Page

In the NavBar (header) must be added a new link `[Profile]` which refers to the currently logged user.

[image assetsSrc="js-apps-new-exam-17.png" /]

It should be displayed **2** types of information: email for the current user and **number of purchases** that the current user is made. 

**Any other info is static**, and you do not have to think about it.

[image assetsSrc="js-apps-new-exam-18.png" /]

**Note: Each view should have its own unique and properly named action (URL), to be able to get the full points from each section.**

[/slide]