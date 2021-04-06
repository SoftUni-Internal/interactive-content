# GSON

[slide hideTitle]

# GSON

**GSON** is a **Java library**, developed by **Google**.

It offers **two methods**, which we will use for converting **Java objects** into **JSONs** and vice versa.

There are two ways to install **GSON**:

- Using **Maven**

```java
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

- `create()` - Creates a **GSON instance**.

- `setPrettyPrinting()` - **Aligns** and **justifies** the **JSON** output.

- `excludeFieldsWithoutExposeAnnotation()` - Does not include fields that lack the **\@Expose** annotation.

Read the official **GSON** [documentation](https://www.javadoc.io/doc/com.google.code.gson/gson/2.8.5/index.html) for **more information** about the other methods.

The following example shows how to initialize a **GSON object**:

```java
Gson gson = new GsonBuilder()
                .excludeFieldsWithoutExposeAnnotation()
                .setPrettyPrinting()
                .create();
```

[/slide]

[slide hideTitle]

# Export a Single Object as JSON

Converting a **single Java object** to **JSON** would happen in **three** parts:

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

- Creating an **instance** of the class and converting it to **JSON**

```java
PersonalData personalData = new PersonalData();

personalData.setName("Derek");
personalData.setAge(35);
personalData.setHasGraduatedUniversity(true);

String converted = gson.toJson(personalData);
```

- The **output** from the variable `converted` when we **print it** to the console:

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

There also is a corresponding **class**:

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

[/slide]

[slide hideTitle]

# Import Multiple Objects as JSON

By using the same **class** from the previous example and new **JSON objects**:

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

[/slide]
