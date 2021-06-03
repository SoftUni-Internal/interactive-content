# Router Module

[slide hideTitle]

# Define the Template

Angular-Modules-and-routing-11-12-Router-module

To create a template, we need to go through a number of steps.

The first one is to add a **base meta tag** in the `index.html` file.

The tag looks like this: `<base href="/">`.

After that, we can add a navigation tag to the `app.component.html` file or any other render location:

```js
<nav>
   <a routerLink='/home'>Home</a>
   <a routerLink='/about'>About</a>
</nav>
```

In this `nav` tag, we are using **routerLink** instead of **href**.

This custom attribute overrides the default page reload that **href** does.

Finally, we have to define the **router outlet**:

```js
<router-outlet></router-outlet>
```

[/slide]

[slide hideTitle]

## Create Routes Module

Angular-Modules-and-routing-13-14-15-Create-Routes-Module

To create a Router Module, we need to create a file called `app-routing.module.ts`.

You can do this either manually or by using **Angular CLI**:

```
ng generate module app-routing --flat --module=app
```

Once the file has been saved, we must import **NgModule**, **RouterModule**, and **Routes**, as well as our **components**.

We put the routes in an array, as shown below:

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

After the routes have been created, the module should be decorated like this:

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

Angular-Modules-and-routing-16-The-RouterLink-Directive

`RouterLink` turns elements into links.

It gives the element an **href** to a route, and the user can open it.

We can pass the location by using a **string path**, again, similarly to an **href**.

And the other way is to pass an **array**.

Here are examples of both ways:

-  Using a **string**:

```js
<a routerLink='/about'>About</a>
```

-  Using an **array**:

```js
<a [routerLink]="[ '/users', 12345, 'profile' ]">
   Profile Page
</a>
```

[/slide]

[slide hideTitle]

# Navigate Programmatically

Angular-Modules-and-routing-17-Navigate-Programmatically

We can add a Router to a component.

To do that, we need to import **Router** from the `@angular/router` package.

Once it is imported, we can pass it in as a property to the constructor of that component:

```js
constructor(
 private router: Router
) { ... }
```

After the router is set in the constructor, we need to create a method that will navigate to a given path:

```js
loadData() {
 this.router.navigate([ '/home' ])
}
```

[/slide]

[slide hideTitle]

# Passing Parameters to Routes

Angular-Modules-and-routing-18-Passing-Parameters-to-routes

When we want to make a URL that contains a dynamic route, such as a product number, we need to configure the parameters.

Consider the following route: `/catalog/electronics/XYZ5538`

Here `XYZ5538` is the ID of the given gadget.

We have to change it, depending on which product the user decides to view.

So we do this by adding the **ID** to the path of the route, in this format: `:parameter`.

There are two ways to do that - using a **string** or an **array**.

Also, we can pass **one** or **multiple** parameters.

In this example, we pass a single **id** as a parameter:

```js
{ path: 'catalog/:id', component: ProductDetailsComponent }
```

And here, we have two parameters: `:category` and `:id`

```js
{ path: 'catalog/:category/:id', component: ProductDetailsComponent }
```

[/slide]

[slide hideTitle]

# Fetching Parameters

Angular-Modules-and-routing-19-Fetching-Parameters
Angular-Modules-and-routing-20-Fetching-Parameters-Reactively

We use **ActivatedRoute** when we want to fetch a route associated with the component loaded in an outlet.

To use it, we need to set it in the constructor of the component:

```js
constructor(
 private route: ActivatedRoute
) { }
```

After **ActivatedRoute** has been set we can use `this.route.params` to retrieve the parameters from the URL.

If we want to get the parameters **only once**, we can use `this.route.snapshot.params`.

This must be done in the  **ngOnInit** lifecycle hook:

```js
ngOnInit() {
  const id = this.route.snapshot.params['id'];
}
```

In this example, we take a snapshot of the **id**.

If we want to change the content of a loaded component, we can use observables.

For example, to change the product on a detail page, we do the following:

```js
ngOnInit() {
  this.route.params
    .subscribe((params: Params) => {
        const id = params['productId']
      }
   )
}
```

The **subscribe** method listens for changes in the URL.

If it detects any, it retrieves the requested parameters.

In this case, it listens for **productId**.

[/slide]

[slide hideTitle]

# Query String and Fragments

Angular-Modules-and-routing-21-Query-strings-and-fragments

We can add **query parameters** and **fragments** to the URL.

To do that, we need to add them to our `component.html` file:

```js
<a [routerLink]="[ '/users' ]" [queryParams]="{ search: 'Peter' }" fragment="loading">
</a>
```

The URL that we will receive looks like this: `/users?search=Peter#loading`.

We can get the parameter or the fragments from the URL with the following properties:

-  For parameters: `this.route.snapshot.queryParams`

-  For fragments: `this.route.snapshot.fragment`

The snapshot will retrieve them only once.

[/slide]

[slide hideTitle]

# Setting Up Child Routes

Angular-Modules-and-routing-22-Setting-up-child-routes

We can also have nested routes.

For example, if we have a page with multiple sections, they can be attached to the URL.

In Angular, we can do that by adding a **children** property to the **route**:

```js
{
  path: 'product', component: ProductComponent, children: [
    { path: ':id', component: ProductComponent },
    { path: ':id/details', component: ProductDetailsComponent }
  ]
}
```

In this example, we have a path called **product**.

As a component, we add the **children** property, where we store the nested routes.

Also, we must add the `<router-outlet></router-outlet>` placeholder to the component's **html** file.

[/slide]

[slide hideTitle]

# Redirect

Angular-Modules-and-routing-23-Using-Wildcards-and-redirects

We can redirect the user to a different path.

That can happen by rendering a different component.

Redirecting is useful, for example, when the user tries to access a page that does not exist.

We can return the **404** page by using a **wildcard**:

```js
{ path: '*', component: PageNotFoundComponent }
```

The wildcard needs to be in the last route as it will match every route that has not been handled.

To redirect, we can use the **redirectTo** property.

We add it to the route object.

```js
{ path: '*', component: PageNotFoundComponent, redirectTo: 'notfound' }
```

[/slide]
