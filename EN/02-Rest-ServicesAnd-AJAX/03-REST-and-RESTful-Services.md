# REST

[slide]

# RESTful Services

**REST** means **Re**presentational **S**tate **T**ransfer.

It is **request-response** based architecture style for **client\-server communication** over HTTP.

Every request is made to**URI**, which stands for **Uniform Resource Identifier**.

On the resources, we can use the **CRUD** operation.

**CRUD** stands for **create**, **read**, **update** and **delete**.

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-(4).png" /]

**RESTful** services provide access to the server\-side resources.

[/slide]

[slide]

# REST Architectural Constrains

There are **six architectural constraints** that **REST** makes.

They are:

- Client-server architecture
- Statelessness
- Cacheable
- Layered system
- Code on demand - this one is optional.
- Uniform interface

So let's consider some theoretical examples.

If we want to create a new post, we will send a **POST** request to `http://some-service.org/api/posts`.

And to get all posts, we will send a **GET** to the same endpoint.

But if we want to **get** a certain post, we need to add the **ID** of that post, and it will look like this: `http://some-service.org/api/posts/17`.

And if we want to sent **DELETE**, **PUT** or **PATCH** request again, we need the **ID** of that post.

[/slide]
