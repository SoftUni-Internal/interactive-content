# HTTP Sessions 

[slide hideTitle]
# What Are Sessions?

**Sessions** are a way to store information about a user to be used across ​multiple pages​.

They are persisted server-side and linked via session ID - a unique **number**.

They can store much larger amounts of information, compared to cookies.

This session ID is then signed and stored in a cookie.

It is sent via the `Set-Cookie` header, along with the `HttpOnly`, `Secure`, and `SameSite` flags.

The `SameSite` attribute prevents the cookie from being used on third-party sites.

The client then sends the cookie to the origin on each request with the `Domain` and `Path` attributes.

[/slide]

[slide hideTitle]
# Session Management

A session starts when a user logs in for the first time.

The browser sends the user's **credentials** to the web application.

In case they are correct, the server initiates a session locally, and sends a **response** to the client with a Session ID.

On each **subsequent** request, the browser sends the Session ID to the server.

The server then sends the requested data.

A session typically ends when the user closes their browser, unless it is stored on the database.

In some cases (e.g. in banking applications), Web servers **terminate** a session and assign a new session ID after a few minutes of inactivity.

[/slide]

[slide hideTitle]
# Relation with Cookies

Session and cookies work together to enable **persistence**, otherwise unavailable in HTTP itself.

While cookies are independent, sessions rely on cookies in order to verify the client's identity.

Persiste is most often implemented using a cookie containing the server **Session ID**.

It is the most accurate method of **determining** where a user's session is currently stored.

[/slide]

[slide hideTitle]
# Session Structure

Each session consists of: 

- a unique "**Session ID**"
    - this is the part sent as a cookie header
    - no bigger than 4KB

- **key-value** pairs
    - used to hold user data
    - stored on the server
    - can cointain much greater amounts of information

[/slide]

[slide hideTitle]
# Demo: Sessions

Placeholder

[/slide]