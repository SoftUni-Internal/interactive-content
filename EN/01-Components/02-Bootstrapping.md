# Bootstrapping

[slide hideTitle]

# Bootstrapping an Application

Bootstrapping is the action of initializing our Angular application.

When loading an application Angular uses the following initialization order:

- Loading the index.html file
- Loading Angular, the libraries needed for running the app and the App code
- Executing the main.ts
- Loading App-level module
- Loading App-level component
- Template processing

The App-level module, also called the root module, has one app-level component attached to it. 

Every application has at least one Angular module, the root module, which must be present for **bootstrapping**, or in other words, **starting** the application on launch. 

To specify which component should be loaded by Angular we use the `@NgModule` decorator.

**NgModule** describes how the application parts fit together. 

By convention, the **NgModule** is called **AppModule**, but we can give it any other meaningful name.

[/slide]

[slide hideTitle]

# The Initial Module

We add the `@NgModule` decorator after the import statements.

The `@NgModule` decorator identifies **AppModule** as an **NgModule** class. 

`@NgModule` takes a metadata object that tells Angular how to compile and launch the application.

```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

/* the AppModule class with the @NgModule decorator */
@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

The `bootstrap` property of the NgModule specifies the correct app-level component to load.

[/slide]

[slide hideTitle]

# Initial Module Properties

The module's **declarations array** tells Angular which components belong to that module. 

Newly created components are added to **declarations**.

Declare a component in one **NgModule** class. 

Using a component without declaring it will result in an error message.

The module's **imports array** appears only in the `@NgModule` metadata object. 

This is how you indicate which **NgModules** are needed by this particular module needs to function properly.

The component, in this case, is **AppComponent**, which references components directives or pipes in **BrowserModule**.

The services that are required for the functioning of the Angular app are declared in the **providers array**.

Any service listed here will be available anywhere in the app.

The application launches by bootstrapping the root **AppModule**, also known as an **entryComponent**. 

The bootstrapping also creates the components listed in the bootstrap array and inserts them into the DOM.

The default application created by the Angular CLI has only one component, **AppComponent**, so it is in both the **declarations** and the **bootstrap** arrays.

```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

/* the AppModule class with the @NgModule decorator */
@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

[/slide]
