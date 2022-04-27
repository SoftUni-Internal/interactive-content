[slide hideTitle]

# Configure Interface

After we are done with this we can go to the **service** config.
Inside our **service** package, we will create our UserService **interface**.
For now, it will only store **4 methods** that our starter project will need. Later on, we will add additional functionality.

```java
package com.example.pathfinderproject.service;

import com.example.pathfinderproject.model.service.UserServiceModel;

public interface UserService {
    void registerUser(UserServiceModel map);
    void loginUser(UserServiceModel user);
    UserServiceModel findByUsernameAndPassword(String username, String password);
    UserServiceModel findById(Long id);
    void logout();
    boolean isLogged();
}
```

[/slide]

[slide hideTitle]

# Add Implementation

Inside the **service** package, we need to add another package called **impl**. This will store all our implemented classes with logic. There we will create our **UserServiceImpl** class.

```java
package com.example.pathfinderproject.service.impl;

import com.example.pathfinderproject.model.entity.User;
import com.example.pathfinderproject.model.entity.enums.UserLevelEnum;
import com.example.pathfinderproject.model.service.UserServiceModel;
import com.example.pathfinderproject.repository.UserRepository;
import com.example.pathfinderproject.service.UserService;
import com.example.pathfinderproject.util.CurrentUser;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final ModelMapper modelMapper;
    private final CurrentUser currentUser;

    public UserServiceImpl(UserRepository userRepository, ModelMapper modelMapper, CurrentUser currentUser) {
        this.userRepository = userRepository;
        this.modelMapper = modelMapper;
        this.currentUser = currentUser;
    }

    @Override
    public void registerUser(UserServiceModel userServiceModel){
        User user = modelMapper.map(userServiceModel, User.class);
        user.setLevel(UserLevelEnum.BEGINNER);

        userRepository.save(user);
    }

    @Override
    public UserServiceModel findByUsernameAndPassword(String username, String password){
        return userRepository
                .findByUsernameAndPassword(username, password)
                .map(u -> modelMapper.map(u, UserServiceModel.class))
                .orElse(null);
    }

    @Override
    public void loginUser(UserServiceModel user)
    {
        currentUser.setUsername(user.getUsername());
        currentUser.setId(user.getId());
    }

    @Override
    public void logout()
    {
        currentUser.setUsername(null);
        currentUser.setId(null);
    }

    @Override
    public boolean isLogged()
    {
        return currentUser.getId() != null;
    }

    @Override
    public UserServiceModel findById(Long id)
    {
        return userRepository.findById(id).map(u -> modelMapper.map(u, UserServiceModel.class)).orElse(null);
    }
}
```

[/slide]

[slide hideTitle]

# Methods Functionalities

- The **registerUser** method receives the credentials that the user has sent inside a UserServiceModel class. We use the **ModelMapper**, to map it to our database entity - the **User** class. For a newly registered profile, we will always set his level to a **beginner**. After that, we will save our changes.
- The **findByUsernameAndPassword** method will verify if we are the correct person. That will be a method for the login controller.
- With the **loginUser**, **logout**, and **isLogged** we add, remove or verify the user in our browser session. The methods **set**, **remove**, and **verify** the **username** and **id** to the **cookies** of our browser.
  [/slide]
