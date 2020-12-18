# JS Applications Exam: the SoftWiki SPA

[slide]
# Description

[code-task title="SoftWiki SPA" taskId="js-applications-softwiki-spa" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(){
  // Write your code here
}
```
[/code-editor]
[task-description]

# Description

[Download resources here!](https://mega.nz/file/rdgCzJpC#VAzRE_PzHsl0P4q4sjT_2hHepEfkJlEIr9JjwTscpVg)

You are assigned to implement a **Web application** (SPA) using HTML5, JavaScript, AJAX, REST and JSON with cloud\-based backend \(Firebase or Kinvey\).

Using libraries like **jQuery**, **Handlebars** and **PageJs** is allowed but is **not obligatory**. 

The app keeps **users** and **articles**. 

**Users** should be able to **register** and **login**. 

Logged\-in users should be able to view all articles, create articles, see details about an article and **logout**. 

Logged\-in users should also be able to edit or delete the articles they have created. Create a Firebase REST Service.

Register at [Firebase](https://firebase.google.com) and create application to keep your data in the cloud.

Create a collection called **articles**. 

Each **article** has a **title**, **category**, **content** and **creator.** 

[image assetsSrc="js-application-exam-1.png" /]

[image assetsSrc="js-application-exam-2.png" /]

Then go to the **rules** and **edit** them to look like this:

[image assetsSrc="js-application-exam-3.png" /]

**1. Test the Firebase REST Services**

Using **Postman** or other HTTP client tool, test the REST service end points:

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

- Error response: 401 Unauthorized


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

- Response: 200 Ok

```
{key}:{
	"title": "Arrays",
	"category": "JavaScript",
	"content": "Lorem ipsum dolor sit amet, consectetur...",
    "creator-email": "peter.georgiev@email.com"
}
```

- Error response: 401 Unauthorized

```
{ "error": "InvalidCredentials", "description": "Invalid credentials. Please retry your request with correct credentials", "debug": "" }
```
## Delete Article

**DELETE** `https://{apiKey}.com/articles/{id}`

- Error response: 404 Not Found

```
{ "error": "EntityNotFound", "description": "This entity not found in the collection", "debug": "" }
```

- Error response: 401 Unauthorized

```
{ "error": "InvalidCredentials", "description": "Invalid credentials. Please retry your request with correct credentials", "debug": "" }
```

## The SoftWiki - HTML and CSS

You have been given the web design of the application as **HTML** \+ **CSS** files.

- Initially all views and forms are shown by the HTML. 

Your application may **hide/show elements** by CSS **(display: none)** or **delete/reattach** from and to the DOM all unneeded elements, or just display the views it needs to display.

- You may render the views/forms/components with **JavaScript** or **Handlebars**.

## Important

Don't change the elements' class names and ids. 

Don't rename form fields/link names/ids. 

You are **allowed** to add **data attributes** to any elements. 

You may modify **href attributes** of links and add **action/method** **attributes** to **forms**, to allow the use of a routing library.

**2. The SoftWiki- Client-Side Web Application**

**Design** and **implement** a client\-side front-end app (SPA) for managing articles. Implement the functionality described below.

## Navigation Bar (5 Pts)

Navigation links should correctly change the current page (view).

- Clicking on the links in the **Header** should display the view behind the link (views are represented as sections in the HTML code).

- Your application may **hide/show elements** by CSS \(**display**\: **none**\) or **delete/reattach** from and to the DOM all unneeded elements, or just display the views it needs to display.

The Logged-in user navbar should contain the following elements: `[SoftWiki]` which is a link to the **Home Page**, `[Create]` **and** `[Logout]`

[image assetsSrc="js-application-exam-4.png" /]

- The guest users header should contain the following elements:  `[SoftWiki]` which is a link to the Login page and `[Register]`.

[image assetsSrc="js-application-exam-5.png" /]

## Register User (5 Pts)

By given **email** and **password**, the app should register a new user in the system and should **redirect you to the home page.**

- Keep the user local data in the browser's **local/session storage.**

Register once and create/read awesome articles!

[image assetsSrc="js-application-exam-6.png" /]

## Login User / Guest Home Page (5 Pts)

By given **email** and **password**, the app should login an existing user.

- Keep the user local data in the browser's local storage.

- After a successful login **redirect to the home page.** 

You are one step away from awesome articles! 

[image assetsSrc="js-application-exam-7.png" /]

## Home Page (40 Pts)

Successfully logged-in users should be welcomed by the **Home page.**

They should be able to see all created articles. 

[image assetsSrc="js-application-exam-8.png" /]

If there are **NO** such articles, the following view should be displayed:

[image assetsSrc="js-application-exam-9.png" /]

## Create Article (10 Pts)

Logged-in users should be able to Create articles.

Clicking the `[Create]` link in the **NavBar** should display the **Create Article page.**

- **By default**, every newly created article must have additional information:

  - **Creator:** the email of the current user;

- The newly organizer article should be stored in the Firebase\Kinvey collection `articles`.

- After an article is created successfully you should be redirected to the **Home Page.**

[image assetsSrc="js-application-exam-10.png" /]

## Details (15 Pts)

Logged-in users should be able to **view details** about articles.

Clicking the `[Details]` link in of a **particular article** should **display** the **Article Details page.**

- If the currently logged-in user is the creator of the article, the `[Edit]` and `[Delete]` **buttons** should be set to **visible**, otherwise there should be only 1 button `[Back]` which redirects to the Home Page.

[image assetsSrc="js-application-exam-11.png" /]

[image assetsSrc="js-application-exam-12.png" /]

## Edit Article (10 Pts)

Logged-in users should be able to **edit** their **own** articles.

Clicking the `[Edit]` link of a **particular article** on the **Details page** should display the **Edit page:**

- After a successful edit the user should be redirected to the Home page.

[image assetsSrc="js-application-exam-13.png" /]

## Delete Article (5 Pts)

Logged-in users should be able to delete their articles.

Clicking the `[Delete]` **link** of an article (on the **Details page**) should **delete** the **article.**

- After **successful article delete** you should  show the **Home page.**

## (BONUS) Sorting:  (5 Pts)

The articles in the **home page** (for registered users), should be sorted in **descending** order by **title.**

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
