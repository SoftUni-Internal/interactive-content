# Angular Overview

[slide hideTitle]

# What is Angular?

**Angular** is an open-source **web application framework**, developed by **Google**, written in [TypeScript](https://en.wikipedia.org/wiki/TypeScript), made for building **enterprise-level front-end** applications.

Angular concentrates on best the **front-end practices** and the **end-to-end tooling**, as well **Angular CLI** gives us a **high-quality** build process, which allows us to create quickly a very well structured app.

Also, it gives us **end-to-end testing**, **unit testing**, and more.

Components in Angular are the basics elements, which are organized in "**NgModules**".

An Angular app is defined by a set of "**NgModules**", which collect related code into functional sets.

The minimum requirement for an Angular application is to have no less than one root module that enables bootstrapping, and also has many more feature modules.

Here is an example of an Angular component:

```js
   import { Component } from '@angular/core';

   @Component({
      selector: 'my-app',
      template: `<h1>Hello {{ name }}</h1>`,
   })
   export class AppComponent {
      name = 'Angular';
   } 
```

In this example, we have the **AppComponent** class decorated with **component decorator** - `@Component`.

This **decorator** has a **selector** and a **template**.

The **selector** wraps the template as instruction and triggers the instantiation of that instruction.

That means whenever there is an HTML tag with `my-app`, the **AppComponent** will create itself, and the **template** will render.

[/slide]

[slide hideTitle]

# Angular Versions

The first version is **Angular 1**, which now is called **AngularJS**.

The second version of **Angular** is called **Angular 2**, which is a **complete re-write** of the **Angular** (**AngularJS**).

The following versions after the **Angular 2**, nowadays are called just **Angular**.

[image assetsSrc="Angular-Introduction-3.png" /]

[/slide]
