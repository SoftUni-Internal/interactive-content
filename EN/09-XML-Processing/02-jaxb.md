[slide]
# JAXB

**JAXB** is an API technology that provides an efficient way of mapping between XML and Java code with a minimal amount of effort and coding.

It processes the XML schema into a set of **Java classes** or vice-versa.

To add JAXB to a project, append the below dependencies into your **pom.xml** file.


```html
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

[slide]
# JAXB Basics
To start using JAXB it is important to understand the meaning of **marshalling** and **unmarshalling**. 

- **Marshalling** - the process of converting a Java Object to XML.
- **Unmarshalling** - converting XML to a Java Object.

When you are converting a Java object to XML you need to add certain annotations that serve as instructions for its creation.

**AnimalDto.java**
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
In the above example ``XmlRootElement(name = "animal")`` is an annotation that sets the root element in the XML and gives it a name of **animal**.

Next, we will look into some of the annotations you can use and what they do.

[/slide]

[slide]
# JAXB Annotations

- ``@XmlRootElement `` - defines the XML root object.
- ``@XmlAccessorType`` - defines the fields and properties that the JAXB engine will use for binding. Possible values:
  - XmlAccessType.**FIELD**
  - XmlAccessType.**PROPERTY**
  - XmlAccessType.**PUBLIC_MEMBER**
  - XmlAccessType.**NONE**
- ``@XmlAttribute`` - marks the field as an attribute.
- ``@XmlElement`` - marks the field as an element.
- ``@XmlElementWrapper(name = "insert_name_here")`` - wraps an array of objects and gives a name of your choosing to the wrapper.
- ``@XmlTransient`` - a field annotated with **@XmlTransient** will not be mapped.


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

```html
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cat>
    //...
</cat>
```
## @XmlAccessorType

**Scope:** Class or Package

This allows you to decide which type of data is exported when JAXB converts the class to XML.

- ``@XmlAccessType.FIELD`` - Binds every non-static, non-transient field automatically for export. The only excluded fields would be those annotated with ``@XmlTransient``.
- ``@XmlAccessType.PROPERTY`` - Automatically binds any property (getter / setter pair ) for export to XML unless you use ``@XmlTransient`` on it.
- ``@XmlAccessType.PUBLIC_MEMBER`` -  Every public class member (field or property) will be bound for export.
- ``@XmlAccessType.NONE`` - No fields or properties will be exported to XML unless you specifically annotate them.


```java
@XmlRootElement(name = "cat")
@XmlAccessType(XmlAccessType.FIELD)
public class Cat implements Serializable {
    private String name;
    private Integer age;
}
```

Results in:

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

This will mark the field or property you annotate to an attribute.

```java
@XmlRootElement(name = "cat")
public class Cat implements Serializable {
    @XmlAttribute
    private Integer id;
    private String name;
    private Integer age;
}
```

Result:

```html
<?xml version="1.0" encoding="UTF-8"?>
<cat id="1">
   <name>Kitty</name>
   <age>1</age>
</cat>
```

## @XmlElement
**Scope:** Field or Property

Maps a property or field to an XML element. Its name will be derived from the property name or you can set it with ``name=""``.

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

Result:

```html
<?xml version="1.0" encoding="UTF-8"?>
<cat>
   <catId>1</catId>
   <name>Kitty</name>
</cat>
```

Notice how **id** is exported as **catId** as it was given this name explicitly, while the **name** field remained the same. The **breed** field does not appear at all in the XML as it is a private field and it was not annotated with ``@XmlElement``.

## @XmlElementWrapper`` 

Wraps an array of objects and gives a name of your choosing to the wrapper.


```java
@XmlRootElement(name = "vehicle")
@XmlAccessorType(XmlAccessType.FIELD)
public class Vehicle implements Serializable {
    @XmlElementWrapper(name = "cars")
    @XmlElement(name = "car")
    private List < String > cars;
}
```
Result:

```html
<?xml version="1.0" encoding="UTF-8"?>
<vehicle>
    <cars>
        <car>Toyota</car>
        <car>Mitsubushi</car>
        <car>Mercedes</car>
    </cars>
</vehicle>
```

You can see that the List of cars was given the name of **cars** but it could have been any name of your choosing.


## @XmlTransient
Scope: Field or Property

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

Even though the class is annotated with`` @XmlAccessorType(XmlAccessType.FIELD)``, the name field is not exported as it has been marked with ``@XmlTransient``.

[/slide]

[slide]
# JAXB Initialization

**XMLParser.java**
```java
this.jaxbContext = JAXBContext.newInstance(object.getClass());
```

The **JAXBContext** objects are used for XML manipulations. It provides an abstraction for managing XML/Java binding information.

``JAXBContext.newInstance(object.getClass())`` creates an instance of JAXBContext and ``object.getClass()`` is the class that you want to export or import, for example User, Address, Employee.

[/slide]

[slide]
# Export Single Object to XML – Example


Imagine you have a class called **User.java** :
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

Now in **XMLParser.java** we will export that class to XML by **marshalling** it. Remember, to **marshal** an object using JAXB simply means converting a Java object to XML.


**XMLParser.Java**:

```java
JAXBContext context = JAXBContext.newInstance(User.class);
Marshaller marshaller = context.createMarshaller();
marshaller.marshal(user, new File("users.xml"));
```

We are setting up a new instance of JAXBContex to work with the **User** class. Then we are creating a **marshaller** from the context. Finally, we are exporting the user object to an xml file with the name **users.xml**.

Result:
```html
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<user>
    <name>New User</name>
    <age>18</age>
