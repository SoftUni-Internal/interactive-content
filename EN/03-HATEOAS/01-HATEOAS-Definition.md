# HATEOAS Definition

[slide hideTitle]

# Hypermedia As the Engine of Application State​


[video src="https://videos.softuni.org/hls/Java/Java-Spring-Advanced/EN/03-HATEOAS/01-hateoas-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

HATEOAS (Hypermedia As the Engine of Application State​) is an architectural constraint of a RESTful API.

It uses hypermedia to provide the user with more clarity about possible future actions, including the URIs for particular CRUD operations.

An API that uses HATEOAS returns a collection of API endpoints, along with the response payload.

These endpoints can then be used by the client to further interact with the API.

```java
"update": {"href":"http://localhost:8080/students/update/2"}
```

As they also include the accompanying HTTP request, they can also help us determine our permissions (whether we are authorised to perform an operation/request a resource).

The full response is used similarly to an HTML webpage, as both include links to other related resources.

[/slide]
