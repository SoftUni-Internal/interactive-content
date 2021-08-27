[slide hideTitle]

# Actuator

Spring Boot includes a number of additional features to help you monitor and manage your application when you push it to production​.

You can choose to manage and monitor your application by using HTTP endpoints or with JMX​.

Auditing, health, and metrics gathering can also be automatically applied to your application​.

[/slide]

[slide hideTitle]

# Actuator Dependency​

The recommended way to enable the features is to add a dependency on the spring-boot-starter-actuator 'Starter'. ​

```xml
<dependencies> ​
  <dependency> ​
    <groupId>org.springframework.boot</groupId>​
    <artifactId>spring-boot-starter-actuator</artifactId> ​
  </dependency> ​
</dependencies>​
```

[/slide]