</user>
```
(We are assuming that an object user of the class User was initialized with name = "New User" and age = 18.)

[/slide]

[slide]
# Export Single Object to XML – Example 2

Here is one more scenario where you will see how to 

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

**XMLParser.java**

```java
JAXBContext context = JAXBContext.newInstance(UserDto.class);
Marshaller jaxbMarshaller = jaxbContext.createMarshaller();
jaxbMarshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);
OutputStream outputStream = new FileOutputStream(student.xml);
BufferedWriter bufferedWriter = 
    new BufferedWriter(new OutputStreamWriter(outputStream));
jaxbMarshaller.marshal(studentDto, bufferedWriter);
```

Here we are assuming we have received a **studentDto** object that can be a projection from a database call with **name = "Alex"** and **mobilePhoneNumber = "+971 123 123"**.

We are converting it to XML with JAXB only this time we are doing it differently. You already know what the first two lines do. Let us look at the rest of the code.

``` java
jaxbMarshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);
```
First, we are setting the output format, so the exported file will be formatted in a way that is easier to read by humans. This is similar to **setPrettyPrinting** in JSON parsing. If you do not do this, all the XML data will be on one line.

```java
OutputStream outputStream = new FileOutputStream(fileName);
```
Then, we are creating a **FileOutputStream** and set it to output to a file called **student.xml**.

```
BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(outputStream));
```
A new buffered writer object is created that takes the outputStream we created.

```
jaxbMarshaller.marshal(studentDto, bufferedWriter);
```
Takes the **studentDto** object and bufferedWriter and exports it to XML resulting in:

```html
<?xml version="1.0" 
encoding="UTF-8"?>
<student name="Alex">
    <mobile>+971 123 123</mobile>
</student>

```

Notice how **name** is an attribute of the root element as it was annotated with **@XmlAttribute** and **mobilePhoneNumber** was exported as "mobile" because of ``@XmlElement(name = "mobile")``. Sometimes the service that will be working with your XML will might need tags and attributes to be in a specific format, so it is convenient to be able to rename them with attributes without having to change your classes.

[/slide]

[slide]
# Export Multiple Objects to XML

You can export a list of objects and define the opening and closing tag name for each object with ``@XmlElement`` if it is used on a collection like so:

**AddressListDto.java**
```java
@XmlRootElement(name = "addresses")
@XmlAccessorType(XmlAccessType.FIELD)
public class AddressesDto {

    @XmlElement(name = "address")
    private List<AddressDto> addressJsonDtos;
}
```

Each **addressDto** in the list might look something like this:

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

After **marshalling** this results in:

```html
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<addresses>
    <address country=“UK">
        <city>London</city>
    </address>
    <address country="Spain">
        <city>Barcelona</city>
    </address>
</addresses>

```
[/slide]

[slide]
# Import a Single Object from XML

You can also import objects from XML to Java by **unmarshalling** them with JAXB. To facilitate this process, you need to have a class that repsresents this object.

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
InputStream inputStream = getClass().getResourceAsStream("/files/input/xml/address.xml");
BufferedReader bfr = new BufferedReader(new InputStreamReader(inputStream));
Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
AddressDto addressDto = (AddressDto) unmarshaller.unmarshal(bfr);
```

We are creating an input stream from the xml file using ``getClass().getResourceAsStream("/files/input/xml/address.xml")``:
```java
InputStream inputStream = getClass().getResourceAsStream("/files/input/xml/address.xml");
```

Then a Buffered Reader is initialized with the inputStream:

```java
BufferedReader bfr = new BufferedReader(new InputStreamReader(inputStream));
```

An unmarshaller is created with ``jaxbContext.createUnmarshaller();``

Finally, the **addressDto** object is initialized from the XML file. You need to cast it to the appropriate type because the compiler is not aware of the type in the XML file and will not allow the program to compile without that.

```java
AddressDto addressDto = (AddressDto) unmarshaller.unmarshal(bfr);
```

If the format in the XML file matches the class you have previously created, a new object will be created and its properties will be set accordingly.

[image assetsSrc="xml-processing-04.png" /]


[/slide]

[slide]
# Import Multiple Objects to XML

Similarly to how we exported a list of objects, you can also import from XML to Java.

**XMLParser.java**
```java
JAXBContext jaxbContext = JAXBContext.newInstance(AddressesDto.class);
InputStream inputStream = getClass().getResourceAsStream("/files/input/xml/addresses.xml");
BufferedReader bfr = new BufferedReader(new InputStreamReader(inputStream));
Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
AddressesDto addressesDto = (AddressesDto) unmarshaller.unmarshal(bfr);
```

Once again, you need to have a class that represents the object you want to import.

```java

```

**AddressedDto.java**
```java
@XmlRootElement(name = "addresses")
@XmlAccessorType(XmlAccessType.FIELD)
public class AddressesDto {

    @XmlElement(name = "address")
    private List<AddressDto> addressDtos;
}

```

Each address is  represented as:

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
    <address country=“UK">
        <city>London</city>
    </address>
    <address country="Spain">
        <city>Barcelona</city>
    </address>
</addresses>
```
[/slide]
