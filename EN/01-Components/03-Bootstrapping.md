# Bootstrapping

[slide hideTitle]

# Bootstrapping an Application

Angular-Components-11-12-Bootstrapping-An-Application

A **NgModule** describes how the application parts fit together. 

Every application has at **least one Angular module**, the root module, which must be present for **bootstrapping**, or in other words, **starting** the application on launch. 

By convention, the **NgModule** is called **AppModule**, but we can give it any other meaningful name.

[/slide]

[slide hideTitle]

# The Initial Module

Angular-Components-13-The-Initial-Module

After the import statements is a class with the `@NgModule` decorator.

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

[/slide]

[slide hideTitle]

# Initial Module Properties

Angular-Components-14-15-Initial-Module-Properties

The module's **declarations array** tells Angular which components belong to that module. Newly created components are added to **declarations**.

Declare a component in one **NgModule** class. Using a component without declaring it will result in an error message.

The module's **imports array** appears only in the `@NgModule` metadata object. It tells Angular about other **NgModules** that this particular module needs to function properly.

In this case, the component is **AppComponent**, which references components directives or pipes in **BrowserModule**.

The **providers array** is where are listed the services the app needs. The services listed here are available app-wide.

The application launches by bootstrapping the root **AppModule**, also known as an **entryComponent**. 

The bootstrapping also creates the components listed in the bootstrap array and inserts each one of them into the browser DOM.

The default application created by the Angular CLI only has one component, **AppComponent**, so it is in both the **declarations** and the **bootstrap** arrays.

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