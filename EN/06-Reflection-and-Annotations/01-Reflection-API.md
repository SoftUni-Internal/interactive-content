[slide]


# Reflection API

Lets continue with some more detailed information about Classes in Java Reflection.

Java provides us a class with name `Class` in java.lang.package. 

Instances that are inside the `Class` acts for interfaces and classes in a running Java application.

We can create object of `Class` by using one of the following options:

- `.class` extension.

For example:

``` java
Class test = Dog.class;

// We can use the test object to achieve reflection as this object will have all the needed information about the class Dog.
```

- `forName()` method.

`forName()` method will take the name of the class and returns the Class object.

For example:

``` java
Class test = Class.forName("Dog");
```

Now, lets obtain the `Class` name:


``` java
Class myDogClass = Dog.class;
String nameClass = myDogClass.getName();
```

If we want to obtain the class name without the package name, we can use `getSimpleName()` method:

``` java
Class myDogClass = Dog.class;
String nameClass = myDogClass.getSimpleName();
```


We can also obtain our parent class like this:

```java
public class Dog extends Mammal {
}
```


```java
public class Main {
    public static void main(String[] args) throws ClassNotFoundException {
        Class myDogClass = Dog.class;
        Class nameClass = myDogClass.getSuperclass();
        System.out.println(nameClass);
```

And the **output** will be:

```
class Mammal
```


Now, lets obtain our methods and interfaces in our classes.

Interfaces are also represented by `Class` objects in Java Reflection

``` java
Class[] interfaces = aClass.getInterfaces();
```


Lets asume we have `class` Dog with methods inside:

```java
public class Dog extends Mammal {
    public void makeSound() {
        System.out.println("Woof woof!");
    }
    public void eat() {
        System.out.println("Eating meat");
    }
    public void walk() {
        System.out.println("Walking...");
    }
}

```

We can **obtain** this methods with following syntax:

```java
public class Main {
    public static void main(String[] args) throws ClassNotFoundException {
    Method[] methods = Dog.class.getMethods();
    for (Method method : methods) {
       System.out.println("method " + method.getName());
    }
```

The output will be:
```
method walk
method makeSound
method eat
method wait
method wait
method wait
method equals
method toString
method hashCode
method getClass
method notify
method notifyAll
```

We can see that besides the **custom methods** we wrote (walk, makeSound, eat) we also have default methods (wait, equals, toString, hashCode, etc).

[/slide]