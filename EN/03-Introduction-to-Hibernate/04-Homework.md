# Homework

[slide]

# Setup

Download the resources from [mega.nz](https://mega.nz/file/2YpUBZyL#xIwqPxLv07H5ZXjFBDnNrSwWgKo2EsXEdoWNVX7YBQo)

Use the **provided skeleton** to create **soft_uni** database. 

- Change the **port, username** and **password** accordingly to your settings.

[image assetsSrc="Homework-Hibernate-Introduction.jpg" /]

- **Create** EntityManagerFactory and **run** your program.

``` java
EntitiManagerFactory factory = Persistence.createEntityManagerFactory("soft_uni");
EntityManager em = factory.createEntityManager();
```

- Fill the database into Workbench by **executing** the provided **.sql** script. 


[/slide]

[slide]

# Change Casing 

Use the **soft_uni** database. Persist **all towns** from the database. Detach those whose name length is **more than 5 symbols.** Then transform the **names** of all attached towns **to lowercase** and **save them to the database.**

[/slide]

[slide]

# Contains Employee

Use the **soft_uni** database. Write a program that checks if a given employee name **is contained in the database.**

## Example:

| **Input** | **Output** |
| --- | --- |
| Svetlin Nakov | Yes |
| John Doe | No |

[/slide]

