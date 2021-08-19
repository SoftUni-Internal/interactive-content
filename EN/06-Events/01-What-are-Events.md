# What are Events

[slide hideTitle]

# Observer Pattern in Java

Observer is a behavioral design pattern.

Events are the driving factor of the observer pattern.

In the observer pattern, an object (observable) can inform other objects, called observers, of an occuring event, like a change in a property's value.

The observable object is loosely coupled with its observers.

It keeps references to the observers, such as variables.

```java
public class NewsAgency {
    private String news;
    private List<Channel> channels = new ArrayList<>();

    public void addObserver(Channel channel) {
        this.channels.add(channel);
    }

    public void removeObserver(Channel channel) {
        this.channels.remove(channel);
    }

    public void setNews(String news) {
        this.news = news;
        for (Channel channel : this.channels) {
            channel.update(this.news);
        }
    }
}
```

[/slide]

[slide hideTitle]

# Events in Spring​



[/slide]

[slide hideTitle]

# Spring​ Built-in Events



[/slide]