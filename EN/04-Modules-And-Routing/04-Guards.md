# Router Guards

[slide hideTitle]

# Guards Overview

Angular-Modules-and-routing-24-25-Guards-overview

Guards are used for **stopping** the user from accessing routes that he has **no** permission to access.

To have guards in our application, we need to create a **guard service**.

We can use the `ng generate guard` command from the Angular CLI.

After the service is created, we need to **provide** it in the module, where the routing configuration is.

And finally, we can add the **guard** to the wanted **route**.

[/slide]

[slide hideTitle]

# CanActivate Guard

Angular-Modules-and-routing-26-27-CanActivate-Guard

We can use **CanActivate** if we want to check before the route **activation**.

It is useful for checking if the user is **logged in** or **not**

For example, on a profile page, if the user is logged in, he will be able to see the profile page.

But if not, he will be redirected to the **login page** or the **registration page**.

Here is an example:

```js
@Injectable()
export class AuthGuard implements CanActivate {
   canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
   ): boolean {
      return this.checkIfLogged(state.url);
   }

   checkIfLogged(url: string): boolean {
      // auth logic
   }
}
```

In this example, if the user is **logged in**.

**CanActivate** returns the `checkIfLogged()` function.

This function will return true if the user is logged in and false when he is not.

[/slide]

[slide hideTitle]

# Router Resolver

Angular-Modules-and-routing-28-29-Angular-Router-Resolver

Resolvers are **data providers**.

They allow us to fetch data **before navigating** to the specific route.

The router will wait for the data to be fetched.

We call them inside the route object with the **resolve property**.

Which looks like this:

```js
{
  path: ':id',
  component: UserDetailsComponent,
  resolve: { user: UsersResolver }
}
```

We can add resolvers to the route like an object or like an array.

If we have guards in the route, the resolver will wait for their result.

[/slide]

[slide hideTitle]

# Example of Resolver

Angular-Modules-and-routing-30-ActivatedRoute-example

To create a Resolver, we can use the command from Angular CLI, `ng g resolver nameOfTheResolver`.

The Resolver looks like this:

```js
@Injectable()
export class TestResolver implements Resolve<boolean> {
   resolve(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
   ): Observable<boolean> {
      return of(true);

      // return a service
   }
}
```

We have a **TestResolver** class decorated with an injectable.

**TestResolver** implements the **Resolve** interface.

In this case, Resolve will return a boolean.

After the Resolver is created, we need to provide it in the `app.module` file.

Also, we need to add the Resolver to the **route**.

And finally, we can implement it into a component.

To do that, we need to take the data from the snapshot, with `this.route.snapshot.data['user'];`.

[/slide]
