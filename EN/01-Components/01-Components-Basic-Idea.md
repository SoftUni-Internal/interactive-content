# Components Basic Idea

[slide hideTitle]

# Components - Overview

Angular-Components-3-4-Components

A component controls a **patch** of the screen called a **view**.

We define a component's **application logic** to support the view inside a class. 

Each component has its own **HTML** and **CSS** template.

The class interacts with the view through an **API** of **properties** and **methods**.

The `@Component` decorator identifies the class immediately below it as a component class and specifies its metadata. 

In the example code below, you can see that **AppComponent** is just a class, with no special Angular notation or syntax at all. 

It is not a component until we mark it as one with the `@Component` decorator.

```js
import { Component } from '@angular/core';
```

```js
@Component({
    selector: 'app-root',
    template: `<h1>{{title}}</h1>`,
    styles: [ `h1 { background-color: red; }` ]
})
```

```js
export class AppComponent { title = 'App Title'; }
```

[/slide]

[slide hideTitle]

# The Idea Behind Components

Angular-Components-5-The-Idea-behind-components

The arrangement of the views is hierarchical, allowing you to modify or show and hide entire UI sections or pages as a unit. 

The template immediately associated with a component defines that component's host view. 

The component can also define a view hierarchy, which contains embedded views hosted by other components.

[image assetsSrc="Angular-Components.png" /]

[/slide]