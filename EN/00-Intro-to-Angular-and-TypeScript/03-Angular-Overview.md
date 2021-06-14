# Angular Overview

[slide hideTitle]

# What is Angular?

Intro-to-Angular-and-Typescript-11-12-Angular-Overview

**Angular** is an open-source **web application framework**, developed by **Google**, written in [TypeScript](https://en.wikipedia.org/wiki/TypeScript), for building **enterprise-level front-end** applications.

Angular encorporates the best **front-end practices** and **end-to-end tooling**, also **Angular CLI** gives us a **high-quality** build process, which allows us to create a well structured app quickly.

Also, it gives us **end-to-end testing**, **unit testing**, and more.

Angular components are its basic elements, which are organized in "**NgModules**".

An Angular app is defined by a set of "**NgModules**", which collect related code into functional sets.

The **minimum requirement for an Angular application** is to have no less than **one root module** that enables bootstrapping, there can be many additonal feature modules.

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

The **selector** wraps the template as an instruction and triggers the instantiation of that instruction.

That means whenever there is an HTML `my-app` tag, the **AppComponent** will initialize itself, and the **template** will render.

[/slide]

[slide hideTitle]

# Angular Versions

Intro-to-Angular-and-Typescript-13-Angular-Versions

The first Angular version was called **Angular 1**, now called **AngularJS**.

The second - **Angular 2** is a **complete re-write** of **AngularJS**.

All following versions after **Angular 2** are just called: **Angular**.

[image assetsSrc="Angular-Introduction-3.png" /]

[/slide]
