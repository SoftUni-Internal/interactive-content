# Cookies and Sessions

[slide hideTitle]

# HTTP Communication

**HTTP** or **Hypertext Transfer Protocol** is responsible for conveying information between a **browser** and a **web server**.

The communication happens by **sending a request** to the server and **waiting for its response**.

One of **HTTP**'s characteristics is that it is **stateless**.

This denotes that every interaction (**request** and **response**) happens independently of others.

A metaphorical representation of that interaction could be a cash machine - the user makes a request, and the ATM responds by providing the requested servce.

The ATM has no way to track the user's account balance and the person does not know how much money is currently in the ATM.

In general, less data collected is a good thing, but most online services require a certain amount of it to function.

That is the purpose of **cookies**.

A cookie is a **simple string**, **holding information**, **stored in the browser** (client).

Data can also be stored on the server when necessary with **session cookies**.

**Session cookies** allow for some **state** to be kept **between many requests**.
[/slide]

[slide hideTitle]

# Session vs. Cookie

It is crucial to understand the differences between **sessions** and **client cookies**.

**Sessions** are used to **keep information** that might be required **shortly** after being saved.

Here are some examples of when to use **session cookies**:

- Storing data about a user's shopping cart

- Storing data of greater size, like a big object

- Keeping authorization statuses and IDs

**Cookies**, on the other hand, are stored in the **browser** and could last for a **very long time**.

They typically store user **preferences** and **personal settings**.

The **most significant** difference between the two is **security**.

**Cookies** can be **changed by the user** or by a potential **attacker** from the browser.

They can also be **deleted** or set to **last forever**.

**Sessions**, **cannot be modified** by the client that makes them **more reliable** than cookies.

[/slide]

[slide hideTitle]

# Using Cookies

When working with **cookies** in **Express**, use the `cookie-parser` middleware.

To install it, just run the following command in the terminal:

```js
npm install cookie-parser
```

The `cookie-parser` allows storing cookies as **key-value pairs**  while still preserved as a **string** on the client.

Here is how to read and write cookies with **Express**:

```js
const cookieParser = require("cookie-parser");
app.use(cookieParser());

// Setting a cookie
app.get("/createCookie", (req, res) => {
    res.cookie("greeting", "Hello world!");
    // Here, "greeting" is the key, and the value is "Hello, world!"

    res.end("Cookie was set successfully");
});

// Getting a cookie
app.get("/receiveCookie", (req, res) => {
    res.json(req.cookies);
    // Sends the cookies as JSON
});
```

[/slide]

[slide hideTitle]

# Using Sessions

Working with sessions **requires the installation** of the `express-session` middleware.

```js
npm install express-session
```

Unlike the `cookie-parser` middleware, sessions require some **additional settings**:

- `secret` - Used to **sign** cookies. It is recommended to **use a random string**

- `httpOnly` - Specifies that the cookie is readable **only from the server**

- `secure` - The cookie will be sent **only** through **HTTPS**

This is how to set up this middleware for work:

```js
const session = require("express-session");

app.use(session({
    secret: "ISO2Z0UzWW",
    httpOnly: true,
    secure: true,
}));

app.get("/setSession", (req, res) => {
    req.session.greeting = "Hello, world!";
    // Setting the greeting key to have a "Hello world!" value

    res.end("Successfully set session!");
});

app.get("/getSession", (req, res) => {
    req.json(req.session);
    // Sends the session as a JSON
});
```

[/slide]

