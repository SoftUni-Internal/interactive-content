# JWT

[slide hideTitle]

# What is JWT?

**JWT** or **JSON Web Token** is a **standard** used to **securely transfer** a **JSON object** between two parties.

**JWT** is secure because of its digital signature.

There are two ways to sign a token digitally:

- `secret`: signing with a secret, using the **HMAC** algorithm

- `public/private key`: signing with a public/private key, using the **RSA** or **ECDSA** algorithms

Signing the token prevents the notorious **man-in-the-middle** cyber attack.

A **man-in-the-middle** attack occurs when the attacker **intercepts** and **alters** the messages between two people.

It is the same as if the postman decided to open the mail and switch the letters.

The two people think that their communication is private.

However, the whole conversation is orchestrated by the man in the middle, as the name suggests.

[/slide]

[slide hideTitle]

# When to use JWT?

There are two universal use cases for **JWT**:

- **Authorization**

- **Information exchange**

**JWT** is good for **authorization** because of the **digital signature** and its **reliability**.

**After** a successful login, tokens are **sent on every request** to **verify** what the user is **permitted** to do.

The famous **OAuth 2.0** protocol uses several tokens for authorization:

- **Access token**

- **Identity token**

- **Refresh token**

The ability to transfer information in a **safe** and **secure** manner makes **JWT** useful for any other kind of data exchange.

[/slide]

[slide hideTitle]

# JWT Structure

A **JSON Web Token** consists of **three** parts:

- **Header**: Specifies the **type of token** and **signature algorithm**.

- **Payload**: Contains the data transferred in a `base64` format.

- **Signature**: Contains the verification value.

Here is JWT and its parts visualized:

[image assetsSrc=JS-BackEnd-Sessions-And-Authentication-3.jpg ]

[/slide]

[slide hideTitle]

# JWT Usage

Before using the **JWT**, install it with the following command:

```js
npm install jsonwebtoken
```

This is how to sign a JSON Web Token:

```js
const jwt = require("jsonwebtoken");

const payload = { name: "Garry", age: 27 }; // data for transfer
const options = { expiresIn: "2d" }; // sets expiration date after 2 days
const secret = "signing secret"; // secret for the signature

const token = jwt.sign(payload, secret, options);

console.log(token);

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiR2FycnkiLCJhZ2UiOjI3LCJpYXQiOjE2MDk4ODc5NzMsImV4cCI6MTYxMDA2MDc3M30.AIuFu04O39uokaGwfxy7iWzjr9vnsI00gqxXJ-peT8Y
```

The **JWT** signing process is **reversible**.

Decoding the token is performed as follows:

```js
const token =
 "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiR2FycnkiLCJhZ2UiOjI3LCJpYXQiOjE2MDk4ODc5NzMsImV4cCI6MTYxMDA2MDc3M30.AIuFu04O39uokaGwfxy7iWzjr9vnsI00gqxXJ-peT8Y";

const decodedToken = jwt.verify(token, "signing secret"); // decode with the initial secret key

console.log(decodedToken); // {name: 'Garry', age: 27, iat: 1609887973, exp: 1610060773}
```

You can learn more information about **JWT** on the official [website](https://jwt.io/).

[/slide]

