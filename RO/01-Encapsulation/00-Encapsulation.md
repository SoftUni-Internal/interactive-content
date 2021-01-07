[slide]
# Encapsulation

**Encapsulation is a process of wrapping code and data together into a single unit**
- Increase flexibility and extensibility of the code.
- Reduce complexity.
- Structural changes remain local.
- Allow validation and data binding.

**Objects fields must be private**

```java
class Person {
  private int age;
} 
```
- Use **getters** and **setters** for **data access**

```java
class Person {
  public int getAge()
  public void setAge(int age)
}
```
## Example:

Fields should be **private** (-)

`-name: string`

`-age: int`

Accessors and Mutators should be **public** (+)

`+Person(String name, int age)`

`+getName(): String`

`+setName(String name): void`

`+getAge(): int`

`+setAge(int age): void`

[/slide]

[slide]
# Keyword This 

- `this` is a reference to the current object.

It can refer to current class instance.

```java
public Person(String name) {
  this.name = name;
}
```

- `this` can invoke current class method.

```java
public String fullName() {
  return this.getFirstName() + " " + this.getLastName();
}
```

- `this` can invoke current class constructor.

```java
public Person(String name) {
  this.firstName = name;
}
```
```java
public Person (String name, Integer age) {
  this(name);
  this.age = age;
}
```
[/slide]
