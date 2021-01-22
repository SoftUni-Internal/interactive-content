# Services

[slide hideTitle]

# Why We Need Services?

**Angular services** are singleton **objects** which get instantiated only **once** during the lifetime of an application.

The main objective of a **service** is to **organize** and share **logic, models, or data and functions** with different components of an Angular application.

This results in better **modularity** and greater **separation of concerns**.

They contain **methods** that **maintain data** throughout the application lifecycle.

This means that you can **persist** any information you need.

Allowing us to share data between controllers, they are a great way to avoid **repetitive code**.


[/slide]

[slide hideTitle]

# Create a Service

Angular **services** look like any other TypeScript **class** that handles **data manipulation**.

Let us create a simple service which we will call `NotifyService`.

In the `src/app` directory of your project, create a new file, called `notify.service.ts`.

Inside, type in the following code:

```js
export class NotifyService {
	notify(message: string) { 
		alert(message); 
	}
}
```

Our simple service contains a `notify()` function, which displays an alert in the browser.

[/slide]


[slide hideTitle]

# Injecting into Components

To **inject a service into a component**, first go to the component's TypeScript file.

We will use the main `AppComponent` as an example:

```js
import { Component } from '@angular/core';
import { NotifyService } from './notify.service.ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [NotifyService]
})

export class AppComponent {
	constructor(private notifyService: NotifyService) {
		this.notifyService.notify("Our service is working!")
	}
}
```

At the top of our file, we import the `NotifyService` class.

In the `@Component` decorator, we pass an array which contains our class, to the `providers` property.

Then, we add `NotifyService` to the constructor of the `AppComponent` class as a parameter.

[/slide]


[slide hideTitle]

# Injectable Decorator

The easiest way to create an injectable service is by using **Angular CLI**.

Open a command\-line tool in your project directory and type `ng generate service demo`.

This command will generate a skeleton `DemoService` class.

You can replace `demo` with any name you want.

Our service is located in `src/app/demo.service.ts`:

```js
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class DemoService {

  constructor() { 
    // ...
  }

}
```

The `@Injectable` decorator is used to mark the class as a **member** of the **dependency injection system**.

The `DemoService` class will provide an injectable **service**, and it can also have its own injected **dependencies**.

[/slide]