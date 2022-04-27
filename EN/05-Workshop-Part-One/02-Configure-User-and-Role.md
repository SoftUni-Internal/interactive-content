[slide hideTitle]

# Role Enum

But there is one more thing that we need to add before we start filling the classes. To correctly follow our **problem description** our classes need to have **enums**. In the **entity** package, we add another called **enums**.

[image assetsSrc="18-Add-Enums.png" /]

Create an **enum** the same way we create a class but specify it to be an **Enum**.

[image assetsSrc="19-Change-Enums.png" /]

First, we create the **RoleNameEnum**. Inside it, we will store the name of different roles. From the problem description, we know that we will have 3 roles: **User**, **Moderator**, and **Admin**.

Inside the **enum**, we type the following code:

```java
package com.example.pathfinderproject.model.entity.enums;

public enum RoleNameEnum {
    USER, MODERATOR, ADMIN
}

```

[/slide]

[slide hideTitle]

# Role Model

That will be used in the **Role** class. We have only a name for the role, which we receive from the **RoleNameEnum**.

```Java
package com.example.pathfinderproject.model.entity;

import com.example.pathfinderproject.model.entity.enums.RoleNameEnum;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

@Entity
@Table(name = "roles")
public class Role extends BaseEntity {

    private RoleNameEnum role;

    public Role() {
    }

    @Enumerated(EnumType.STRING)
    public RoleNameEnum getRole() {
        return role;
    }

    public void setRole(RoleNameEnum role) {
        this.role = role;
    }
}
```

[/slide]

[slide hideTitle]

# User Enum

What we need to do next is to write our **User** class. To write it, first, we need to add another **enum**. Inside the **enum package**, we add **UserLevelEnum**. Inside it, we will store the levels for a **User**. A **User** can be **Beginner**, **Intermediate**, and **Advanced**.

```java
package com.example.pathfinderproject.model.entity.enums;

public enum UserLevelEnum {
    BEGINNER, INTERMEDIATE, ADVANCED
}

```

[/slide]

[slide hideTitle]

# User Model

For the User class, we will have a few properties. From the problem description, we know that a user must have:
**fullName**
**username**
**password**
**age**
**level**
**roles**

For now, we will store our password as a simple string, and as the workshop goes we will change it to a secured way.

Inside the **User** class, we write:

```java
package com.example.pathfinderproject.model.entity;

import com.example.pathfinderproject.model.entity.enums.UserLevelEnum;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "users")
public class User  extends BaseEntity{

    private String fullName;
    private String username;
    private String password;
    private Integer age;
    private UserLevelEnum level;
    private Set<Role> roles;

    public User() {
    }

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

    @ManyToMany(fetch = FetchType.EAGER)
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

[slide hideTitle]

# Check Models in Database

If we start our project and then open our database, we will see that our tables were successfully created.
[image assetsSrc="20-CheckDb.png" /]

[/slide]
