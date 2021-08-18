[slide hideTitle]

# Creating Custom Events



[/slide]

[slide hideTitle]

# Create Our Custom Event Class

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

[/slide]

[slide hideTitle]

# Use Publisher

```java
@Component
public class MyPublisher {
    @Autowired // It is better to inject in constructor 
    private ApplicationEventPublisher appEventPublisher;
    public void publishEvent(String message) {
        MyCustomEvent myEvent = new MyCustomEvent(this, message);
        appEventPublisher.publishEvent(myCustomEvent);
    } 
}
```

[/slide]

[slide hideTitle]

# Create Listener

```java
@Component
public class Listeners {
    @EventListener(MyCustomEvent.class)
    public void listener(MyCustomEvent myCustomEvent) {
        System.out.printf("Custom event listeners with message -%s!%n", myCustomEvent.getMsg());
    }
}​
```

[/slide]