# REST

[slide hideTitle]

# RESTful Services

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/EN/JS-Applications-REST-Services-And-AJAX-14-15-rest-and-restful-services-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**REST** is an abbreviation for **Re**presentational **S**tate **T**ransfer.

It is an architecture style based on **requests-responses** used for **client-server communication** over HTTP.

Every request is made to a **Uniform Resource Identifier** (**URI**).

We can use **CRUD** operations to retrieve or modify these resouces.

The **CRUD** abbreviation stands for **C**reate, **R**ead, **U**pdate and **D**elete.

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-4.png" /]

**RESTful** services provide access to the server-side resources.

[/slide]

[slide hideTitle]

# REST Architectural Constrains

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/EN/JS-Applications-REST-Services-And-AJAX-16-rest-architectural-constraints-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

There are **six architectural constraints** that **REST** sets:

- **Client-server architecture**
  * the client and the server must be **independent** from each other
  * only **resouce URIs** must be visible to the client
  * this enables **separation of concerns** and is a standard practice

- **Statelessness**
  * the server keeps **no histor**y of requests
  * every request is treated as **new**, even if it is coming from the **same client**
  * if **state** is needed (for **customisation** etc.), the **client** must provide it instead
  
- **Cacheable responses**
  * caching enables faster **loading** times on the client side
  * the server load is reduced, making it more **scaleable**
  * it must be applied on **all** compatible resouces
  
- **Layered system architecture**
  * using multiple servers for different purposes
  * reduce the load by separating operations (e.g. using one server for authenticating requests, and a second one for data storage)
  * this is completely invisible to the client
  
- **Code on demand** - this one is **optional**
  * aside from sending resources using **XML** or **JSON**, it is also permitted to send **executable code**, when the application demands for it

- **Uniform interface**
  * fundamental to any **REST**fully designed system
  * each resource must be **identified** in the request
  * resource **representations** must have **enough data** to enable **modification**
  * messages must be **self-descriptive**

If you want to learn in greater depth, you can check out this [dissertation](https://www.ics.uci.edu/~fielding/pubs/dissertation/fielding_dissertation.pdf?fbclid=IwAR0vzDHFwDYLG_uarrsMbxwhgvnmgE6s-7jk37y0agkxxgqvXM7y-wCiZXQ) by **Roy Thomas Fielding**, University of California, Irvine.

[/slide]

[slide hideTitle]
# REST and RESTfull Services: Example

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/EN/JS-Applications-REST-Services-And-AJAX-17-rest-and-restful-services-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Let us consider some theoretical examples.

If we want to create a new post, we will send a **POST** request to `http://some-service.org/api/posts`.

To get all posts, we will send a **GET** request to the same endpoint.

But if we want to **get** a specific post, we need to add the **ID** of that post, and the endpoint will look like this: `http://some-service.org/api/posts/17`.

Also, we need the **ID** of that post if we want to send a **DELETE**, a **PUT**, or a **PATCH** request.

The endpoint will look like this: `http://some-service.org/api/posts/17`.

[/slide]

