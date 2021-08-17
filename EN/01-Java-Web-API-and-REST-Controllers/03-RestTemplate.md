[slide hideTitle]

# Rest Template

Our services often need information from a third-party service to return a resource.

The Spring `RestTemplate` class​ offer a set of methods to interact with a RESTful web service.

It is designed for API calls and supports all HTTP methods: HEAD, GET, POST, PUT, DELETE​, etc.

As it is not included by default, we need to create a Bean or instantiate the class in order to use it.

```java
@Bean
public RestTemplate restTemplate(RestTemplateBuilder builder) {
 
  return builder
    .setConnectTimeout(Duration.ofMillis(3000))
    .setReadTimeout(Duration.ofMillis(3000))
    .build();
}
```

In this example, we use `RestTemplateBuilder` to create a RestTemplate bean.

We can also use `RestTemplateBuilder` or Apache `HTTPClient`(recommended).

As RestTemplate will be deprecated in a future version​, it is recommended to use the reactive, non-blocking WebClient.​

[/slide]


[slide hideTitle]

# HTTP GET Method Example ​

- `getForObject(url, classType)​`

The `getForObject` retrieves a representation by doing a GET request on the URL, passed in as a first argument

If there is a response, it is unmarshalled to the provided `classType` and returned​.

- `getForEntity(url, responseType)​`

`getForEntity` retrieves a representation as ResponseEntity by doing a GET on the URL​.

```java
URI uri = new URI("http://localhost:8080/employee");

RestTemplate restTemplate = new RestTemplate();
ResponseEntity<Employee[]> responseEntity = restTemplate.getForEntity(uri, Employee[].class);
```

- `exchange(requestEntity, responseType)​`

Executes the specified request and returns the response as a ResponseEntity​.

- `execute(url, method, requestCallback, responseExtractor)​`

This method executes the `method` to the given URI template and prepares the request with the `RequestCallback​`.

It accepts four parameters:
- `url` - the fully-expanded URL to connect to
- `method` - the HTTP method to execute (GET, POST, etc.)
- `requestCallback` - object that prepares the request (can be null)
- `responseExtractor` - object that extracts the return value from the response (can be null)

[/slide]

[slide hideTitle]

# HTTP POST ​

- `postForObject(url, request, classType)​`

The `postForObject` method creates a new resource by posting the given object to a given url or URI template using the HTTP POST method. 

```java
public void addEmployeeDemo() throws URISyntaxException {
	HttpHeaders headers = new HttpHeaders();
	headers.setContentType(MediaType.APPLICATION_JSON);

	URI uri = new URI("http://localhost:8080/employee");
	Employee objEmp = new Employee();
	objEmp.setName("Krishna");
	objEmp.setCity("Noida");

	HttpEntity<Employee> httpEntity = new HttpEntity<>(objEmp, headers);

	RestTemplate restTemplate = new RestTemplate();
	Employee employee = restTemplate.postForObject(uri, httpEntity, Employee.class);

	System.out.println("Id: " + employee.getEmpId());		
} 
```
​
- `postForEntity(url, request, responseType)​`

`postForEntity` POSTs the given object to the `url` and returns the response as a `ResponseEntity​`.

- `postForLocation(url, request, responseType)​`

`postForLocation` POSTs the given object to the URL and returns the value of the `Location` header​.

[/slide]

[slide hideTitle]

# HTTP PUT and HTTP DELETE​

- `put(url, request)​`

The `put` method performs a `PUT` request by sending the  `request` object to a given URL​.

The server then replaces the given entity with the `request` object.

- `delete(url)​`

Deletes the resource at the specified `url`.

```java
public void deletePost() {
    String url = "https://jsonplaceholder.typicode.com/posts/{id}";

    this.restTemplate.delete(url, 10);
}
```

In this example, we delete a post from a demo API, by passing the `id` as a second argument.

[/slide]