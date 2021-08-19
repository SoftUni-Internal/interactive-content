# Spring AOP Advices and Annotations

[slide hideTitle]

# Join Point

In **aspect-oriented programming**, everything is executed around a joint point.

So the joint point in **aspect-oriented programming** is a **point** in the execution of the program in which **behavior** can be **altered** by aspect-oriented programming.

In spring **aspect-oriented programming** a joint point is always **method execution**, so whenever one **component** is executing the **method** on another component this is a joint point.

**Aspect-oriented programming** as a concept and also **AspectJ implementation** of the aspect-oriented programming also supports **additional** joint points like:

- **Constructor execution**
- **Reference or field assignment**
- **Exceptional handling**
- **Execution of the advice** 
- **Execution of the static initializers and object initializers**

[/slide]

[slide hideTitle]

# PointCut

A **pointCut** is a set of one or more JoinPoint where advice should be executed. 

We can specify **PointCuts** using expressions or patterns as we will see in our AOP examples. 

In Spring, PointCut helps to use specific JoinPoints to apply the advice

```java
@Pointcut("execution(public * *(..))") //the pointcut expression
public void trackStudentActions() {} //the pointcut signature 
```

In the above example, pointcut expression is `@Pointcut("execution(public * *(..))")`, and pointcut signature is `trackStudentActions()`.

[/slide]

[slide hideTitle]
# Spring Boot Starter AOP Dependency

For AOP to work, we need to **create dependency**, which is named "**spring-boot-starteraop**":

```js
<dependency>
   <groupId>org.springframework.boot</groupId>
   <artifactId>spring-boot-starteraop</artifactId>
   <version>2.4.2</version>
</dependency>
```

## Example Class

We are going to use the `Student` class:

```java
public class Student {
    public void actionOne(){...};
    public void actionTwo(){...};
    public void actionThree(){...};
    public void actionFour(){...};
    public void actionFive(){...};
}
```
[/slide]

[slide hideTitle]

# Aspect Class

We need to create a class with `@Aspect` that contains all **advices**:

```java
@Aspect
@Configuration
public class TrackStudent {
  @Pointcut("execution(* Student.*(..))")
  public void track() {}

  // Can have more than one pointcut
  // Here place every advice
}
```
In this example, we have a class "**TrackStudent**", which is annotated with `@Aspect` annotation.

Into the "**TrackStudent**" we create a `@Pointcut`, which will track every method of the "**Student**".

Here we are **not limited to only one** `@Pointcut`.

Inside this `@Aspect,` we place our advice.

[/slide]

[slide hideTitle]

# "Before" Example

Adding a `@Before` advice to the "**TrackStudent**" class

```java
@Aspect
@Configuration
public class TrackStudent {
  @Pointcut("execution(* Student.*(..))")
  public void track() {}
  @Before("track()") // Executed before the track() pointcut 
  public void beforeAdvice(JoinPoint joinPoint) {
    System.out.println("Before advice executed");
  }
}
```
This example is an extension to the example from the previous slide, we add `@Before` advice, which is executed before the `track()` pointcut. 

[/slide]

[slide hideTitle]

# "After" Example

Adding an `@After` advice to the TrackStudent class

```java
...
@After("track()") // Executed after the track() pointcut
public void afterAdvice(JoinPoint joinPoint) {
  System.out.println("After advice executed");
}
...

```
In this example, we **inject** a join point, which will contain **information** of which method was invoked. 

For example when a method from the "Student" class is invoked an executed, "**After advice executed**" message is printed.

[/slide]


[slide hideTitle]
# "AfterReturning" Example

Adding an `@AfterReturning` advice to the "**TrackStudent**" class

```java
...
@AfterReturning
  (pointcut = "execution(* Student.action())", returning = "result")
public void afterReturning(JoinPoint joinPoint, Object result) {
  System.out.println("AfterReturning advice executed");
  // We can get the result of pointcut
}
...
```

The `@AfterReturning` advice will be **executed after** the method execution.
 
When the `Student.action()` is executed we receive a **result**, then this result could be **injected** as an object into the `afterReturning()` method.

[/slide]


[slide hideTitle]

# "Around" Example

Adding an `@Around` advice to the "TrackStudent" class

```java
...
@Around("track()")
public Object aroundAdvices(ProceedingJoinPoint pjp) throws Throwable {
  System.out.println("Before calling");
  Object obj = pjp.proceed();
  System.out.println("After calling");
}
...

```
In this example, we have a class `ProceedingJoinPoint`, which is an extension of the **joining point**. 

[/slide]


[slide hideTitle]

# "AfterThrowing" Example

Adding an `@AfterThrowing` advice to the "**TrackStudent**" class:

```java
...
@AfterThrowing
  (pointcut = "execution(* Student.action())", throwing = "error")
Public void afterReturning(JoinPoint joinPoint, Throwable error) {
  System.out.println("AfterReturning advice executed");
  System.out.println("Exception is: " + error);
  // We can retrieve the exception in the AfterThrowing method
}
...
```

Here if `Student.action()` method trows exception we can log it.

To do that we should create a try/catch block into the `Student.action()`, if an error occurs, we can cath log that error.

[/slide]


[slide hideTitle]

# Specifying Aspects Ordering

There are two ways:

```java
@Aspect
@Order(0)
public class TrackStudent {
  ...
}
```
It is possible to have more than one `@Aspect` for a given class, if we want to control the `@Aspect` execution order, we could use the`@Order` annotation.


By implementing interface:

```java
@Aspect
public class TrackStudent implements Ordered {
  @Override
  public int getOrder() {
    return 0;
  }
}
```

Another way to implement the order of execution is to use the `Ordered` interface and override the `getOrder()` method.

[/slide]