# Router Module

[slide hideTitle]

# Define the Template

To create a template, we need to go through some steps.

The first one is to add a **base meta tag** in the index.html file.

The tag looks like this: `<base href="/">`.

After that, we can add a navigation tag to the `app.component.html`, or where the content will be rendered.

it looks like this:

```js
<nav>
   <a routerLink='/home'>Home</a>
   <a routerLink='/about'>About</a>
</nav>
```

In this nav tag, we are using **routerLink** instead of **href**, because **href** will reload the page.

Also there, we need to define the **router outlet**.

It looks like this:

```js
<router-outlet></router-outlet>
```

[/slide]

[slide hideTitle]

Create Routes Module

To create Route Module, we need to create a file called `app-routing.module.ts`.

After the file is created, we need to import the **NgModule**, the **RouterModule**, The **Routes**, and the **components**.

We put the routes in an array, and it looks like this:

```js
const routes: Routes = [
   {
      path: 'home',
      component: HomeComponent,
   },
   {
      path: 'about',
      component: AboutComponent,
   },
];
```

After the routes are created, the module should be decorated like this:

```js
@NgModule({
   declarations: [HomeComponent, AboutComponent],
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})
export class AppRoutesModule {}
```

In this example, the **routes** will not be available outside the **module**.

That is because they are in the **declarations** array.

The final step is to **import** the **routes** in the **app** module.

[/slide]

[slide hideTitle]

# The RouterLink Directive

RouterLink makes an element a link.

It gives the element a route, and the user can open it.

We can pass the location regularly, like in a **href**.

And the other way is to pass an **array**.

Here are examples of both ways:

-  The basic way:

```js
<a routerLink='/about'>About</a>
```

-  Using array:

```
<a
 [routerLink]="[ '/users', 12345, 'profile' ]">
   Profile Page
</a>
```

[/slide]

[slide hideTitle]

# Navigate Programmatically

We can add a Router to a component.

To do that, we need to import the **Router** from `@angular/router`

And After it is imported, we can add it as a property of the constructor of that component.

It looks like this:

```js
constructor(
 private router: Router
) { }
```

After the router is set in the constructor, we need to create a method that will navigate.

Here is how it will look:

```js
loadData() {
 this.router.navigate([ '/home' ])
}
```

[/slide]

[slide hideTitle]

# Passing Parameters to Routes

When we want to make a URL which looks like this: `/catalog/electronics/XYZ5538`, we need to configure the parameters.

So we do this by adding them to the path of the route, in this format: `:parameter`.

It can be done in the **ordinary way** or with an **array**.

Also, we can pass **one** or **many** parameters.

Here is an example with **one** parameter:

```js
{ path: 'catalog/:id', component: ProductDetailsComponent }
```

In this example, we pass an **id** as a parameter.

And now, have a look at an example with two parameters:

```js
{ path: 'catalog/:category/:id', component: ProductDetailsComponent }
```

Here we have two parameters: `:category` and `:id`.

[/slide]

[slide hideTitle]

# Fetching Parameters

We use **ActivatedRoute** when we want to fetch a route associated with the component loaded in an outlet.

To use it, we need to set it in the constructor of the component.

It looks like this:

```js
constructor(
 private route: ActivatedRoute
) { }
```

After **ActivatedRoute** is set, we can use `this.route.params` to retrieve the parameters from the URL.

If we want to get the parameters only once we can use `this.route.snapshot.params`.

This is done in the **ngOnInit** function.

For example:

```js
ngOnInit() {
  const id = this.route.snapshot.params['id']
}
```

In this example, we take a snapshot of the **id**.

If we want to change the content of a loaded component, we can use observables.

For example, to change the product on a detail page.

Here is how it looks:

```js
ngOnInit() {
  this.route.params
    .subscribe((params: Params) => {
        const id = params['productId']
      }
   )
}
```

**Subscribe** listens for changes in the URL.

And if so, it retrieves the requested parameters.

In this case, it listens for **productId**.

[/slide]

[slide hideTitle]

# Query String and Fragments

We can add **query parameters** and **fragments** to the URL.

To do that, we need to add them to our `component.html` file.

Here is an example:

```
<a
   [routerLink]="[ '/users' ]"
   [queryParams]="{ search: 'Peter' }"
   fragment="loading"
</a>
```

The URL that we will receive looks like this: `/users?search=Peter#loading`.

We can get the parameter or the fragments from the URL with:

-  For parameters: `this.route.snapshot.queryParams`.

-  For fragments: `this.route.snapshot.fragment`.

The snapshot will retrieve them only once.

[/slide]

[slide hideTitle]

# Setting Up Child Routes

We can also have nested routes.

For example, if we have a page where we have tabs in it.

These tabs can be attached to the URL.

In Angular, we can do that by adding **children property** to the **route**.

Also, we need to add the `<router-outlet></router-outlet>` to the component **html** file.

Here is an example:

```js
{
  path: 'product', component: ProductComponent, children: [
    { path: ':id', component: ProductComponent },
    { path: ':id/details', component: ProductDetailsComponent }
  ]
}
```

In this example, we have a path called **product**.

As a component, we add the **children property**, where we put the nested routes.

[/slide]

[slide hideTitle]

# Redirect

We can redirect the user to a different path.

That can happen by rendering a different component.

The redirecting is very useful, for example, when the user tries to access a page that does not exist.

We can return the **404** page by using a **wildcard**.

It looks like this:

```js
{ path: '**', component: PageNotFoundComponent }
```

The wildcard needs to be in the last route.

To redirect, we can use the **redirectTo** property.

We add it to the route object.

[/slide]
