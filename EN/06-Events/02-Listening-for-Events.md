[slide hideTitle]

# Listening for Events



[/slide]

[slide hideTitle]

# Using ApplicationListeners Example​

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

[/slide]

[slide hideTitle]

# Using @EventListener​

```java
@EventListener(ApplicationStartingEvent.class)​
public void startEvent(){​
    System.out.println("Starting Event!"); 
}​

@EventListener(RequestHandledEvent.class)​
public void requestHandler(){​
    System.out.println("Request Handler event!");​
}​
```

[/slide]

[slide hideTitle]

# Listening for Multiple Events​

```java
@EventListener(classes = {MyEventOne.class, MyEventTwo.class})​
public void handleTwoEvents(){​
    System.out.println("Listens for two events!");​
}​
```

[/slide]

[slide hideTitle]

# Using Lambda When Adding Listener​

```java
@SpringBootApplication​

public class DemoForCustomEventsApplication {​
    public static void main(String[] args) {​
        SpringApplication springApp = new SpringApplication​
            (DemoForCustomEventsApplication.class);​
        springApp.addListeners((ApplicationContextInitializedEvent e) -> { 
            System.out.println("App context init event"); });​
        springApp.run(args); ​
    }​
}​
```

[/slide]

[slide hideTitle]

# Register Events in Spring Application ​

```java
@SpringBootApplication​
...​
   springApp.addListeners(new MyEventsClass());​
   springApp.run(args);​
...​
```

[/slide]

[slide hideTitle]

# Transaction Bound Events

```java
@TransactionalEventListener(phase = TransactionPhase.BEFORE_COMMIT)​
public void transactionEventListener​ (MyCustomEvent event){​
    System.out.println("Hit before transaction commit!");​
}​
```

[/slide]