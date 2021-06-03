# State Management

[slide hideTitle]

# Introduction to NgRx

03-04-introduction-to-state-management

The **NgRx** framework is created for building **reactive Angular applications**.

It provides a selection of **libraries** for **controlling application state** and the **flow of data** throughout the application.

Inspired by **Redux**, **NgRx Store** makes working with complex data **easier** for us to **manage** and **test**.

[/slide]


[slide hideTitle]

# NgRx Packages

05-NgRx-Packages

**NgRx libraries** are divided in **four main categories**:

## State Management

- **Store** - a state management solution made for Angular:
  * built on the Redux principles, it leverages the power of RxJS
  * embraces the use of Observables

- **Effects** - provides a side effect model to NgRx Store:
  * effects are Observables that use Actions both as a source and a destination
  * they can subscribe and publish to the Action Stream

- **Router Store** - provides bindings for connection between Angular Router and NgRx Store

- **Entity** - a library that provides an API for collection management

- **ComponentStore** - used for managing local state

## Data Supervision

- **Data** - simplifies managing entity data
  * less boilerplate code as a result
  * extends the Entity package

## View Control

- **Component** - enables creating fully reactive Angular applications:
  * allows for more control over the rendering process of components
  * currently in an experimental phase

## Developer Tooling

- **Store Devtools** - provides developer tools for `@ngrx/store`

- **Schematics** - a scaffolding library that provides CLI commands for generating constructs:
  * all the other libraries must be installed first


[/slide]


[slide hideTitle]

# State Management Lifecycle

06-State-Management-Lifecycle

The three most important pieces of the **state management lifecycle** are the **store**, **actions** and **reducers**.

The **store** holds the application **state** in a single **object** and **applies changes** to it when an action is **dispatched**.

**Actions** are responsible for **sending data** to a **reducer**.

**Reducers** take the **last action that has been dispatched** and **compare** it to the current state, **updating the state** when needed.

[/slide]