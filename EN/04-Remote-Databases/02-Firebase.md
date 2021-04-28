# Firebase

[slide hideTitle]

# What is Firebase?

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/05.JS-Applications-Remote-Databases/EN/JS-apps-remote-dbs-7-8-what-is-a-firebase-FIX-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


**Firebase** is a toolset for building, improving, and growing your application.

It gives us the tools to work with most of the services developers would typically have to build themselves.

That includes **features** like analytics, authentication, databases, configuration, file storage, push messaging, etc. 

The services are **cloud-hosted** and scale with little to no effort on the developer's part.

[/slide]

[slide hideTitle]

# Firebase REST API CRUD Operations: Part One

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/05.JS-Applications-Remote-Databases/EN/JS-apps-remote-dbs-9-10-firebase-rest-api-crud-operations-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Here are some of the methods used when working with the database.

In this example, we will be using a Book database, which has been created already for us on Firebase.

**Note: You may not get the same results as shown in the examples below.** 

**This is because as other students experiment with the database, they can delete or create new books.**

**This way, the database will inevitably change.**

## Getting All Books

Open **Postman** and create a new request. 

Choose the **GET** method and fort the **URL**, copy and paste the following line into **Postman**:

`https://softuni-remotedb.firebaseio.com/.json`

Or use the one below, the result will be the same:

`https://softuni-remotedb.firebaseio.com/books.json`

Click the **Send** button to get the response from the server.

As a result, we get all of the books stored in the database.

```js
{
    "books": {
        "books": [
            null,
            {
                "author": "J.K. Rowling",
                "title": "Harry Potter and the Philosopher's stone"
            },
            {
                "author": "Steven King",
                "title": "IT"
            },
            {
                "author": "Herman Melville",
                "title": "Moby-Dick"
            }
        ]
    }
}
```

## Getting a Single Book

Next, we will retrieve a single book from the database.

Choose the **GET** method and for the **URL**, copy and paste the following line into **Postman**:

`https://softuni-remotedb.firebaseio.com/books/books/1.json`

Click the **Send** button to get the response from the server.

As a result, we get the book at position **1** from the books array.

```js
{
    "author": "J.K. Rowling",
    "title": "Harry Potter and the Philosopher's stone"
}
```

Now let us try and get the author of the book.

Choose the **GET** method and for the **URL**, copy and paste the following line into **Postman**:

`https://softuni-remotedb.firebaseio.com/books/books/1/author.json`

Click the **Send** button to get the response from the server.

```js
"J.K. Rowling"
```

## Adding a Book

Now we will add a new book to the database using the **POST** method.

Choose the **POST** method and for the **URL**, copy and paste the following line into **Postman**:

`https://softuni-remotedb.firebaseio.com/books.json`

Click on the **Body** button and then click on the **raw** button.

Choose the **JSON** format in the last column.

Then copy and paste the following JSON object:

```js
{
    "title": "New title",
    "author": "New author"
}
```

Here is an example of how it should look in **Postman**.

[image assetsSrc="Remote-Databases.png" /]

The response from the server will be an **ID**, which is a **random string**.

Here is the response from the server for our newly created book.

```js
{
    "name": "-MOpe8WgPwqaw7tdKwIN"
}
```

Let us delete the book we have just created using the **DELETE** method.

Choose the **DELETE** method and for the **URL**, copy and paste the following line into **Postman**:

`https://softuni-remotedb.firebaseio.com/books/-MOpe8WgPwqaw7tdKwIN.json`

"-MOpe8WgPwqaw7tdKwIN" is the **new book ID** we received when we **created** the book.

**When we create a book, we will get a different ID. Use The ID you received from the server for the example.**

The response from the server will be **200 OK**.  It also will return **null**.


[/slide]

[slide hideTitle]

# Firebase REST API CRUD Operations: Part Two

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/05.JS-Applications-Remote-Databases/EN/JS-apps-remote-dbs-11-accessing-firebase-rest-api-with-postman-FIX-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The next step is to edit a book.

Choose the **PUT** method and for the **URL**, copy and paste the following line into **Postman**:

`https://softuni-remotedb.firebaseio.com/books/2.json`

Click on the **Body** button and then click on the **raw** button.

Choose the **JSON** format in the last column.

Then copy and paste the following JSON object:

```js
{
    "title": "Edited",
    "year": 1980,
    "ISBN": "954X"
}
```

If the book **already exists** in the database, it will be updated, and the new JSON data will replace the old data.

If the book **does not exist** in the database, it will be **created**.

This is the response from the server:

```js
{
    "ISBN": "954X",
    "title": "Edited",
    "year": 1980
}
```

If we want to update only specific data, for example, to change the book author, we use the **PATCH** method.

Choose the **PATCH** method and for the **URL**, copy and paste the following line into **Postman**:

`https://softuni-remotedb.firebaseio.com/books/2.json`

Click on the **Body** button and then click on the **raw** button.

Choose the **JSON** format in the last column.

Then copy and paste the following JSON object:

`{"year":1981, "author":"Author Changed"}`

With the **PATCH** method, we will only update the data we target with the **JSON** object.

In this example, the year will change from **1980** to **1981**, and a new **author** property will be created as well.

Here is the response from the server:

```js
{
    "year": 1981,
    "author": "Author Changed"
}
```

Now let us try one more example using the **PUT** method.

Choose the **PUT** method and for the **URL**, copy and paste the following line into **Postman**:

