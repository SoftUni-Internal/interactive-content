# Validation
[slide]
# Data validation 

**Data validation happens in setters**

```java
private void setSalary(double salary) {
  if (salary < 460) {
    throw new IllegalArgumentException("Message");
  }
  
  this.salary = salary;
}
```
- It is better to throw **exceptions**, rather than printing to the Console
- Printing with **System.out couples** your class
- **Client** can **handle** class exceptions

**Constructors use private setters with validation logic**

```java
public Person(String firstName, String lastName, 
              int age, double salary) {
  setFirstName(firstName);
  setLastName(lastName);
  setAge(age);
  setSalary(salary);
}
```
- Validation happens inside the setter
- Guarantees valid state of object in its creation
- Guarantees valid state for public setters 

[/slide]

[slide]
# Problem: Validation Data

[/slide]

[slide]
# Solution: Validation Data

[/slide]