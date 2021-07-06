# Router Guards

[slide hideTitle]

# Guards Overview

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/05-Modules-and-Routing/Angular-Modules-and-routing-24-25-Guards-overview-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Guards **prevent** the user from accessing **restricted** routes.

To implement guards in our application, we need to create a **guard service**.

We can use the `ng generate guard` command in the Angular CLI.

```js
ng generate guard guard-name
```

You can add flags after the guard's name, such as `--implements` or `--flat`.

The `--implements` flag specifies which interfaces should be implemented in the service.

The possible options are:
-  `CanActivate`
-  `CanActivateChild`
-  `CanLoad`

Once the service is instantiated, it should be **provided** in the module, where the routing configuration is.

Finally, we can add the **guard** to the wanted **route**.

[/slide]

[slide hideTitle]

# CanActivate Guard

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/05-Modules-and-Routing/Angular-Modules-and-routing-26-27-CanActivate-Guard-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We can use **CanActivate** when we want to verify something before letting the user access the route.

For example, if a user is logged in, they **can see their profile page**.

If not, they will instead be redirected to the **login ** or **registration pages**:

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

In this example, if the user is **logged in**, **CanActivate** returns the `checkIfLogged()` function.

This function returns a boolean - it should **return true** for a logged-in user and **false** otherwise.

[/slide]

[slide hideTitle]

# Router Resolver

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/05-Modules-and-Routing/Angular-Modules-and-routing-28-29-30-Angular-Router-Resolver-and-example-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Resolvers are **data providers**.

They allow us to fetch data **before navigating** to a specific route.

The router will wait for the data to be fetched.

We call them inside the route object with the **resolve property**:

```js
{
  path: ':id',
  component: UserDetailsComponent,
  resolve: { user: UsersResolver }
}
```

We can add resolvers to the **route either as an object or as an array**.

If we have guards in the route, the resolver will wait for their result.

It will determine whether to **fetch the information** or not, depending on the guard's return value.

## Creating a Resolver

To create a Resolver, we can use the Angular CLI:

```
ng g resolver nameOfTheResolver
```

The following example shows the correct syntax:

```js
@Injectable()
export class TestResolver implements Resolve<boolean> {
   resolve(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
   ): Observable<boolean> {
      return of(true);

      // Return a service
   }
}
```

We have a **TestResolver** class decorated with an injectable.

**TestResolver** implements the **Resolve** interface.

In this case, Resolve will return a boolean.

Once the Resolver has been created, we must provide it in the `app.module` file.

After that, we need to add the Resolver to the **given route**.

And finally, **we can implement it into a component**.

To do that, we need to take the data from the snapshot by using `this.route.snapshot.data['user'];`.

[/slide]
