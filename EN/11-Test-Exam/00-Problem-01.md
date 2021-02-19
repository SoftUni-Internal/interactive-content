
[slide hideTitle]
# Exam: SoftBay App

**Here is a link to the** [resources](www.li.com) **for this task.**

Create a **Single Page Application** (SPA) using HTML5, JavaScript, AJAX, REST, and JSON as well as utilizing a cloud-based backend (Firebase or Kinvey). 

Initially, all of the views and the forms are shown in the HTML file. 

Your application must display the current views depending on the routing URL. 

You may render the views/forms/components with **lit-Html**.

You are **allowed** to use libraries like **jQuery**, **lit-html** and **page.js**. 

Frameworks and libraries like React, Angular, Vue are **not permitted**.

## Important
Do not change the elements' **class names and IDs**. 

You **are allowed** to add **data attributes** to any elements. 

You may modify the **href attributes** of the links and add **action/method** attributes to the **forms**, to allow the use of a routing library.

Create a collection called **softbay**. 

[/slide]

[slide hideTitle]
# HTML and CSS

You are been given the web design of the application as **HTML** and **CSS** files.

- Initially, all of the views and the forms are shown on the **HTML** file

Your application may hide/show elements using **CSS** **(display: none)** or **delete/reattach** all unneeded elements from and to the DOM, or just render the views it needs to displayed.

- You may render the views/forms/components with **JavaScript** or **lit-html**

- You are **allowed** to **add attributes** to any **HTML** elements

[/slide]
[slide hideTitle]
# Navigation Bar (5 Pts)

The buttons on the navigation bar should correctly change the current page (view).

Clicking on the **buttons** on the **navigation bar** should display the view behind the link (views are represented as sections in the HTML file).

The **Logged-in user's** navigation bar should contain the following elements: `[SoftBay]`, `[Dashboard]`, `[Create Offer]` and `[Logout]`.

[image assetsSrc="js-apps-new-exam-1.png" /]

The guest user's navbar should contain the following elements: `[SoftBay]` and `[Login]`.

[image assetsSrc="js-apps-new-exam-2.png" /]

## Footer

[image assetsSrc="js-apps-new-exam-3.png" /]
[/slide]

[slide hideTitle]

# Register Page (5 Pts)

The app should register a new user in the system using their **email** and **password** and should **redirect the user to the home page**.

- The following validations should be made:

   * the **email** and **password** must be non-empty strings

   * the **re-password** should be **equal to the password**

- After **successfully registering**, the user should be redirected to the **home page with the right navbar**

- Keep the user's session data in the browser's **session or local storage**

[image assetsSrc="js-apps-new-exam-4.png" /]

The `[Login]` **button** should refer to the login form (view)

[/slide]

[slide hideTitle]
# Login Page and Logout (10 Pts)

## Login (5 Pts)

Тhe app should log in an existing user using their **email** and **password**.

- After **successfully logging in**, the user should be redirected to the **home page with the right navbar**

- Keep the user's session data in the browser's **session or local storage**

[image assetsSrc="js-apps-new-exam-5.png" /]

The `[Register]` **button** should refer to the registration form (view)

## Home Page (5 Pts)

Successfully logged-in users should be able to log out.

- After a **successful** logout, the **home page for guest users** should be shown

- All local information in the browser **(the user's session data)** about the current user **should be deleted**

[/slide]

[slide hideTitle]
# Home Page (5 Pts)

The initial page (view) should display the **navigation bar for guest users** + **Home Page** + **Footer**. 

The `[SoftBay]` **button** should refer to the **home page** (view)

[image assetsSrc="js-apps-new-exam-6.png" /]

If user is logged-in, the page (view) should display the **navigation bar logged-in users** + **Home Page** + **Footer**.

[image assetsSrc="js-apps-new-exam-7.png" /]

[/slide]
[slide hideTitle]
# Create Offer (15 Pts)

Logged-in users should be able to Create offers

Clicking the `[Create Offer]` **link** in the **NavBar** should **display** the **Create Offer page**.

- The form should contain the following validations

   - the input fields for the **product**, **description** and **price** should be **non-empty strings**

   - the input field for **imageUrl**, must be a **valid url** (starts with `https://`)

After a **successful** offer is created, the **Dashboard** should be shown.

The newly created offer should be stored in the database collection "**offers**".

[image assetsSrc="js-apps-new-exam-8.png" /]

[/slide]
[slide hideTitle]

# Dashboard (25 Pts)

By clicking over the `[Dashboard]` button, the currently logged-in user should be able to see all of the created offers.

The initial page (view) should display the **navigation bar for logged-in users** + **Dashboard** + **Footer**.

If there are **NO** such offers, the following view should be displayed.

[image assetsSrc="js-apps-new-exam-9.png" /]

If there is at least **one registered offer**, the offer must be shown as the example below in the format:

|\#| **Name**| **Description** |**Price**| **Details** |**Actions**|
|:---:|:---:|:---:|:---:|:---:|:---:|
|Current offer **index**|Current product **name**|Current product **description**|Current product **price**|`[Order details]` button, which refers to the details for the current offer/product|`[Delete]` `[Edit]` Buttons, only if the currently logged-in user is the creator of that offer. Both buttons refer to the delete and edit view (pages) for the current offer/product|

[image assetsSrc="js-apps-new-exam-10.png" /]
[/slide]

[slide hideTitle]
# Edit Offer (15 Pts)

Logged-in users should be able to **edit** their **own** offers. 

Clicking on the `[Edit]` **button** of a **particular offer**, the **Edit Offer Page** should be displayed with an **already filled** input fields with the current offer information. 

By clicking on the `[Edit]` **button**, a put request should be sent to the **offers collections** and the current offer **should be changed**.


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

Logged-in users should be able to **view the details** about offers. 

Clicking on the `[Order details]` **button** on a **particular offer** should display the **Offer Details page**, where the **product name**, **picture**, **description** and the **price** are shown in the format below on the picture.

[image assetsSrc="js-apps-new-exam-12.png" /]

[/slide]

[slide hideTitle]
# Bonus: Notifications (5 Pts)

In case of a **successful** action (creating an offer, login, registration, edit, delete), a **notification message (green)** should be shown, which disappears after **3 seconds**.

[image assetsSrc="js-apps-new-exam-13.png" /]

In case of an **error** (wrong passwords, wrong ajax call, authorization, etc...), **an error notification message (red)** should be shown, which disappears after **3 seconds** or **on a user click**.

[image assetsSrc="js-apps-new-exam-14.png" /]

**Note**: The notification should stay visible also when redirected to another page. 

By default, all notifications are styled with `display: none`.
[/slide]

[slide hideTitle]
# Bonus: Buy an item and Profile page (10 Pts)

In these cases when some of the offers are **not made** from the currently logged-in user, in the section "**Actions**" there must be a `[Buy]` button.

By clicking on the `[Buy]` button, the current product must be successfully bought by the user.

If there are no quantities of the products, you do not have to remove them from the list. Store the number of purchases in the database for the current user.

[image assetsSrc="js-apps-new-exam-15.png" /]


[image assetsSrc="js-apps-new-exam-16.png" /]

## Profile Page

On the NavBar (header), you must be added a new link `[Profile]` which refers to the currently logged user. 

[image assetsSrc="js-apps-new-exam-17.png" /]

It should display **2** types of information: email for the current user and **number of purchases** that the current user is made. 

**Any other info is static** and you do not have to think about it.

[image assetsSrc="js-apps-new-exam-18.png" /]

**Note: Each view should have its own unique and properly named action (URL), to be able to get the full points from each section.**

[/slide]
