
[slide hideTitle]

# The SoftWiki SPA

**Here is a link to the** [resources](https://videos.softuni.org/resources/javascript/javascript-applications/Workshop_SoftWiki_resouces.zip) **for this task.**

In this workshop, we are going to create a **Single Page Application** (SPA) using HTML5, JavaScript, AJAX, REST, and JSON as well as utilizing a cloud-based backend (**Firebase** or **Kinvey**). 

Using libraries like **jQuery**, **lit-html** and **Page.js** is allowed but is **not obligatory**.

The app must maintain information **about** users and **articles**. 

**Users** should be able to **register** and **login** to the application.

Logged-in users should be able to view all of the articles, create articles, see details about an article, and **logout**. 

Logged-in users should also be able to edit or delete the articles that they have created. 

Create a Firebase REST Service. 

Create a collection called **articles**.

Each **article** has a **title**, **category**, **content** and **creator.**

[image assetsSrc="js-application-exam-1.png" /]

[image assetsSrc="js-application-exam-2.png" /]

Then go to the **rules** and **edit** them to look like this:

[image assetsSrc="js-application-exam-3.png" /]
[/slide]

[slide hideTitle]
# Test the Firebase REST Services

Using **Postman** or any other HTTP client tool, test the REST service endpoints:

## List All Articles

**GET** `https://{apiKey}.com/articles.json`

## Create Article

**POST** `https://{apiKey}.firebaseio.com/articles.json`

- Request body:
```
{
    "title": "Arrays",
    "category": "JavaScript",
    "content": "Lorem ipsum dolor sit amet, consectetur...",
    "creator-email": "peter.georgiev@email.com"
}

```
- Response: 201 Created

```
{Key}:{
    "title": "Arrays",
    "category": "JavaScript",
    "content": "Lorem ipsum dolor sit amet, consectetur...",
     "creator-email": "peter.smith@email.com"
}
```

- Error response: `401 Unauthorized`


```
{ "error": "InvalidCredentials", "description": "Invalid credentials. Please retry your request with correct credentials", "debug": "" }
```
## Edit Article

**PUT** `https://{apiKey}.com/articles/{id}`

- Request body

```
{
    "title": "Arrays",
    "category": "JavaScript",
    "content": "Lorem ipsum dolor sit amet, consectetur...",
      "creator-email": "peter.smith@email.com"
}
```

- Response: `200 OK`

```
{key}:{
    "title": "Arrays",
    "category": "JavaScript",
    "content": "Lorem ipsum dolor sit amet, consectetur...",
    "creator-email": "peter.georgiev@email.com"
}
```

- Error response: `401 Unauthorized`

```
{ "error": "InvalidCredentials", "description": "Invalid credentials. Please retry your request with correct credentials", "debug": "" }
```
## Delete Article

**DELETE** `https://{apiKey}.com/articles/{id}`

- Error response: `404 Not Found`

```
{ "error": "EntityNotFound", "description": "This entity not found in the collection", "debug": "" }
```

- Error response: `401 Unauthorized`

```
{ "error": "InvalidCredentials", "description": "Invalid credentials. Please retry your request with correct credentials", "debug": "" }
```
[/slide]

[slide hideTitle]
# HTML and CSS

You have been given the web design of the application as **HTML** \+ **CSS** files.

- Initially, all of the views and the forms are shown in the HTML file

Your application may **hide/show** elements using CSS (**display: none**) or **delete/reattach** all unneeded elements from and to the DOM, or just render the views it needs to displayed. 

- You may render the views/forms/components with **JavaScript** or **lit-html**.

## Important

Do not change the elements' class names and IDs. 

Do not rename the form fields/link names/ids. 

You **are allowed** to add **data attributes** to any elements. 

You may modify the **href attributes** of the links and add **actions/method** **attributes** to **the forms**, to allow the use of a routing library. 


[/slide]

[slide hideTitle]
# Navigation Bar (5 Pts) 

Navigation links should correctly change the current page (view).

- Clicking on the buttons on the navigation bar should display the view behind the link (views are represented as sections in the HTML code)

The Logged-in user navbar should contain the following elements: m`[SoftWiki]` which is a link to the **Home Page**, `[Create]` **and** `[Logout]`

[image assetsSrc="js-application-exam-4.png" /]

- The guest users header should contain the following elements: `[SoftWiki]` which is a link to the Login page and `[Register]`.

[image assetsSrc="js-application-exam-5.png" /]

[/slide]
[slide hideTitle]
# Register User (5 Pts)

The app should register a new user in the system using their **email** and **password** credentials and should redirect the user to the home page.

- Keep the user local data in the browser's **local/session storage**

[image assetsSrc="js-application-exam-6.png" /]

[/slide]

[slide hideTitle]

# Login User / Guest Home Page (5 Pts)

 Тhe app should log in an existing user using **their email** and **password**. 

- Keep the user's local data in the browser's local storage

- After a successful login **redirect to the home page**

[image assetsSrc="js-application-exam-7.png" /]
[/slide]

[slide hideTitle]
# Home Page (40 Pts)

Successfully logged-in users should be welcomed when entering the **Home page**. 

They should be able to see all of the created articles. 

[image assetsSrc="js-application-exam-8.png" /]

If there are **NO** such articles, the following view should be displayed:

[image assetsSrc="js-application-exam-9.png" /]

[/slide]

[slide hideTitle]
# Create Article (10 Pts)

Logged-in users should be able to create articles.

Clicking on the `[Create]` button, on **NavBar**, should display the **Create Article page.**

- **By default**, every newly created article must have additional information:

  - **Creator:** the email of the current user

- The newly created article should be stored in the Firebase\Kinvey collection "articles"

- After an article is created successfully, the application should be redirect to the **Home Page** 

[image assetsSrc="js-application-exam-10.png" /]
[/slide]

[slide hideTitle]
# Details (15 Pts)

Logged-in users should be able to **view the details** about the articles.

Clicking on the `[Details]` button of a **particular article**, should **display** the **Article Details page.**

- If the currently logged-in user is the creator of that article, the `[Edit]` and `[Delete]` **buttons** should be set to **visible**. 

Otherwise there should be only 1 button, `[Back]`, which redirects to the Home Page.

[image assetsSrc="js-application-exam-11.png" /]

[image assetsSrc="js-application-exam-12.png" /]

[/slide]

[slide hideTitle]
# Edit Article (10 Pts)

Logged-in users should be able to **edit** their **own** articles.

Clicking the `[Edit]` button of a **particular article** (on the Details page) should display the **Edit page:**

- After successfully editing an article, the user should be redirected to the **Home page**

[image assetsSrc="js-application-exam-13.png" /]
[/slide]

[slide hideTitle]
# Delete Article (5 Pts)

Logged-in users should be able to delete their own articles.

Clicking the `[Delete]` **button** of an article (on the **Details page**) should **delete** the **article.**

- After successfully deleting an **article**, the user should be redirected to the **Home page**

[/slide]

[slide hideTitle]
## (BONUS) Sorting:  (5 Pts)

The articles, on in the **home page** (for the registered users), should be sorted in **descending** order by their **title.**

[/slide]
