[slide hideTitle]

# Setup Session Scope

There is one more thing that we need to configure before we go to the **UserService**. In our project, after we **login**, we need to store our data. For this purpose, we will use the **SessionScope**. Inside our project, we will create a **package** called **util**. In it, we will add a **CurrentUser** class.
[image assetsSrc="27-Add-CurrentUser.png" /]
[/slide]

[slide hideTitle]

# CurrentUser Component

Be careful to write the **@Component** and **@SessionScope** data annotation above the class.

```java
package com.example.pathfinderproject.util;

import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.SessionScope;

@Component
@SessionScope
public class CurrentUser {
    private Long id;
    private String username;

    public CurrentUser() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
```

[/slide]
