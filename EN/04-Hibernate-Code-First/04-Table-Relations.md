[slide]

# Table Relations

There are several types of database relationships:

- **One to One** relationships.

That means the an object can have only one relation.

- **One to Many** and **Many to One** relationships.

One to Many relation means that one row in a table is mapped to different rows in another table.

- **Many to Many** relationships.

Many to Many relationship describes a mapping between two entities, where one entity can have relation with other entity instances.

- **Self referencing** relationships.


[/slide]

[slide]

# One-To-One Relationhip

One-To-One mapping represents a point reference between two Java objects.

## One-to-One Unidirectional 


Let’s look at the following entity diagram to see a one-to-one relationship:

For the purposes of this example, let's create two tables.

[image assetsSrc="Hibernate-Code-First(2).png" /]

We use `@OneToOne` annotation.

``` java
@Entity
@Table(name = "shampoos")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public abstract class BasicShampoo implements Shampoo {

// Logic..

    @OneToOne(optional = false) // Runtime Valuation
    @JoinColumn(name = "label_id", 
    referencedColumnName = "id") // Column name in table labels
    private BasicLabel label; // Column name in table shampoos

// Logic...
}
```

## One-to-One Bidirectional


Bidirectional relationship provides navigational access in both directions.

We can access the other side, without extra queries.

Applying cascading options to both directions is also possible.

[image assetsSrc="Hibernate-Code-First(3).png" /]


Let's take a look at the syntax:

``` java
@Entity
@Table(name = "labels")
public class BasicLabel implements Label {
// Logic..

    @OneToOne(mappedBy = "label", // Field in entity BasicShampoo
    targetEntity = BasicShampoo.class) // Entity for the mapping
    private BasicShampoo basicShampoo;

// Logic...
}
```








[/slide]