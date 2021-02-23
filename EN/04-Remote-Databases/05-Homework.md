# Homework

[slide hideTitle]

# Problem: Books

**Here is a link to the** [resources](https://videos.softuni.org/resources/javascript/javascript-applications/JS-Applications-Remote-Databases-Homework-BOOKS.zip) **for this task.**

[image assetsSrc="Remote-Databases(1).png" /]

The following REST services will be created automatically to access your data:

- **List All Books**
   - endpoint: `https://baas.kinvey.com/appdata/[:appId]/books`
   - method: **GET**
   - headers: Basic Authorization with user credentials
   - returns (JSON)

- **Create a New Book**
   - endpoint: `https://baas.kinvey.com/appdata/[:appId]/books`
   - method: **POST**
   - headers: basic authorization with user credentials and content-type (application\/json)
   - request body (JSON): `{"title":"…", "author":"…", "isbn":"…"}`

- **Update a Book**
   - endpoint: `https://baas.kinvey.com/appdata/[:appId]/books/[:bookId]`
   - method: **PUT**
   - headers: basic authorization with user credentials and content-type (application/json)
   - request body (JSON): `{"title":"…", "author":"…", "isbn":"…"}`

- **Delete a Book**
   - endpoint: `https://baas.kinvey.com/appdata/[:appId]/books/[:bookId]`
   - method: DELETE
   - headers: basic authorization with user credentials and content-type (application/json)

Test your REST Service, e.g. using **Postman**. 

Try to list all books in **JSON format** with an **HTTP GET request** to the **REST API**.

## List All Books

Use the skeleton provided in the resources folder. 

Add an **AJAX** call that takes all books from your application as a JSON object and **displays** them when the page loads.

## Create a Book

Add an **HTML form** with `[Submit]` **button** for adding a new book. 

When the button is **pressed**, create a new book using its **REST API** with an **AJAX request**.

## Edit a Book

Implement "**Edit a Book**" functionality. 

Clicking on a book should **load its data** in an **HTML form**. 

By **clicking** the `[Edit]` button, the **book data** should be **updated** at the **server side** with an **AJAX request**.

## Delete a Book

Implement "**Delete a Book**" functionality. 

Each book should have a `[Delete]` button. 

Clicking on it should **delete the book at the server** side with an AJAX request.

## Add Tags for Each Book

Implement **tags** for the books. 

Tags should be stored in the Book collection in a column "**tags**" as **array of strings**. 

List the tags for each book. 

Implement **add** \/ **edit** \/ **delete** for tags when a book is **created** \/ **updated**.

[image assetsSrc="Remote-Databases(15).png" /]

[/slide]

[slide hideTitle]

# Problem: Students

**Here is a link to the** [resources](https://videos.softuni.org/resources/javascript/javascript-applications/JS-Applications-Remote-Databases-Homework-STUDENTS.zip) **for this task.**

Your task is to create functionalities for creating and listing students from a database.

Create a new collection called "**students**".

Each student has a/an:

- **ID** - a **number**, non-empty
- **FirstName** - a **string**, non-empty
- **LastName** - a **string**, non-empty
- **FacultyNumber** - a **string of numbers**, non-empty
- **Grade** - a **number**, non-empty

Write a functionality for creating students.

When creating a new student, make sure you name the properties accordingly.

Create at least one student to test your code.

You will also need to extract the students.

You will be given an **HTML template** with a table in it.

Create an **AJAX request** that extracts all of the students.

Upon fetching all of the students from the database, add them to a table, each on a new row, **sorted in ascending order by ID**.

**Use the skeleton from the provided resources.**

[image assetsSrc="Remote-Databases(16).png" /]

[/slide]

[slide hideTitle]

# Problem: Wild Wild West

**Here is a link to the** [resources](https://videos.softuni.org/resources/javascript/javascript-applications/JS-Applications-Remote-Databases-Homework-WILD-WILD-WEST.zip) **for this task.**

**This task is not included in the final result**.

Write **REST services** for a simple Western game.

Create a collection called "players", each player having a **name**, **money**, and **bullets** to hold information about the players in the game.

- **name** - a **string** representing the name of the current player
- **money** - an **integer** number representing the current player's money
- **bullets** - an **integer** number representing the current bullets of the player

## HTML and JS

You will be provided with a skeleton project containing an **HTML template** and **JS files**.

The "loadCanvas.js" is a simple implementation for the game and your job is to **attach events** to all of the buttons and make the needed **AJAX requests**.

When the page is loaded a **GET** request should be sent to the server to get all players and load them in the div with ID **players**.

An example entry is left in the HTML to demonstrate the representation of a player and their placement.

Whenever the `[Save]` button is pressed, the progress of the current player, if any should be saved.

Use a **PUT** request to update the data on the server:

- The **canvas** and the buttons "Save" and "Reload" should be hidden
- The **clearInterval** should be called on the "canvas.intervarId" property used for the main loop of the game

Whenever the `[Reload]` button is pressed, the player's money should be **reduced by 60** and their bullets should be **set to 6**.

Whenever the `[Add Player]` button is clicked, a new Player, with the specified name, should be created and the players should be displayed with the newly created player.

Each new player **starts** with **500 Money** and **6 bullets**.

Pressing the `[Play]` button on a player should:

- Call the `[Save]` button
- Display the **canvas**, `[Save]` and `[Reload]` buttons
- Call the `loadCanvas()` function from the "loadCanvas.js" file
- Pass to it the **new player** as an **object**, containing those properties name, money, and bullets

When a player's `[Delete]` button is pressed, the player should be deleted, both from the HTML and the server.

**First Example:**

[image assetsSrc="Remote-Databases(17).png" /]

**Second Example:**

[image assetsSrc="Remote-Databases(18).png" /]

[/slide]
