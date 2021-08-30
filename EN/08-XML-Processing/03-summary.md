[slide hideTitle]

# Summary

[video src="" poster="" /]

## In this lesson, you learned:

- **XML** 
    - Another format for transmitting data between web applications and servers
    - Extensible and self-describing
    - XML documents consist of mark-up tags and content elements

```js
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

- **JAXB** is used for reading XML files, parsing them to Java objects, or exporting java objects (or lists of objects) to XML

- Adding JAXB to your project:

**pom.xml**
```js
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

- **Marshalling** (exporting to XML):

``` java
JAXBContext context = JAXBContext.newInstance(User.class);
Marshaller marshaller = context.createMarshaller();
marshaller.marshal(user, new File("users.xml"));
```

- **Unmarshalling** (parsing XML to Java objects):

``` java
JAXBContext jaxbContext = JAXBContext.newInstance(AddressDto.class);
InputStream inputStream = getClass().getResourceAsStream("XML_FILE_LOCATION");
BufferedReader bfr = new BufferedReader(new InputStreamReader(inputStream));
Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
AddressDto addressDto = (AddressDto) unmarshaller.unmarshal(bfr);
```



[/slide]
