# JAXB

[slide hideTitle]
# JAXB Definition

**JAXB** is an API technology that provides an efficient way of mapping between XML and Java code.

It processes the XML schema into a set of **Java object** and vice-versa.

To add JAXB to a project:

```java
<dependency>
    <groupId>javax.xml.bind</groupId>
    <artifactId>jaxb-api</artifactId>
</dependency>
<dependency>
    <groupId>com.sun.xml.bind</groupId>
    <artifactId>jaxb-core</artifactId>
</dependency>
<dependency>
    <groupId>com.sun.xml.bind</groupId>
    <artifactId>jaxb-impl</artifactId>
</dependency>
```

[/slide]

[slide hideTitle]
# JAXB Basics
To start using JAXB it is important to understand the meaning of **marshalling** and **unmarshalling**. 

- **Marshalling** - the process of converting a Java Object to XML.
- **Unmarshalling** - converting XML to a Java Object.

When you are converting a Java object to XML, you need to add certain annotations that serve as instructions for its creation.

```java
@XmlRootElement(name = "animal")
@XmlAccessorType(XmlAccessType.FIELD)
public class AnimalDto implements Serializable {
    @XmlAttribute(name = "name")
    private String name;

    @XmlElement(name = "breed")
    private String breed;
}
```
In the above example, `XmlRootElement(name = "animal")` is an annotation that sets the root element in the XML and gives it the name **animal**.

[/slide]

[slide]
# JAXB Annotations

- `@XmlRootElement` - defines the XML root object.
- `@XmlAccessorType` - defines the fields and properties that the JAXB engine will use for binding. The possible values are:
  - XmlAccessType.**FIELD**
  - XmlAccessType.**PROPERTY**
  - XmlAccessType.**PUBLIC_MEMBER**
  - XmlAccessType.**NONE**
- ``@XmlAttribute`` - marks the field as an attribute.
- ``@XmlElement`` - marks the field as an element.
- ``@XmlElementWrapper(name = "insert_name_here")`` - wraps an array of objects and gives a name of your choosing to the wrapper.
- ``@XmlTransient`` - the annotated field will not be mapped.


## @XmlRootElement

**Scope:** Class or Enum

Used to map a class or an enum to an XML root element.

```java
@XmlRootElement(name = "cat")
public class Cat implements Serializable {
    //Some code
}
```

When converted to XML the above will convert to:

```java
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cat>
    //...
</cat>
```
## @XmlAccessorType

**Scope:** Class, Package

This allows you to decide which type of data is exported when JAXB converts the class to XML.

- `@XmlAccessType.FIELD` - Binds every non-static, non-transient field automatically for export. The excluded fields would be those, annotated with `@XmlTransient`
- `@XmlAccessType.PROPERTY` - Automatically binds any property (getter / setter pair) for export unless `@XmlTransient` is used on it
- `@XmlAccessType.PUBLIC_MEMBER` -  Every public class member (field or property) will be bound for export
- `@XmlAccessType.NONE` - No fields or properties will be exported to XML unless you specifically annotate them

The following Java code:

```java
@XmlRootElement(name = "cat")
@XmlAccessType(XmlAccessType.FIELD)
public class Cat implements Serializable {
    private String name;
    private Integer age;
}
```

results in:

```html
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cat>
    <name>Kitty</name>
    <age>1</age>
</cat>
```

The default value of this annotation is **PUBLIC_MEMBER**.

## @XmlAttribute
**Scope:** Field, Property

This will mark the field or property as an XML attribute.

The following Java code:

```java
@XmlRootElement(name = "cat")
@XmlAccessType(XmlAccessType.FIELD)
public class Cat implements Serializable {
    @XmlAttribute
    private Integer id;
    private String name;
    private Integer age;
}
```

results in:

```java
<?xml version="1.0" encoding="UTF-8"?>
<cat id="1">
   <name>Kitty</name>
   <age>1</age>
</cat>
```

## @XmlElement
**Scope:** Field, Property

Maps a property or a field to an XML element. Its name will be derived from the property name or you can set it with `name=""`.

The following Java code:

