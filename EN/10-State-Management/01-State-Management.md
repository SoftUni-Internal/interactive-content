# State Management

[slide hideTitle]

# Introduction to NgRx

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/11-State-Management/03-04-introduction-to-state-management-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The **NgRx** framework was created for building **reactive Angular applications**.

It provides a selection of **libraries** for **controlling the application state** and the **data flow**.

When building an Angular application, the state is typically handled by a number of different services.

As our project grows, it can become hard to keep track of changes in the state.

In the case of a problem, debugging becomes almost impossible.

NgRx solves this issue by putting the state in a single object, making modification a lot easier.

Inspired by **Redux**, **NgRx Store** makes working with complex data **easier** for us to **manage** and **test**.

[/slide]

[slide hideTitle]

# NgRx Packages

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/11-State-Management/05-NgRx-Packages-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**NgRx libraries** are divided into **four main categories**:

## State Management

- **Store** - a state management solution made for Angular
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

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/11-State-Management/06-State-Management-Lifecycle-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The three most important pieces of the **state management lifecycle** are the **store**, **actions**, and **reducers**.

The **store** holds the application **state** in a single **object** and **applies changes** to it when an action is **dispatched**.

**Actions** are responsible for **sending data** to a **reducer**.

**Reducers** take the **last action that has been dispatched** and **compare** it to the current state, **updating the state** when needed.

For example, let us say that the user clicks on a **button**. 

When the click event occurs, we want to change a display **value** of a **sidebar** component - either show it or hide it.

However, the two UI components are stored **separately**.

NgRx **handles** and stores these state changes for us in a **singular** state object.

As soon as the button has been clicked, its encapsulating component dispatches an **action**.

This action is sent to the **reducer**.

The reducer takes the **current** state and returns a new one, depending on the action provided.

Keep in mind that state is **immutable** - the reducer always returns a **new state**.

[/slide]
