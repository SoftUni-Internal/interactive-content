[slide hideTitle]

# Scheduling Tasks



[/slide]

[slide hideTitle]

# Scheduled Task Using Cron​

```java
@Scheduled(cron = "0 5 * * * ?")​
public void showTimeWithCron(){​
    System.out.println(LocalDateTime.now());​
}​
```

[/slide]

[slide hideTitle]

# Scheduled Task Using Fixed Rate

```java
@Scheduled(fixedRate = 5000)​
public void showTimeWithFixedRate() {​
    System.out.println(LocalDateTime.now());​
}​
```

[/slide]

[slide hideTitle]

# Scheduled Task Using Fixed Delay

```java
@Scheduled(fixedDelay = 5000, initialDelay = 10000)​
public void showTimeWithFixedDelay() {​
    System.out.println(LocalDateTime.now());​
}​
```

[/slide]

[slide hideTitle]

# Enable Scheduling

```java
@SpringBootApplication​
@EnableScheduling​
public class MyApp {​
    public static void main(String[] args) {​
        SpringApplication.run(MyApp.class, args); 
    } 
}​
```

[/slide]