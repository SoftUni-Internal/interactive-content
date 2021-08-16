[slide hideTitle]

# Fetch API​

Fetch provides a generic definition of Request and Response objects​.

The Fetch API allows us to make network requests similar to XMLHttpRequest (XHR).​

The response of a fetch() is a Stream object. ​

[/slide]

[slide hideTitle]

# Fetch API​: Demo

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

There is no need for a separate .js file for one-time use​.

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

[/slide]
