# Bootstrap Components

[slide hideTitle]

# Button Groups​

Bootstrap has custom button styles with support for multiple sizes, states, and more​:

​```html
<button type="button" class="btn btn-primary">Primary</button>​

<button type="button" class="btn btn-secondary">Secondary</button>​

<button type="button" class="btn btn-success">Success</button>​

<button type="button" class="btn btn-danger">Danger</button>​
```

For more information on buttons, visit the official documentation [here](https://getbootstrap.com/docs/4.0/components/buttons/​).
​

[/slide]

[slide hideTitle]

# Alerts​

We can provide contextual feedback messages for typical user actions with the handful of flexible alert messages​

```html
<div class="alert alert-success alert-dismissable">​

  <a class="close" data-dismiss="alert" aria-label="close">×</a>​

  <strong>Success!</strong> ​
  This alert box could indicate a successful or positive action.​

</div>​
```

[/slide]

[slide hideTitle]

# Nav and Navbar​

The Nav and Navbar​ components equire a wrapping element with a class of `.navbar​`.

Both components are responsive by default​.

They come with built-in support for a handful of sub-components​:

- `.navbar-brand` for your company, product, or project name​

- `.navbar-nav` for a full-height and lightweight navigation​

- `.nav-item` for every item in navigation​

You can learn more [here](https://getbootstrap.com/docs/4.0/components/navbar/​).

[/slide]

[slide hideTitle]

# Forms​

Bootstrap has a number of form control styles, layout options and custom components for creating a wide variety of forms​.

Use type attributes on all inputs to take advantage of newer input controls

Many modern browsers can perform email verification​, simply based on the type attribute.

[/slide]

[slide hideTitle]

# Tables

```html
<table class="table">​

   <thead class="thead-dark"> ​

       <tr> <th scope="col">#</th>​

            <th scope="col">First</th>​

            <th scope="col">Last</th>​

            <th scope="col">Handle</th> </tr>​

   </thead>​

   <tbody> ​

       <tr> <th scope="row">1</th>​

            <td>Mark</td>​

            <td>Otto</td>​

            <td>@mdo</td> </tr>​

        <tr> ... </tr> ​

        <tr> ... </tr>        ​

   </tbody>​

</table>
```

[/slide]

[slide hideTitle]

# Jumbotron

A Jumbotron is a lightweight, flexible component for showcasing hero unit style content​:
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

You can learn more about Jumbotron by [visting the official documentation](https://getbootstrap.com/docs/4.0/components/jumbotron/​).

[/slide]