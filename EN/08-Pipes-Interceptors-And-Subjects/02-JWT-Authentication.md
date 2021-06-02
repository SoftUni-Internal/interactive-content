# JSON Web Token

[slide hideTitle]

# What is JWT?

**JSON Web Token** is used to securely **transmit information** by using **JSON objects**.

Web tokens can be **encrypted** and **signed**.

**Signed** JWTs can **verify** the **integrity** of the **data** they contain.

Every JSON Web Token contains a **unique digital signature** which ensures **information** is **safely transmitted**.

**Encrypted** tokens can **hide** this information from **other parties**.

[/slide]


[slide hideTitle]

# When should you use JWT?

JWT is most commonly used for **authorization** and **information exchange**:

- **Authorization**:

Every **request** of a **logged in user** includes the web token, allowing them to **access data and services** only available to **registered users**.

- **Information Enchange**:

When JWTs are **signed**, we can be sure that the **senders** are **who they claim to be** and the **content** has not been **modified** while being **sent over**.


[/slide]


[slide hideTitle]

# JWT Structure

JSON Web Token consists of **three parts**, separated using **dots**:

- **Header**: consists of two subparts:

  - **Token type**: "JWT";

  - **Signing algorithm**: like **RSA**, **ECDSA** or **HMAC**;


- **Payload**: contains **claims** about a given **entity** (most often a **user**) which can be **registered**, **public**, and **private**:

  - **Registered** claims include `iss` \(issuer\), `sub` \(subject\) and `exp` \(expiration time\), all of which are **optional** but recommended

  - **Public** claims must be **defined** in [IANA JSON Web Token Registry](https://www.iana.org/assignments/jwt/jwt.xhtml) to prevent **collisions**;

  - **Private** claims are used for sharing information between agreeing parties, in case they are neither **registered** nor **public**
  

- Signature: used to verify the information was **not changed** during **transmission**:

  - Can be used to **confirm** that the **sender** of the token is who it says it is, in the case of tokens signed with a **private key**
  

[/slide]