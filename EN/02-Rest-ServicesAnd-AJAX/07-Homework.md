# Homework

[slide hideTitle]
# Guide: Remote Databases 

## 1. Postman

Postman is an **API testing** application that sends **requests** to a **web server** and retrieves **responses**. 

It allows users to set up all the **headers** and **cookies** the **API** expects and checks the response. 

You can download it from [here](https://www.postman.com/downloads/). 

## 2. Firebase

Firebase is a **mobile** and **web** development platform. 

It provides a **realtime database** and **backend as a service**. 

The service provides developers with an **API** that allows application data to be **synchronized** across clients and **stored** on Firebase's cloud. 

The **data** is **structured** as a **JSON** tree. 

### Registration  

**Register** at [https://console.firebase.google.com](https://console.firebase.google.com). 

Afterwards, **create a new project** and test it in order to understand how the database works. 

[image assetsSrc="JS-Applications-Remote-Databases-Guide-1.png" /]

[image assetsSrc="JS-Applications-Remote-Databases-Guide-2.png" /]

### Create a Collection

In section **Build** \> **Realtime Database** \> **Data**.

[image assetsSrc="JS-Applications-Remote-Databases-Guide-3.png" /]

### Permissions
Make sure to enable **unauthorized access** to your database. 

Note that this is for **educational purposes** only and you must **not** do this for real apps as it is a **security hole**! 

After you have done that, access your data through the REST API.

[image assetsSrc="JS-Applications-Remote-Databases-Guide-4.png" /]

### App Keys
We can find our **App Keys** by clicking on "**Project settings**" 

[image assetsSrc="JS-Applications-Remote-Databases-Guide-5.png" /]

### Accessing a Firebase REST API with Postman

- **GET**: `https://testapp-fc138.firebaseio.com`

Open **Postman** and make a GET request to **retrieve** all the information in your database. 

In our case that is a list of all the available books.

[image assetsSrc="JS-Applications-Remote-Databases-Guide-5.png" /]

**Collections** \> **New Collection**. 

Put the link on the "**GET**" field, and press the "**Send**" button.

## 3. Backendless

**Backendless** is a **BaaS** provider that makes it easy for developers to set up, use and operate a **cloud back-end** for their apps. 

It holds **users** (an API for creating an account) and **data collections** (an API for CRUD operations).

### Register
The first thing to do is create an account in **Backendless**, followed by creating an app. 

[image assetsSrc="JS-Applications-Remote-Databases-Guide-6.png" /]

[image assetsSrc="JS-Applications-Remote-Databases-Guide-7.png" /]

[image assetsSrc="JS-Applications-Remote-Databases-Guide-8.png" /]

### Create a User
In order to **create a user**, click on "**Data**" > "**Users**". 

Create a new user using the "**New**" button:

[image assetsSrc="JS-Applications-Remote-Databases-Guide-9.png" /]

[image assetsSrc="JS-Applications-Remote-Databases-Guide-10.png" /]

### Create a Data Collection
In order to **create a collection**, click on the **"+"** symbol right above "**APP TABLES**" in the menu.

[image assetsSrc="JS-Applications-Remote-Databases-Guide-11.png" /]

This will open a new window where you enter the collection's name. 

[image assetsSrc="JS-Applications-Remote-Databases-Guide-13.png" /]

Now we have our new collection with no data in it. 

[image assetsSrc="JS-Applications-Remote-Databases-Guide-15.png" /]

### Create Data Columns
Now it is time to **create** some **data columns** for our collection. 

Click on the "**SCHEMA**".

[image assetsSrc="JS-Applications-Remote-Databases-Guide-16.png" /]

We will make the example with the columns **title** and **body**. 

Clicking the **"+"** button, it will open a form for us: 

[image assetsSrc="JS-Applications-Remote-Databases-Guide-17.png" /]

We fill the form, as shown in the example. 

Using the "**CREATE**" button, we create the column:

[image assetsSrc="JS-Applications-Remote-Databases-Guide-18.png" /]

Here is what the new columns look like in the **data browser**: 

[image assetsSrc="JS-Applications-Remote-Databases-Guide-19.png" /]

### Create Data Rows
To create a row, click on the "**New**" button. 

This will add new element to the collection with a default value. 

We can change it by entering the new value in the input box.

[image assetsSrc="JS-Applications-Remote-Databases-Guide-20.png" /]

For example, we can enter "**Title1**". 

Then, click on the **ownerId** input box: 

[image assetsSrc="JS-Applications-Remote-Databases-Guide-21.png" /]

It will load a window in which we can choose a user. 

This user will be assigned as an owner of the current element of the collection.

We select the user and then click on "**ADD RELATION**": 

[image assetsSrc="JS-Applications-Remote-Databases-Guide-22.png" /]

We have **finished** creating the new row:

[image assetsSrc="JS-Applications-Remote-Databases-Guide-23.png" /]

### App Keys
The **App ID** and the **JS API key** of your app are located on the main page – **Dashboard**.

### Postman and Backendless
Create a **Backendless** collection. 

Open Postman and create a **GET** request to **read the information** inside the **collection**.

[image assetsSrc="JS-Applications-Remote-Databases-Guide-24.png" /]

[image assetsSrc="JS-Applications-Remote-Databases-Guide-25.png" /]

## 4. Back4App
**Back4App** is a low-code **backend for building modern apps**. 

It can be used to **store** and **query relational data** on the cloud. 

It can be made accessible over **GraphQL** and **REST** with a scalable, open-source backend, based on the Parse Platform.

### Register
The first thing to do is create an account in **Back4App**.

[image assetsSrc="JS-Applications-Remote-Databases-Guide-26.png" /]

### Create a collection (Class)
In order to **create** a new **collection (Class)** you must click on the **"Create a Class" button** (or "**Create your first class**").

[image assetsSrc="JS-Applications-Remote-Databases-Guide-27.png" /]

This will open a **new window**. 

Here, you should choose the **type** of the collection and write its **name**.

[image assetsSrc="JS-Applications-Remote-Databases-Guide-28.png" /]

Now we have our first collection, which is currently empty.

You can **add** new **columns** to it, as well as new **rows**. 

[image assetsSrc="JS-Applications-Remote-Databases-Guide-29.png" /]

Let us try to add **name** and **capital** columns.

[image assetsSrc="JS-Applications-Remote-Databases-Guide-30.png" /]

Now you can add **countries** to this collection (in the form of **rows**). 

The first **four** columns are **automatically filled** - you do not need to fill them.

[image assetsSrc="JS-Applications-Remote-Databases-Guide-31.png" /]

### Collection Permissions
This **collection is public** by default and can be accessed from everyone who has the App-ID and API-key.

You can **change the permissions** for the collections:

[image assetsSrc="JS-Applications-Remote-Databases-Guide-32.png" /]

In the newly opened window, you can choose the permissions you need.

[image assetsSrc="JS-Applications-Remote-Databases-Guide-33.png" /]

### App Keys
You can find all the **App Keys** in **App Settings** \-\> **Security and Keys**.

[image assetsSrc="JS-Applications-Remote-Databases-Guide-34.png" /]

### Requests (CRUD operations)

- **GET all**:
  * Method: **GET**
  * Endpoint: `https://parseapi.back4app.com/classes/{MyCustomClassName}`
  * Headers: 	
  ```
  X-Parse-Application-Id: srhQ02mP2P2aWBMJ9sR0UlXwRd9Mh3jVM4MGkDz7
  X-Parse-REST-API-Key: uWY3EYOTwg6g29UvGcvINlJkw39nQWkT3NAItxET
  ```


- **GET one**:
  * Method: **GET**
  * Endpoint: `https://parseapi.back4app.com/classes/{MyCustomClassName}/{MyCurrentObjectId}`
  * Headers: 	
  ```
  X-Parse-Application-Id: srhQ02mP2P2aWBMJ9sR0UlXwRd9Mh3jVM4MGkDz7
  X-Parse-REST-API-Key: uWY3EYOTwg6g29UvGcvINlJkw39nQWkT3NAItxET
  ```


- **POST**:
  * Method: **POST**
  * Endpoint: `https://parseapi.back4app.com/classes/{MyCustomClassName}`
  * Headers: 	
  ```
  X-Parse-Application-Id: srhQ02mP2P2aWBMJ9sR0UlXwRd9Mh3jVM4MGkDz7
  X-Parse-REST-API-Key: uWY3EYOTwg6g29UvGcvINlJkw39nQWkT3NAItxET
  Content-Type: application/json
  ```
  * Body: **A JSON document with the key-value pairs that represent your object's data.**
  

- **PUT**:
  * Method: **PUT**
  * Endpoint: `https://parseapi.back4app.com/classes/{MyCustomClassName}/{MyCurrentObjectId}`
  * Headers: 	
  ```
  X-Parse-Application-Id: srhQ02mP2P2aWBMJ9sR0UlXwRd9Mh3jVM4MGkDz7
  X-Parse-REST-API-Key: uWY3EYOTwg6g29UvGcvINlJkw39nQWkT3NAItxET
  Content-Type: application/json
  ```
  * Body: **A JSON document with the key-value pairs that represent the object's new data.**


- **DELETE**:
  * Method: **DELETE**
  * Endpoint: `https://parseapi.back4app.com/classes/{MyCustomClassName}/{MyCurrentObjectId}`
  * Headers: 	
  ```
  X-Parse-Application-Id: srhQ02mP2P2aWBMJ9sR0UlXwRd9Mh3jVM4MGkDz7
  X-Parse-REST-API-Key: uWY3EYOTwg6g29UvGcvINlJkw39nQWkT3NAItxET
  ```

### Documentation
You can learn more about **Back4App** by clicking on **API Reference**.

[image assetsSrc="JS-Applications-Remote-Databases-Guide-35.png" /]

[/slide]

[slide hideTitle]
# Problem: REST Countries

Download the **resources** for these tasks [here](https://videos.softuni.org/resources/javascript/javascript-applications/JS-Apps-Rest-Services-and-AJAX-Resources.zip).

## Working with Remote Data
For the solution of some of the following tasks, you will need to use an up-to-date version of the **local REST service**, provided in the lesson’s resources archive. 

You can [read the documentation here](https://github.com/softuni-practice-server/softuni-practice-server).

## Your Task

**NOTE**: Install the [Postman](https://www.postman.com/) REST Client to **test** the functions. 

- Manually compile an **HTTP request** (as text) to retrieve information about Romania
  
- Use **Postman** to make the **same request**

- Make a request that **retrieves** only the fields **name**, **capital**, **region**, and **population** for Italy 

- Make a request that retrieves information about **all German-speaking countries**

Your **first task** is to get detailed information about **Romania**. 

Send a "**GET**" request to the link given below. 

## Request   

`https://restcountries.eu/rest/v2/name/Romania`

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-28.png" /]

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-29.png" /]

Each API has a documentation where you can see how to use it. 

You can find the documentation for this API [here](https://restcountries.eu/).

- Try to filter only **specific fields** of the information about **Italy**

- Send a **GET** request with the needed parameter to receive a response with **information about the country** in this form:

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-30.png" /]

- There is a way to **retrieve a response holding all the countries** with **German-speaking** citizens 

- Send a **GET** request to retrieve the information for these countries: 
  * Austria
  * Belgium
  * Germany
  * Holy See
  * Liechtenstein
  * Luxembourg
  * Switzerland

Retrieve **only** their **names** and **region**.

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-31.png" /]

[/slide]

[slide hideTitle]

# Problem: Bus Stop

Perform an HTTP request that displays the arrival times for all buses by a **bus stop ID**.

Submit a **GET** request to `http://localhost:3030/jsonstore/bus/businfo/:stopID` \(replace `:stopID` with the correct value\).

You will receive a JSON object in the following format:

```
stopId: {
  buses: { busId: time, … },
  name: stopName
}
```

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-32.png" /]

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-33.png" /]

## Hints

The webhost will respond with **valid** data to the **IDs** 1287, 1308, 1327, and 2334.

[/slide]

[slide hideTitle]
# Problem: Phonebook GET

Perform and HTTP request that show the names and phone numbers from a phonebook. 

**GET** requests: `http://localhost:3030/jsonstore/phonebook`

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-34.png" /]

[/slide]

[slide hideTitle]
# Problem: Phonebook POST

Create two different **POST** requests using Postman. 

The data sent in a **POST** request should be a valid JSON object, containing a **person** and a **phone** property. 

The example **format** is:

```
{
"person": "<person>",
"phone": "<phone>"
}
```

**POST:** `http://localhost:3030/jsonstore/phonebook`

[/slide]


[slide hideTitle]
# Problem: Employees 

Use the link below to create a GET, POST, PUT, and DELETE request in **Postman**: 

[REST API Example](http://dummy.restapiexample.com/)

## GET Request

Use the links in the "**Full Route**" column to:

- Retrieve the information about **all** employees

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-35.png" /]

- Retrieve the information about a **single** employee

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-36.png" /]

## POST Request

Use the "**create**" link to add a new entry to the database:

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-37.png" /]

## PUT Request

**Update** the information about the specified employee:

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-38.png" /]

## DELETE Request

**Delete** the information of the specified employee:

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-39.png" /]

[/slide]

[slide hideTitle]
# Problem: Firebase App

Create a **Firebase** application to create a collection, which contain **book titles and their author**. 

Use Postman to create, read and delete entries from the collection.

|**Books Genre**|**Title**|**Author**|
|:-----:|:-----:|:-----:|
|**Non-Fiction**|Get Out of Your Head: Stopping the Spiral of Toxic Thoughts|Jennie Allen|
||Trust: America’s Best Chance|Pete Buttigieg|
||When Breath Becomes Air|Paul Kalanithi|
|**Romance**|It Ends With Us|Colleen Hoover|
||The Proposal|Jasmine Guillory|
|**Thrillers**|Gone Girl|Gillian Flynn|

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-40.png" /]

[/slide]

[slide hideTitle]
# Problem: Backendless App

Use **Backendless** to create a music application that contains information about **song titles** and **singers**.

Use **Postman** to create, read and delete entries from the collection. 

|**Singer**|**Title**|
|:-----:|:-----:|
|Eminem|Cinderella Man|
|Alan Walker|Faded|
|Dove Cameron|We Belong|

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-41.png" /]

[/slide]
