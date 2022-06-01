[slide hideTitle]

# Encode Password

After we write everything, we want to test it. For now, we don't have a working **registration** functionality.

To test it, we can go to the **user table** in the database.

[image assetsSrc="05-User-Table.png" /]

There we can change one or all the passwords to **encoded passwords**.

The password **12345** encoded version is:
**3432d78f489f1799756bded379058fab412787560c484b8b6a50db53742871285f734ad825b702b4**.

After you are done, be sure to **SUBMIT** your changes to the database. This is done by clicking on the **green arrow** above. **If you don't do it, your password will not be saved.**

[image assetsSrc="06-Submit-Changes.png" /]

[/slide]

[slide hideTitle]

# Another Way to Encode Password

If you don't want your password to be **12345**, we can create a temporary **component** that will convert the password.

In the **config** package, create a class called **Temp**. It will be a **@Component** and implement **CommandLineRunner**.

```java
package com.example.pathfinderproject.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class Temp implements CommandLineRunner {

    private PasswordEncoder encoder;

    public Temp(PasswordEncoder encoder) {
        this.encoder = encoder;
    }

    @Override
    public void run(String... args) throws Exception {
        System.out.println((encoder.encode("YOUR PASSWORD")));
    }
}
```

In the field **"YOUR PASSWORD"**, you can write your password. For example: **"12345"**.

Now if we start our project, the component will **automatically initialize** and display the password.

[image assetsSrc="07-Commnd-Password.png" /]

You can see the **password**, is printed on the console. Now you can change it to the database, as we have previously done it.

**Be sure to DELETE the Temp class, because it will initialize every time we start the project.**

If we try now, we should be able to log in successfully. If everything is don't correct, after a **successful login**, the navigation bar will change.

[/slide]
