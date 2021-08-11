# Bootstrap Components

[slide hideTitle]

# Button Groups​

Bootstrap has custom button styles with support for multiple sizes, states, etc.​:

​```html
<button type="button" class="btn btn-primary">Primary</button>​

<button type="button" class="btn btn-secondary">Secondary</button>​

<button type="button" class="btn btn-success">Success</button>​

<button type="button" class="btn btn-danger">Danger</button>​
```

We can also set a button's outline by using `.btn-outline-*`:

```js
<button type="button" class="btn btn-outline-primary">Primary</button>
```

The size of a button can be changed with `.btn-lg` - large or `.btn-sm` - small:

```js
<button type="button" class="btn btn-primary btn-lg">Large button</button>
<button type="button" class="btn btn-secondary btn-sm">Small button</button>
```

For more information on buttons, visit the official documentation [here](https://getbootstrap.com/docs/4.0/components/buttons).
​

[/slide]

[slide hideTitle]

# Alerts​

We can provide contextual feedback messages for typical user actions with the handful of flexible alert messages​;

```html
<div class="alert alert-success alert-dismissable">​

  <a class="close" data-dismiss="alert" aria-label="close">×</a>​

  <strong>You have registered successfully!</strong> ​

</div>​
```

In this example, the **dismissable** alert box indicates a succesful user registration. 

[/slide]

[slide hideTitle]

# Nav and Navbar​

The Nav and Navbar components require a wrapping element with a class of `.navbar​`.

Both components are responsive by default​.

They come with built-in support for a handful of sub-components​:

- `.navbar-brand` for your company, product, or project name​

- `.navbar-nav` for a full-height and lightweight navigation​

- `.nav-item` for every item in the navigation​ menu

- `.navbar-toggler` for use with our collapse plugin and other navigation toggling behaviors

- `.form-inline` for any form controls and actions

- `.navbar-text` for adding vertically centered strings of text

- `.collapse.navbar-collapse` for grouping and hiding navbar contents by a parent breakpoint.

You can learn more [here](https://getbootstrap.com/docs/4.0/components/navbar).

[/slide]

[slide hideTitle]

# Forms​

Bootstrap has a number of form control styles, layout options and custom components for creating a wide variety of forms​.

Use type attributes on all inputs to take advantage of newer input controls

Many modern browsers can perform email verification​, simply based on the type attribute.

```html
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We will never share your email.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

[/slide]

[slide hideTitle]

# Tables

Bootstrap supports multiple predefined table styles, background colors, etc.

In this table, we use the `thead-dark` class to make the primary row **dark**:

```html
<table class="table">
   <thead class="thead-dark">
      <tr>
         <th scope="col">#</th>
         <th scope="col">First</th>
         <th scope="col">Last</th>
         <th scope="col">Handle</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <th scope="row">1</th>
         <td>Mark</td>
         <td>Otto</td>
         <td>@mdo</td>
      </tr>
      <tr> ... </tr>
      <tr> ... </tr>
   </tbody>
</table>
```

You can see more details about table properties here: [https://getbootstrap.com/docs/4.0/content/tables/](https://getbootstrap.com/docs/4.0/content/tables/).

[/slide]

[slide hideTitle]

# Jumbotron

A Jumbotron is a lightweight, flexible component for showcasing hero unit style content​.

It typically contains a title, as well as paragraphs with additional information.
​
```html
<div class="jumbotron">​
  <h1 class="display-4">Hello, world!</h1>​
  <p class="lead">This is a ...</p>​
  <hr class="my-4"><p>It uses ...</p>​
  <p class="lead">​
    <a class="btn btn-primary btn-lg">​
      Learn more
    </a>​
  </p>​
</div>
```

In this example, we also have a **call-to-action**, in the form of a "Learn More" button.

You can learn more about Jumbotron by [visting the official documentation](https://getbootstrap.com/docs/4.0/components/jumbotron/).

[/slide]