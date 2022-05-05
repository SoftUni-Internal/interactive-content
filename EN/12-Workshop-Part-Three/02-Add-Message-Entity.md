[slide hideTitle]

# Add Message Entity

Another feature we will add to the project is to **send messages** from one user to other. Each **registered** user will be able to **contact**, the other users.

Next to the **Comment** entity, we create our **Message** class.

The class will have fields for:

- **author**
- **recipient**
- **textContent**
- **dateTime**

Be sure that the class has **@Entity** and **@Table(name = "messages")** annotations.

Here is the **full code** for the class:

```java
package com.example.pathfinderproject.model.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.time.LocalDateTime;

@Entity
@Table(name = "messages")
public class Message extends BaseEntity{
    private LocalDateTime dateTime;
    private String textContent;
    private User author;
    private User recipient;

    public Message() {
    }

    @Column(nullable = false)
    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }

    @Column(nullable = false, columnDefinition = "TEXT")
    public String getTextContent() {
        return textContent;
    }

    public void setTextContent(String textContent) {
        this.textContent = textContent;
    }

    @ManyToOne
    public User getAuthor() {
        return author;
    }

    public void setAuthor(User author) {
        this.author = author;
    }

    @ManyToOne
    public User getRecipient() {
        return recipient;
    }

    public void setRecipient(User recipient) {
        this.recipient = recipient;
    }
}
```

[/slide]
