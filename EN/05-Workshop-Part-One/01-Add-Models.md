[slide hideTitle]

# Create BaseEntity

For the models, we need to add another package called **entity**. Inside it, we will store the classes for our database.
There, we will create our first **abstract** class called **BaeEntity**.

[image assetsSrc="17-JavaClass.png" /]

This will be an **abstract** class for our entities. Each will **extend** this class and will have the same functionality as it. Every one of them will have an **id** with **getters** and **setters**.

```java
package com.example.pathfinderproject.model.entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class BaseEntity {

    private Long id;

    public BaseEntity(){

    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long getId(){
        return id;
    }
    public void setId(Long id){
        this.id = id;
    }
}
```

[/slide]

[slide hideTitle]

# Write Model Classes

Next to the **BaseEntity** class, we will add the other class for the database. They are:

- **Category**
- **Comment**
- **Message**
- **Picture**
- **Role**
- **Route**
- **User**

All of them will **extend** the **BaseEntity** abstract class. You can create them empty now, or as the workshop goes.
[/slide]
