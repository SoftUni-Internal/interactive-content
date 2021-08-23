[slide hideTitle]

# Creating Custom Events

There are three steps to creating our own custom event.

First, we have to create an event class that extends the `ApplicationEvent` interface.

Then, we must create a publisher (using `ApplicationEvent` publisher), which will publish our event.

Lastly, in order to listen for the event, we should add an event listener.

[/slide]

[slide hideTitle]

# Create Our Custom Event Class

We begin by creating a `MyCustomEvent` class that extends the `ApplicationEvent` interface.

```java
public class MyCustomEvent extends ApplicationEvent {​
    private String msg;​
    public MyCustomEvent(Object source, String msg) {​
        super(source);​
        this.msg = msg;
    }​
      // ... 
}​
```

In the constructor, we must invoke the `super()` constructor, to which we pass a source.

[/slide]

[slide hideTitle]

# Use Publisher

The purpose of the following publisher is to inject `ApplicationEventPublisher` - the component responsible for publishing Spring events.

```java
@Component
public class MyPublisher {
    @Autowired // It is better to inject in the constructor 
    private ApplicationEventPublisher appEventPublisher;
    public void publishEvent(String message) {
        MyCustomEvent myEvent = new MyCustomEvent(this, message);
        appEventPublisher.publishEvent(myEvent);
    } 
}
```

The `publishEvent` method accepts a `message` string and creates a new `MyCustomEvent` instance.

Then, it calls the `publishEvent` method, passing in `myEvent`.

We can inject this component in our services, and publish events by using it.

[/slide]

[slide hideTitle]

# Create Listener

The last step is to create an event listener.

While there are multiple approches, for this example we are using the `@EventListener` annotation.

We pass `MyCustomEvent.class` to `@EventListener`.

```java
@Component
public class Listeners {
    @EventListener(MyCustomEvent.class)
    public void listener(MyCustomEvent myCustomEvent) {
        System.out.printf("Custom event listeners with message -%s!%n", myCustomEvent.getMsg());
    }
}​
```

In the `listener` method, we print a simple message to the console.

Of course, we can perform more practical tasks, such as accessing databases, sending requests, etc.

[/slide]