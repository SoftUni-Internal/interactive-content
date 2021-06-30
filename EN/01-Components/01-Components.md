# Components Basic Idea

[slide hideTitle]

# The Idea Behind Components

Components are the building blocks of all Angular applications. 

We define a component's behavior using a TypeScript class.

Each component has its own inline **HTML** or template and optionally its own CSS styles attached to it.

The class interacts with the view through an **API** of **properties** and **methods**.

The `@Component` decorator identifies the class immediately below it as a component class and specifies its metadata. 

In the example code below, we can see that **AppComponent** is just a class, with no special Angular notation or syntax at all. 

It is not a component until we use the `@Component` decorator to mark it as such.

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

The **selector** statement is the CSS selector that will be used for referring to the component.

The **template** holds the HTML contents of the component.


**styles** is the CSS template of the component. 

The **template** and the **styles** statements can also load external CSS and HTML files.


```js
export class AppComponent { title = 'App Title'; }
```

This last line of code is the final piece needed so that the **AppComponent** can be exported for use anywhere in our application.

We are also passing a property called **title** with a value of **App Title**, which will replace the `{{title}}` property once the component is displayed in a view.

The arrangement of the views is hierarchical, allowing us to modify or show and hide entire UI sections or pages based on user permissions or actions taken by the user.

Components can interact with each other and can be embedded inside other components creating a hierarchy.

The template's host view is defined by the template that is directly associated with a component.

[image assetsSrc="Angular-Components.png" /]

[/slide]

[slide hideTitle]

# Creating Components Manually

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/02-Components/Angular-Components-6-7-8-9-Creating-components-manually-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Components are the most basic building blocks of an Angular app.

The main tasks of a component are to display a specific page or section and to bind data between the **view** and the **model**.

A component contains 3 parts:

- Template File: an HTML View
- TypeScript File: a Model
- Style File: style CSS

To create a component, we need the **Component Decorator**. 

It provides metadata and tells Angular that we create a **Component** that is not an ordinary class.

First of all, we import **Component** from the `@angular/core` library. 

Then, we create an Angular Component.

The `@Component` decorator marks the **TypeScript** class as a Component and allows us to add its metadata.

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

Writing the HTML and CSS inline or using external files is up to us and how we want to structure our project. 

In some situations when the template requires more than one line of code, it might be better to create an external HTML or CSS file to keep things organized.

The **selector** is used for calling the component inside other HTML files of the project as an HTML tag: `<app-home></app-home>`

The **template** is where the HTML View of the component is.

The **templateUrl** is the path to the HTML file like so: `templateUrl: './app.component.html'`

The **styleUrls** can be more than one. This is where the style CSS of the component is. It is usually an array.

The **providers** is a list of services, which can be injected using **Dependency Injection**.

```js
import { Component } from '@angular/core';
@Component({
    selector: 'app-home',
    template: '<h1>Home View</h1>'
    styleUrls: ['./app.component.css']
})
export class AppComponent{}
```

An example with `providers`:

```js
@Component({
    selector: 'app-home',
    templateUrl: 'registerform.html'
    styleUrls: ['./app.component.css']
  providers: [RegistrationService]
})
```

This is done when we want to eagerly load a module that needs a specific service to operate.

The service will be available to the component and its descendants only.

The other components in the same module will not be able to access it.

After creating a component, we need to add it in the **declarations** array at the app module.

**NgModules** help organize an application into cohesive blocks of functionality.

The declarations array is where all the components, directives and pipes are added to make them usable within that particular module.

Adding them to this array ensures that the different elements can communicate with each other.

Without this declaration, a component would not be able to use directives and pipes.

**Directives** are attached to DOM elements to enhance their functionality in some way.

**Pipes** are elements that receive some data as input and output that data in a different format.

```js
@NgModule({
    declarations: [ AppComponent, HomeComponent ]
})
```

[/slide]

[slide hideTitle]

# Creating Components Using The CLI

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/02-Components/Angular-Components-10-Creating-Components-with-the-CLI-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We can use the **Angular CLI**, which is a command-line interface for Angular, to generate a new component.

Type in the following command: `ng generate component home`.

The command-line interface creates a new folder with the name of the component located in `src/app/home/` and imports the component in the app module.

This is the fastest way to create a new component.

When we create a component through the CLI a few things will be added for us:
- a folder with the name of the component
- a component file
- an HTML template file
- a CSS template file
- a testing specification file

The default behavior of the `ng generate component` command can be adjusted.

[/slide]
