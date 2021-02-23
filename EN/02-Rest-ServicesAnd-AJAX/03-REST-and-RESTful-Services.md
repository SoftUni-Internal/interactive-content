# REST

[slide hideTitle]

# RESTful Services

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/EN/JS-Applications-REST-Services-And-AJAX-14-15-rest-and-restful-services-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**REST** is an abbreviation for **Re**presentational **S**tate **T**ransfer.

It is an architecture style based on **requests-responses** used for **client-server communication** over HTTP.

Every request is made to a **Uniform Resource Identifier** (**URI**).

We can use the **CRUD** operations on the resources.

**CRUD** abbreviation stands for **C**reate, **R**ead, **U**pdate and **D**elete.

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-4.png" /]

**RESTful** services provide access to the server-side resources.

[/slide]

[slide hideTitle]

# REST Architectural Constrains

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/EN/JS-Applications-REST-Services-And-AJAX-16-rest-architectural-constraints-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

There are **six architectural constraints** that **REST** sets.

They are:

- Client-server architecture
- Statelessness
- Cacheable responses
- Layered system architecture
- Code on demand - this one is optional
- Uniform interface

You can read more about the REST Architectural Constraints [here](https://www.ics.uci.edu/~fielding/pubs/dissertation/fielding_dissertation.pdf?fbclid=IwAR0vzDHFwDYLG_uarrsMbxwhgvnmgE6s-7jk37y0agkxxgqvXM7y-wCiZXQ).

[/slide]

[slide hideTitle]
# REST and RESTfull Services: Example

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/EN/JS-Applications-REST-Services-And-AJAX-17-rest-and-restful-services-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Let us consider some theoretical examples.

If we want to create a new post, we will send a **POST** request to `http://some-service.org/api/posts`.

To get all posts, we will send a **GET** request to the same endpoint.

But if we want to **get** a certain post, we need to add the **ID** of that post, and the endpoint will look like this: `http://some-service.org/api/posts/17`.

Also, we need the **ID** of that post if we want to send a **DELETE**, a **PUT**, or a **PATCH** request.

The endpoint will look like this: `http://some-service.org/api/posts/17`.

[/slide]

