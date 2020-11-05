[slide]
# Using Inherited Members

**You can access inherited members**

```java
class Person { public void sleep() { … } }
class Student extends Person { … }
class Employee extends Person { … }
```
```java
Student student = new Student();
student.sleep();
Employee employee = new Employee();
employee.sleep();
```

## Reusing Constructors

**Constructors are not inherited**

They can be **reused** by the child classes

```java
class Student extends Person {
  private School school;
  public Student(String name, School school) {
    super(name); //Constructor call should be first
    this.school = school;
  }
}
```
[/slide]

[slide]
# Thinking about Inheritance – Extends

- A derived class instance **contains** an instance of its base class

[image assetsSrc="inheritance-example(6).png" /]

## Inheritance has a transitive relation

```java
class Person { … }
class Student extends Person { … }
class CollegeStudent extends Student { … }
```

[image assetsSrc="inheritance-example(7).png" /]

[/slide]

[slide]
# Multiple Inheritance

**In Java there is no multiple inheritance**

Only **multiple interfaces can be implemented**

[image assetsSrc="inheritance-example(8).png" /]

[/slide]

[slide]
# Problem: Multiple Inheritance

[image assetsSrc="inheritance-example(10).png" /]

[/slide]

[slide]
# Solution: Multiple Inheritance

[/slide]

[slide]
# Access to Base Class Members

To access the base class members, use the `super` keyword

```java
class Person { … }

class Employee extends Person { 
  public void fire(String reasons) { 
    System.out.println(
        super.name + 
        " got fired because " + reasons);
  }
}
```
[/slide]

[slide]

# Problem: Hierarchical Inheritance

[image assetsSrc="inheritance-example(11).png" /]

[/slide]

[slide]

# Problem: Hierarchical Inheritance

[/slide]





