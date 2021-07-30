# JSON

[slide hideTitle]

# JavaScript Object Notation Definition

**JSON** or **JavaScript Object Notation** is a format for **data transferring**.

It passes data as readable **attribute-value pairs** and **arrays**.

JSON is **based on the JavaScript language** but is **fully independent** and can be used with other languages as well.

These are the data types supported by JSON:
  - `Number`
  - `String`
  - `Boolean`
  - `Array`
  - `Object`
  - `Null`


Any data parsed to JSON is stored as an array of objects.

JSON files use the following syntax to store information, this is an array of two objects that are serialized to JSON:

```java
[
    {
        "attribute1": value,
        "attribute2": value
    },
    {
        "attribute1": value,
        "attribute2": value
    }
]
```

The attributes are in double-quotes while the values are enclosed in double-quotes, square brackets, curly brackets, or directly added after the attribute depending on the data type that is stored.


| **Type** | **Example** |
| --- | --- | 
| Number | "speed": 250 |
| String | "title": "Road Rage"  |
| Boolean | "isSpeeding": true |
| Array | "roles": [ "admin, "editor" ] |
| Null | "address": null |


Data parsed as JSON is simple to read, compact, and easy to transfer.
[/slide]

[slide hideTitle]

# JSON Example

JSON objects are often used to transfer data between **client** and **server**.

This is because JSON is human-readable and easy to work with, but most importantly - it is language agnostic and used for communications between systems that use completely different languages, frameworks, or libraries.

The following code is an example of some JSON data:

```java
[
  {
    "vehicleType": "car",
    "horsepower": 350,
    "isTuned": false
  },
  {
    "vehicleType": "bike",
    "cc": 1000,
    "isStreetLegal": true
  },
  {
    "vehicleType": "bus",
    "capacity": 42,
    "isForCommercialUse": true
  }
]
```

The code above could be **sent to the server** for storage through an **HTTP request**.

JSON supports nested objects:

```java
{
  "brand": "HP",
  "Processor": "Intel",
  "price": 1000,
  "accessories": [
    {
      "type": "mouse",
      "brand": "generic",
      "serial": 565565655
    },
    {
      "type": "keyboard",
      "brand": "unknown",
      "serial": 15451223
    },
  ]
}
```


[/slide]

[slide hideTitle]

# JSON Function

JSON works as an **intermediary** between the **client** and the **server**.

During client-server communication data transfers go through a few steps:

- **Parsing to JSON** in the client (browser) using **JavaScript**

- Sending the **JSON** file as a request to the server

- **Parsing back to an object** on the server using **Java, PHP, C#, etc.**

- Performing **operations** with the **object** and sending it back as a **JSON response**

The following illustration shows how a **client** and a **server** exchanging data:

[image assetsSrc="Java-Spring-Data-JSON-Processing-1.png" /]

[/slide]

[slide hideTitle]

# JSON Structure

A JSON object consists of one or many **names** within **double quotation marks** and their **respective values**.

All of the keys and values are enclosed within **curly brackets**.

**Square brackets** are used for **arrays**.

```java
{
  "firstName": "Kate",
  "lastName": "Johnson",
  "address": {
    "country": "USA",
    "state": "California",
    "city": "San Francisco"
  },
  "studentIdNumbers": [
    {
      "gym": "3124998"
    },
    {
      "library": "532551"
    }
  ]
}
```

There are a few distinct parts that we can see from the JSON information above:

- **firstName**, **lastName**, **address**, **studentIdNumbers** are **attributes**

- "**Kate**" and "**Johnson**" are **attribute values**

- The value of **address** is **an object**

- The value of **studentIdNumbers** is **an array**


[/slide]
