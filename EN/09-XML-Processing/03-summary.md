[slide]
# Summary

**In this lesson we learned:**
- **XML** is another format for transmitting data between web applications and servers. It is extensible and self-describing.

- XML documents consist of mark-up (tags) and content elements.

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

- **JAXB** and how to use it for reading XML files, parsing them to Java objects, or exporting java objects (or lists of objects) to XML. This is done by **marshalling** (exporting to XML) or **unmarshalling** parsing XML to Java objects.

**marshalling**:
``` java
JAXBContext context = JAXBContext.newInstance(User.class);
Marshaller marshaller = context.createMarshaller();
marshaller.marshal(user, new File("users.xml"));
```

**unmarshalling**:
``` java
JAXBContext jaxbContext = JAXBContext.newInstance(AddressDto.class);
InputStream inputStream = getClass().getResourceAsStream("XML_FILE_LOCATION");
BufferedReader bfr = new BufferedReader(new InputStreamReader(inputStream));
Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
AddressDto addressDto = (AddressDto) unmarshaller.unmarshal(bfr);
```

[/slide]
