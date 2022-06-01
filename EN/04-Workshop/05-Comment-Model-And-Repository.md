[slide hideTitle]

# Add Comment Repository

After successfully adding and implementing the **spring security**, we can go to the **Comment Section**.

In the previous workshop, we added the **Comment** as an **entity**. Now we want to create a **Comment Repository**.

We create the **CommentRepository** interface, in the **repository** package. This is what the interface will look like:

```java
package com.example.pathfinderproject.repository;

import com.example.pathfinderproject.model.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
}
```

[/slide]

[slide hideTitle]

# Update Database Model

In the previous workshop, we added the **Comment** entity. Now we want to create a **One to Many** relations with the **Route**.

Inside the **model/entity** package, in the **Route** class, we want to add a property for the **comments**, with the corresponding **getter** and **setter**.

```java
    private Set<Comment> comments;

    @OneToMany(mappedBy = "route", fetch = FetchType.EAGER)
    public Set<Comment> getComments() {
        return comments;
    }

    public void setComments(Set<Comment> comments) {
        this.comments = comments;
    }

```

[/slide]

[slide hideTitle]

# Binding Comment Model

In the **model/binding** package, we create the **CommentCreateBM** class. It will have the following code:

```java
package com.example.pathfinderproject.model.binding;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class CommentCreateBM {
    public CommentCreateBM() {
    }

    private String textContent;

    @NotBlank
    @Size(min=10)
    public String getTextContent() {
        return textContent;
    }

    public void setTextContent(String textContent) {
        this.textContent = textContent;
    }
}
```

[/slide]

[slide hideTitle]

# Service Comment Model

In the **model/service** package, we create the **CommentServiceModel** class. It will have the following code:

```java
package com.example.pathfinderproject.model.service;

public class CommentServiceModel {
    private Long id;
    private String message;
    private String creator;

    public CommentServiceModel() {
    }

    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator;
    }
}
```

[/slide]

[slide hideTitle]

# View Comment Model

In the **model/view** package, we create the **CommentVM** class. It will have the following code:

```java
package com.example.pathfinderproject.model.view;

import java.time.LocalDateTime;

public class CommentVM {
    private Long id;
    private String textContent;
    private String author;
    private LocalDateTime created;
    private boolean canApprove;
    private boolean canDelete;

    public CommentVM() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        id = id;
    }

    public String getTextContent() {
        return textContent;
    }

    public void setTextContent(String textContent) {
        this.textContent = textContent;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public LocalDateTime getCreated() {
        return created;
    }

    public void setCreated(LocalDateTime created) {
        this.created = created;
    }

    public boolean isCanApprove() {
        return canApprove;
    }

    public void setCanApprove(boolean canApprove) {
        this.canApprove = canApprove;
    }

    public boolean isCanDelete() {
        return canDelete;
    }

    public void setCanDelete(boolean canDelete) {
        this.canDelete = canDelete;
    }
}
```

[/slide]
