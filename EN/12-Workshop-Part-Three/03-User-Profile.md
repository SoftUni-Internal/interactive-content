[slide hideTitle]

# User Profile Page

The next thing we want to do is create a personal user profile page. Each user should be able to see his profile with information.

If we want to visualize the user information we will need a **view model**. We don't want users to have the information of the **password**, **role**, and other **personal information**.

Inside the **view** package, located in the **model** package, we will create a new class called **UserVM**.

[image assetsSrc="55-UserVM.png" /]

[/slide]

[slide hideTitle]

# User View Model

The **UserVM** will have properties for:

- **id**
- **fullName**
- **username**
- **age**
- **level**

Here is the **full code** for the class:

```java
package com.example.pathfinderproject.model.view;

import com.example.pathfinderproject.model.entity.enums.UserLevelEnum;

public class UserVM {
    private Long id;
    private String fullName;
    private String username;
    private Integer age;
    private UserLevelEnum level;
    public UserVM() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public UserLevelEnum getLevel() {
        return level;
    }

    public void setLevel(UserLevelEnum level) {
        this.level = level;
    }
}
```

[/slide]
