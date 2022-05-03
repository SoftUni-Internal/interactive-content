[slide hideTitle]

# Create Repositories

Our next task will be to create **Jpa** repositories for the following classes. We create them in the same package, we added the **UserRepository**.
Create the following **interfaces**:

- **CategoryRepository**
- **RouteRepository**
- **PictureRepository**

[image assetsSrc="44-Repositories.png" /]

[/slide]

[slide hideTitle]

# Code for Repositories

For now, we will not add any new logic for the RouteRepository. We will only use the extended methods from the **JpaRepository**.
Be sure that the interface has the **@Repository** annotation above the class name.

```java
package com.example.pathfinderproject.repository;

import com.example.pathfinderproject.model.entity.Route;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RouteRepository extends JpaRepository<Route, Long> {
}
```

For the **Category** repository, we will have the same code but with one more **method**. It will find the specified

```java
package com.example.pathfinderproject.repository;

import com.example.pathfinderproject.model.entity.Category;
import com.example.pathfinderproject.model.entity.enums.CategoryNameEnum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
    Optional<Category> findByName(CategoryNameEnum categoryNameEnum);
}
```

The final repository is for the **Picture** model. Here we use an interesting way to **select** all the urls for the current picture.

```java
package com.example.pathfinderproject.repository;

import com.example.pathfinderproject.model.entity.Picture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PictureRepository extends JpaRepository<Picture, Long> {

    @Query("SELECT p.url FROM Picture  p")
    List<String> findAllUrls();
}
```

Later, if we need other methods and functionality we can easily add them to those **interfaces**.

[/slide]
