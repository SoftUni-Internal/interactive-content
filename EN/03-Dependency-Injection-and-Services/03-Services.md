# Services

[slide hideTitle]

# Why Do We Need Services?

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/03-Dependency-Injections/18-19-Services-and-why-we-need-services-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

An angular app can be **divided** into several components:

- **Logo** component 
- **Sign in** component 
- **Image** component 
- **Create account** component

These components are **standalone**, and each of them **represents** a part of the user interface.

All of them could **perform** common tasks like accessing the **database** or **rendering** images on the view.

Instead of having to **write the code for every component**, we can just use Angular services.

A service could be a **function**, a **variable**, or a **feature** that an application needs, and once written, it could be **injected into all** of these components.
 
A component can **delegate** tasks like:
- **Fetching** data from the server
- **Validating** user input

These tasks can be made **available** to any component in the app.

Angular services have the following **features**:

- They are simply TypeScript **classes** with an **injectable** decorator

This decorator **tells** Angular that the class is a **service** and can be **injected** into **components** that need that service.

- Services hold **valuable business logic** and can also be used to interact with the server-side 

For example, if we want to make **AJAX calls**, we can have **methods** for those calls in the **service**.

Then, we can use them as a **dependency** in the files.

- Services are **singleton**, meaning that only a **single** instance of service gets **created** and the **same instance** is used by **each** building block in the application 

- A service can be **registered** as part of a **module** or it can be **registered** as part of the **component** 

To register it as part of the **component**, we will have to **specify** it in the **providers array** of the module.

[/slide]

[slide hideTitle]

# Creating a Service

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/03-Dependency-Injections/20-Create-a-Service-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Angular **services** look like any other TypeScript **class** that performs **data manipulation**.

In the following example, we will create a simple service and call it `NotifyService`.

In the `src/app` directory of our project, we will create a new file, which will be called `notify.service.ts`.

Inside it, type in the following block of code:

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

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/03-Dependency-Injections/21-Injecting-into-Components-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

To **inject a service into a component**, we should go to the component's TypeScript file.

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

In the `@Component` decorator, we pass an array that contains our class to the `providers` property.

Then, we add `NotifyService` to the constructor of the `AppComponent` class as a parameter.

[/slide]


[slide hideTitle]

# Injectable Decorator

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/03-Dependency-Injections/22-Injectable-Decorator-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The **easiest way to create** an injectable service is by using the **Angular CLI**.

After opening a **command-line tool** in the project directory, type `ng generate service demo`.

This command will generate a skeleton `DemoService` class.

We can replace `demo` with any name we want.

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

The `DemoService` class will provide an injectable **service**. It can also have its own injected **dependencies**.

[/slide]
