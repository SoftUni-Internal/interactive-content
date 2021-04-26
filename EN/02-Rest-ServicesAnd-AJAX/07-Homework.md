# Homework

[slide hideTitle]
# Guide: Remote Databases 

## Postman

Postman is an **API testing** application that sends **requests** to a **web server** and retrieves **responses**. 

It allows users to set up all the **headers** and **cookies** the **API** expects and checks the response. 

You can download it from [here](https://www.postman.com/downloads/). 

## Firebase

Firebase is a **mobile** and **web** development platform. 

It provides a **realtime database** and **backend as a service**. 

The service provides developers with an **API** that allows application data to be **synchronized** across clients and **stored** on Firebase's cloud. 

The **data** is **structured** as a **JSON** tree. 

### Registration  

**Register** at [https://console.firebase.google.com](https://console.firebase.google.com). 

Afterwards, **create a new project** and test it in order to understand how the database works. 

[image assetsSrc="JS-Applications-Remote-Databases-Guide-1.png" /]

[image assetsSrc="JS-Applications-Remote-Databases-Guide-2.png" /]

### Create a collection

In section **Build** \> **Realtime Database** \> **Data**.

[image assetsSrc="JS-Applications-Remote-Databases-Guide-3.png" /]

### Permissions
Make sure to enable **unauthorized access** to your database. 

Note that this is for **educational purposes** only and you should **NOT** do it in real apps as it is a **security hole**! 

After you have done that, access your data through the REST API.

[image assetsSrc="JS-Applications-Remote-Databases-Guide-4.png" /]

### App Keys
You can find all the App Keys when you click on "Project settings".

[image assetsSrc="JS-Applications-Remote-Databases-Guide-5.png" /]

### Accessing a Firebase REST API with Postman

Open **Postman** and make a **GET** request to retrieve all of the information in your database. 

In our case that would be a list of all the available books.

[image assetsSrc="JS-Applications-Remote-Databases-Guide-5.png" /]

**Collections** \> **New Collection**. 

Put the link on the "**GET**" field, and press the "**Send**" button.

[/slide]

[slide hideTitle]
# Problem: REST Countries

Download the **server and JSON files** for **all** these tasks [here](https://github.com/softuni-practice-server/softuni-practice-server).

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
  name: stopName,
  buses: { busId: time, … }
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
