# Definition Aspect-Oriented Programming 

[slide hideTitle]

# Aspect Oriented Programming (AOP)

**Aspect-oriented programming** (AOP) is a programming paradigm, that **separating concerns** of a software application to improve **modularization**. 

An enterprise application is typically **divided into layers**:

- **UI layer** 
- **Business logic layer**
- **Data access layer**

All these layers typically have some **non-functional requirements** like **security**, **profiling**, **logging**, **transaction**, **management**, etc.

When we are especially using a database or a logging system to write errors or information to the log files, **profiling** to see how the application is performing and security

These are called **cross-cutting concerns** because these are **required** across these **layers** as well as across the **applications** in the enterprise or **even another enterprise**.

Any application we develop **will need all these** and more so that is where **aspects** come in as well as **aspect-oriented programming**.

In an **object-oriented world**, we define a **class** and **object** is the key unit that represents that class.

In the aspect-oriented world, an **aspect** is a key unit.

We can think of an **aspect** as a specialized **class** that addresses **one of these cross-cutting concerns**.

It could be **security**, **profiling**, **logging**, **transaction**, **management**, etc., so these app's **aspects can be applied** to our classes and objects.

At runtime doing that will have **several advantages**.

The number one **cross-cutting concern** is we can address all the **non-functional requirements** which are **common** across the enterprise or even **enterprises allowing** us to reuse.

Once we develop an aspect we can apply it **across classes** in our application and across **applications**.

That way we can focus on our **business logic** without worrying about the **non-functional requirements** because we have the aspects.

If a particular developer is **interested in working** on the security aspect he can develop an aspect for that another developer **can work on logging** transaction management which will allow **specialization**.

Finally, a powerful feature is **enabling** and **disabling** aspects at runtime we can enable them and we can disable them using configuration.

**Spring** and **AspectJ** are two popular frameworks, spring also works together with AspectJ and it has its implementation of aspects as well.

[/slide]


[slide hideTitle]

# Why Use AOP 

## Problem Example

Example:

```java
public class Student {
    public void actionOne(){...};
    public void actionTwo(){...};
    public void actionThree(){...};
    public void actionFour(){...};
    public void actionFive(){...};
}
```

In this example, we have a class "**Student**", which has **five methods**.

If we want to track the **activity** of the student we could:

**Without using AOP**:

- If we need to **log all activities** of students, we need to **write** additional code in all tracked methods

- It leads to a **maintenance** problem.

**With AOP:**

- We can define the **additional** concern like **maintaining** a log, **sending a notification**, etc. in the  method of a class
- **Maintenance is easy in AOP**

[/slide]