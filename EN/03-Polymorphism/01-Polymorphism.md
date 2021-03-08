[slide hideTitle]

# What is Polymorphism?

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/04-Polymorphism/EN/interactive-java-oop-advanced-polymorphism-3-4-What-is-polymorphism-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[image assetsSrc="Polymorphism-example.png" /]

Polymorphism is one of the four OOP pillars in **object-oriented** languages.

It allows us to perform a single action in many different ways.

Giving us the chance to change the behaviour of the classes runtime.

It lays on the concept that objects of different types can be accessed through the same interface or abstract class.

Each type will provide it's own implementation of the behaviour.

[/slide]

[slide hideTitle]

# Superclass

For example, lets say we have **superclass** called `Mammal` that has method called `makeSound()`. 

**Subclasses** of our class Mammal could be **Cats**, **Dogs**, **Pigs**, **Horses** - And they also have their individual implementation for making sound.

Lets see that in code: 

``` java
class Mammal {
  public void makeSound() {
    System.out.println("The animal makes a sound");
  }
}
```

``` java
class Cat extends Mammal {
  public void makeSound() {
    System.out.println("Meow Meow...");
  }
}
```

``` java
class Dog extends Mammal {
  public void makeSound() {
    System.out.println("Woof Woof!");
  }
}
```

Now we can go in our `Main` class and create our cat and dog objects and call `makeSound()` method on both of them.


``` java
class Main {
  public static void main(String[] args) {
    Mammal animal = new Mammal();  
    Mammal myCat = new Cat(); 
    Mammal myDog = new Dog(); 
    animal.makeSound();
    myDog.makeSound();
    myCat.makeSound();
  }
}
```

Output will be:

```
The animal makes a sound
Woof woof!
Meow Meow...
```
[/slide]

[slide hideTitle]

# instanceOf Operator

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/04-Polymorphism/EN/interactive-java-oop-advanced-polymorphism-7-Keyword-Instanceof-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We can use the `instanceOf` operator in Java to check if an **object** is an instance of a **class** or not.

Lets take a look now at the different examples:

- First, lets declare our Map

```java
 Map<Object, Object> map = new HashMap();
```

- Then, lets create a `boolean` type to evaluate our result

```java
boolean result = map instanceof Object;
```

- Finally we can print the result

```java
System.out.println("Map is instance of Object: " + result);
```

```java live
  Map<Object, Object> map = new HashMap();
  boolean result = map instanceof Object;
  System.out.println("Map is instance of Object: " + result);
```

Since `HashMap` is a subclass of `Object` the expression `map instanceOf Object` evaluates to `true`.

Similarly we can extend our previous task and check if our objects pets are instanceOf our classes for example.

``` java
class Main {
    public static void main(String[] args) {
        Mammal animal = new Mammal();
        Mammal myCat = new Cat();
        Mammal myDog = new Dog();
        
        boolean result = myDog instanceof Mammal;
        boolean result2 = myDog instanceof Cat;
        boolean result3 = myDog instanceof Dog;

        System.out.println(result);
        System.out.println(result2);
        System.out.println(result3);
    }
}
```

And the **output** from our code will be:

``` 
true
false
true
```

That output shows the `instanceOf` operator works of the **is-a relationship** concept that is based on a class **inheritance** or **interface implementation**.

[/slide]


[slide hideTitle]

# Types of Polymorphism

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/04-Polymorphism/EN/interactive-java-oop-advanced-polymorphism-8-9-Types-of-polymorphism-compile-time-polymorphism-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

There are **two** types of **Polymorphism** in Java:

- Dynamic Polymorpism

- Static Polymorphism

## Static Polymorphism

One of the way Java supports **Static Polymorphism** or also reffered to as **Compile-Time Polymorphism** is by "**Method overloading**".

**Method overloading** allows us to have two or more **methods** with the same name, but different **signature**.

The method signature contains:
- **Method name**
- **Parameters**

We can overload a method by changing the parameter types, the count of parameters or the order of the parameters.

We can not have two methods with the same name and the same parameters, **the name of parameters does not matter**!

Lets see this simple example:

``` java
class Calculation {  
  void sum(int a,int b) {
  System.out.println(a+b);
  }  
  
  void sum(int a,int b,int c){
  System.out.println(a+b+c);
  }  

  public static void main(String args[]) {  
    Calculation calculator = new Calculation();  
    obj.sum(5,10,15);  // 30
    obj.sum(20,40);   // 60
  }  
}  
```

## Dynamic Polymorphism

**Dynamic Polymorphism** is a Polymorphism that is exhibited at runtime.

Therefore the **behavior** of the **method** is decided at **runtime**.

**Dynamic Polymorphism** can be achieved using **method overriding**.

We can declare a method in our **sub-class** while the method is already present in the **parent class**. 

That is called **method overriding**.

This way, a **child class** can give its own **implementation/property** to a method which is already provided by the **parent class**.

To understand better, lets take a look at this **example**:

