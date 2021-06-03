# JSON Web Token

[slide hideTitle]

# What is JWT?

js-interactive-pipes-interceptors-and-subjects-10-11-JWT-and-what-is-jwt

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

js-interactive-pipes-interceptors-and-subjects-12-When-should-you-use-JWT

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

js-interactive-pipes-interceptors-and-subjects-13-JWT-Structure

JSON Web Token consists of **three parts**, separated using **dots**:

[image assetsSrc="Pipes-Interceptors-And-Subjects-1.png" /]

- **Header**: header which determines the algorithm that you're using to encode and decode

[image assetsSrc="Pipes-Interceptors-And-Subjects-2.png" /]
 
- **Payload**: put all of your different data for your application:

[image assetsSrc="Pipes-Interceptors-And-Subjects-3.png" /]

  - "**sub**" which stands for a subject, is the ID of the user that will be authenticated 
  
The user's information would be store in the session inside of the database or inside of the server.

  - "**name**" which stands for the user's name

  - "**iat**"  which stands for issued, what this is saying is when the token was created

It is useful information when the JWT expires, notice a lot of tokens have "**exp**" which is going to stand for "**expired**" at and this is the date that the token no longer becomes valid.
  

- **Signature:** most important part of JWT, which allows verifying that the token has not been changed by the client before it gets sent back to the server:

[image assetsSrc="Pipes-Interceptors-And-Subjects-4.png" /]

So on the first line, the encoding header is taken and then it adds a period and then the encoded payload is added.

The "base64" encoding is used for both of those sections then they are combined with the period.

In simple words, all it does is take the header and takes the payload and it combines them, which is all of the data that was sent down to the user.

Then what it does is it uses the algorithm which is defined in the header here "**HMACSHA256**" and uses that algorithm to encode the information.
[/slide]