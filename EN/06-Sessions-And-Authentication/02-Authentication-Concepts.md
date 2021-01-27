# Authentication Concepts

[slide hideTitle]

# Application Security

As technology advances and hackers get more clever, proper security is all the more necessary.

A **fundamental part** of application security is the concept of **authentication**.

Authentication is used to **confirm** that the user is **who they claim to be**.

Just like customers at a bank are required to show an ID.

The **cookies** and **sessions** serve the purpose of an ID on the internet.

They "remember" who the user is and confirm that they are not pretending to be another person.

Authentication is known as a **cross-cutting concern**.

This means that it is **important for the whole application** and is best to **handle it separately** for a **better code structure**.

This is a simplified diagram of how authentication happens:

[image assetsSrc="JS-BackEnd-Sessions-And-Authentication-1.png" /]

[/slide]

[slide hideTitle]

# Bcrypt

One important concept of cyber-security is **hashing**.

Hashing is a **one-way** conversion of a **key** to a **hash value** by using a **hashing algorithm**.

[image assetsSrc="JS-BackEnd-Sessions-And-Authentication-2.png" /]

A popular hashing function is `bcrypt`.

It utilizes a few extra security concepts:

- `salt` - Adding a **unique keyword** to the hash to prevent **rainbow table** attacks which are used to crack hashed passwords.

- `multiple iterations` - **Increased number of iterations** to prevent **brute force** attacks which guess all the possible combinations.

To use `bcrypt` with Express, install the middleware like so:

```js
npm install bcrypt
```

Here is a simple example of how to hash a password with `bcrypt`:

```js
const bcrypt = require('bcrypt');
const saltRounds = 8;   //salt iterations, a higher value reduces performance

const myPlainTextPassword = "unhackable";   //initially password is "unhackable"

bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(myPlainTextPassword, salt, (err, hash) => {
        console.log(hash);
        // $2b$08$O24n5Ol.4XmN.egE5ceSOem5nWms85DQnZjmAl3Az8TYqcuWlRbty
    })});
```

It is important to point out that both the `genSalt` and the `hash` functions run **asynchronously**.

After successfully hashing a password, on every request the hash **must be compared** with the original.

This is how to use the `compare` function:

```js
const plainTextPassword = "unhackable";
const hash = "$2b$08$O24n5Ol.4XmN.egE5ceSOem5nWms85DQnZjmAl3Az8TYqcuWlRbty";
const fakeHash = "$2b$08$O24n5Ol.4XmN.egE5ceFFem5nWms85DQnZjmAl3Az8TYqcuWlRbty"

bcrypt.compare(plainTextPassword, hash, (err, res) => {
    console.log(res); //true
});

bcrypt.compare(plainTextPassword, fakeHash, (err, res) => {
    console.log(res); //false
});
```

Note that `compare` also runs **asynchronously** to **avoid blocking the code execution**.

[/slide]

[slide hideTitle]

# Authentication vs. Authorization

Another concept of cyber-security is **authorization**.

It sounds similar to **authentication** but they are not the same.

As covered previously, **authentication** is the process of verifying the identity of the user.

It happens by providing certain credentials like:

- password

- tokens

- smart cards

**Authorization** is all about checking if a user is **allowed** to do something and what it is.

These are some of the cases where **authorization** is needed:

- Determining whether a user has the privileges of a **guest user**, a **registered user**, or an **admin**.

- **Hiding** or **showing** certain resources to some users.

[/slide]
