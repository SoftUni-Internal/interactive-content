# GSON

[slide hideTitle]

# GSON

**GSON** is a **Java library**, developed by **Google**.

It is used for converting Java objects to JSON or the other way around. 

It offers **two methods**, which we will use for converting **Java objects** into **JSON** and vice versa.

There are two ways to install **GSON**:

- Using **Maven**

**pom.xml**

```js
<dependency>
  <groupId>com.google.code.gson</groupId>
  <artifactId>gson</artifactId>
  <version>2.8.6</version>
</dependency>
```

- Using **Gradle**

```java
dependencies {
  implementation 'com.google.code.gson:gson:2.8.6'
}
```

[/slide]

[slide hideTitle]

# GSON Initialization

To create a **GSON instance**, use the `GsonBuilder` class.

It has several **configuration methods**.

These are some of the more commonly used methods:

- `create()` - Creates a **GSON instance**

- `setPrettyPrinting()` - **Aligns** and **justifies** the **JSON** output

- `excludeFieldsWithoutExposeAnnotation()` - Does not include fields that lack the **\@Expose** annotation

The following example shows how to initialize a **GSON object**:

```java
Gson gson = new GsonBuilder()
                .excludeFieldsWithoutExposeAnnotation()
                .setPrettyPrinting()
                .create();
```

## More GsonBuilder Methods

| **Method** | **Usage** |
| --- | --- | 
| disableHtmlEscaping() | Disable escaping of HTML characters such as \< or \> |
| excludeFieldsWithoutExposeAnnotation() | Gson will exclude all fields without the Expose annotation during serialization or deserialization |
| excludeFieldsWithModifiers(int... modifiers) | Exclude all fields that have the specified modifiers. Static and transient fields are excluded by default. For example, `excludeFieldsWithModifiers(Modifier.STATIC)` will only exclude static fields. |
| serializeNulls() | Enable the serialization of null fields. By default they are not serialized. |





[/slide]

[slide hideTitle]

# Export a Single Object as JSON

Converting a **single Java object** to **JSON** would happen in **three** stages:

- **Creating** a class

```java
public class PersonalData implements Serializable {
    @Expose
    private String name;
    @Expose
    private int age;
    @Expose
    private boolean hasGraduatedUniversity;

    public void setName(String name) {
        this.name = name;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void setHasGraduatedUniversity(boolean hasGraduated) {
        this.hasGraduatedUniversity = hasGraduated;
    }
}
```

Use the **\@Expose** annotation to determine which fields will be exported to JSON, and make sure your class implements the **java.io.Serializable** interface.


- Creating an **instance** of the class and converting it to **JSON**

```java
PersonalData personalData = new PersonalData();

personalData.setName("Derek");
personalData.setAge(35);
personalData.setHasGraduatedUniversity(true);

String converted = gson.toJson(personalData);
```

- The **output** from the **personalData** variable is `converted` to JSON when we **print it** to the console:

```java
{
  "name": "Derek",
  "age": 35,
  "hasGraduatedUniversity": true
}
```

[/slide]

[slide hideTitle]

# Export Multiple Objects as JSON

Converting multiple **Java objects** to **JSON** happens by passing a **List** as an argument to the `toJson` method.

The following code shows how to do so:

```java
PersonalData personalData1 = new PersonalData();
PersonalData personalData2 = new PersonalData();

personalData1.setName("Derek");
personalData1.setAge(35);
personalData1.setHasGraduatedUniversity(true);

personalData2.setName("Kate");
personalData2.setAge(27);
personalData2.setHasGraduatedUniversity(false);

List<PersonalData> listForConversion = new ArrayList<>();
listForConversion.add(personalData1);
listForConversion.add(personalData2);

String content = gson.toJson(listForConversion);
```

[/slide]

[slide hideTitle]

# Import a Single Object as JSON

Assume there is the following **JSON object** saved in an `info.json` file:

```java
{
  "name": "Teddy",
  "hasBrothers": false,
  "hasSisters": true
}
```

To deserialize it and use it in your application you would first need to create a corresponding class:

```java
public class ChildInfo implements Serializable {

    @Expose
    private String name;

    @Expose
    private boolean hasBrothers;

    @Expose
    private boolean hasSisters;
}
```

Here is how to convert the **JSON object** to a **Java object**:

```java
ChildInfo childInfo = gson
                .fromJson(
                        String.join("", Files.readAllLines(Path.of("/path/to/file.json")))
                        , ChildInfo.class);
```


In the example above we are converting the json file located in `/path/to/file.json` to a Java object.
[/slide]

[slide hideTitle]

# Import Multiple Objects as JSON

When you have multiple objects in a JSON you can deserialize them to a Java array.

Let us add one more entry into the JSON file we saw previously:

```java
[
  {
    "name": "Greta",
    "hasBrothers": true,
    "hasSisters": true
  },
  {
    "name": "Mike",
    "hasBrothers": false,
    "hasSisters": false
  }
]
```

```java
public class ChildInfo implements Serializable {

    @Expose
    private String name;

    @Expose
    private boolean hasBrothers;

    @Expose
    private boolean hasSisters;
}
```

Convert **multiple objects** like this:

```java
ChildInfo[] multipleObjects = gson
                .fromJson(
                        String.join("", Files.readAllLines(Path.of("/path/to/file.json")))
                        , ChildInfo[].class);
```

Here we are converting multiple objects to an array.


[/slide]

[slide hideTitle]

# Using Gson with Default Options

You do not need to use the GsonBuilder class if you want to use the default Gson configuration.

## Serialization

```Java
Customer customer = new customer("George", "Richardson", "george@email.com");
         
Gson gson = new Gson();
 
String json = gson.toJson(customer);
```

This would result in:

```Java
{
   "firstName":"George",
   "lastName":"Richardson",
   "email":"george@gmail.com"
}
```

## Deserialization

```Java
String json = "{'firstName':'George', 'lastName':'Richardson', 'email':'george@gmail.com'}"
         
Gson gson = new Gson();

Customer customerObject = gson.fromJson(json, Customer.class);

```

Printing the customerObject would result in:

```
Customer [firstName=George, lastName=Richardson, email=george@email.com]
```
[/slide]
