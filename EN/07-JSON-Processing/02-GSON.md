[slide hideTitle]

# Summary

## In this lesson you learned:

- **JSON**
  - An **easy-to-read** format for data transferring
  - Based on **JavaScript** but **language-independent**

```java
{
  "country": "France",
  "capital city": "Paris",
  "population": "67 million",
  "isInTheEU": true
}
```

- **GSON**
  - A **Java library** used for converting objects to JSON and vice-versa
  - Serializing using `toJson()`:

    ```Java
    Customer customer = new customer("George", "Richardson", "george@email.com");
            
    Gson gson = new Gson();
    
    String json = gson.toJson(customer);
    ```
  - Deserializing using `fromJson()`:

    ```Java
    String json = "{'firstName':'George', 'lastName':'Richardson', 'email':'george@gmail.com'}"
            
    Gson gson = new Gson();

    Customer customerObject = gson.fromJson(json, Customer.class);
    ```

  - The default **GSON** behavior can be customized using the **GsonBuilder** class and its methods:

    ```java
    Gson gson = new GsonBuilder()
                    .excludeFieldsWithoutExposeAnnotation()
                    .setPrettyPrinting()
                    .create();
    ```

## In the next lesson you will learn:

**XML Processing**
  - Definition and usage of XML
  - JAXB - a library for serializing and deserializing objects to and from XML
[/slide]
