# Change Detection Strategy

[slide hideTitle]

# What is Change Detection?

When we make **changes** to data in our components, the view updates **automatically**.

Angular is **constantly** looking for changes, **updating modified components** to keep everything in sync.

It goes through **each component** in an application every time something **changes**.

As an application gets more **complex** the amount of components **grows**.

With **more components**, change detection will have to perform **more work**.

This is where the different **strategies** for change detection come in handy.

[/slide]

[slide hideTitle]

# Change Detection Strategy

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

# Change Detection Strategy \- Members

`ChangeDetectionStrategy` has two members:

- `OnPush: 0`:
  - Uses the `CheckOnce` strategy;
  - This means that automatic change detection is **deactivated** until reactivated by setting the strategy to `Default` \(`CheckAlways`\);
  - Change detection can still be invoked explicitly; 
  - This strategy applies to all child directives and **cannot** be overridden;
  
- `Default: 1`:
  - Uses the `CheckAlways` strategy;
  - Set by default;
  - Change detection happens automatically, until it is **deactivated** explicitly by setting the strategy to `OnPush` \(`CheckOnce`\).


[/slide]