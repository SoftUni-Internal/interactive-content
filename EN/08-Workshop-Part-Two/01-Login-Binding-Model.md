[slide hideTitle]

# Login Model

From the previous workshop, we have added the functionality to **register** a user. Now we want to be able to **log in**.

For this, we need to go to the binding model - **UserLoginBM**.

[image assetsSrc="37-LoginBM.png" /]

We have already created the **empty** class, in the previous workshop.

[/slide]

[slide hideTitle]

# Login Binding Model

The **login** model will have properties as our inputs. The user will type:

- **username**
- **password**

```java
package com.example.pathfinderproject.model.binding;

public class UserLoginBM {
    public String username;
    public String password;

    public UserLoginBM() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

```

[/slide]
