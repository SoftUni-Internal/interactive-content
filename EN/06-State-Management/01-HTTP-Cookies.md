# HTTP Cookies

[slide hideTitle]
# What Are Cookies?

Cookies are small pieces of data that are used as storage medium in the browser

They are stored in the form of plain text and contain no executable code.

Rather, they hold data, related to a particular client or website.

Intitially, they are sent by the server to the client.

The client then sends them to the server with each request. 

[/slide]

[slide hideTitle]
# What Are Cookies Used For?​

Cookies are an indispensable part of the modern Web.

They find application in all fields of data persistence, including:

- **Session management**
  
The first implementation of cookies provided users with a way of saving items to a shopping cart.

Nowadays, this information is stored on the server, and cookies are used for keeping track of the currently logged-in user.

This is mainly done using a unique session identifier (UID) - a long string of letters and numbers.

- **Personalization**

Cookies are used for storing user preferences.

For example, when a user modifies their settings, they use a web form, sent back to the server.

Once the server receives the information, it encodes the preferences in a cookie, which it sends back to the client.

- **Tracking**

Tracking cookies are used for keeping a track of a user's browsing habits.

This helps advertisers serve more specific ads, catering to a user's interests.

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

Since the server is unaware of who the client is, they have no information if it is a new or returning user.

This causes state management problems, such as:

- Every newly opened page requires authentication, even if requested from the same client

- Personalization preferences cannot be stored, causing inconviences, such as displaying prompts to the user on every page load

- Web application have no sense of continuity between different views, as information is not persisted

[/slide]

[slide hideTitle]
# Stateless HTTP – the Cookie Solution​

Cookies provide the mechanism for websites to persist information.

This enables many features we are already used to, such as:

- Knowing whether a user is currently authenticared, allowing for the display of personal data

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

Then, the server sends a response with one or more cookies, in the format: `Set-Cookie: lang-en`.

Once received by the client, the cookies are persisted locally, and then sent on each subsequent request, in the format: `Cookie: lang-en`.

[/slide]

[slide hideTitle]
# Cookie Structure​

A cookie constists of:
    - **Name** - 

[/slide]

[slide hideTitle]
# Scope​



[/slide]

[slide hideTitle]
# Lifetime​



[/slide]

[slide hideTitle]
# Security​



[/slide]

[slide hideTitle]
# What Is in the Cookie?​



[/slide]

[slide hideTitle]
# Control Your Cookies – Firefox Browser​



[/slide]

[slide hideTitle]
# Control Your Cookies – Chrome Browser​



[/slide]

[slide hideTitle]
# Third Party Cookies



[/slide]

[slide hideTitle]
# Demo: Cookies

Placeholder

[/slide]
