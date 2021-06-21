[slide hideTitle]
# Rezumat

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/05-Session-and-Authentication/interactive-js-back-end-sessions-and-authentication-23-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## În această lecție ați învățat:

- **Cookie-rui și sesiuni**

  * **cookie-urile** sunt utilizate pentru stocarea preferințelor și setărilor utilizatorului

  * **sesiunile** conțin mai multe date sensibile pentru o perioadă scurtă de timp și nu pot fi modificate
 
  * cazurile de utilizare pentru fiecare dintre ele

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

- **Concepte de autentificare**

  * **authenticarea** este utilizată pentru confirmarea identității

  * **authorizarea** determină dacă un utilizator are drepturile de accesare sau modificare a datelor furnizate

  * **bcrypt** - cazurile de utilizare


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

  * un standard pentru transferul **JSON** într-un mod sigur

  * un **JSON Web Token** constă dintr-un a header, payload și semnătură

  * utilizat pentru **autorizare** și schimbul **de informații**

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

##  În lecția următoare veți învăța:

- **Validarea și gestionarea erorilor**

  * **validarea** și **igienizarea** datelor

  * **diferite tipuri** de erori și cum să le gestionați

[/slide]
