[slide hideTitle]

# User Controller

After we setup our **Home Page** we can return to our **Login** and **Register** functionality.

First we will add Binding Models for the **Login** and **Register**. Inside the **models** package we will add a new package called **binding**. When we authenticate, we will send only a specific information to the server. For example when we login we will send only the **username** and **password**. For this task create:

- **UserLoginBM**
- **RegisterBM**

[image assetsSrc="32-Binding-Models.png" /]

[slide hideTitle]

# Register Binding Model

The **register** model will have properties as our inputs. The user will type:

- **username**
- **fullname**
- **age**
- **password**
- **repeat password**

We can use the **@Min(16)** annotation to prevent users under te age of 16 to **register**.

```java
package com.example.pathfinderproject.model.binding;

import javax.validation.constraints.Min;

public class UserRegisterBM {
    private String username;
    private String fullName;
    private Integer age;
    private String password;
    private String confirmPassword;

    public UserRegisterBM() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    @Min(16)
    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getConfirmPassword() {
        return confirmPassword;
    }

    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
    }
}
```

[/slide]
