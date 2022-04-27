[slide hideTitle]

# Adding UserService Model

The next step for our project is to add the **UserService**. Before we implement it, we want to do something else first. We don't want to work with the database entities but use other models. In our **model** package, we will add another called **service**. Here we will store our **service models**.

[image assetsSrc="25-Service-Model.png" /]
[/slide]

[slide hideTitle]

# Write Service Model

For now, we will create only the **UserServiceModel** class. It will have properties for:

- **id**
- **fullName**
- **username**
- **password**
- **age**
- **level**
- **roles**

```java
package com.example.pathfinderproject.model.service;

import com.example.pathfinderproject.model.entity.Role;
import com.example.pathfinderproject.model.entity.enums.UserLevelEnum;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.ManyToMany;
import java.util.Set;

public class UserServiceModel {
    private Long id;
    private String fullName;
    private String username;
    private String password;
    private Integer age;
    private UserLevelEnum level;
    private Set<Role> roles;

    public UserServiceModel() {
    }

    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    @Column(nullable = false)
    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    @Column(nullable = false)
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Enumerated(EnumType.STRING)
    public UserLevelEnum getLevel() {
        return level;
    }

    public void setLevel(UserLevelEnum level) {
        this.level = level;
    }

    @ManyToMany
    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    @Column(name = "age")
    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    @Column(nullable = false, unique = true)
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
```

[/slide]
