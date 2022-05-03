[slide hideTitle]

# Implement Services

After we add the repositories, we need to implement the services. We follow the same **set of steps**, as we did with the User functionality.

In the same directory, where we added the UserService, we create the following **interfaces** with their corresponding **classes**.

We will have services for the same classes we made repositories for:

[image assetsSrc="45-Services.png" /]

- An interface **CategoryService** with a class **CategoryServiceImpl**.
- An interface **PictureService** with a class **PictureServiceImpl**.
- An interface **RouteService** with a class **RouteServiceImpl**.

[/slide]

[slide hideTitle]

# Category Service

The **Category** and **Picture** services will be used mainly by the **RouteController**.

For now, we will write the **methods** that we will need, and later we will invoke them.

In the CategoryService we write the following code:

```java
package com.example.pathfinderproject.service;

import com.example.pathfinderproject.model.entity.Category;
import com.example.pathfinderproject.model.entity.enums.CategoryNameEnum;

public interface CategoryService {
    Category findCategoryByName(CategoryNameEnum categoryNameEnum);
}
```

And now let's **implement** the **interface** with the **CategoryServiceImpl**. We will use the **CategoryRepository** that we have previously written.

```java
package com.example.pathfinderproject.service.impl;

import com.example.pathfinderproject.model.entity.Category;
import com.example.pathfinderproject.model.entity.enums.CategoryNameEnum;
import com.example.pathfinderproject.repository.CategoryRepository;
import com.example.pathfinderproject.service.CategoryService;
import org.springframework.stereotype.Service;

@Service
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;

    public CategoryServiceImpl(CategoryRepository categoryRepository)
    {
        this.categoryRepository = categoryRepository;
    }

    @Override
    public Category findCategoryByName(CategoryNameEnum categoryNameEnum) {
        return categoryRepository.findByName(categoryNameEnum).orElse(null);
    }
}
```

[/slide]

[slide hideTitle]

# Picture Service

For the picture **service**, we want to have a **method** that will find all the **URLs** using the **repository method** we have previously written.

For the **PictureService** interface we have:

```java
package com.example.pathfinderproject.service;

import java.util.List;

public interface PictureService {
    List<String> findAllUrls();
}
```

And now let's **implement** the **interface** with the **PictureServiceImpl**. We will use the **PictureRepository** that we have previously written.

```java
package com.example.pathfinderproject.service.impl;

import com.example.pathfinderproject.repository.PictureRepository;
import com.example.pathfinderproject.service.PictureService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PictureServiceImpl implements PictureService {
    private final PictureRepository pictureRepository;

    public PictureServiceImpl(PictureRepository pictureRepository) {
        this.pictureRepository = pictureRepository;
    }

    @Override
    public List<String> findAllUrls() {
        return pictureRepository.findAllUrls();
    }
}
```

[/slide]
