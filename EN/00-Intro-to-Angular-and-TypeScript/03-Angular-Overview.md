# Angular Overview

[slide]

# What is Angular?

Angular is an open-source **web application framework** for building enterprise\-level front-end applications.

It is developed by **Google**.

Angular concentrates on best the **front-end practices** and the **end-to-end tooling**.

The **Angular CLI** gives us a really good build process, which allows us to create quickly a very well structured app.

Also, it gives us end-to-end testing, unit testing, and more.

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

In this example, we have a class called **AppComponent**, which is decorated with **component decorator** - `@Component`.

This decorator has **selector** and **template**.

The selector wraps the template as instruction and triggers the instantiation of that instruction.

That means whenever there is an HTML tag with `my-app`, the **AppComponent** will be created.

And will render the **template**.

[/slide]

[slide]

# Angular Versions

The first version is **Angular 1**, which now is called AngularJS.

The second version is a **complete re-write** of the first one.

It is **Angular 2** and the following version after the second one.

They are called just **Angular**.

[image assetsSrc="Angular-Introduction-3.png" /]

[/slide]
