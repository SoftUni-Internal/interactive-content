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

[/slide]


[slide]
## Naming Classes

The class name is with the initial letter capitalized by convention, i.e. **PascalCase naming**. 

The class name should contain descriptive nouns.

Abbreviations is required to be avoided (except widely known, e.g. URL, HTTP, etc.).

```java
class MyClass {

}
```

[/slide]


[slide]
## Fields

Fields store **values** 
`private String type;` `private int age;` `private boolean vegetarian;`

Fields represent the **state** of an object.

There can be specified as many fields as needed.

```java
class Animal {
    private String type;
    private int age;
    private boolean vegetarian;
    
}
```

[/slide]


[slide]
## Constructor

Special method, executed during object creation, that **sets object's initial state**.

Constructor name is the **same as the name of the class**.

Constructor **can take parameters**, which is used to **initialize fields**.

All classes have **constructor by default**. There can be **multiple constructors in the same class**.

```java
class Animal {
    private String type;
    private int age;
    private boolean vegetarian;
    
    public Animal() {
        
    }
    public Animal(String type) {
        this.type = type;
    }
}
```
[/slide]


[slide]
## Methods

Methods describe **behavior** of an object 
`public void animalSound() { ... }`
Methods store **executable code** (algorithm) that manipulate state.

```java
class Animal {
    private String type;
    private int age;
    private boolean vegetarian;

    public void animalSound() {
        System.put.println("The animal makes a sound")
    }

}
```
[/slide]


[slide]
## Getters and Setters

Getters provide **access** to fields.
Setters provide fields **change**.

```java
class Animal {
    . . .
    public int getType() {
        return this.type;
    }
    public void setType(String type) {
        this.type = type;
    }
}
```
[/slide]