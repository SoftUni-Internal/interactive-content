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

The ability to transfer information in a **safe** and **secure** manner makes **JWT** useful for any other kind of data exchange as well.

The famous **OAuth 2.0** protocol uses several tokens for authorization:

## Access token 

Applications utilize **access tokens** to make requests to an API with the user's credentials.

It is used for **authorization** purposes, enabling access to private and/or otherwise inaccessible data.

These tokens must retain their **confidentiality** both while being transported and stored.

As a result, they can only be sent over **HTTPS** connections.

## Identity token

An **identity token** is returned by the server with the purpose of encoding the authentication information of the current user.

What makes them different from access tokens is the fact that they can be understood by **third-parties**, instead of only by the resource server.

ID tokens are often requested alongside the access token.

## Refresh token 

An important characteristic of access tokens is that they have a **relatively short** lifespan.

While this is great for **security**, it introduces a problem in the long term - if an application tries to access a resource **after the access token has expired**, it must **ask** the user for a permission again.

**Refresh tokens** aim to tackle this issue by automatically obtaining a new access token when the current one expires.

[/slide]

[slide hideTitle]

# JWT Structure

A **JSON Web Token** consists of **three** parts:

- **Header**: specifies the **type of token** and **signature algorithm**

- **Payload**: contains the data transferred in a `base64` format

- **Signature**: contains the verification value

Here you can see JWT and its **parts**, visualized:

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

The `sign` method accepts the payload, along with the key, and an **options** object.

This object can contain multiple properties, including:

- `algorithm` - the default value is `HS256`
- `expiresIn` - can be equal to a number in seconds (like 120, for 2 minutes), or a timespan string - '10 h', '5 days', '10d'
- `mutatePayload` - a boolean that, if equal to true, enables direct modification of the payload by the `sign` method

The **JWT** signing process is **reversible**.

Decoding the token is performed as follows:

```js
const token =
 "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiR2FycnkiLCJhZ2UiOjI3LCJpYXQiOjE2MDk4ODc5NzMsImV4cCI6MTYxMDA2MDc3M30.AIuFu04O39uokaGwfxy7iWzjr9vnsI00gqxXJ-peT8Y";

const decodedToken = jwt.verify(token, "signing secret"); // decode with the initial secret key

console.log(decodedToken); // {name: 'Garry', age: 27, iat: 1609887973, exp: 1610060773}
```

The `verify` method accepts the token, along with a secret or public key, and returns the payload decoded.

You can learn more information about **JWT** on the official [website](https://jwt.io/).

[/slide]

