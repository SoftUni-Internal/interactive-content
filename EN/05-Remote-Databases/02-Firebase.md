# Firebase

[slide]

# What is Firebase?

Firebase is a toolset to “build, improve, and grow your app”.

The tools it gives you cover a large portion of the services that developers would normally have to build themselves.

This includes things like analytics, authentication, databases, configuration, file storage, push messaging, and the list goes on. 

The services are hosted in the cloud, and scale with little to no effort on the part of the developer.

[/slide]

[slide]

# Firebase REST API CRUD Operations 1

Here are some of the methods we use when working with the database.

In this example we will be using a Book database, which is already created for us on Firebase.

**Note: You may not get the same results as shown in the examples below. This is because as people experiment with the database they can delete or create new books. This way the database will inevitably change.**

Open **Postman** and create a new request. 

Choose **GET** for the method and for the **URL** copy and paste the following line into **Postman**:

`https://softuni-remotedb.firebaseio.com/.json`

or use the one below, the result will be the same:

`https://softuni-remotedb.firebaseio.com/books.json`

Click the **Send** button to get the response from the server.

As a result we get all the books stored in the database.

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

Next we will retrieve a single book from the database.

Choose **GET** for the method and for the **URL** copy and paste the following line into **Postman**:

`https://softuni-remotedb.firebaseio.com/books/books/1.json`

Click the **Send** button to get the response from the server.

As a result we get the book at position 1 from the books array.

```js
{
    "author": "J.K. Rowling",
    "title": "Harry Potter and the Philosopher's stone"
}
```

Now let us try and get the author of the book.

Choose **GET** for the method and for the **URL** copy and paste the following line into **Postman**:

`https://softuni-remotedb.firebaseio.com/books/books/1/author.json`

Click the **Send** button to get the response from the server.

```js
"J.K. Rowling"
```

Now we will add a new book to the database using the **POST** method.

Choose **POST** for the method and for the **URL** copy and paste the following line into **Postman**:

`https://softuni-remotedb.firebaseio.com/books.json`

Click on the **Body** button and then click on the **raw** button.

Choose **JSON** format in the last column.

Then copy and paste the following JSON object:

`{"title":"New title", "author":"New author"}`

This is an example of how it should look in **Postman**.

[image assetsSrc="Remote-Databases.png" /]

The response from the server will be an **ID**, which is a **random string**.

This is the response from the server for our newly created book.

```js
{
    "name": "-MOpe8WgPwqaw7tdKwIN"
}
```

Let us delete the book we have just created using the **DELETE** method.

Choose **DELETE** for the method and for the **URL** copy and paste the following line into **Postman**:

`https://softuni-remotedb.firebaseio.com/books/-MOpe8WgPwqaw7tdKwIN.json`

"-MOpe8WgPwqaw7tdKwIN" is the **new book ID** we received when we **created** the book.

**When you create a book, you will get a different ID. Use The ID you received from the server for the example.**

The response from the server will be **200 OK** and it will return **null**.

This means that the book has been deleted.


[/slide]

[slide]

# Firebase REST API CRUD Operations 2

Next step is to edit a book.

Choose **PUT** for the method and for the **URL** copy and paste the following line into **Postman**:

`https://softuni-remotedb.firebaseio.com/books/2.json`

Click on the **Body** button and then click on the **raw** button.

Choose **JSON** format in the last column.

Then copy and paste the following JSON object:

`{"title":"Edited", "year":1980, "ISBN":"954X"}`

If the book **already exist** in the database, it will be updated and the new JSON data will replace the old data.

If the book **does not exist** in the database it will be **created**.

This is the response from the server:

```js
{
    "ISBN": "954X",
    "title": "Edited",
    "year": 1980
}
```

If we want to update only specific data, for example change the author of the book then we use the **PATCH** method.

Choose **PATCH** for the method and for the **URL** copy and paste the following line into **Postman**:

`https://softuni-remotedb.firebaseio.com/books/2.json`

Click on the **Body** button and then click on the **raw** button.

Choose **JSON** format in the last column.

Then copy and paste the following JSON object:

`{"year":1981, "author":"Author Changed"}`

