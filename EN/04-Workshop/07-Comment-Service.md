[slide hideTitle]

# Add Comment Service

The next thing to do is to create the **Comment Service**.

- In the **service** package, we create an **interface** - **CommentService**.
- In the **service/impl** package, we create a class - **CommentServiceImpl**.

[image assetsSrc="09-Services.png" /]

For the **service**, we will have 2 methods. One to **get** the comments for a specific route, and one to **create** a comment.

For the **CommentService** interface, we will have the following code:

```java
package com.example.pathfinderproject.service;

import com.example.pathfinderproject.model.service.CommentServiceModel;
import com.example.pathfinderproject.model.view.CommentVM;

import java.util.List;

public interface CommentService {
    List<CommentVM> getComments(Long routeId);
    CommentVM CreateComment(CommentServiceModel commentServiceModel);
}
```

[/slide]

[slide hideTitle]

# Comment Service Implementation

The **CommentServiceImpl** implements the **CommentService**. Be sure that the class has the **@Service** annotation.

```java
package com.example.pathfinderproject.service.impl;

import com.example.pathfinderproject.model.entity.Comment;
import com.example.pathfinderproject.model.service.CommentServiceModel;
import com.example.pathfinderproject.model.view.CommentVM;
import com.example.pathfinderproject.repository.RouteRepository;
import com.example.pathfinderproject.service.CommentService;

import com.example.pathfinderproject.util.exception.ObjectNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CommentServiceImpl implements CommentService {
    private final RouteRepository routeRepository;

    public CommentServiceImpl(RouteRepository routeRepository) {
        this.routeRepository = routeRepository;
    }

    @Override
    public List<CommentVM> getComments(Long routeId) {
        var routeOpt= routeRepository.findById(routeId);

        if(routeOpt.isEmpty()) {
            throw new ObjectNotFoundException("Route with id " + routeId + " was not found!");
        }

        return routeOpt.get().getComments().stream().map(this::mapAsComment).collect(Collectors.toList());
    }

    @Override
    public CommentVM CreateComment(CommentServiceModel commentServiceModel) {
        throw new UnsupportedOperationException("TO DO:");
    }

    private CommentVM mapAsComment(Comment comment) {
        CommentVM commentVM = new CommentVM();
        commentVM.setId(comment.getId());
        commentVM.setCreated(comment.getCreated());
        commentVM.setAuthor(comment.getAuthor().getFullName());
        commentVM.setCanApprove(true);
        commentVM.setCanDelete(true);
        commentVM.setTextContent(comment.getTextContent());

        return commentVM;
    }
}
```

[/slide]
