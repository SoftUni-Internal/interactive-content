[slide hideTitle]

# Add Comment Entity

Each **Route** will contain a **Comment** section with comments. The logged user can tell his/hers opinion about the Route.

To do this, in the **entity** package, we create our **Comment** entity class.

[image assetsSrc="54-Comment-Class.png" /]

The class will have fields for:

- **approved**
- **textContent**
- **created**
- **route**
- **author**

Be sure that the class has **@Entity** and **@Table(name = "comments")** annotations.

Here is the **full code** for the class:

```java
package com.example.pathfinderproject.model.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.time.LocalDateTime;

@Entity
@Table(name = "comments")
public class Comment extends BaseEntity{
    private Boolean approved;
    private String textContent;
    private LocalDateTime created;
    private Route route;
    private User author;

    public Comment() {
    }

    @Column(nullable = false)
    public Boolean getApproved() {
        return approved;
    }

    public void setApproved(Boolean approved) {
        this.approved = approved;
    }

    @Column(columnDefinition = "TEXT")
    public String getTextContent() {
        return textContent;
    }

    public void setTextContent(String textContent) {
        this.textContent = textContent;
    }

    @Column(name = "created", nullable = false)
    public LocalDateTime getCreated() {
        return created;
    }

    public void setCreated(LocalDateTime created) {
        this.created = created;
    }

    @ManyToOne
    public Route getRoute() {
        return route;
    }

    public void setRoute(Route route) {
        this.route = route;
    }

    @ManyToOne
    public User getAuthor() {
        return author;
    }

    public void setAuthor(User author) {
        this.author = author;
    }
}

```

[/slide]