With the **PATCH** method we will only update the data we are targeting with the **JSON** object.

In this example the year will change from **1980** to **1981** and a new property **author** will be created as well.

This is the response from the server:

```js
{
    "year": 1981,
    "author": "Author Changed"
}
```

Now let us try one more example using the **PUT** method.

Choose **PUT** for the method and for the **URL** copy and paste the following line into **Postman**:

`https://softuni-remotedb.firebaseio.com/books/2.json`

Click on the **Body** button and then click on the **raw** button.

Choose **JSON** format in the last column.

Then copy and paste the following JSON object:

"New author was assigned"

This is the response from the server:

```js
"New author was assigned"
```

Now if we send a **GET** request to the server, we will get the following response:

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

You should be carefull with the **PUT** method. Use the **PATCH** method, it will update only the data passed with the JSON object.

Finally delete the book we created.

Choose **DELETE** for the method and for the **URL** copy and paste the following line into **Postman**:

`https://softuni-remotedb.firebaseio.com/books/2.json`

The response from the server will be **200 OK** and in the **body** it will return **null**.

[/slide]

[slide]

# Authentication vs Authorization

Authentication is about validating your credentials such as Username, ID and password to verify your identity.

Authorization occurs after your identity is successfully authenticated by the system, which therefore gives you full access to resources such as information, files, databases etc.

[/slide]

[slide]

# Problem: All Books

Make sure you have gmail account and you are signed in.

Open a browser and type in "firebase console".

[image assetsSrc="Remote-Databases(1).png" /]

Once you are in, you should be able to see this window:

Create a new project by clicking on "Add project".

[image assetsSrc="Remote-Databases(2).png" /]

Type in a project name for example "TestApp" and click "Continue".

[image assetsSrc="Remote-Databases(3).png" /]

Disable google analytics you will not need it for now and click "Create project".

[image assetsSrc="Remote-Databases(4).png" /]

Click "Continue".

[image assetsSrc="Remote-Databases(5).png" /]

Next we need to add an App.

Click on this sing "</>".

[image assetsSrc="Remote-Databases(6).png" /]

Type in a name for the App, for example "books" and click "Register app".

[image assetsSrc="Remote-Databases(7).png" /]

We will get a script, which we will use later when working with the firebase SDK.

Click "continue to console".

[image assetsSrc="Remote-Databases(8).png" /]

Create a databasde.

Click on "Realtime Database".

[image assetsSrc="Remote-Databases(9).png" /]

Click on "Create Databse".

[image assetsSrc="Remote-Databases(10).png" /]

Click "Next".

[image assetsSrc="Remote-Databases(11).png" /]

Chose the option "Start in test mode" and click "Enable".

[image assetsSrc="Remote-Databases(12).png" /]

The database is now created successfully.

Copy the **database URL** so that you can use it in **Postman** to create books.

[image assetsSrc="Remote-Databases(13).png" /]

Create a few books using the **POST** method in **Postman**, or do that directly from the database interface.

Example:

[image assetsSrc="Remote-Databases(14).png" /]

To get all books, you have to use the **database URL** you received when you created the database plus the name of the **entity**, which is "books" plus ".json".

The method is "GET".

URL: `https://databaseURL/books.json`

[/slide]

[slide]

# Problem: Get a Book

To get a book choose "GET" method in Postman and use the following **URL**.

`https://databaseURL/books/bookId.json`

[/slide]

[slide]

# Problem: Create Books

To create a book, we will have to send a "POST" request and the JSON body should be in the following format:

`{"Author": "Steven King",  "title": "IT"}`

URL: `https://databaseURL/books.json`

[/slide]

[slide]

# Problem: Patch Book

The HTTP command "PATCH" modifies an existing HTTP resource. 

It can also create the resource if it does not exist. 

The JSON body should be in the following format:

`{"Author": "Steven King",  "year": 1981}`

URL: `https://databaseURL/books/bookId.json`

[/slide]

[slide]

# Problem: Change Book Author

The next task is to execute a "PUT" command. 

In our case we have to change the author’s name to "New author was assigned".

The JSON body should be in the following format:

"New author was assigned".

URL: `https://databaseURL/books/bookId.json`

[/slide]