[slide hideTitle]
# Summary

## In this lesson you learned:

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/EN/05.Sessions-And-Authentication/interactive-js-back-end-sessions-and-authentication-23-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- **Cookies and sessions**

  * **cookies** are used for storing user preferences and settings

  * **sessions** hold more sensitve data for a short duration of time and cannot be altered

  * the use cases for each of them

```js
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.get("/createCookie", (req, res) => {
    res.cookie("greeting", "Hello world!");

    res.end("Cookie was set successfully");
});

app.get("/receiveCookie", (req, res) => {
    res.json(req.cookies);
});
```

- **Authentication concepts**

  * **authentication** is used to confirm identity

  * **authorization** determines if a user has the rights to access or modify given data

  * **bcrypt** uses


```js
const bcrypt = require("bcrypt");
const saltRounds = 7;

const myPlainTextPassword = "catchMeIfYouCan";

bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(myPlainTextPassword, salt, (err, hash) => {
        console.log(hash);
    });
});
```

- **JWT**

  * a standard for transferring **JSON** in a secure way

  * a **JSON Web Token** consists of a header, payload and signature

  * used for **authorization** and exchanging **information**

```js
const jwt = require("jsonwebtoken");

const payload = {
    name: "Tedd",
    age: 43
};
const options = {
    expiresIn: "1d"
};
const secret = "dontTellToAnyone";

const token = jwt.sign(payload, secret, options);

console.log(token);
```

## In the next lesson you will learn:

- **Validation and error handling**

  * **validating** and **sanitizing** data

  * **different types** of errors and how to handle them

[/slide]
