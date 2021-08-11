[slide hideTitle]

# Summary

## In this lesson you learned:

- A **RESTful API** is a web service that must follow the six REST **architectural constraints**
  * use of a uniform interface (UI)​
  * client-server based​
  * stateless operations​
  * RESTful resource caching​
  * layered system​
  * code on demand

- The **RestTemplate** class enables access to a third-party REST service inside a Spring app
  * its main methods are closely tied to the HTTP HEAD, GET, POST, PUT, and DELETE methods
  * we must use the non-deprecated, reactive ​**WebClient**

- In JavaScript, we can **select HTML elements** by an id, tag, or class name, as well as create new ones
    * this allows us to respond to user input by manipulating the DOM

```js
<div id='text'>Some text</div>​

// ...

let div = document.getElementById('text');​

div.onmouseover = function(event) {​
  event.target.style.border = '3px solid green';​
}​

div.onmouseout = function() {​
  this.style.border = ''; // this === event.target​
}​
```

- **Fetch** provides a generic definition of Request and Response objects​
  * the Fetch API allows us to make network requests similar to XMLHttpRequest (XHR)

```java
// ...

@GetMapping(value = '/fetch', produces = 'application/json')​
@ResponseBody​

public Object fetchData() {​
  return new ArrayList<Product>() {{​
    add(new Product(){{​
      setName('Chewing Gum');​
      setPrice(new BigDecimal(1.00));​
      setBarcode('133242556222');​
    }});​
    // ...​
  }};​
} 
```

## In the next lesson you will learn:

- The **Spring Security​** framework
  * what Filters and Interceptors are
  * integrating Thymeleaf with Spring Security​

[/slide]