# Hiding Implementation

[slide hideTitle]

# Encapsulation

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/01-Encapsulation/EN/01.Java-OOP-Advanced-Encapsulation-3-4-5-6-encapsulation-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Encapsulation is the process of wrapping code and data together into a single unit.**

This practice bring numerous benefits, such as:

- Increased flexibility and extensibility of the code
- Reduced complexity
- Structural changes remain local
- Allows for validation and data binding

**Objects fields must be private**:

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

## Example

Fields should be **private** (-):

`-name: string`

`-age: int`

Accessors and mutators should be **public** (+):

`+Person(String name, int age)`

`+getName(): String`

`+setName(String name): void`

`+getAge(): int`

`+setAge(int age): void`

[/slide]

[slide hideTitle]

# Keyword This 

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/01-Encapsulation/EN/01.Java-OOP-Advanced-Encapsulation-7-8-keyword-this-1-2-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- `.this` is a reference to the current object

It can refer to the current class instance:

```java
public Person(String name) {
  this.name = name;
}
```

- `.this` can invoke the current class method

```java
public String fullName() {
  return this.getFirstName() + " " + this.getLastName();
}
```

- `.this` can invoke the current class constructor

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
