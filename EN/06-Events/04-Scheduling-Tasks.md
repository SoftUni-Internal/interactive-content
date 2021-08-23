[slide hideTitle]

# Scheduling Tasks

In many applications, we often have the need to create tasks that are executed at a later time, without user intervention.

For example, we may have an application that collects analytics and visualises the data in charts.

Any data, older than 90 days is considered irrelevant, and must not be persisted in the database.

We can schedule a task that will take care of this deletion automatically.

The Scheduling package of Spring Boot provides support for task scheduling.

We can specify a certaing period for background task execution.

There a three ways to specify the time period:

- Using a Cron expression
  * it allows for sequential task execution (for example, we can run a task at 2AM every Sunday)
  
- Using `FixedRate`

- Using `FixedDelay`

[/slide]

[slide hideTitle]

# Scheduled Task Using Cron​

Spring Cron expressions contain six fields in a strict order:

- `<second>`
- `<minute>`
- `<hour>`
- `<day-of-month>`
- `<month>`
- `<day-of-week>`

This method will print the current time on the seventh minute of every hour.

```java
@Scheduled(cron = "0 7 * * * ?")​
public void showTimeWithCron(){​
    System.out.println(LocalDateTime.now());​
}​
```

As shown above, we use the `@Scheduled` annotation to schedule the execution of the `showTimeWithCron()` method.

The asterisk `*` is used to mark a given field as unimportant.

The question mark `?` is used to ignore a certain field, in order to avoid conflicts.

[/slide]

[slide hideTitle]

# Scheduled Task Using Fixed Rate

The `fixedRate` scheduler is used to repeatedly perform a task at a given sequence.

```java
@Scheduled(fixedRate = 5000)​
public void showTimeWithFixedRate() {​
    System.out.println(LocalDateTime.now());​
}​
```

This scheduler accepts values in milliseconds only.

It does not wait for the completion of the previous task before starting the task again.

This means that often times, multiple tasks may run in parallel.

[/slide]

[slide hideTitle]

# Scheduled Task Using Fixed Delay

`fixedDelay` waits for the previous task to finish, befor starting to execute the new one.

This ensures that operations run in a synchronous manner.

This can be especially helpful, for example, when performing calculations.

```java
@Scheduled(fixedDelay = 5000, initialDelay = 10000)​
public void showTimeWithFixedDelay() {​
    System.out.println(LocalDateTime.now());​
}​
```

As evident above, we have a second `initialDelay` parameter.

It is the time after which the task will be executed the first time after the initial delay value.

[/slide]

[slide hideTitle]

# Enable Scheduling

In order for scheduling to work, we should include the `@EnableScheduling` annotation in our main App class:

```java
@SpringBootApplication​
@EnableScheduling​
public class MyApp {​
    public static void main(String[] args) {​
        SpringApplication.run(MyApp.class, args); 
    } 
}​
```

If it is not added, our application will be unable to recognize `@Scheduled` annotation.

[/slide]