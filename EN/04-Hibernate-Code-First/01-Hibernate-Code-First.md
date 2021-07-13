[slide hideTitle]

# Hibernate Code First Entity Relations

Using relational databases we cannot apply the mechanism of inheritance. 

Instead, we have to use **JPA** (Java Persistence API) to map the key features of inheritance in our relational database model.

The **javax.persistence.Inheritance** annotation is implementing our inheritance strategies.

JPA supports three types of inheritance strategies.

The following mapping strategies are used to map the entity data to the underlying database:

- A single **table per class** hierarchy

- A table per **concrete entity class**

- **Join** strategy - mapping common fields in a single table

[/slide]

