# HTTP Cookies

[slide hideTitle]
# What Are Cookies?

**Cookies** are small pieces of data that are used as storage medium in the browser.

They are stored in the form of plain **text** and contain no executable code.

Rather, they hold data, related to a particular client or website.

The maximum size of a cookie is 4KB (kilobytes).

Intitially, they are sent by the **server** to the client.

The **client** then sends them to the server with each request. 

[/slide]

[slide hideTitle]
# What Are Cookies Used For?​

Cookies are an indispensable part of the modern Web.

They find application in all fields of data **persistence**, including:

- **Session management**
  
The first implementation of cookies provided users with a way of **saving** items to a shopping cart.

Nowadays, this information is stored on the server, and cookies are used for keeping track of the currently logged-in user.

This is mainly done using a unique session identifier (**UID**) - a long string of letters and numbers.

- **Personalization**

Cookies are used for storing user **preferences**.

For example, when a user modifies their settings, they use a web **form**, sent back to the server.

Once the server receives the information, it encodes the preferences in a cookie, which it sends back to the client.

- **Tracking**

**Tracking** cookies are used for keeping a track of a user's browsing habits.

This helps **advertisers** serve more specific ads, catering to a user's interests.

This advertising data is often times sold to bidding corporations, breaching online privacy laws.

[/slide]

[slide hideTitle]
# Session Management​

The HyperText Transfer Protocol (HTTP) is stateless.

Each time a client retrieves the same webpage, they open a completetely separate connection to the server.

This means that the server cannor keep a record of previous requests, from any given client.

[/slide]

[slide hideTitle]
# Stateless HTTP – the Problem​

Since the server is unaware of who the client is, they have no information if it is a **new** or **returning** user.

This causes state management **problems**, such as:

- Every newly opened page requires **authentication**, even if requested from the same client

- **Personalization** preferences cannot be stored, causing inconviences, such as displaying prompts to the user on every page load

- Web applications have no sense of **continuity** between different views, as information is not persisted

[/slide]

[slide hideTitle]
# Stateless HTTP – the Cookie Solution​

Cookies provide the mechanism for websites to persist information.

This enables many features we are already used to, such as:

- Knowing whether a user is currently authenticated, allowing for the display of personal data

- Identifying the exact user account currently in use

- Keeping track of the user's browsing activity and habits, enabling more personal experiences

- Remembering previously entered information, such as usernames, passwords, or checkout information

[/slide]

[slide hideTitle]
# How Are Cookies Used?​

Once a server receives an HTTP request, it can send one or multiple `Set-Cookie` headers with the response:

```html
Set-Cookie: <cookie-name>=<cookie-value>
```

The header is simply a name-value pair, separated by an equal sign `=`.

In the following, the servers sends twp `Set-Cookie` headers - one for a token, another - for a dark mode preference:

```html
HTTP/2.0 200 OK
Content-Type: text/html
Set-Cookie: token=TZVzg80934hg803BGIzPnupOU
Set-Cookie: dark_mode=enabled

<!-- Content goes here -->
```

With every request, the client send all locally persisted cookies in the following format:

```html
GET /myclassroom.html HTTP/2.0
Host: www.softuni.org
Cookie: token=TZVzg80934hg803BGIzPnupOU; dark_mode=enabled
```

[/slide]

[slide hideTitle]
# Server-Client Cookies Exchange​

Let us say a user wants to visit `softuni.org`.

First, the browser sends a `GET` request to the server.

Then, the server sends a **response** with one or more cookies, in the format: `Set-Cookie: lang-en`.

Once received by the client, the cookies are persisted locally, and then sent on each subsequent request, in the format: `Cookie: lang-en`.

[/slide]

[slide hideTitle]
# Cookie Structure​

A cookie constists of multiple components:
    - **Name**
    - **Value**
    - Zero or more **attributes**

These attributes are **key-value** pairs that hold additional information

Attributes are to be used only by the client to control the cookie.

They can contain the cookie's expiration date, the path on which they should be sent, as well as security preferences.

[/slide]

