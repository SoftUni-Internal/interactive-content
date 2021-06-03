# Creating Components

[slide hideTitle]

# Creating Components Manually

Angular-Components-6-7-8-9-Creating-components-manually

Components are the most basic UI building blocks of an Angular app.

The main tasks of a component is to display a specific page or section and to bind data between the **view** and the **model**.

A component contains 3 parts:

- Template File: an HTML View
- TypeScript File: a Model
- Style File: style CSS

To create a component, we need the **Component Decorator**. 

It provides metadata and tells Angular that we create a **Component** that is not an ordinary class.

First of all, we import **Component** from the `@angular/core` library. 

Then, we create an Angular Component.

The `@Component` decorator marks the **TS** - **TypeScript** class as a Component and allows us to add the following metadata.

Finally, we export the class.

We can then call it inside the app module or other places in the project.

```js
import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    template: '<h1>Home View</h1>'
    styleUrls: ['./app.component.css']
})
export class AppComponent{}
```

## Breakdown of Component Metadata

The **selector** is for calling the component inside other HTML files of the project as an HTML tag: `<app-home></app-home>`

The **template** is where the HTML View of the component is.

The **templateUrl** is the path to the HTML file like so: `templateUrl: './app.component.html'`

The **styleUrls** can be more than one and is where the style CSS of the component is. It is usually an array.

The **providers** is a list of providers which, can be injected using **Dependency Injection**.

```js
import { Component } from '@angular/core';
@Component({
    selector: 'app-home',
    template: '<h1>Home View</h1>'
    styleUrls: ['./app.component.css']
})
export class AppComponent{}
```

## Add Component to a Module

After creating a component, we need to add it in the **declarations** array at the app module.

**NgModules** help organize an application into cohesive blocks of functionality.

Use the declarations array to declare components, directives, and pipes into the module in which they belong. 

Every component, directive, and pipe gets to know about others through this declaration. 

Without this declaration, a component would not be able to use directives and pipes.

```js
@NgModule({
    declarations: [ AppComponent, HomeComponent ]
})
```

[/slide]

[slide hideTitle]

# Creating Components With The CLI

Angular-Components-10-Creating-Components-with-the-CLI

We can use the **Angular CLI** - a command-line interface for Angular to generate a new component.

Type in the following command: `ng generate component home`.

The command-line interface creates a new folder in `src/app/home/` and imports the component in the app module.

[/slide]