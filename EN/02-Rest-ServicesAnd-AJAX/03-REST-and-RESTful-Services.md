# REST

[slide hideTitle]

# RESTful Services

[vimeo-video]
[stream language="EN" videoId="497191038/6224733eff" default /]
[stream language="RO" videoId="497191038/6224733eff"  /]
[/video-vimeo]

**REST** is an abbreviation for **Re**presentational **S**tate **T**ransfer.

It is an architecture style based on **request-response**, used for **client-server communication** over HTTP.

Every request is made to a **URI**, which stands for **Uniform Resource Identifier**.

We can use the **CRUD** operation on the resources.

**CRUD** abbreviation stands for **create**, **read**, **update** and **delete**.

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-4.png" /]

**RESTful** services provide access to the server-side resources.

[/slide]

[slide hideTitle]

# REST Architectural Constrains

[vimeo-video]
[stream language="EN" videoId="497191068/9e59640c57" default /]
[stream language="RO" videoId="497191068/9e59640c57"  /]
[/video-vimeo]

There are **six architectural constraints** that **REST** sets.

They are:

- Client-server architecture
- Statelessness
- Cacheable responses
- Layered system architecture
- Code on demand - this one is optional.
- Uniform interface

You can read more about REST Architectural Constraints [here](https://www.ics.uci.edu/~fielding/pubs/dissertation/fielding_dissertation.pdf?fbclid=IwAR0vzDHFwDYLG_uarrsMbxwhgvnmgE6s-7jk37y0agkxxgqvXM7y-wCiZXQ).

[/slide]

[slide hideTitle]
# REST and RESTfull Services: Example

[vimeo-video]
[stream language="EN" videoId="497191104/a6933d75bc" default /]
[stream language="RO" videoId="497191104/a6933d75bc"  /]
[/video-vimeo]

Let us consider some theoretical examples.

If we want to create a new post, we will send a **POST** request to `http://some-service.org/api/posts`.

To get all posts, we will send a **GET** request to the same endpoint.

But if we want to **get** a certain post, we need to add the **ID** of that post, and the endpoint will look like this: `http://some-service.org/api/posts/17`.

Also, we need the **ID** of that post, if we want to send a **DELETE**, a **PUT**, or a **PATCH** request.

The endpoint will look like this: `http://some-service.org/api/posts/17`.

[/slide]

