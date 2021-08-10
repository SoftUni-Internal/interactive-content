# Bootstrap Grid System

[slide hideTitle]

# Bootstrap Grid System Demo

```html
<div class="container">​

  <div class="row">​

    <div class="col-xs m-3">Column one</div>​

    <div class="col-xs m-3">Column two</div>​

    <div class="col-xs m-3">Column three</div>​

  </div>​

</div>​
```

[/slide]

[slide hideTitle]

# Bootstrap Containers​

Rows must be placed in containers​:

- `.container` has one fixed width for each screen size in bootstrap (xs, sm, md, lg) ​

- `.container-fluid` expands to fill the available width​

[/slide]

[slide hideTitle]

# Column Classes​

Column classes determine how many columns to use on different screen sizes:​

```html
<div class="col-sm-8 col-lg-4">Column one</div>​

<div class="col-sm-2 col-lg-4">Column two</div>​

<div class="col-sm-2 col-lg-4">Column three</div>     ​
```

- `.col-xs`: width less than 768px​

- `.col-sm`: width between 768px and 992px​

- `.col-md`: width between 992px and 1200px​

- `.col-lg`: width over 1200px​

[/slide]

[slide hideTitle]

# Color​

Bootstrap has a handful of color utility classes:

​```html
<p class="text-primary">.text-primary</p>​

<p class="text-secondary">.text-secondary</p>​

<p class="text-success">.text-success</p>​

<p class="text-danger">.text-danger</p>​

<p class="text-warning">.text-warning</p>​

<p class="text-info">.text-info</p>​

<p class="text-light bg-dark">.text-light</p>​

<p class="text-dark">.text-dark</p>​

<p class="text-muted">.text-muted</p>​

<p class="text-white bg-dark">.text-white</p>​
```

[/slide]

[slide hideTitle]

# Background Color​

We can easily set the background of an element to any contextual class​:

```html
<div class="bg-primary text-white">.bg-primary</div>​

<div class="bg-secondary text-white">.bg-secondary</div>​

<div class="bg-success text-white">.bg-success</div>​

<div class="bg-danger text-white">.bg-danger</div>​

<div class="bg-warning text-dark">.bg-warning</div>​

<div class="bg-info text-white">.bg-info</div>​

<div class="bg-light text-dark">.bg-light</div>​

<div class="bg-dark text-white">.bg-dark</div>​

<div class="bg-white text-dark">.bg-white</div>​
```

[/slide]
