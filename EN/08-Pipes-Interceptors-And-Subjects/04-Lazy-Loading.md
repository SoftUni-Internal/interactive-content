# Lazy Loading

[slide hideTitle]

# What is Lazy Loading?

js-interactive-pipes-interceptors-and-subjects-21-22-Lazy-Loading-and-what-is-lazy-loading

Angular loads **all application modules** once the application starts, even if they are **not going to be needed** at the moment.

This **default** behavior can affect **loading time negatively**, especially if your application is **large**.

For example, if a website **has about 100 pages** like **home** page, **dashboard** page, **about** us page, **contact** us page, etc.

When the user visits that website and **goes to the homepage**, if the **lazy lading pattern is not used*, the **whole website will be downloaded**.

The user will have to wait for **every page to be downloaded** before they can see any page at all, even if they are not going to visit all of them.

So it is a **good idea to use lazy loading** for images and videos because they are not **critical resources**.

There is **no need to download the complete video** when a website is loading, you should wait for the user to **click the play button**.

That way, **Lazy Loading** improves **performance** by **selectively downloading** only the modules **necessary** for specific functionality to **run**.

To **implement** Lazy Loading in our project, we need to **separate the application** into different **modules**.

Any of these **additional modules** will **not** be loaded until the user reaches the **main route of a given module**.

[/slide]

[slide hideTitle]

# Preparing for Lazy Loading

js-interactive-pipes-interceptors-and-subjects-23-Preparing-for-Lazy-Loading

To **prepare** for **lazy loading**, create a **feature module** with the CLI:

`ng generate module products --route products --module app.module`

You can replace `products` with a name that fits your use case.

Executing this command will create a **folder** named `products` which will include **two files**:

- `products.module.ts` - contains the **lazy-loadable** `ProductsModule` class

- `products-routing.module.ts` - contains the `ProductsRoutingModule` class

A `ProductsComponent` will be **declared** and `ProductsRoutingModule` will be **imported** inside the new **feature module**.

[/slide]

[slide hideTitle]

# Do not Import in Bootstrap Module

js-interactive-pipes-interceptors-and-subjects-24-Warning-Don't-Import-in-Bootstrap-Module

You should **never** import a feature module inside `app.module.ts`.

Since the `AppModule` is used for **bootstrapping the application**, any imported module will **start loading immediately** when the application is running.

**This defeats the purpose of lazy loading.**

[/slide]

[slide hideTitle]

# Loading Children

js-interactive-pipes-interceptors-and-subjects-25-Load-Children

To **lazy load a feature module**, go to `src/app/app-routing.module.ts`:

```js
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },

  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  }
];
```

Declare the new `products` path in the `routes` array and use `loadChildren` to import the `ProductsModule`.

[/slide]

[slide hideTitle]

# Protecting a Module with CanLoad

js-interactive-pipes-interceptors-and-subjects-26-Protect-Module-with-CanLoad

A class can **implement** the `CanLoad` **interface** in order to **act as a guard** which **decides** if **children** can be **loaded**. 

For example, an `AuthGuard` class can **implement** `CanLoad` to **prevent unauthorised users** from **accessing product routes**: 

```js
class UserToken {
  // ...
}

class Permissions {
  canLoadChildren(user: UserToken, id: string, segments: UrlSegment[]): boolean {
    return true;
  }
}

@Injectable()
class AuthGuard implements CanLoad {
  constructor(private permissions: Permissions, private currentUser: UserToken) {}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean>|Promise<boolean>|boolean {
    return this.permissions.canLoadChildren(this.currentUser, route, segments);
  }
}
```

The `canLoad()` function has **multiple guards**.

**All guards** must **return** `true` for navigation to **continue**.

If **even one guards** returns either `false` or an `UrlTree`, navigation will be **cancelled**.

[/slide]
