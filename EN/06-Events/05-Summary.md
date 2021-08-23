[slide hideTitle]

# Summary

## In this lesson you learned:

- Spring has many built-in events:
  * `ContextRefreshedEvent`
  * `ContextStartedEvent`
  * `ContextStoppedEvent` 
  * `ContextClosedEvent` 
  * `RequestHandledEvent`

- We can implement custom events in three steps:
  * creating a custom event class
  * adding a publisher
  * setting an event listener

```java
public class MySpringEvent extends ApplicationEvent {
    private String message;

    public MySpringEvent(Object source, String message) {
        super(source);
        this.message = message;
    }
    public String getMessage() {
        return message;
    }
}
```

## In the next lesson you will learn:

- What **Aspect-Oriented Programming** is
  * Spring AOP Advices and Annotations
  * what a JoinPoint is

[/slide]