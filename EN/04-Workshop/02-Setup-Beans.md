[slide hideTitle]

# Add Password Encoder to Project

Before we set up our **Security Configuration**, we want to add a bean for the **Password Encoder**.

This will allow us to **encode passwords** in the database. We don't want to store the passwords as plain text as "12345", but to be hashed.

For this, we want to go to the **ApplicationBeanConfiguration** in the config **package**.

[image assetsSrc="03-Add-PasswordEncoder.png" /]

Below the **ModelMapper** bean, we want to add the following **method**:

```java
    @Bean
    public PasswordEncoder passwordEncoder(){
        return new Pbkdf2PasswordEncoder();
    }
```

That will create a **bean** for the **PasswordEncoder**.

[/slide]

[slide hideTitle]

# Setup Security Configuration

After we have added the bean for the **PasswordEncoder**, we set up the **security configuration**.

In the **config** package, we create a class named **ApplicationSecurityConfiguration**.

[image assetsSrc="04-Security-Configuration.png" /]

The class will **extend** the **WebSecurityConfigurerAdapter**.

The constructor will receive parameters for:

- **UserDetailsService**
- **PasswordEncoder**

As in the previous lessons we want to **override** the two configure methods and add our logic.

Here is the full code for the class:

```java
package com.example.pathfinderproject.config;

import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
public class ApplicationSecurityConfiguration extends WebSecurityConfigurerAdapter {

    private final UserDetailsService userDetailsService;
    private final PasswordEncoder passwordEncoder;

    public ApplicationSecurityConfiguration(
            UserDetailsService userDetailsService,
            PasswordEncoder passwordEncoder
    ) {
        this.userDetailsService = userDetailsService;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests().
                requestMatchers(PathRequest.toStaticResources().atCommonLocations()).permitAll().
                antMatchers("/", "/users/login", "users/register").permitAll().
                antMatchers("/routes/**").permitAll().
                antMatchers("/**").authenticated().
                and().
                formLogin().
                loginPage("/users/login").
                usernameParameter(UsernamePasswordAuthenticationFilter.SPRING_SECURITY_FORM_USERNAME_KEY).
                passwordParameter(UsernamePasswordAuthenticationFilter.SPRING_SECURITY_FORM_PASSWORD_KEY).
                defaultSuccessUrl("/").
                failureForwardUrl("/users.logout").
                and().
                logout().
                logoutUrl("/users/logout").
                logoutSuccessUrl("/").
                invalidateHttpSession(true).
                deleteCookies("JSESSIONID");
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder);
    }
}
```

[/slide]
