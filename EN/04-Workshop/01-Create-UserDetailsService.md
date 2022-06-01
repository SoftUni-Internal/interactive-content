[slide hideTitle]

# Create UserDetailService

After we have added the **dependencies**, we want to implement the **UserDetailsService**.

To follow the architecture of this project, in the **service** package, we will create a **PathfinderUserDetailsService** class.

[image assetsSrc="01-UserDetailsService.png" /]

This is where we will bind the **UserDeteails** model to our **entity**.
With the **loadUserByUsername** method, we will find the user by its username.

```java
package com.example.pathfinderproject.service.impl;


import com.example.pathfinderproject.model.entity.User;
import com.example.pathfinderproject.repository.UserRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.stream.Collectors;

@Service
public class PathfinderUserDetailsService  implements UserDetailsService {

    private final UserRepository userRepository;
    public PathfinderUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        var userEntity = userRepository
                .findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("Wrong username or password."));



        return map(userEntity);
    }

    private UserDetails map(User user) {
        Set<GrantedAuthority> grantedAuthorities =
                user.getRoles()
                        .stream().map(r -> new SimpleGrantedAuthority("ROLE_" + r.getRole().name()))
                        .collect(Collectors.toUnmodifiableSet());

        return new org.springframework.security.core.userdetails.User(
                user.getUsername(), user.getPassword(), grantedAuthorities
        );
    }
}
```

[/slide]
