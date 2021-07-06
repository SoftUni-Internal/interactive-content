# NgModule

[slide hideTitle]

# Angular Modules Overview

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/05-Modules-and-Routing/Angular-Modules-and-routing-3-4-The-NgModule-and-demo-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

An Angular module is a deployment **subset** of your whole Angular application.

It can help us organize our code into blocks that work as a singular unit.

Modules are created with the `@NgModule()` decorator.

You can inject them into **other modules** or components.

This is how the main `app.module.ts` looks:

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

You can see from our example that they are just **regular objects** inside a **decorator**.

The most popular **Angular** and **third-party** libraries that come as **NgModules** are:

- [Material UI](https://material.angular.io/)
- [Ionic](https://ionicframework.com/)
- [AngularFire2](https://github.com/IdanCo/angularfire2)

[/slide]

[slide hideTitle]

# Creating Custom Modules

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/05-Modules-and-Routing/Angular-Modules-and-routing-5-6-Creating-Custom-modules-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We can implement **custom modules** (also known as feature modules) when the app becomes larger.

You should import the **CommonModule** when creating a custom module. 

There is no need to import the **BrowserModule** as the **CommonModule** is part of it.

It is a good practice to keep the **BrowserModule** only in the root module.

When we create a component in a module, it will appear in the **declarations** array.

By default, components in the **declarations** array are private.

If we want to use the **component outside that module**, we will need the **exports** array.

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

It **imports** the **CommonModule** and **declares** two components.

**CustomersModule** exports only one of the components and uses a provider, called **CustomersService**.

[/slide]

[slide hideTitle]

# Suggested Common Module

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/05-Modules-and-Routing/Angular-Modules-and-routing-7-Suggested-Common-Module-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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

An example of a shared module is a loading animation used throughout our app.

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

[slide hideTitle]

# Feature Modules: Demo

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/05-Modules-and-Routing/Angular-Modules-and-routing-creating-feature-module-and-component-template-1-2-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]