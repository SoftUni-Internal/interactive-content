[slide hideTitle]

# Listening for Events

There are various ways to listen for events in Spring, the two most common being:

- Implementing the `ApplicationListener` interface
    * its single `onApplicationEvent()` method provides an instance of the fired event

- We can also use `@EventListener` to annotate a method as an event listener

Spring publishes some events too early, in which cases the `@EventListener` method will not work, because the annotations have not yet been processed.

Such events may be registered directly in the Spring Application.

Alternatively, we can use Spring Factory.

[/slide]

[slide hideTitle]

# Using ApplicationListeners Example​

The following example represents a simple `ApplicationListener` implementation.

```java
@Component​
public class EventsListener implements ApplicationListener<SpringApplicationEvent> {​
    @Override​
    public void onApplicationEvent(SpringApplicationEvent e) {​
        System.out.printf("Event-%s!%n", 
            e.getClass().getSimpleName());​
    }
}​
```

In order to be detected by Spring, the `EventsListener` component implements an `ApplicationListener`.

When an event occurs, the custom implementation of the `onApplicationEvent` method will be triggered.

[/slide]

[slide hideTitle]

# Using @EventListener​

We use `@EventListener` to listen for specific event classes.

```java
@EventListener(ApplicationStartingEvent.class)​
public void startEvent(){​
    System.out.println("Starting Event 🏁"); 
}​

@EventListener(RequestHandledEvent.class)​
public void requestHandler(){​
    System.out.println("Request Handler event ");​
}​
```

We have a Spring component, which is annotated with the `@EventListener` method annotation.

In the parentheses, we pass in the event type to listen for, or the event itself.

The given method will be invoked only when the specific event type occurs.

[/slide]

[slide hideTitle]

# Listening for Multiple Events​

We can use the `@EventListener` annotation to listen for multiple events at the same time.

```java
@EventListener(classes = {MyEventOne.class, MyEventTwo.class})​
public void handleTwoEvents(){​
    System.out.println("Listens for two events simultaneously 🙉");​
}​
```

We do so by passing in the classes keyword, followed by the events in the format: `{eventOne, eventTwo, ... }`

[/slide]

[slide hideTitle]

# Using Lambda When Adding Listener

The following snippet illustrates the process of registering a listener in a String application.

```java
@SpringBootApplication​

public class DemoForCustomEventsApplication {​
    public static void main(String[] args) {​
        SpringApplication springApp = new SpringApplication​
            (DemoForCustomEventsApplication.class);​
        springApp.addListeners((ApplicationContextInitializedEvent e) -> { 
            System.out.println("App context init event 🔰"); });​
        springApp.run(args); ​
    }​
}​
```

First, we create a new `SpringApplication` by calling the constructor.

Each Spring Application instance has an `addListeners()` method, to which we pass:

- the event type to listen for, using a **lambda expression**
- an event handler

At the end, we launch the application: `springApp.run(args);`

[/slide]

[slide hideTitle]

# Register Events in Spring Application ​

Since some events are fired too early, Spring has a hard time identifying the methods marked with the `@EventListener` annotation.

```java
@SpringBootApplication​
...​
   springApp.addListeners(new MyEventsClass());​
   springApp.run(args);​
...​
```

That is the reason to use the `addListeners()` method.

[/slide]

[slide hideTitle]

# Transaction Bound Events

Some events can be connected to a custom transaction.

We can link an event to a specific transaction phase by using the `TransactionPhase` enum's constants.

There are four phases in a transaction's lifecycle:

- `AFTER_COMMIT` (default) - used after a successful transaction

- `AFTER_ROLLBACK` - to fire an event when the transaction has been rolled back

- `AFTER_COMPLETION` - when a transaction has finished

- `BEFORE_COMMIT` - right before a transaction commit

## Example

```java
@TransactionalEventListener(phase = TransactionPhase.BEFORE_COMMIT)​
public void transactionEventListener​ (MyCustomEvent event){​
    System.out.println("Hit before transaction commit 🛑");​
}​
```

If the given custom event is fired, the above method will be called right before the transaction gets commited.

[/slide]