`https://softuni-remotedb.firebaseio.com/books/2.json`

Click on the **Body** button and then click on the **raw** button.

Choose the **JSON** format in the last column.

Then copy and paste the following JSON object:

"New author was assigned"

Here is the response from the server:

```js
"New author was assigned"
```

Now, if we send a **GET** request to the server, we will get the following response:

```js
{
    "books": {
        "2": "New author was assigned",
        "books": [
            null,
            {
                "author": "J.K. Rowling",
                "title": "Harry Potter and the Philosopher's stone"
            },
            {
                "author": "Steven King",
                "title": "IT"
            },
            {
                "author": "Herman Melville",
                "title": "Moby-Dick"
            }
        ]
    }
}
```

Be careful with the **PUT** method. Use the **PATCH** method instead.

It will update only the data passed with the JSON object.

Finally, delete the book we created.

Choose the **DELETE** method and for the **URL**, copy and paste the following line into **Postman**:

`https://softuni-remotedb.firebaseio.com/books/2.json`

The response from the server will be **200 OK**, and it will return **null** in the **body**.

[/slide]

[slide hideTitle]

# Authentication vs. Authorization

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/05.JS-Applications-Remote-Databases/EN/JS-apps-remote-dbs-12-authentication-vs-authorization-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Authentication is about validating your credentials such as Username, ID, and password to verify your identity.

Authorization occurs after your identity has been authenticated by the system, which gives you full access to resources such as information, files, databases, etc.

[/slide]

[slide hideTitle]

# Problem with Solution: All Books

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/05.JS-Applications-Remote-Databases/EN/JS-Applications-Remote-Database-Firebase-All-Books-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Make sure you have a **Google** account and you are **signed in**.

Click [here](https://console.firebase.google.com) to go to the **Firebase Console**.

Once you are signed in, you should be able to see this **window**:

[image assetsSrc="Remote-Databases(19).png" /]

Create a new project by clicking on either "**Add project**" or "**Create a project**".

[image assetsSrc="Remote-Databases(2).png" /]

Type in a project **name**, for example "**TestApp**", and click "**Continue**".

[image assetsSrc="Remote-Databases(3).png" /]

**Disable Google Analytics** as you will not need them for now.

Then, click "**Create project**".

[image assetsSrc="Remote-Databases(4).png" /]

Click "**Continue**".

[image assetsSrc="Remote-Databases(5).png" /]

Next, we need to add an App.

Add a **web application** by clicking on this sign "\<\/\>".

[image assetsSrc="Remote-Databases(6).png" /]

Type in a name for the App, for example, "**books**" and click "**Register app**".

[image assetsSrc="Remote-Databases(7).png" /]

We will get a script, which we will use later when working with the Firebase SDK.

Click "**continue to console**".

[image assetsSrc="Remote-Databases(8).png" /]

## Create a Database

Click on "**Realtime Database**".

[image assetsSrc="Remote-Databases(9).png" /]

Then click on "**Create Database**".

[image assetsSrc="Remote-Databases(10).png" /]

Press the "**Next**" button.

[image assetsSrc="Remote-Databases(11).png" /]

Choose the option "**Start in test mode**" and click "**Enable**".

[image assetsSrc="Remote-Databases(12).png" /]

The database is now created **successfully**.

Copy the **database URL** so that you can use it in **Postman** to create books.

[image assetsSrc="Remote-Databases(13).png" /]

Create a few books using the **POST** method in **Postman**, or do that directly from the database interface.

**Example:**

[image assetsSrc="Remote-Databases(14).png" /]

To **get all** of the books, you have to use the **database URL** you received when you created the database, followed the name of the **entity**, which is "**books**", and the "**.json**" extension at end.

The method is "**GET**":

- **URL:** `https://databaseURL/books.json`

[/slide]

[slide hideTitle]

# Problem with Solution: Get a Book

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/05.JS-Applications-Remote-Databases/EN/JS-Applications-Remote-Database-Firebase-Get-Book-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

To get a book, choose the "**GET**" method in Postman and use the following **URL**.

`https://databaseURL/books/bookId.json`

[/slide]

[slide hideTitle]

# Problem with Solution: Create Books

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/05.JS-Applications-Remote-Databases/EN/JS-Applications-Remote-Database-Firebase-Create-Book-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

To create a book, we will have to send a "**POST**" request, and the JSON body should be in the following format:


```js
{
    "Author": "Steven King",
    "title": "IT"
}
```

- **URL:** `https://databaseURL/books.json`

[/slide]

[slide hideTitle]

# Problem with Solution: Patch Book

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/05.JS-Applications-Remote-Databases/EN/JS-Applications-Remote-Database-Firebase-Patch-Book-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The HTTP command "**PATCH**" modifies an existing HTTP resource.

It can also create the resource if it does not exist.

The JSON body should be in the following format:

```js
{
    "Author": "Steven King",
    "year": 1981
}
```

- **URL:** `https://databaseURL/books/bookId.json`

[/slide]

[slide hideTitle]

# Problem with Solution: Change Book Author

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/05.JS-Applications-Remote-Databases/EN/JS-Applications-Remote-Database-Firebase-Change-Book-Author-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The next task is to execute the "**PUT**" command. 

In our case, we have to change the author's name to "**New author was assigned**".

The JSON body should be in the following format:

"**New author was assigned**".

- **URL:** `https://databaseURL/books/bookId.json`

[/slide]
