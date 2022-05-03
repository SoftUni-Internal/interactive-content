[slide hideTitle]

# Add Category, Picture, and Route Models.

The next part of our project is to implement those classes in our project.

- In the **entity package** we will add the following classes:
  - **Category**
  - **Picture**
  - **Route**
- For the **enum** package in the **entity** we will add the following enum:
  - **CategoryNameEnum**

This is what our structure will look like:

[image assetsSrc="38-Entity-Models.png" /]

[/slide]

[slide hideTitle]

# Add Category Enum

First, let's write the logic for the **Category**. Each Category will have 4 options:

- **Pedestrian**
- **Bicycle**
- **Motorcycle**
- **Car**

For this purpose, we created the **CategoryNameEnum** enum. inside him, we add the 4 options:

```java
package com.example.pathfinderproject.model.entity.enums;

public enum CategoryNameEnum {
    PEDESTRIAN, BICYCLE, MOTORCYCLE, CAR
}
```

[/slide]

[slide hideTitle]

# Add Category Entity

For the **Category** class we will have fields for:

- **name**
- **description**

This is what the code will look like:

```java
package com.example.pathfinderproject.model.entity;

import com.example.pathfinderproject.model.entity.enums.CategoryNameEnum;

import javax.persistence.*;

@Entity
@Table(name = "categories")
public class Category extends  BaseEntity{
    private CategoryNameEnum name;
    private String description;

    public Category() {
    }

    @Enumerated(EnumType.STRING)
    public CategoryNameEnum getName() {
        return name;
    }

    public void setName(CategoryNameEnum name) {
        this.name = name;
    }

    @Column(columnDefinition = "TEXT")
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
```

[/slide]
