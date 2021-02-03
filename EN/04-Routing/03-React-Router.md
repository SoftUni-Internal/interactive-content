# React Router

[slide hideTitle]

# What is React Router?

**React Router** is an **API** library for React apps.

It supports **client-side** and **server-side** routing and it uses **component structure**.

For example:

```js
const Navigation = () => {
  return (
    <BrowserRouter>
        <Route path="/" component={HomePage} />
    </BrowserRouter>
  );
};
```

We set the **path** and the **component**, which we want to be rendered, in the **Route** component.

[/slide]

[slide hideTitle]

# Installation and Setup

We can install **React Router** by entering in the terminal the following command: `npm install react-router-dom --save`.

To set up the Router, we need to import the following components:

- **Route** component

- **Link** component

- **BrowserRouter** component

- **Switch** component

It looks like this:

```js
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import { Switch } from 'react-router-dom';
```

[/slide]

[slide hideTitle]

# Adding More Scenes

In React, we can wrap components and attached them to an exact path.

For example:

```js
<BrowserRouter history={hashHistory}>
   <Route path='/' exact component={App} />
   <Route path='/catalog' component={Catalog} />
   <Route path='/about' component={About} />
</BrowserRouter>
```

We wrap the **Route** components into a **BrowserRouter** one.

Every one of them is attached to a specific path.

When the application is on that location, a specific component is rendered.

[/slide]

[slide hideTitle]

# Switch and Link

By default, if two routes match, they will be both rendered.

If we want to render only the first one, we need to use **Switch**.

Here is an example of **Switch**:

```js
<Switch>
  <Route path="/" exact component={Home}>
  <Route path="/about" component={About}/>
  <Route path="/about" component={About}/>
</Switch>
```

In this example, if we do not use **Switch**, we will have the about page rendered twice.

## Navigating with Link

**Link** is a component that replaces the `<a>` tag and automatically prevents the **page reload**.

It looks like this:

```js
<Link to='/catalog'>Catalog</Link>
```

We use the `to=''` attribute to set the path.

[/slide]

[slide hideTitle]

# BrowserRouter as Router

The **BrowserRouter** has different objects:

- **Match**

- **Location**

- **History**

The **BrowserRouter** works like a **HOC** (Higher Order Component), which injects these objects inside the components as **props**.

The **match** object stores information about the URL.

For example:

- **params** stores **parameters**, like keys and values.

- **isExact** matches the whole URL.

- **path** uses a pattern to match the URL.

- **URL** matches the path from the URL.

The **Location** object stores where the app was, where we want it to go, and where it is now.

We cannot modify the **Location** object.

Last but not least is the **History** object.

It provides us the whole browser history, and we can modify it.

We can see the **length**, the **action** type, to **push**, to **replace** and many more.

[/slide]

[slide hideTitle]

# URL Params

When we want to make a URL to look like this: `/catalog/electronics/XYZ5538`.

We need to configure the parameters of this route.

So we do this by adding them to the path in this format `:parameter`.

It will look like this:

```js
<Route path='/catalog/:category/:productId' component={Catalog} />
```

In this example, in the `path=''` attribute after the catalog, we set parameters for the **category** and **productId**.

After we set them to the route, we can access them from the component.

They are stored in `this.props`.

We need to match them from `this.props` with `match.params`.

Here is how it will look:

```js
this.props.match.params.category;
```

Here we access only the **category** parameter because we added `.category` to the `match.params`.

With `match.params`, we access all of the parameters.

[/slide]

[slide hideTitle]

# Redirecting

With React Router, we can **redirect** the user to a different path.

That can happen by rendering a different component.

The redirecting is very useful, for example, when the user tries to access a page for **logged-in** users only.

It looks like this:

```js
<Route path='/myProfile/:userId'>
   {loggedIn ? <MyProfilePage /> : <Redirect to='/login' />}
</Route>
```

In this example, we check if the user is **logged in**.

If so, the application will navigate to the **MyProfilePage** component.

If he is **not logged in**, he will be **redirected** to the **Login** page.

[/slide]

[slide hideTitle]

# Active Links

The **NavLink** component makes the styling more effortless.

It knows when the user is on a specific path, and **NavLink** is **active**.

**NavLink** has attributes that help us with styling when it is active.

They are **activeStyle** and **activeClassName**.

The **activeStyle** attribute is for **in-line css** and **activeClassName** is for classes.

**NavLink** with **activeStyle** looks like this:

```js
<NavLink to='/catalog' activeStyle={{ color: 'red' }}>
   Catalog
</NavLink>
```

With **activeStyle** we put the CSS directly in the component.

Now let us have a look at **activeClassName**:

```js
<NavLink to='/my-profile' activeClassName='navigation'>
   MyProfile
</NavLink>
```

**ActiveClassName** is almost the same as **activeStyle**.

The difference between both is that instead of **in-line CSS**, we use **classes**.

[/slide]

[slide hideTitle]

# Nested Routes

We can have **nested** routes.

If we have a page where there are tabs, we can attach them to the URL.

To do that, we need to match the **current URL** and **concatenate** it with the **new location**.

Here is an example:

```js
const About = ({ match }) => (
   <div>
      <h1>About Page</h1>
      <Route path={match.url + '/contact'} component={Contact} />
   </div>
);
```

In this example, we match the **About page** URL and concatenate it with the **Contact page**.

[/slide]
