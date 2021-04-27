# Homework

[slide hideTitle]
# Problem: Messenger

Download the **resources** for these tasks [here](https://videos.softuni.org/resources/javascript/javascript-applications/JS-Applications-Remote-Databases-Resources-New.zip).

## Working with Remote Data
For the solution of some of the following tasks, you will need to use an up-to-date version of the local REST service, provided in the lesson’s resources archive. You can [read the documentation here](https://github.com/softuni-practice-server/softuni-practice-server).

## Your Task
Create a JavaScript application that **records** and **displays** messages. 

The user must be able to:
- **post** a message, which contains a name and content 
- **retrieve** all currently recorded messages

The **URL** for the requests is: `http://localhost:3030/jsonstore/messenger`

When the \[**Send**\] **button** is clicked, you should create a **new object** and send a **POST request** to the given URL. 

Use the following message structure:

```
{
  author: authorName,
  content: msgText,
}
```

If you click on the \[**Refresh**\] **button** you should **get all** messages with a **GET request** and display them into the textarea in the following message format:

`{author}: {message}`

## Examples

[image assetsSrc="Remote-Databases(21).png" /]

[image assetsSrc="Remote-Databases(22).png" /]

[/slide]

[slide hideTitle]
# Problem: Phonebook

Create a JavaScript program that can **load**, **create** and **delete** entries from a **phonebook**. 

You will be given an **HTML template** to which you must **bind** the needed **functionality**.

When the \[**Load**\] button is clicked, a **GET** request should be sent to the server to get all phonebook entries. 

Each received entry should be in a `<li>` tag inside the `<ul>` tag with an **id of "phonebook"** in the following format: `<person>: <phone>` and a \[**Delete**\] button attached. 

Pressing the \[**Delete**\] button should send a **DELETE** request to the server and delete the entry. 

The received response will be an object in the following format:

`{<key>:{person:<person>, phone:<phone>}, <key2>:{person:<person2>, phone:<phone2>,…}` where the `<key>` is a unique key given by the server, while `<person>` and `<phone>` are the actual values.

When the \[**Create**\] button is clicked, a new **POST** request should be made to the server with the information from the **person** and **phone textboxes**. 

The aforementioned textboxes should then be cleared and the phonebook should be automatically reloaded (as if the \[**Load**\] button was pressed).

The data **sent** on a **POST** request should be a **valid JSON object**, containing **person** and **phone** properties. 

**Example format:**

```
{
  "person": "<person>",
  "phone": "<phone>"
}
```

The **URL** to which your program should make requests is: [http://localhost:3030/jsonstore/phonebook](http://localhost:3030/jsonstore/phonebook)

**GET** and **POST** requests should go to `http://localhost:3030/jsonstore/phonebook`.

**DELETE** requests should go to `http://localhost:3030/jsonstore/phonebook/:key`, where \:**key** is the unique key of the entry (you can find out the **key** from the key property in the **GET** request)

## Screenshots:

[image assetsSrc="Remote-Databases(23).png" /]

[/slide]

[slide hideTitle]
# Problem: Students

Your task is to implement а functionality for creating and listing students from a database. 

Create a new collection called "**students**".

Each student has:
- `FirstName` - **string**, non-empty
- `LastName` - **string**, non-empty
- `FacultyNumber` - **string** of numbers, non-empty
- `Grade` - **number**, non-empty
  
When creating a new student, make sure you name the properties accordingly.

You will also need to extract students. 

You will be given an **HTML template** with a table in it. 

Create an **AJAX request** that extracts all the students.

The URL for this task is: `http://localhost:3030/jsonstore/collections/students`

## Screenshots

[image assetsSrc="Remote-Databases(24).png" /]

[/slide]

[slide hideTitle]
# Problem: Book Library

Your task is to implement the CRUD operations on a virtual book library. 

**Use the following route to retrieve all books using a GET request:**

`http://localhost:3030/jsonstore/collections/books`

Use the provided skeleton to create the missing functionalities.

Load all books by clicking on the \[**LOAD ALL BOOKS**\] button. 

[image assetsSrc="Remote-Databases(25).png" /]

## Get Book 
This functionality is not needed in this task, but you can **try it out** in Postman by sending a **GET** request to **retrieve the book** with the ID: "**d953e5fb-a585-4d6b-92d3-ee90697398a0**". 

Send a **GET** request to this **URL**:

`http://localhost:3030/jsonstore/collections/books/:id`

## Create Book
Create a functionality for creating a new book when the \[**Submit**\] button is clicked. 

Before sending the request, validate the fields (make sure that they are not empty). 

To **create** a book, you have to send a **POST** request to the database and the JSON body should be in the **following** format: 

```
{
  "author": "New Author",
  "title": "New Title"
}
```

## Update Book 
When clicking on the \[**Edit**\] button of a book, fill in the information about the book in the fields, as shown here:

[image assetsSrc="Remote-Databases(26).png" /]

The HTTP command **"PUT" modifies** an existing HTTP **resource**. 

The URL is: `http://localhost:3030/jsonstore/collections/books/:id`

The JSON body should be in the **following** format:

```
{
  "author": "Changed Author",
  "title": "Changed Title"
}
```

## Delete Book 
By clicking on the delete button, you have to delete the book without confirmation. 

To delete a book, send a **DELETE request** to: `http://localhost:3030/jsonstore/collections/books/:id`

[/slide]

[slide hideTitle]

# Problem: Book Library

Your task is to implement the CRUD operations and a functionality for User Authentication.

If the user is not logged in, all of the buttons should be disabled except for the \[**LOAD**\] button.

By clicking it, all the catches should be loaded from the server and render them like on the picture:

[image assetsSrc="Remote-Databases(27).png" /]

## Load Button

Pressing on the \[**Load**\] button should **list all** catches. 

Applies to **all users**.

## Update Button

Pressing on the \[**Update**\] button should send a PUT request and **update** the catch in Firebase. 

This functionality must be available **only** for the **creator of the catch**.

## Delete Button

Pressing on the \[**Delete**\] button should **delete the catch** both from the database and from the page. (
   
Again, this must be available **only** for the **creator of the catch**) 

## Add Button

Pressing on the \[**Add**\] button should **submit a new catch** with the values of the inputs in the fieldset with an `id` of "**addFrom**". 

Only acessible for **logged in** users.

## Properties

Each **catch** should have:

- `angler` - **string** representing the name of the person who caught the fish
  
- `weight` - **floating-point number** representing the weight of the fish in kilograms
  
- `species` - **string** representing the name of the fish species
  
- `location` - **string** representing the location where the fish was caught
  
- `bait` - **string** representing the bait used to catch the fish
  
- `captureTime` - **integer number** representing the time needed to catch the fish in minutes

## Requests

Use the following **requests** to access your data:

- **List All Catches**
  * Endpoint - `http://localhost:3030/data/catches`
  * Method: **GET**
  
  
- **Create a New Catch**
  * Endpoint: `http://localhost:3030/data/catches` 
  * Method: **POST**
  * Request body (**JSON**): 
  ```
  {"angler":"…", "weight":…, "species":"…", "location":"…",
   "bait":"…", "captureTime":…}
  ```


- **Update a Catch**
  * Endpoint: `http://localhost:3030/data/catches/:catchId`
  * Method: **PUT**
  * Request body (**JSON**): 
  ```
  {"angler":"…", "weight":…, "species":"…", "location":"…",
   "bait":"…", "captureTime":…}
  ```


- **Delete a Catch**
  * Endpoint: `http://localhost:3030/data/catches/:catchId`
  * Method: **DELETE**

[/slide]