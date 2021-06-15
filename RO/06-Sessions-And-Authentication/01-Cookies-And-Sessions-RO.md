# Cookie-uri li Sesiuni

[slide hideTitle]

# HTTP Communication

**HTTP** sau **Hypertext Transfer Protocol** este responsabil pentru transmiterea informațiilor între un **browser** și un **server web**

Comunicarea are loc prin **trimiterea unei cereri** către server și **așteptarea răspunsului acesteia**

Una dintre caracteristicile a **HTTP** este că este **fără stare**.

Aceasta indică faptul că fiecare interacțiune (**cerere** și **răspuns**) au loc independent de celelalte.

O reprezentare metaforică a acelei interacțiuni ar putea fi un bancomat - utilizatorul face o cerere, iar bancomatul răspunde furnizând serviciul solicitat.

Bancomatul nu are nicio modalitate de a urmări soldul contului utilizatorului și persoana respectivă nu știe câți bani se află în prezent în bancomat.

În general, mai puține date colectate sunt un lucru bun, dar majoritatea serviciilor online necesită o anumită cantitate din acestea pentru a funcționa.

Acesta este scopul **cookie-urilor**.

Un cookie este un **șir simplu**, **care deține informații**, **stocate în browser** (client).

De asemenea, datele pot fi stocate pe server atunci când este necesar prin **cookie-urile de sesiune**.

**Cookie-urile de sesiune** permit păstrarea unei **stări** **între multe cereri**.

[/slide]

[slide hideTitle]

# Session vs. Cookie

Este crucial să înțelegem diferențele dintre **sessions** și **client cookies**.

**Sessions** sunt utilizate pentru **păstrarea informațiilor** care pot fi necesare  **la scurt timp** dupa salvare.

Aici avem câteva exemple când se utilizează **session cookies**:

- Stocarea datelor despre coșul de cumpărături al unui utilizator

- Stocarea datelor de dimensiuni mai mari, ca un obiect mare

- Păstrarea stărilor de autorizare și a ID-urilor

**Cookies**, pe de altă parte, sunt stocate în **browser** și sunt salvate **pentru o perioada mai lunga**.

De obicei, acestea stochează **preferințele utilizatorului** și **setările personale**.

Cea mai semnificativă **diferență dintre cele două este **securitatea**.

**Cookie-urile** pot fi **modificate de utilizator** sau de un potențial **atacator** din browser.

Acestea pot fi, de asemenea, **șterse** sau setate ca **să dureze pentru totdeauna**

**Sesiunile**, **nu pot fi modificate** de către client, ceea ce le face **mai fiabile** decât cookie-urile.

[/slide]

[slide hideTitle]

# Utilizarea Cookie-Urilor

Când lucrați cu **cookie-uri** in **Express**, utilizați middleware-ul `cookie-parser`.

Pentru a-l instala, rulați următoarea comandă în terminal:

```js
npm install cookie-parser
```

 `cookie-parser` permite stocarea cookie-urilor ca **perechi cheie-valoare** în timp ce sunt păstrate în continuare ca un **șir** pe client.

In acest mod puteți citi și scrie cookie-uri cu **Express**:

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

# Utilizarea Sesiunilor

Lucrul cu sesiunile  **necesită instalarea** middleware-ului `express-session`.

```js
npm install express-session
```

Spre deosebire de middleware-ul `cookie-parser` sesiunile necesită câteva **setări suplimentare**:

- `secret` - Folosit pentru **semnarea** cookie-urilor. Se recomandă **să utilizați un șir aleatoriu**

- `httpOnly` - Specifică faptul că modulul cookie poate fi citit **numai de pe server**

- `secure` - Cookie-ul va fi trimis **numai** prin **HTTPS**

Acesta este modul de a crea acest middleware pentru lucru:

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

