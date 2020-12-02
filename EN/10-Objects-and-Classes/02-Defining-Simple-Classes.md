# Defining Simple Classes

[slide]
# Video

[vimeo-video startTimeInSeconds="5996" endTimeInSeconds="11707"]
[stream language="EN" videoId="421789645" default /]
[stream language="RO" videoId="433520664"  /]
[/video-vimeo]

[/slide]

[slide]
# Defining Simple Classes

When defining class, it contains only those components of a class declaration that are required.

The obligatory components are:
- Keyword - `class`
- Class name
- Class body - between `{}`

Not obligatory, but credential, components are: 
- Class fields
- Constructor
- Getters and Setters
- Class methods

Each class, field, constructor, method is initialized with an access modifier in front, which specifies the accessibility. Тhe access level can be changed by applying the access modifier on it. We will cover this in the next course. 

There is a possibility to generate automatically via IntelliJ IDEA constructors, getters, setters, and other most used methods. It is possible by Right-click + Generate. The short command depends on the operation system of the computer: in Windows and Linux - Alt + Insert; in Macintosh - Cmd + N.


[/slide]


[slide]
# Naming Classes

The class name is with the initial letter capitalized by convention, i.e. **PascalCase naming**. 

The class name should contain descriptive nouns.

Abbreviations are required to be avoided (except widely known, e.g. URL, HTTP, etc.).

```java
public class MyClass {

}
```

[/slide]


[slide]
# Fields

Fields store **values** 
`private String type;` `private int age;` `private boolean vegetarian;`

Fields represent the **state** of an object.

There can be specified as many fields as needed.


```java
public class Animal {
    // fields
    private String type;
    private int age;
    private boolean vegetarian;
}
```

[/slide]


[slide]
# Constructor

A special method, executed during object creation, that **sets object's initial state**.

The constructor name is the **same as the name of the class**.

Constructor **can take parameters**, which is used to **initialize fields**.

All classes have **constructor by default**. 

There can be **multiple constructors of the same class**. This helps to instantiate objects in various ways with a different number of arguments.

```java
public class Animal {
    // fields
    private String type;
    private int age;
    private boolean vegetarian;

    // constructors
    public Animal() {

    }
    public Animal(String type) {
        this.type = type;
    }
}
```
[/slide]

[slide]
# Getters and Setters

There can be declared getter and setter for each field.

Getter provide **access** to field and read its value. 

Naming convention: `getXxx()`, where **Xxx** is the name of the variable. 

Since the getter method is **return** type, the data type of the value returned by the method is the same as the field type.

Setter provides field's **change** and updates its value. 

Naming convention: `setXxx()`, where **Xxx** is the name of the variable. 

The setter method is **void** type.

```java
public class Animal {
    // field
    private String type;
    . . .
    // getter
    public String getType() {
        return this.type;
    }

    // setter
    public void setType(String type) {
        this.type = type;
    }
}
```
[/slide]

[slide]
# Methods

Methods describe **behavior** of an object 
`public void makeSound() { ... }`
Methods store **executable code** (algorithm) that manipulate state.

```java
class Animal {
    // fields
    private String type;
    private int age;
    private boolean vegetarian;

    // method
    public void makeSound() {
        System.out.println("The animal is making sounds.")
    }
}
```
[/slide]

