# JSON Web Token

[slide hideTitle]

# What is JWT?

**JSON Web Token** (JWT) is a standard, which gives the ability to create a token, which is used for server authentication and avoiding the use of server-side session storage. 

JWT is stored in the client, and every request sent to the server should contain JWT, which is better than keeping a session state on the server.

Web tokens can be **encrypted** and **signed**, where **signed** JWTs can **verify** the **integrity** of the **data** they contain.

Every JSON Web Token contains a **unique digital signature** which ensures **information** is **safely transmitted**.

**Encrypted** tokens can **hide** this information from **other parties**.

Using JWT allows scaling a web server because there is no need for an allocation of server memory to keep the session storage. 

JWT comes in handy when creating an API for mobile applications because they do not have cookies, only a web browser supports cookies.

So a good JSON API should be able to send JWT via headers as well as been able to send cookies, depending on the type of application. 

[/slide]


[slide hideTitle]

# When should you use JWT?

JWT is most commonly used for **authorization**, and **information exchange**:

- **Authorization**: this is one of the most common usages of JWT

Every **request** of a **logged in user** includes the web token, allowing them to **access data and services** only available to **registered users**.

Common use cases of JWT when there are two different servers, for example, a bank that owns a server that runs all of the banking applications and a separate server that takes care of the retirement plans. 

Those are completely separate web applications but the bank wants their users that log in to the bank to also be able to be automatically logged-into the retirement account as well.

So when they switch from the bank to the retirement server they do not want the user to have to re-log back.

What happens to a normal session-based server is as the client's session is stored inside of the bank and not inside of the retirement server, the session ID from the client is not found in the retirement server and the user has to log in when switching between two accounts. 

But when using JWT if the same secret key could be shared between both the bank and retirement server.

Then all that's needs to be done is send the same JWT from the client to both of them and the user will be authenticated both times without having to re-log back in.
 
- **Information Enchange**:

JWT is a good way to **secure way to transmit information** between different parties because it can be **signed**.

They can use the same secret key in order to **encrypt** and **decrypt** those values and to **verify the authentication** and the **validity of the token** that is been sent.



[/slide]


[slide hideTitle]

# JWT Structure

JSON Web Token consists of **three parts**, separated using **dots**:

[image assetsSrc="Pipes-Interceptors-And-Subjects-1.png" /]

- **Header**: header which determines the algorithm that you're actually using to encode and decode

[image assetsSrc="Pipes-Interceptors-And-Subjects-2.png" /]
 
- **Payload**: contains all the information tha is store in the token, **claims** about a given **entity** (most often a **user**) which can be **registered**, **public**, and **private**:

[image assetsSrc="Pipes-Interceptors-And-Subjects-3.png" /]

  - **registered** claims include `iss` (issuer), `sub` (subject) and `exp` (expiration time), all of which are **optional** but recommended

  - **public** claims must be **defined** in [IANA JSON Web Token Registry](https://www.iana.org/assignments/jwt/jwt.xhtml) to prevent **collisions**

  - **private** claims are used for sharing information between agreeing parties, in case they are neither **registered** nor **public**
  

- **Signature:** most important part of JWT, which allows verifying that the token has not been changed by the client before it gets sent back to the server:

[image assetsSrc="Pipes-Interceptors-And-Subjects-4.png" /]

Can be used to **confirm** that the **sender** of the token is who it says it is, in the case of tokens signed with a **private key**
  

[/slide]