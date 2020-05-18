[slide]
# Defining Simple Classes

When defining class, it contains only those components of a class declaration that are required.

The obligatory components are:
- Keyword - `class`
- Class name
- Class body - between `{}`

Non obligatory, but credential, components are: 
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

Abbreviations is required to be avoided (except widely known, e.g. URL, HTTP, etc.).

```java
class MyClass {

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
class Animal {
    // fields
    private String type;
    private int age;
    private boolean vegetarian;
    
}
```

[/slide]


[slide]
# Constructor

Special method, executed during object creation, that **sets object's initial state**.

Constructor name is the **same as the name of the class**.

Constructor **can take parameters**, which is used to **initialize fields**.

All classes have **constructor by default**. 

There can be **multiple constructors of the same class**. This helps to instantiate objects in various ways with a different number of arguments.

```java
class Animal {
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

Getter provide **access** to field and read its value. 

Naming convention: `getXxx()`, where **Xxx** is the name of the variable. 

Since the getter method is **return** type, the data type of the value returned by the method is the same as the field type.

Setter provide field's **change** and update its value. 

Naming convention: `setXxx()`, where **Xxx** is the name of the variable. 

The setter method is **void** type.

```java
class Animal {
    // field
    private String type;
    . . .
    // getter
    public int getType() {
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
`public void animalSound() { ... }`
Methods store **executable code** (algorithm) that manipulate state.

```java
class Animal {
    // fields
    private String type;
    private int age;
    private boolean vegetarian;

    // method
    public void animalSound() {
        System.put.println("The animal makes a sound")
    }

}
```
[/slide]


