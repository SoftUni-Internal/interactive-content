[slide hideTitle]

# Fetch API​

The `fetch` JavaScript method provides a generic definition of Request and Response objects​.

It allows us to make network requests similar to XMLHttpRequest (XHR).​

```js
fetch(url)
    .then(res => {
        // here we handle the response data
    }).catch(err => {
        // here we handle request errors
    });
```

The response of a `fetch()` is a Stream object that can either `resolve` or `reject`.

We typically chain multiple promises to process and visualise data, as well as handle any errors that may occur.

[/slide]

[slide hideTitle]

# Fetch API​: Demo

Now let us demonstrate how to use `fetch`.

```java
// HomeController.java

@GetMapping('/')​

public ModelAndView index(ModelAndView modelAndView) {​
    modelAndView.setViewName('index');​
    return modelAndView;​
}​

@GetMapping(value = '/fetch', produces = 'application/json')​
@ResponseBody​
public Object fetchData() {​
    return new ArrayList<Product>() {{​
        add(new Product(){{​
            setName('Chewing Gum');​
            setPrice(new BigDecimal(1.00));​
            setBarcode('133242556222');​
        }});​
        ...​
    }};​
}​
```

Let us create our `Product` class:

```java
public class Product {​
    private String name;​
    private BigDecimal price;​
    private String barcode;​

    // Getters & Setters​
    ...​
}​
```

Now let us head to the view​.

We can directly embed a `<script>` element, as there is no need for a separate JavaScript file for one-time use​.

```html
<!-- index.html -->

...​

<div class='container-fluid'>
    <h1 class='text-center mt-5 display-1'>Data Fetch</h1>
    <div class='data-container mt-5'></div>
    <div class='button-holder mt-5'>
        <button id='fetch-button' class='btn btn-info'>Fetch Data</button>
        <button id='clear-button' class='btn btn-secondary'>Clear Data</button>
    </div>
</div>
<script>
    // Event handlers
    document.querySelector('#fetch-button').addEventListener('click',() => {...}); // Fetch and render the data
    document.querySelector('#clear-button').addEventListener('click',() => {
document.querySelector('.data-container').remove()}); // Clear the data
</script>
```

When clicking on the `fetch-button`, the data must be fetched, converted to JSON, and visualised:

```js
document.querySelector('#fetch-button').addEventListener('click',() => {​
    fetch('http://localhost:8000/fetch') // Fetch the data (GET request)​
        .then((response) => response.json()) // Extract the JSON from the Response​
        .then((json) => json.forEach((x, y) => { // Render the JSON data to the HTML​
                if (y % 4 === 0) {​
                 document.querySelector('.data-container').append('<div class='row d-flex justify-content-around mt-4'>');​
                }​
​
                let divColumn =​
                    '<div class='col-md-3'>' +​
                    '<h3 class='text-center font-weight-bold'>' + x.name + '</h3>' +​
                    '<h4 class='text-center'>Price: $' + x.price + '</h4>' +​
                    '<h4 class='text-center'>Barcode: $' + x.barcode + '</h4>' +​
                    '</div>';​
​
           document.querySelector('.data-container .row:last-child').append(divColumn);​
            }));​

}));​
```

For each product, we display the name, price, and barcode.

[/slide]
