# What are Events

[slide hideTitle]

# Observer Pattern in Java

Observer is a behavioral design pattern.

As you may remember, behavioral design patterns are used for assigning responsibilities between objects.

Events are the driving factor of the observer pattern.

In the observer pattern, an object (observable) can inform other objects, called observers, of an occuring event, like a change in a property's value.

The observable object is loosely coupled with its observers.

It keeps references to the observers, such as variables.

In Java, we can use the `java.util.Observer` interface that includes an `update()` method:

```java
public class ArticleChannel implements Observer {
    private String article;

    @Override
    public void update(Observable o, Object article) {
        this.setArticle((String) article);
    }
}
```
This method updates the article when a notification for a change is received.

On the observable's side, we can implement the `Observable` class that includes a method for notifying observers when an event occurs:

```java
public class ArticleAgency extends Observable {
    private String article;

    public void setArticle(String article) {
        this.article = article;
        setChanged();
        notifyObservers(article);
    }
}
```

In Java 9 and above, it is recommended to use `PropertyChangeListener` instead, as it is generally considered to be more safe.

[/slide]

[slide hideTitle]

# Events in Spring​

The `ApplicationContext` is the core of Spring, which contains all beans and manages their complete life cycle - starting from their initialization, up until they are removed.

It provides bean factory methods for accessing application components.

More importantly, it has the ability to publish certain events when loading the beans.

Spring's event handling occurs in a single thread by default.

This means that if an event has been published, the event flow is frozen until all observers process the current event.

[/slide]

[slide hideTitle]

# Spring​ Built-in Events

Spring has multiple built-in events, such as:

 - `ContextRefreshedEvent` - this event is published each time the ApplicationContext is initialized/refreshed

- `ContextStartedEvent` - published when the ApplicationContext is started explicitly using `start()` (e.g. outside of Spring Boot)  

- `ContextStoppedEvent` - this event is published when using the `stop()` method to stop the ApplicationContext

- `ContextClosedEvent` - emitted when we close ApplicationContext with `close()`

- `RequestHandledEvent` - the event that informs beans when an HTTP request has been processed

[/slide]