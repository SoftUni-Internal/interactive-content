[slide hideTitle]

# Rest Template

Accessing a third-party REST service inside a Spring application revolves around the use of the Spring RestTemplate class​.

This class is designed to call REST services​.

Its main methods are closely tied to the HTTP protocol's methods: HEAD, GET, POST, PUT, DELETE​.

It is Recommended to use the non-blocking, reactive WebClient.​

RestTemplate will be deprecated in a future version​.

[/slide]


[slide hideTitle]

# HTTP GET Method Example ​

- `getForObject(url, classType)​`

Retrieves a representation by doing a GET on the URL.​

The response (if any) is unmarshalled to the given class type and returned​.

- `getForEntity(url, responseType)​`

Retrieves a representation as ResponseEntity by doing a GET on the URL​.

- `exchange(requestEntity, responseType)​`

Executes the specified request and returns the response as a ResponseEntity​.

- `execute(url, httpMethod, requestCallback, responseExtractor)​`

Executes the httpMethod to the given URI template and preparies the request with the RequestCallback​.

[/slide]

[slide hideTitle]

# HTTP POST ​

- `postForObject(url, request, classType)​`

POSTs the given object to the URL and returns the representation found in the response as the given class type​.
​
- `postForEntity(url, request, responseType)​`

POSTs the given object to the URL and returns the response as a ResponseEntity​.

- `postForLocation(url, request, responseType)​`

POSTs the given object to the URL and returns the value of the Location header​.

[/slide]

[slide hideTitle]

# HTTP PUT and HTTP DELETE​

- `put(url, request)​`

PUTs the given request object to a given URL​.

- `delete(url)​`

Deletes the resource at the specified URL​.

[/slide]