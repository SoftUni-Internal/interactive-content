# Change Detection Strategy

[slide hideTitle]

# What is Change Detection?

3-4-Change-Detection-Strategy

When we make **changes** to data in our components, the view updates **automatically**.

For detecting every change, Angular uses [NgZone](https://angular.io/guide/zone), which performs so-called "monkey patching" upon every asynchronous function.

Monkey patching is a technique that we can use if we want to extend or modify the behavior of a piece of code/function.

NgZone has the ability to realize when an asynchronous operation has been called and/or if this operation has finished. 

This gives an ability to Angular to know when changes are made by running the change detection, which goes from the main component down to the entire tree of components and checks for changes.

If changes have been detected, Angular marks the component, and only the changed component will be re-rendered.

And here if our application is very big, delays may happen, but we as developers can direct how our component will be searched for changes, and be marked for re-rendering.

[/slide]

[slide hideTitle]

# Change Detection Strategy

DEMO

TypeScript **enumerators** allow us to declare a set of named **constants**, or in other words, a **collection of related values** that can be either numbers or strings.

To **change** the detection strategy, we use the `ChangeDetectionStrategy` enumerator:

```js
enum ChangeDetectionStrategy {
  OnPush: 0
  Default: 1
}
```

We need to set the `changeDetection` property in our `@Component` decorator as follows:

```js
@Component({
    selector: 'app-root',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: ...
})
```

In this example, we set the detection strategy to `onPush`.

When set, takes effect the **next time change detection is triggered**.

If you **do not set** a `changeDetection` property, Angular will apply the **default** change detection method.

We will learn what `onPush` means in the next video.


[/slide]

[slide hideTitle]

# Change Detection Strategy - Members

5-Change-Detection-Strategy-Members

`ChangeDetectionStrategy` has two members:

- `OnPush: 0`:
  - uses the `CheckOnce` strategy
  - this means that automatic change detection is **deactivated** until reactivated by setting the strategy to `Default` (`CheckAlways`)
  - change detection can still be invoked explicitly
  - this strategy applies to all child directives and **cannot** be overridden
  
- `Default: 1`:
  - uses the `CheckAlways` strategy
  - set by default;
  - change detection happens automatically, until it is **deactivated** explicitly by setting the strategy to `OnPush` (`CheckOnce`)


[/slide]