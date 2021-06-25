# JSON Web Token

[slide hideTitle]

# What is JWT?

js-interactive-pipes-interceptors-and-subjects-10-11-JWT-and-what-is-jwt

**JSON Web Token** (JWT) is a standard for creating a **token** used for **server authentication**, which eliminates the need for **server-side session storage**. 

JWT is **stored in the client**, and every request sent to the server should contain a JWT.

Web tokens can be **encrypted** and **signed**, which **verifies** the **integrity** of the **data** they contain.

Every JSON Web Token contains a **unique digital signature** which ensures **information** is **safely transmitted**.

**Encrypted** tokens can **hide** this information from **other parties**.

Using JWT allows **scaling a web server** because there is no need for an **allocation** of **server memory** to keep the session storage. 

JWT comes in handy when creating an **API for mobile applications** because they **do not use cookies**.

A good **JSON API should be able to send JWTs** via headers as well as being able to **send cookies**, depending on the type of application. 

[/slide]


[slide hideTitle]

# When should you use JWT?

js-interactive-pipes-interceptors-and-subjects-12-When-should-you-use-JWT

JWT is most commonly used for **authorization**, and **information exchange**:

- **Authorization**:

Every **request** of a **logged in user** includes the JWT token, allowing them to **access data and services** only available to **registered users**.

A common use case of JWT is when an application uses **two different servers**, for example, a bank that owns a **server that runs all of the banking applications** and a separate server that takes care of the **retirement plans**. 

Those are **completely separate web applications**, but the bank wants their users that log in to the bank application to also be able to be **automatically logged into the retirement account** as well.

So when a user **switches from the bank server** to the **retirement server**, they do not want the user to have to **re-log back**.

What happens to a normal session-based server is as the client's **session is stored inside of the bank's server**, the session Id from the client **is not found in the retirement server**, and the user has to log in when switching between two accounts. 

But when using JWT, **the same secret key could be shared between both** the bank and retirement server.

Then, all that needs to be done is to **send the same JWT from the client to both** servers, and the **user will be authenticated** without having to re-log in.
 
- **Information Enchange**:

JWT is a secure way to **transmit information** between different parties as it can be **signed**.

They can use the same secret key to **encrypt** and **decrypt** those values as well as to **verify the authentication** and the **validity of the token**.

[/slide]

[slide hideTitle]

# JWT Structure

js-interactive-pipes-interceptors-and-subjects-13-JWT-Structure

A JSON Web Token consists of **three parts**, separated with **dots**:

[image assetsSrc="Pipes-Interceptors-And-Subjects-1.png" /]

- "**Header**" - determines the **algorithm that you are using to encode and decode**

[image assetsSrc="Pipes-Interceptors-And-Subjects-2.png" /]
 
- "**Payload**" - carries all of **the different data** for the application:

[image assetsSrc="Pipes-Interceptors-And-Subjects-3.png" /]

  - "**sub**" - stands for **subject**, is the user's Id that will be authenticated 
  
The user's information will be stored in the **session inside the database** or inside the **server**.

  - "**name**" - stands for the **user's name**

  - "**iat**" -  stands for **issued at**, it specifies when the **token was created**

Note that a JWT can **expire** after a certain amout of time, and the data it carries will **no longer be valid**.
  
- "**Signature**" - the most important part of JWT, which **allows us to verify** that the token has **not been changed by the client** before it gets sent back to the server:

[image assetsSrc="Pipes-Interceptors-And-Subjects-4.png" /]

The **encoding header** is on the first line, followed by a **dot**, followed by the **encoded payload**.

The "**base64**" encoding is used **for both of those sections** then they are combined with the period.

In simple words, **the header** and **the payload** are **combined**, which is **all of the data that is sent** to the user.

Then, an **algorithm** which is **defined in the header**, in our case it is "**HMACSHA256**", encodes the information.
[/slide]