[slide hideTitle]
# Scope​

Since each cookie is received from a given server, the client must send it to the same server with each request.

The scope of a cookie is defined by the `Domain` and `Path` attributes.

The `Domain` attribute defines the website that the cookie belongs to: `Domain=softuni.org`

`Path` stores the URL path that must exist on the requested page: `Path=/myclassroom`

```
Set-Cookie: token=Oc93h...fieI; Domain=softuni.org; Path=/myclassroom; Expires=Mon, 25 Apr 2021 12:38:51 GMT; Secure; HttpOnly​
```

[/slide]

[slide hideTitle]
# Lifetime​

The lifetime of a cookie is defined by the `Expires` and `Max-Age` attributes.

`Expires` stores the date, by which the browser should **dispose** of the cookie.

If left undefined, the browser's default behavior is to delete cookies when the session **ends** (e.g. when the browser is closed).

The `Max-Age` attribute is an alternative to `Expires`.

Instead of defining a specific date, it sets the expiration as an interval of seconds.

[/slide]

[slide hideTitle]
# Security​

Security attributes are not key-value pairs, as they lack associated values.

The `Security` flag prevents the browser from sending cookies via **unsecure** connections.

`HttpOnly` is used to prevent the cookie from being accessed by client-side **scripting** languages.

[/slide]

[slide hideTitle]
# What Is in the Cookie?​

A cookie contains a table of key-value pairs.

```
Token=34nu80vm95vphj45oh; Path=/; Domain=google.com; HttpOnly; Expires=Sat, 29 Jan 2022 05:47:09 GMT;
```

These are the most common ones:

- **Name** 
- **Content**
- **Domain** - `.google.com`
- **Path** - `/`
- **Expires** - `Expires=Sat, 29 Jan 2022 05:47:09 GMT`

[/slide]

[slide hideTitle]
# Examine Your Cookies

Cookies are typically stored in a Relational Database Management System (RDBMS), such as SQLite.

To examine your own cookies, you can use [SQLite Browser](http://sqlitebrowser.org/).

Depending on the browser, cookies are store in the following directories:

- For **Mozilla**

```
C:\Users\{username}\AppData\Roaming\Mozilla\Firefox\Profiles\{name}.default\cookies.sqlite​
```

- For **Chrome**

```
C:\Users\{username}\AppData\Local\Google\Chrome\User Data\Default\Cookies​
```

Once located, open the file in SQLite Browser.

Then, you are free to browse the cookies table.

[/slide]

[slide hideTitle]
# Control Your Cookies – Firefox Browser​

To view and control your cookies in Firefox, go to Settings.

[image assetsSrc="State-Management-1.png" /]

Click on Privacy & Security, and go to the Cookies and Site Data section.

Then, choose "Manage Data".

[image assetsSrc="State-Management-2.png" /]

A new modal will appear, allowing you to browse the cookies for specific sites, as well as delete them.

[image assetsSrc="State-Management-3.png" /]

[/slide]

[slide hideTitle]
# Control Your Cookies – Chrome Browser​

To access your cookies in Chrome, open Settings.

[image assetsSrc="State-Management-4.png" /]

Then, under the Privacy & Security tab, click on the Cookies and other site data section.

[image assetsSrc="State-Management-5.png" /]

Here you can customise your preferences, as well as view and delete cookies.

[image assetsSrc="State-Management-6.png" /]

[/slide]

[slide hideTitle]
# Third Party Cookies

Third party cookies are set from a site different from the currently visited one.

For example, developers can embed a "**Tweet**" button in a blog, allowing Twitter to store a cookie on your browser.

This cookie will then be sent with each subsequent request, allowing for customised advertising and interest **tracking**.

Such cookies are typically hosted by ad servers and social media sites.

They allow for **retracking** prospective customers as they browse through different sites.

Year-over-year, Internet users become more aware of these **privacy** abuses.

Many modern web browsers allow the option to "Opt-Out" of third party cookies.

[/slide]

[slide hideTitle]
# Demo: Cookies

Placeholder

[/slide]
