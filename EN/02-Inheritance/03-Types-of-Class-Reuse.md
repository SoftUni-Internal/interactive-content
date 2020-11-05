# Types of Class Reuse

[slide]
# Extension

**Duplicate code is error prone**
- **Reuse classes** through **extension**
- Sometimes the only way

[image assetsSrc="inheritance-example(15).png" /]

[/slide]

[slide]
# Composition

**Using classes to define classes**

```java
class Laptop {
  Monitor monitor;
  Touchpad touchpad;
  Keyboard keyboard;
  … //Reusing classes
}
```
[image assetsSrc="inheritance-example(16).png" /]

[/slide]

[slide]
# Delegation

```java
class Laptop {
  Monitor monitor;
  void incrBrightness() {
    monitor.brighten();
  }

  void decrBrightness() {
    monitor.dim();
  } 
}
```
[image assetsSrc="inheritance-example(17).png" /]

[/slide]

[slide]
# Problem: Stack of Strings

[/slide]

[slide]
# Solution: Stack of Strings

[/slide]

[slide]
# When to Use Inheritance

- Classes share **IS-A** relationship
- Derived class **IS-A-SUBSTITUTE** for the base class
- Share the **same role**
Derived class is the **same as the base class** but adds a **little bit more functionality**


[/slide]
