# Change Detection Strategy

[slide hideTitle]

# What is Change Detection?

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/03-Dependency-Injections/3-4-Change-Detection-Strategy-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

When we make **changes** to the data in our components, the view updates **automatically**.

To detect every change, Angular uses [NgZone](https://angular.io/guide/zone), which performs the so-called "**monkey patching**" upon every asynchronous function.

Monkey patching is a technique that we can use if we want to **extend** or **modify** the behavior of a **piece** of code/function.

NgZone can recognize when an **asynchronous operation has been called** and/or if this operation has finished. 

This gives Angular the ability to notice **when changes are made** by running the change detection, which goes from the **top component node, all the way to the bottom leaves of the tree** and scans for changes.

If changes have been **detected**, Angular marks the **component**, and only the **changed component will be re-rendered**.

If our **application is very big**, delays may happen, but we can optimize that process by specifying how the component will be searched and marked. 

[/slide]

[slide hideTitle]

# Change Detection Strategy

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/03-Dependency-Injections/03-Angular_Fundamentals_Dependency_Injection_and_Services_Demo-1-2-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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

In this example, we set the detection strategy to `OnPush`.

When set, it takes effect the **next time when change detection is triggered**.

If we **do not set** a `changeDetection` property, Angular will apply the **default** change detection method.

We will learn what `onPush` means in the next video.

[/slide]

[slide hideTitle]

# Change Detection Strategy - Members

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/03-Dependency-Injections/5-Change-Detection-Strategy-Members-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

`ChangeDetectionStrategy` has two members:

- `OnPush: 0`:
  - uses the `CheckOnce` strategy
  - automatic change detection is **deactivated** until reactivated by setting the strategy to `Default` (`CheckAlways`)
  - change detection can still be invoked explicitly
  - this strategy applies to all child directives and **cannot** be overridden
  
- `Default: 1`:
  - uses the `CheckAlways` strategy
  - set by default;
  - change detection happens automatically until it is **deactivated** explicitly by setting the strategy to `OnPush` (`CheckOnce`)

[/slide]
