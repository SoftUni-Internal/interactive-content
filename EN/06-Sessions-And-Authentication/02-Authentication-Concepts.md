# Authentication Concepts

[slide hideTitle]

# Application Security

As technology advances, proper security is all the more necessary.

An **indispensable part** of application security is the concept of **authentication**.

The primary purpose of authentication is to **confirm** that the user is **who they claim to be**.

Just like customers at a bank are required to show an ID.

**Cookies** and **sessions** serve the purpose of**ID's** on the internet.

They document who the user is and aim to confirm that they are not pretending to be another person.

Authentication is a **cross-cutting concern**, which means that it is **essential for the whole application**.
 
It is best to **handle it separately**, resulting in a **better code structure**.

Here you can see a simplified diagram of how authentication is performed:

[image assetsSrc="JS-BackEnd-Sessions-And-Authentication-1.png" /]

[/slide]

[slide hideTitle]

# Bcrypt

**Hashing** is a fundamental concept of cyber-security.

It is a **one-way** conversion of a **key** to a **hash value** with the help of a **hashing algorithm**.

[image assetsSrc="JS-BackEnd-Sessions-And-Authentication-2.png" /]

`Bcrypt` is a popular hashing function.

It utilizes a few additional security concepts:

- `salt` - Adding a **unique keyword** to the hash to prevent **rainbow table** attacks, typically used to crack hashed passwords

- `multiple iterations` - **Increased number of iterations** to prevent **brute force** (attacks which attempt all possible combinations)

To use `bcrypt` with Express, install the middleware like so:

```js
npm install bcrypt
```

Here is a simple example of how to hash a password with `bcrypt`:

```js
const bcrypt = require('bcrypt');
const saltRounds = 8; // Salt iterations, a higher value reduces performance

const myPlainTextPassword = "unhackable"; // The initial password is "unhackable"

bcrypt.genSalt(saltRounds, (err, salt) => {
  bcrypt.hash(myPlainTextPassword, salt, (err, hash) => {
    console.log(hash);
    // $2b$08$O24n5Ol.4XmN.egE5ceSOem5nWms85DQnZjmAl3Az8TYqcuWlRbty
  })
});
```

`genSalt` and the `hash` functions run **asynchronously**.

After successfully hashing a password, the hash **must be compared** with the original on each request.

This is how to use the `compare` function:

```js
const plainTextPassword = "unhackable";
const hash = "$2b$08$O24n5Ol.4XmN.egE5ceSOem5nWms85DQnZjmAl3Az8TYqcuWlRbty";
const fakeHash = "$2b$08$O24n5Ol.4XmN.egE5ceFFem5nWms85DQnZjmAl3Az8TYqcuWlRbty"

bcrypt.compare(plainTextPassword, hash, (err, res) => {
  console.log(res); // true
});

bcrypt.compare(plainTextPassword, fakeHash, (err, res) => {
  console.log(res); // false
});
```

Note that `compare` also runs **asynchronously** to **avoid blocking the code execution**.

[/slide]

[slide hideTitle]

# Authentication vs. Authorization

As covered previously, **authentication** is the process of verifying the identity of a user.

It happens by providing specific credentials, such as:

- **Password**

- **Tokens**

- **Smart cards**

Another concept of cyber-security is **authorization**.

While it may sound similar to **authentication**, they are not the same.

The main objective of **authorization** is checking if a user is **allowed** to do something.

These are some cases where **authorization** is used:

- Determining whether a user has the privileges of a **guest user**, a **registered user**, or an **administrator**

- **Hiding** or **showing** special resources according to authorisation level

[/slide]

