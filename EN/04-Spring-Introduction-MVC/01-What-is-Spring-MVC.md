# Spring MVC

[slide hideTitle]
# Definition

The **Model View Controller** also known as **MVC** is one of the most popular patterns for **creating complex web applications**.

What this pattern does is to **split** a large application into **specific** sections that all have their purpose.

The **destribution of resposabilites** into the MVC patternt is as follows: 

- **Model** - **interacts** with the database and handles all **validation** and **CRUD** operations

- **View** - **render** the data to the user

The view' only **concerned** is how to present the **information** that the controller **sends**, the view is a **template file** that dynamically **renders** HTML based on the received data.

- **Controller** - **handle** the entire request from the **client** and will inform the **rest of the server** what to do with the request

The Controller acts as a **middleman** between **Model** and **View** sections, and **should not contain** many lines of code.

In Java context **Spring MVC** is another project in the **spring framework** umbrella.

Spring MVC allows to **create** controllers which map **request** to **responses**.

When a Spring MVC app is **created** and **run** Spring MVC pattern is automatically **added** to the application. 

A Controller is a simple **Java class** and it has **Java methods** to **handle** requests and **return** responses.

These methods are annotated with **two pieces of information**:

- The first is a URI that the controller is going to handle when there is a request coming in 

- The second is the HTTP method that this controller method is gonna handle

If we want a particular method to **handle** that request, what we do is to **write that method** and then put the right Spring MVC **annotations** that **map** the URI and that HTTP method.

[image assetsSrc="Java-Spring-Fund-MVC-18.png" /]

When the server **receives** an HTTP request, the so-called "**Dispatcher Servlet**" handles the HTTP request.

Next by using "**Handler Mapping**" a controller is **allocated**, which contains the relevant controller method, that will process the requests. 

Another component is the "**Handler Adapter**", which is responsible for executing the code into the controller.

The relevant controller method processes the request and is in control of **providing** data from the database.

The controller does not directly interact with the database, rather a service is used, which **interact** and **retrieves** information from the database.

When the service **provides** the needed data to the controller, by using "**View Resolver**" the controller finds the **corresponding** view and the view in form of HTML is returned as a response to the client.

[/slide]

[slide hideTitle]
# MVC - Control Flow

[image assetsSrc="Java-Spring-Fund-MVC-19.jpg" /]

In the picture above a request is sent by a web client (browser), but also a request could be made by an android application.

Then the controller by using a service retrieves data from the database and then this information is sent to the client in HTML format is called view. 

But a controller also could return the data in form of JSON or XML formats, which is called [RESTful API](https://en.wikipedia.org/wiki/Representational_state_transfer).

[/slide]

[slide hideTitle]
# Path Variables

```java
@Controller
@RequestMapping("/cat")
public class CatController {

    @GetMapping("/edit/{catId}")
    @ResponseBody
    public String editCat(@PathVariable long catId){
        return String.valueOf(catId);
    }
}

```

Here we have a typical example of a controller named "**CatController**", which contains a single method named "**editCat**".

`@GetMapping("/edit/{catId}")` anotation is used, that way the method will be invoked with HTTP Get requests is sent to the `localhost:8080/cat/edit/{catId}` address.

The method path contains "**path variable**", which is "catId" and "**editCat**" mothod should receive single parameter by using `@PathVariable long catId`.

Spring MVC framework will automatically parse the input and will pass it to the "**editCat**" method.

The result of invoking the "**CatController**" and "**editCat**" mothod is:

[image assetsSrc="Java-Spring-Fund-MVC-1.png" /]

[/slide]