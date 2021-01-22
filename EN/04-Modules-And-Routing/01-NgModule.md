# NgModule

[slide hideTitle]

# Angular Modules Overview

An Angular module is a deployment sub-set of your whole Angular application.

**NgModules** help us to organize our code into blocks that work as one unit.

NgModules are ordinary objects **decorated** with `@NgModule` decorator and you can inject them into other modules or components:

```js
@NgModule({
  imports: [TalksModule]
})
class AppModule {
  constructor(t: TalksModule) {}
}
```


The most popular **Angular** and **third-party** libraries **NgModules** are:

- Material Design
- Ionic
- AngularFire2

[/slide]

[slide hideTitle]

# Creating Custom Modules

Custom Modules or Feature Modules are used when the app gets bigger.

They need to import **CommonModule**, but we do not need to import the **BrowserModule** because **CommonModule** is part of it.

Also, the **BrowserModule** should be only in the root module.

When we create a component in a module, it will show in the **declarations** array.

By default, components in the **declaration** array are private.

So if we want to use that component outside that module, we will need the **exports** array.

Here is an example:

```js
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
   imports: [CommonModule],
   declarations: [CustomerListComponent, CustomerDetailsComponent],
   exports: [CustomerListComponent],
   providers: [CustomersService],
})
export class CustomersModule {}
```

Here we create a module called **CustomersModule**.

This module **imports** the CommonModule and **declares** two components.

CustomersModule exports only one of the components also uses a provider called **CustomersService**.

[/slide]

[slide hideTitle]

# Suggested Common Module

If we are dealing with a small size project, we may use the single `AppModule` for all declarations.

However, when the application grows bigger and more complex we should use **shared**, **core**, and **feature** modules.

Doing so will ensure proper separation of concerns, and scalability will be not a problem as our application grows.

Let us see how each type of module works:

- **Shared Module**: as the name suggests is used pieces of our application that need to be used across multiple areas.

We declare a shared module If a component is going to be re-used multiple times.

- **Core Module:** is a way to separate the configuration layer of our application from the rest of the application.

We can do that by declaring our features and shared modules in a **Core Module** and just provide that **Core Module** to the `AppModule`.

We can look at this as a parent feature module for content that we are going to add to an application.

- **Feature Module:** all of the content is going to be encapsulated inside of a single area.

A feature module is a stand alone application inside your full application, which should be made up of multiple feature modules.

You can find more information about NgModules in the [Angular guide](https://angular.io/guide/ngmodules).

[/slide]
