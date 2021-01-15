# React Router

[slide]

# What is React Router?

**React Router** is an **API** library for React apps.

It supports **client-side** rendering and **server-side** rendering.

This router uses **component structure**.

Which look like this:

```js
const App = (
   <div>
      <Route path='/catalog' component={Catalog} />
      <Route path='/about' component={About} />
   </div>
);
ReactDOM.render(
   <BrowserRouter>
      <App />
   </BrowserRouter>,
   document.getElementById('root')
);
```

[/slide]

[slide]

# Installation and Setup

We can install **React Router** from npm.

We can do that by writing the following command in the terminal: `npm install react-router-dom --save`.

To setup the router, we need to import some components.

They are:

- Route

- Link

- BrowserRouter

- Switch

The importing will look like this:

```js
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import { Switch } from 'react-router-dom';
```

[/slide]

[slide]

# Adding More Scenes

In React, we can wrap components and attached them to a certain path.

For example:

```js
<Router history={hashHistory}>
   <Route path='/' exact component={App} />
   <Route path='/catalog' component={Catalog} />
   <Route path='/about' component={About} />
</Router>
```

In this example, into the **BrowserRouter** component, which is called **Router** in this case, we have other components.

Every one of them is attached to a specific path.

[/slide]

[slide]

# Switch and Link

If we have two **Routes** that match, by default, they both will be rendered.

So if we want to render only the first one, we use **Switch**.

Here is an example of **Switch**:

```js
<Switch>
  <Route path="/" exact component={Home}>
  <Route path="/about" component={About}/>
  <Route path="/about" component={About}/>
</Switch>
```

In this example, if we do not use **switch**, we will have the about page rendered twice.

**Link** is a component that replaces the `<a>` tag and automatically prevents the **page reload**.

It looks like this:

```js
<Link to='/catalog'>Catalog</Link>
```

We use the `to=''` attribute to set the path.

[/slide]

[slide]

# BrowserRouter as Router

The **BrowserRouter** has different objects like:

- Match

- Location

- History

The **BrowserRouter** works like a **HOC** (Higher Order Component), which injects these objects inside the components.

They are injected as props.

The **match** object stores information about the URL.

For example:

- **params**: If there are any **params**, like keys or values.

- **isExact**: If the whole URL is matched.

- **path**: The used pattern to match the URL.

- **URL**: The path that is matched from the URL.

The **Location** object stores where the app was, where we want it to go, and where it is now.

We cannot modify the **Location** object.

And last but not least, the **History** object.

It provides us the whole browser history, and we can modify it.

We can:

- See the **length**.

- See what is the **action** type.

- To **push**

- To **replace**

- And many more.

[/slide]

[slide]

# URL Params

When we want to make a URL that looks like this: `/catalog/electronics/XYZ5538`.

We need to configure the parameters of this route.

So we do this by adding them to the path of the route.

We add parameters in this format: `:parameter`.

it will look like this:

```js
<Route path='/catalog/:category/:userId' component={Catalog} />
```

In this example, in the `path=''` attribute after the catalog, we set parameters for the category and userId.

After we added them to the route, we access them from the component.

They are stored in `this.props`.

We need to match them from `this.props`, with `match.params`.

Here is how it will look:

```js
this.props.match.params.category;
```

Here we access only the **category** parameter because we added `.category` to the `match.params`.

With `match.params`, we access all parameters.

[/slide]

[slide]

# Redirecting

With React Router, we can **redirect** the user to a different path.

That can happen by rendering a different component.

The redirecting is very useful, for example, when the user tries to access a page that is only for logged in users.

It looks like this:

```js
<Route path='/myProfile/:userId'>
   {loggedIn ? <MyProfilePage /> : <Redirect to='/login' />}
</Route>
```

So in this example, we check if the user is **logged in**.

If so, he will be redirected to the **MyProfilePage** component.

But if he is **not logged in**, he will be **redirected** to the **Login** page.

[/slide]

[slide]

# Active Links

The **NavLink** component makes the styling easier.

It knows when the user is on that path, and NavLink is **active**.

NavLink has attributes that help us with styling when it is active.

This attributes are **activeStyle** and **activeClassName**.

The **activeStyle** one is for in-line css.

We use the **activeClassName** when we use classes, which is the better option.

NavLink with **activeStyle** looks like this:

```js
<NavLink to='/catalog' activeStyle={{ color: 'red' }}>
   Catalog
</NavLink>
```

With **activeStyle** we put the CSS in the component.

Now let us have a look at **activeClassName**:

```js
<NavLink to='/catalog' activeClassName='activeNav'>
   Catalog
</NavLink>
```

**ActiveClassName** is almost the as **activeStyle**.

But with the difference that instead of in-line CSS, we put the name of the class.

[/slide]

[slide]

# Nested Routes

We can also have nested routes.

For example, if we have a page where we have tabs in.

These tabs can be attached to the URL.

To do that, we need to match the current URL and concatenate it with the new location.

Here is an example:

```js
const About = ({ match }) => (
   <div>
      <h1>About Page</h1>
      <Route path={match.url + '/contact'} component={Contact} />
   </div>
);
```

In this example, we match the about page URL and concatenate it with the contact page.

[/slide]
