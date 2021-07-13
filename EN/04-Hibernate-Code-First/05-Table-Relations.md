[slide hideTitle]

# Table Relations

There are several types of database relationships:

- **One to One** relationships

That means the an object can have only one relation.

- **One to Many** and **Many to One** relationships

One to Many relation means that one row in a table is mapped to different rows in another table.

- **Many to Many** relationships

Many to Many relationship describes a mapping between two entities, where one entity can have relation with other entity instances.

- **Self referencing** relationships


[/slide]

[slide hideTitle]

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

[slide hideTitle]

# Many-To-One Relationship

In Many to Many relationship one entity contains values that points to another entity which has **unique** values.

## Many-To-One Unidirectional

For example every shampoo product has one manufacturer only and one manufacturer belongs to many shampoo products.

[image assetsSrc="Hibernate-Code-First(4).png" /]

``` java
@Entity
@Table(name = "shampoos")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public abstract class BasicShampoo implements Shampoo {

// Logic here

    @ManyToOne(optional = false) // Many-To-One relationship
    @JoinColumn(name = "batch_id", referencedColumnName = "id") // Column name in table shampoos, reference column name in table batches
    private ProductionBatch batch;
// Logic here
}
```

## One-To-Many Bidirectional 

[image assetsSrc="Hibernate-Code-First(5).png" /]

``` java
@Entity
@Table(name = "batches")
public class ProductionBatch implements Batch {
//…

    @OneToMany(mappedBy = "batch", targetEntity = BasicShampoo.class, // Field in entity BasicShampoo and Entity for the mapping
	       fetch = FetchType.LAZY, cascade = CascadeType.ALL) // Fetching Type and Cascade Type
    private Set<Shampoo> shampoos;

//…
}
```


[/slide]

[slide hideTitle]

# Many-To-Many Relationship

In Many-to-Many relationship entities between both side of the relationship can have multiple references to each other.

In our example we can have shampoo that has many ingredients and from the others side ingredients can be contained in multiple shampoos.

## Many-to-Many Unidirectional Syntax:

``` java
@Entity
@Table(name = "shampoos")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public abstract class BasicShampoo implements Shampoo {

// Custom Logic
    @ManyToMany // Relationship Type
    @JoinTable(name = "shampoos_ingredients", // Mapping Table 
    joinColumns = @JoinColumn(name = "shampoo_id", referencedColumnName = "id"), // Column in shampoos
    inverseJoinColumns = @JoinColumn(name = "ingredient_id", referencedColumnName = "id")) // Column in mapping table
    private Set<BasicIngredient> ingredients;
// Custom Logic
}
```

## Many-to-Many Bidirectional Syntax:

``` java
@Entity
@Table(name = "ingredients")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "type", discriminatorType = DiscriminatorType.STRING)
public abstract class BasicIngredient implements Ingredient {
// Custom Logic

    @ManyToMany(mappedBy = "ingredients", targetEntity = BasicShampoo.class) // Field in entity BasicShampoo and Entity for the mapping 
    private Set<BasicShampoo> shampoos;
// Custom Logic
}
```


[/slide]

[slide]

# Fetch Types

Fetching in hibernate is the process of obtaining data from the database and making it available to the application.

Choosing a fetching strategy is essencial for our application overall performance.

Fetching too much data like values or rows will add unnecessary overhead for both JDBC and ResultSet execution. 

Fetched entities are stored in the **Persistence Context** as cache.

Fetch type supports two types of loading:

- **EAGER** - Eager fetching takes more memory consumption since it fetches the **child** entities along with **parent**

We use Eager type when we do not have too much relations.

**Eager** is default fetching policy in `@ManyToOne` and `@OneToOne` mapping type.

**Syntax** of Eager loading:

``` java
@OneToOne(fetch = FetchType.EAGER)
```

- **LAZY** - Lazy loading retrieves all reachable entity objects **only when fetched entity's getter method is called**

``` java
University university = em.find((long) 1); // this.students = null

// The collection holding the students is populated when the getter is called
university.getStudents();
```

It improves performance by reducing memory requirements.

We can use lazy fetching with **all types** of hibernate mappings.

**Syntax** of Lazy loading:

``` java
@OneToOne(fetch = FetchType.LAZY)
```


[/slide]


[slide]

# Cascading

Our entity relationships depends on the existance between two entities. 

For example, the *Shampoo-Ingredients* relationship. Without the *Shampoo*, the *Ingredients* entity does not mean anything.

By deleting *Shampoo* entity, the *Ingredients* entity should also get deleted.

We achieve this using **Cascading**.

There are several **CascadeType** mappings:

- CascadeType.PERSIST:

The `save()` and `persist()` operations in the hibernate cascade to the related entities.

- CascadeTYPE.MERGE:

It means that related entities are merged into managed state when the owning entity is merged. When one entity is merged, the rest entities will also be merged.

- CascadeTYPE.REFRESH:

It cascades the refresh operation to all entities. If an entity is refreshed, the rest entities associated will also be refreshed.

- CascadeTYPE.REMOVE:

Simply it means that the related entities are deleted when the **owning** entity is deleted.

- CascadeTYPE.DETACH:

**DETACH** detaches all related entities if a "manual detach" occurs.

- CascadeTYPE.ALL: 

It's shorthand for all of the **above** cascade operations.

[/slide]