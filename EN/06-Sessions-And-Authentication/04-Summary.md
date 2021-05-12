[slide hideTitle]
# Summary

# In this lesson you learned:

- **Cookies and sessions**

    - The differences between **cookies** and **sessions**

    - **When** to use each of them

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

    - How **authentication** is done and what it is

    - How to use **bcrypt**

    - Differences between **authentication** and **authorization**

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

    - What **JWT** is

    - The **structure** of a **JSON Web Token**

    - **When** and **How** to use **JWT**

```js
const jwt = require("jsonwebtoken");

const payload = { name: "Tedd", age: 43 };
const options = { expiresIn: "1d" };
const secret = "dontTellToAnyone";

const token = jwt.sign(payload, secret, options);

console.log(token);
```

## In the next lesson, you will learn:

- **Validation and Error Handling**

    - **validating** and **sanitizing** data

    - **different types** of errors and how to handle them

[/slide]
