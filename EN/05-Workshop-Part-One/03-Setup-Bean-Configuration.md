[slide hideTitle]

# Create ApplicationBeanConfiguration

For this project, we will use **ModelMapper**. It is an object mapping library that will automatically map our objects to each other, using a few lines of code.

That is why we will create an **ApplicationBeanConfiguration** class, and specify it there. Add it inside the **config** package.

[image assetsSrc="22-ApplicationBeanConfiguration.png" /]

If we type the code it will tell us that it cannot find the ModelMapper library.

```
package com.example.pathfinderproject.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ApplicationBeanConfiguration {

    @Bean
    public ModelMapper modelMapper(){
        return new ModelMapper();
    }
}
```

[/slide]

[slide hideTitle]

# Add ModelMapper Dependency

You can add the dependency in a lot of different ways but we will show you only one way.

Click on **ModelMapper** and hold **Alt + Enter**. Select **Add Marven dependency...**

[image assetsSrc="23-Add-Marven-Dependency.png" /]

In the **Search For Artifact** section, we search the **ModelMapper**. Then we select the one from the picture below and click **Add**.

[image assetsSrc="24-Add-ModelMapper.png" /]

After the dependency is installed, we can import the dependency in the **ApplicationBeanConfiguration** class:

```java
import org.modelmapper.ModelMapper;
```

Now we can use the ModelMapper instance everywhere in our project.
[/slide]
