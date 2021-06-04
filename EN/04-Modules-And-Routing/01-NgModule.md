# NgModule

[slide hideTitle]

# Angular Modules Overview

Angular-Modules-and-routing-3-4-The-NgModule

An Angular module is a deployment **subset** of your whole Angular application.

**NgModules** help us organize our code into blocks that work as a singular unit.

You can inject them into **other modules** or components.

This is how the main `app.module.ts` looks.

```js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports:      [ BrowserModule ],
  providers:    [ Logger ],
  declarations: [ AppComponent ],
  exports:      [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

As shown above, they are ordinary objects **decorated** with an `@NgModule` decorator.

The most popular **Angular** and **third-party** libraries **NgModules** are:

- [Material UI](https://material.angular.io/)
- [Ionic](https://ionicframework.com/)
- [AngularFire2](https://github.com/IdanCo/angularfire2)

[/slide]

[slide hideTitle]

# Creating Custom Modules

Angular-Modules-and-routing-5-6-Creating-Custom-modules

We implement **custom modules** (also known as feature modules) when the app becomes larger.

They need to import **CommonModule**, but we do not need to import the **BrowserModule** because **CommonModule** is part of it.

Also, the **BrowserModule** should be only in the root module.

When we create a component in a module, it will show in the **declarations** array.

By default, components in the **declaration** array are private.

So if we want to use that **component outside that module**, we will need the **exports** array.

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

In this example, we create a module called **CustomersModule**.

This module **imports** the CommonModule and **declares** two components.

CustomersModule exports only one of the components and also uses a provider, called **CustomersService**.

[/slide]

[slide hideTitle]

# Suggested Common Module

Angular-Modules-and-routing-7-Suggested-Common-Module

When working with a small-sized project, we may use the single `AppModule` for all declarations.

However, when the application expands and becomes more complex, we should use **shared**, **core**, and **feature** modules.

Doing so will ensure proper separation of concerns, and it will improve scalability.

## Shared Modules

```js
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CustomerComponent } from './components/customer/customer.component';
import { PercentagePipe } from './pipes/percentage/percentange.pipe';
import { CustomerStyleDirective } from './directives/customer-style/customer-style.directive';

@NgModule({
  imports: [ CommonModule ],
  exports: [
    CommonModule,
    CustomerComponent,
    PercentagePipe,
    CustomerStyleDirective 
  ],
  declarations: [ CustomerComponent, CustomerStyleDirective, PercentagePipe ]
})
export class SharedModule { }
```

Shared modules **contain pieces** of our application, shared across multiple areas.

We declare a shared module to enable component reuse.

An example of a shared module is a loading animation, used throughout our app.

## Feature Modules

```js
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/SharedModule';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  imports: [
    NgModule,
    SharedModule
  ],
  declarations: [ DashboardComponent, ProjectComponent ]
})
export class DashboardModule { }
```

A feature module is a **sub-application** inside your project.

An Angular application contains multiple feature modules.

Using them **ensures better scalabity** and also enables lazy loading, which we will learn about in a later lesson.

## Core Modules

```js
import { NgModule, Optional, SkipSelf } from '@angular/core';

import { ApiService } from './services/api.service';

@NgModule({
  providers: [ ApiService ]
})

export class CoreModule {
   // Cannot be used more than once
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error(
        'You can only import CoreModule in the root module.'
      );
    }
  }
}
```

Core Modules are a way to separate the configuration layer of our application from the rest of the application.

We can do that by **declaring our features** and shared modules in a **Core Module** and simply providing it to the `AppModule`.

We can look at it as a **parent feature module** for the content we add to an application.

You can find more information about NgModules in the [Angular guide](https://angular.io/guide/ngmodules).

[/slide]
