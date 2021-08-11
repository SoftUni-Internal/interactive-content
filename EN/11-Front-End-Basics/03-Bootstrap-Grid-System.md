# Bootstrap Grid System

[slide hideTitle]

# Bootstrap Grid System Demo

Bootstrap's grid system is based around containers, rows, and columbs.

It is built on the Flexible Box Module, commonly known as CSS Flexbox.

This is what makes it fully responsive.

```html
<div class="container">​

  <div class="row">​

    <div class="col-xs m-3">Column 1</div>​

    <div class="col-xs m-3">Column 2</div>​

    <div class="col-xs m-3">Column 3</div>​

  </div>​

</div>​
```

[/slide]

[slide hideTitle]

# Bootstrap Containers​

Rows must be placed in containers​:

- `.container` has one fixed width for each screen size in bootstrap (xs, sm, md, lg) ​

```js
<div class="container-sm">100% wide until small breakpoint</div>
<div class="container-md">100% wide until medium breakpoint</div>
<div class="container-lg">100% wide until large breakpoint</div>
<div class="container-xl">100% wide until extra large breakpoint</div>
<div class="container-xxl">100% wide until extra extra large breakpoint</div>
```

- `.container-fluid` expands to fill the available width​

```js
<div class="container-fluid">
  ...
</div>
```

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

Bootstrap has a handful of color utility classes.

Using them we can express the results of actions, like `danger` or `success`.

```html
<p class="text-primary">This text is primary</p>​
<p class="text-secondary">This text is secondary</p>​
<p class="text-success">This text symbolizes success</p>​
<p class="text-danger">This text symbolizes danger</p>​
<p class="text-warning">This is a warning</p>​
<p class="text-info">Additional information..</p>​
<p class="text-light bg-dark">This text is light, with a dark background</p>​
<p class="text-dark">This text is dark</p>​
<p class="text-muted">This text is muted</p>​
<p class="text-white bg-dark">This text is white, with a dark background</p>​
```

[/slide]

[slide hideTitle]

# Background Color​

We can easily set the background of an element to any contextual class​:

```html
<div class="bg-primary text-white">primary</div>​
<div class="bg-secondary text-white">secondary</div>​
<div class="bg-success text-white">success</div>​
<div class="bg-danger text-white">danger</div>​
<div class="bg-warning text-dark">warning</div>​
<div class="bg-info text-white">info</div>​
<div class="bg-light text-dark">light</div>​
<div class="bg-dark text-white">dark</div>​
<div class="bg-white text-dark">white</div>​
```

[/slide]
