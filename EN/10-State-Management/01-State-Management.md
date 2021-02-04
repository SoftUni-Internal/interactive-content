# State Management

[slide hideTitle]

# Introduction to NgRx

The **NgRx** framework is used for building **reactive Angular applications**.

It provides a group of **libraries** for **controlling application state**, and the **flow of data** throughout the application.

Inspired by **Redux**, **NgRx Store** makes working with complex data **easier** for us to **manage** and **test**.

[/slide]


[slide hideTitle]

# NgRx Packages

**NgRx libraries** are divided in **four main categories**:

## State Management

- **Store** - a state management solution made for Angular:
  - Built on the Redux principles, it leverages the power of RxJS
  - Embraces the use of Observables

- **Effects** - provides a side effect model to NgRx Store:
  - Effects are Observables that use Actions both as a source and a destination
  - They can subscribe and publish to the Action Stream

- **Router Store** - provides bindings for connection between Angular Router and NgRx Store

- **Entity** - a library that provides an API for collection management

- **ComponentStore** - used for managing local state

## Data Supervision

- **Data** - simplifies managing entity data
  - Less boilerplate code as a result
  - Extends the Entity package

## View Control

- **Component** - enables creating fully reactive Angular applications:
  - Allows for more control over how components are rendered
  - Currently in an experimental phase

## Developer Tooling

- **Store Devtools** - provides developer tools for `@ngrx/store`

- **Schematics** - a scaffolding library that provides CLI commands for generating constructs:
  - All other libraries must be installed first


[/slide]


[slide hideTitle]

# State Management Lifecycle

The three most important pieces of the **state management lifecycle** are the **store**, **actions** and **reducers**.

The **store** holds the application **state** in a single **object** and **applies changes** to it when an action is **dispatched**.

**Actions** are responsible for **sending data** to a **reducer**.

**Reducers** take the **last action that has been dispatched** and **compare** it to the current state, **updating the state** when needed.

[/slide]