```java
@XmlRootElement(name = "cat")
public class Cat implements Serializable {
    @XmlElement(name = catId)
    private Integer id;

    @XmlElement
    private String name;
    
    private String breed;
}
```

results in:

```java
<?xml version="1.0" encoding="UTF-8"?>
<cat>
   <catId>1</catId>
   <name>Kitty</name>
</cat>
```

Notice how **id** is exported as **catId** as it was given this name explicitly, while the **name** field remained the same.

The **breed** field does not appear in the XML file as it is a private field.

It was not annotated with `@XmlElement`.

We also did not annotate the class with `@XmlAccessType(XmlAccessType.FIELD)` so **breed** is ignored. 

## @XmlElementWrapper

Wraps an array of objects and is given a custom name to the wrapper.


```java
@XmlRootElement(name = "vehicle")
@XmlAccessorType(XmlAccessType.FIELD)
public class Vehicle implements Serializable {
    @XmlElementWrapper(name = "cars")
    @XmlElement(name = "car")
    private List<String> cars;
}
```
Result:

```java
<?xml version="1.0" encoding="UTF-8"?>
<vehicle>
    <cars>
        <car>Toyota</car>
        <car>Mitsubushi</car>
        <car>Mercedes</car>
    </cars>
</vehicle>
```

You can see that the list of cars was given the name of **cars** but it could have been any name of your choosing.


## @XmlTransient
Scope: Field, Property

Fields or properties marked with this annotation will not be exported to XML.

```java
@XmlRootElement(name = "cat")
@XmlAccessorType(XmlAccessType.FIELD)
public class Cat implements Serializable {
    @XmlTransient
    private String name;
    private String breed;
}
```

Result:

```html
<?xml version="1.0" encoding="UTF-8"?>
<cat>
   <breed>Persian</breed>
</cat>
```

Even though the class is annotated with `@XmlAccessorType(XmlAccessType.FIELD)`, the **name** field was not exported as it has been marked with `@XmlTransient`.

[/slide]

[slide hideTitle]
# JAXB Initialization

```java
JAXBContext jaxbContext = JAXBContext.newInstance(object.getClass());
```

The **JAXBContext** object is used for **XML manipulations**. It provides an abstraction for managing XML/Java binding information.

`JAXBContext.newInstance(object.getClass())` creates an instance of JAXBContext and `object.getClass()` is the class that you want to export or import, for example User, Address, Employee.

[/slide]

[slide hideTitle]
# Export Single Object to XML – 1st Example

```java
@XmlRootElement
@XmlAccessorType(XmlAccessType.FIELD)
public class User {
    @XmlElement(name = "name")
    private String name;
    @XmlElement(name = "age")
    private Integer age;
    public String getName() {
        return name;
    }
    // Constructor, getters, setters 
}
```

Now in the **XMLParser.java** file we will export that class to XML by **marshalling** it. Remember, **marshalling** an object using JAXB means to convert a Java object to XML.


```java
JAXBContext context = JAXBContext.newInstance(User.class);  // Setting up a new instance of JAXBContext to with with the User class
Marshaller marshaller = context.createMarshaller();         // Creating a marshaller for the context
marshaller.marshal(user, new File("users.xml"));            // Exporting the User object to an XML file with the name users.xml
```

**users.xml**
```java
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<user>
    <name>New User</name>
    <age>18</age>
</user>
```
That values, inside the **name** and **age** tags, are the values from the User object.
[/slide]

[slide hideTitle]
# Export Single Object to XML – 2nd Example

Here is one more scenario where you will see how to export to XML in a slightly different way while also formatting the file to be easily readable.

**Student.java**

```java
@XmlRootElement(name = "student")
@XmlAccessorType(XmlAccessType.FIELD)
public class StudentDto implements Serializable {

    @XmlAttribute
    private String name;

    @XmlElement(name = "mobile")
    private String mobilePhoneNumber;
}
```


```java
JAXBContext context = JAXBContext.newInstance(UserDto.class);
Marshaller jaxbMarshaller = jaxbContext.createMarshaller();

jaxbMarshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);  // Setting the output format (for easier reading). Similar to setPrettyPrinting() for JSON

OutputStream outputStream = new FileOutputStream(student.xml);       // Setting the output file
BufferedWriter bufferedWriter = 
    new BufferedWriter(new OutputStreamWriter(outputStream));
    
jaxbMarshaller.marshal(studentDto, bufferedWriter);                  // Exporting the information from the studentDto
```

