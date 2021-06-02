# Pipes

[slide hideTitle]

# What Are Pipes?

The idea of pipes comes from Linux/Unix systems, where into the command line we can **write pipes**, which are just `|` symbols.

This gives us the **ability** for output from one **command** to be forwarded to **another command**. 

The ability for **chaining commands** is almost the same as in **promises**, where the result from one promise could be passed to another promise, and so on.

It is well known that Angular data can be transformed by using a service or a component.

What **Pipes** does is to allow **transform data**, and when pipes are pure functions they can **memorize parameters**.

So when a pipe function **receives a parameter** that had been given, Angular does not calculate the result **yet again**, instead, the result is **instantly returned**.

Pipes can be applied to **any property** - including **strings**, **numbers** and arrays.

To **use** a pipe, put a **pipe operator** `|` **after the value** and then add the **name** of the pipe.

Some of the **build-in pipes** are:

- `{{ message | lowercase }}`: this pipe transform a string to **lowercase**

- `{{ message | uppercase | titlecase }}`: pipes can be **chained**, where the order of **applying them** is from left to right (uppercase than titlecase)


[/slide]


[slide hideTitle]

# Parameterizing Pipes

Some pipes can also accept parameters.

For example, the `slice` pipe creates a new **string** or an **array**, which contains a subset of the **original** one.

It accepts **two parameters**:

- **Start index**
- **End index**, which is non-inclusive and optional

Parameters are added using a **colon**:

`{{ username | slice:0:6 }}`

This is the **initial state** of `username`:

`this.username = 'juliemiller'`

After `slice` is applied, the `username` string will be **displayed** as `julie`.

To learn about **other built-in pipes**, visit Angular's [documentation](https://angular.io/api?query=pipe
).

[/slide]


[slide hideTitle]

# Creating Pipes

The easiest way to create a **custom pipe** is by using Angular CLI:

`ng generate pipe greeting`

By doing so, we eliminate the need of **adding our pipe** to the `Declarations` array in `app.module.ts` since the CLI does it **automatically**.

This is an example of a custom `greeting` pipe, which accepts a string and prepends `Hello, ` to it:

```js
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'greeting'
})

export class GreetingPipe implements PipeTransform {
  transform(username: string) {
    return 'Hello, ' + username;
  }
}
```

Inside `src/app/greeting.pipe.ts`, we import the `Pipe` and `PipeTransform` classes from `@angular/core`.

The `@Pipe` decorator accepts an object with the **name** variable.

This is the name we will **use** when **applying our custom pipe in a template**.

The `PipeTransform` class contains the `transform` method, used for **transforming data**.

Our `GreetingPipe` class implements it in order to **return the modified string**.

We use our custom pipe as follows:

`<h1>{{ username | greeting }}</h1>`

This is how the string looks before our custom pipe is applied:

`this.username = 'james.appleseed'`

Once applied, `Hello, james.appleseed` will be **rendered in the view**.



[/slide]

[slide hideTitle]

# Creating Pipes: Receiving Parameters

Just like some built-in pipes, **custom pipes** can also receive **parameters**.

```js
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiply'
})

export class MultiplyPipe implements PipeTransform {

  transform(value: number, multiplier: number) {
    return value * multiplier;
  }

}
```

The `multiply` pipe receives a `multiplier` as an additional **parameter**.

`<p>The number is {{250 | multiply:3}}</p>`

The expected output is 750.


[/slide]

[slide hideTitle]

# Async Pipe - Example

The async pipe is used to **run asynchronous code**.

It **subscribes** to a **promise** or **observable** and **returns** the latest **data**.

```js
notification = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Welcome back!');
  }, 1000)}) 

```

`<h1>{{ notification | async }}</h1>`


[/slide]

[slide hideTitle]

# Async Pipe - Observables

Working with **Observables**, `AsyncPipe` automatically **subscribes**, **unwraps data** and **unsubscribes** when a component gets **destroyed**.

This example **fetches** a **list of users** from a **database**:

```js
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { UsersService } from 'services/users.service.ts';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit { 
  constructor (
   private usersService : UsersService
  ) { }

  users$ : Observable<User[]>
   
  ngOnInit() {
    this.users$ = this.usersService.getAllUsers();
  }

}

```

First, we **import** the `Observable` class from `rxjs` and a `UsersService` which contains methods used for fetching user data.

`users$` is an **observable** that should return an array of **user instances**.

Inside `ngOnInit` we **fetch all users** and **save** them in `this.users$`.

We use `ngFor` to **render** separate `div` elements with information for **each user** and apply the `async` pipe like so:

```
<div *ngFor="let user of users$ | async">
  // ...
</div>
```

[/slide]