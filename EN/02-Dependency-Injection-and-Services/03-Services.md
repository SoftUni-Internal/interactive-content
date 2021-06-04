# Services

[slide hideTitle]

# Why We Need Services?

18-19-Services-and-why-we-need-services

An angular app can be **divided** into several components:

- **Logo** component 
- **Sign in** component 
- An **image** component 
- **Areate account** component

These components are **standalone** and each of them **represents** a part of the user interface.

All of these components could **performed** common tasks, for example accessing the **database** or **rendering** images on the view.

Instead of having to **write the code for every component** we can just make use of Angular services.

A service could be a **function**, it could be a **variable**, or a **feature** that an application needs, and once written it could be **injected into all** of these components.
 
A component can **delegate** tasks like:
- **Fetching** data from the server
- **Validating** user input

These tasks can be made **available** to any component in the app.

Angular services have the following **features**:

- Angular service is simply a TypeScript **class** with an at **injectable** decorator

This decorator **tells** Angular that the class is a **service** and can be **injected** into **components** that need that service.

- Services hold **valuable business logic** and can also be used to interact with the backend 

For example, if you want to make **AJAX calls** you can have **methods** to those calls in the **service** and then use it as a **dependency** in files.

- Services are **singleton**, meaning that only a **single** instance of service gets **created** and the** same instance** is used by ** each** building block in the application 

- Service can be **registered** as a part of a **module** or it can be **registered** as a part of the **component** 

To register it as a part of the **component** you will have to **specify** it in the **providers array** of the module.

[/slide]

[slide hideTitle]

# Create a Service

20-Create-a-Service

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

# Injecting Into Components

21-Injecting-into-Components

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

In the `@Component` decorator, we pass an array that contains our class, to the `providers` property.

Then, we add `NotifyService` to the constructor of the `AppComponent` class as a parameter.

[/slide]


[slide hideTitle]

# Injectable Decorator

22-Injectable-Decorator

The **easiest way to create** an injectable service is by using **Angular CLI**.

Open a **command-line tool** in your project directory and type `ng generate service demo`.

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