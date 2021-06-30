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

[/slide]

[slide hideTitle]

# JSON Example

JSON objects are often used to transfer data between the **client** and the **server**.

This is because they are **well-structured** and **easy-to-read**.

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

The code from above could be **sent to the server** for storage through an **HTTP request**.

[/slide]

[slide hideTitle]

# JSON Function

JSON works as an **intermediary** between the **client** and the **server**.

Data during client-server communication passes through a few steps:

- **Parsing to JSON** in the client (browser) using **JavaScript**

- Sending the **JSON** file as a request to the server

- **Parsing back to an object** on the server using **Java, PHP, C#, etc.**

- Performing **operations** with the **object** and sending it back as a **JSON response**

The following illustration shows how the **client** and the **server** exchange data:

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

- `firstName`, `lastName`, `address`, `studentIdNumbers` - attributes

- `"Kate"`, `"Johnson"` - values for the attributes

- The value of `address` (object)

- The value of `studentIdNumbers` (array)

[/slide]