``` java
class Animal {
  public void eat() {
    System.out.println("Animals can eat.");
  }
}
```

``` java
class Dog extends Animal {
   public void eat() {
      System.out.println("Dogs can eat meat.");
   }
}
```
Now our `Main` class:

``` java
public class Main {
   public static void main(String args[]) {
      Animal animal = new Animal(); // We declare our Animal reference and object
      Animal dog = new Dog();
      animal.eat(); 
      dog.eat();
   }
}
```

And the **output** will be: 

```
Animals can eat.
Dogs can eat meat.
```

[/slide]

[slide hideTitle]
# Problem with Solution: Math Operation

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/04-Polymorphism/EN/interactive-java-oop-advanced-polymorphism-10-problem-and-solution-MathOperation-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Math Operation" timeLimit=5000 taskId="Java-OOP-Advanced-Polymorphism-lab-Math-Operation" executionType="tests-execution" executionStrategy="java-project-tests"] 
[code-upload allowedMemory="30" /]

[task-description]
# Description
Create a class **MathOperation**, which should have an `add()` method. 

The `add()` method has to be invoked with **two**, **three** or **four** **Integers**.

**You should be able to use the class like this:**

```java
public static void main(String[] args) throws IOException {
    MathOperation math = new MathOperation();
    System.out.println(math.add(2, 2));
    System.out.println(math.add(3, 3, 3));
    System.out.println(math.add(4, 4, 4, 4));
}
```


# Example
| **Output** |
| --- |
| 4 |
| 9 |
| 16 |


[/task-description]
[tests]
[test]
[input]
import org.junit.Assert;
import org.junit.Test;

public class T01TestAllClassesExists \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";

    private static final String\[\] classNames = new String\[\]\{
            "MathOperation"
    \};

    @Test
    public void test() \{
        assertExistingClasses(classNames);
    \}

    private void assertExistingClasses(String\[\] classNames) \{
        for (String className : classNames) \{
            assertClassExists(className);
        \}
    \}

    private void assertClassExists(String className) \{
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));
    \}
\}
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;

public class T02TestAddMethod \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String TEST_METHOD_NAME = "add";
    private static final String CLASS_NAME = "MathOperation";



    private static final String\[\] methodNames = new String\[\]\{
            TEST_METHOD_NAME
    \};

    private static final HashMap\<String, Class\> methodReturnTypes = new HashMap\<String, Class\>() \{\{
        put(TEST_METHOD_NAME, int.class);
    \}\};

    private static final HashMap\<String, Class\[\]\> methodParameters = new HashMap\<String, Class\[\]\>() \{\{
        put(TEST_METHOD_NAME, new Class\[\]\{int.class,int.class\});
    \}\};

    private Object clazz;

    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{
        assertAddMethodWorksCorrect(methodNames);
    \}

    private void assertAddMethodWorksCorrect(String\[\] methodNames) throws NoSuchMethodException, InstantiationException, IllegalAccessException, InvocationTargetException, NoSuchFieldException \{
        Class cl = getClass(CLASS_NAME);
        Constructor constructor = cl.getConstructor();
        constructor.setAccessible(true);
        clazz = constructor.newInstance();

        Assert.assertEquals(String.format(METHOD_RETURN_TYPE_ERROR,
                    "add",
                    CLASS_NAME,
                    methodReturnTypes.get("add")), int.class, methodReturnTypes.get("add"));

            Method first =cl.getDeclaredMethod("add",int.class,int.class);
            Method second =cl.getDeclaredMethod("add",int.class,int.class,int.class);
            Method third =cl.getDeclaredMethod("add",int.class,int.class,int.class,int.class);
            first.setAccessible(true);


                int result = (int)first.invoke(clazz, 2, 2);
                int result1 = (int)second.invoke(clazz, 3,3,3);
                int result2 = (int)third.invoke(clazz, 4,4,4,4);

            Assert.assertTrue("add not implemented correctly",result==4);
            Assert.assertTrue("add not implemented correctly",result1==9);
            Assert.assertTrue("add not implemented correctly",result2==16);



    \}


    private Class getClass(String className) \{
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));
        return Classes.allClasses.get(className);
    \}
\}
[/input]
[output]
Test Passed!
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]

# Rules for Overriding and Overloading Methods

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/04-Polymorphism/EN/interactive-java-oop-advanced-polymorphism-12-Rules-for-overloading-method-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## Rules for Overriding methods:

- We can Override method in **sub-class**

- Parameters must be the same as parameters in **parent method**

- The overriding method must have **same return type**

- We cannot override **private**, **static** or **final** methods

- Overriding methods cannot throw **checked Exception** which is higher in hierarchy, than **checked Exception** thrown by overridden method

## Rules for Overloading methods:

- We can **overload** method that take place in the **same class** or in its **sub-class**

- We can **overload Constructors** in Java

- Overloaded methods can have the **same** or **different** **return** types

- Overloaded methods must have **different argument list**

- Overloaded method should always be the part of the same class, with **same name** but **different parameters**

[/slide]
