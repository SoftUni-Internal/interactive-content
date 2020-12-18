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
[/slide]
