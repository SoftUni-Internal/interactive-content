[slide hideTitle]

# User Repository

Our next step is to create a User Repository. We will use it to find the **username**, and verify his credentials upon a login request.

Go to the repository package and create a new interface called **UserRepository**.

[image assetsSrc="21-UserRepository.png" /]

It will extend the **JpaRepository**, the same way we have done it in the previous lessons. For now, there will be 2 methods:

- **findByUsernameAndPassword(String username, String password);**
- **findByUsername(String username)**;

[/slide]

[slide hideTitle]

# User Repository Code

- The first will find the user by his credentials.
- The second **method** will find the user by his **username**.

**This is not a good practice but later on, we will change it with better functionality.**

```java
package com.example.pathfinderproject.repository;

import com.example.pathfinderproject.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsernameAndPassword(String username, String password);
    Optional<User> findByUsername(String username);
}
```

[/slide]
