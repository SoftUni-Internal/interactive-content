[slide hideTitle]

# Summary

## In this lesson you learned:

- Components are the building blocks of any Angular application


- You can create components manually

```js
import { Component } from '@angular/core';
@Component({
    selector: 'app-home',
    template: '<h1>Home View</h1>'
    styleUrls: ['./app.component.css']
})
export class AppComponent{}
```

- Components can be created with the Angular CLI by using the `ng generate component` command, followed by the name of the component.

- Each component has its own template that can be rendered from inline HTML or loaded from an external file

```js
@Component({ 
    selector: 'app', 
    template: `<h1>{{title}}</h1`
});
```

- There are three types of data binding
    - from model to view
    - from view to model
    - two-way binding
    
- We can intersect the lifecycle of a component

```js
ngOnInit() { this.data = 'Retrieve data'};
```

- Components can interact with each other

```js
@Output() fromChild = new EventEmitter<boolean>();
```

## In the next lesson, you will learn:

- Change Detection Strategy​
- SOLID Principles​
- Services​
- Observables and RxJS​
- HTTP Client

[/slide]