The result from the **marshal**:

```java
<?xml version="1.0" 
encoding="UTF-8"?>
<student name="Alex">
    <mobile>+971 123 123</mobile>
</student>

```

[/slide]

[slide hideTitle]
# Exporting Multiple Objects to XML

You can export a list of objects and define the opening and closing tag name for each object with `@XmlElement` if it is used on a collection like so:

```java
@XmlRootElement(name = "addresses")
@XmlAccessorType(XmlAccessType.FIELD)
public class AddressesDto {

    @XmlElement(name = "address")
    private List<AddressDto> addressJsonDtos;
}
```

Each **AddressDto** in the list might look something like this:

```java
@XmlRootElement(name = "address")
@XmlAccessorType(XmlAccessType.FIELD)
public class AddressDto implements Serializable {

    @XmlAttribute(name = "country")
    private String country;

    @XmlElement(name = "city")
    private String city;
}
```

After **marshalling**, this results in:

```java
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<addresses>
    <address country="UK">
        <city>London</city>
    </address>
    <address country="Spain">
        <city>Barcelona</city>
    </address>
</addresses>

```
[/slide]

[slide hideTitle]
# Import a Single Object from XML

You can also import objects from an XML file to Java by **unmarshalling** them with JAXB. To facilitate this process, you need a class that repsresents this object.

**AddressDto.java**
```java
@XmlRootElement(name = "address")
@XmlAccessorType(XmlAccessType.FIELD)
public class AddressDto implements Serializable {

    @XmlAttribute(name = "country")
    private String country;

    @XmlElement(name = "city")
    private String city;
}
```

**XMLParser.java**
```java
JAXBContext jaxbContext = JAXBContext.newInstance(AddressDto.class);

InputStream inputStream = getClass().getResourceAsStream("/files/input/xml/address.xml"); // Creating an input stream for the XML file

BufferedReader bfr = new BufferedReader(new InputStreamReader(inputStream));              // Initializing a buffered reader with the inputStream:

Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();                             // Unmarshaller created

AddressDto addressDto = (AddressDto) unmarshaller.unmarshal(bfr);
```

Finally, the **addressDto** object is initialized from the XML file. You need to cast it to the appropriate type because the compiler is not aware of the type in the XML file and will not allow the program to compile without that.

If the format in the XML file matches the class you have previously created, a new object will be created and its properties will be set accordingly.

[image assetsSrc="xml-processing-04.png" /]


[/slide]

[slide hideTitle]
# Import Multiple Objects to XML

Similarly to how we exported a list of objects, we can also import from XML to Java.

**XMLParser.java**
```java
JAXBContext jaxbContext = JAXBContext.newInstance(AddressesDto.class);
InputStream inputStream = getClass().getResourceAsStream("/files/input/xml/addresses.xml");
BufferedReader bfr = new BufferedReader(new InputStreamReader(inputStream));
Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
AddressesDto addressesDto = (AddressesDto) unmarshaller.unmarshal(bfr);
```

Once again, you need to have a class that represents the object you want to import.


**AddressesDto.java**
```java
@XmlRootElement(name = "addresses")
@XmlAccessorType(XmlAccessType.FIELD)
public class AddressesDto {

    @XmlElement(name = "address")
    private List<AddressDto> addressDtos;
}
```

Each address is represented as:

**AddressDto.java**
```java
@XmlRootElement(name = "address")
@XmlAccessorType(XmlAccessType.FIELD)
public class AddressDto implements Serializable {

    @XmlAttribute(name = "country")
    private String country;

    @XmlElement(name = "city")
    private String city;
}
```

The source XML that matches the above class representation format is:

```html
<?xml version="1.0" encoding="UTF-8"?>
<addresses>
    <address country="UK">
        <city>London</city>
    </address>
    <address country="Spain">
        <city>Barcelona</city>
    </address>
</addresses>
```
[/slide]
