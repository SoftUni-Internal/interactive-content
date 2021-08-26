# Repository Inheritance

[slide hideTitle]

# Definition

[video src="https://videos.softuni.org/hls/Java/Java-ORM-and-Spring-Data/06.JPQL-&-Auto-Mapping-Objects​/06-JPQL-&-AMO​​-16-18-repository-inheritance-and-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Here you will learn what repository inheritance is and when it is applicable.

Let us start by reminding ourselves what typical **inheritance** is.

When we want to create a new class that **extends** the functionality of another class, we can inherit its properties and methods.

This reduces duplicate code and increases **modularity**.

## Inheritance in Repositories

In repositories, we can use inheritance with the same intentions.

When our applications become larger and more complex, we have similar entities, extending an abstract class.

The **base attributes and actions** they contain are mostly the same, with some variations.

## Example

We can set up a base repository, which further we can inherit:

```java
// Not a repository
@NoRepositoryBean 
public interface IngredientRepository<T extends Ingredient> extends JpaRepository<T, Long>{
    // ...
}

// A repository that extends the IngeredientRepository, 
// allowing us to use the inherited entity of the original.
@Repository 
public interface ChemicalIngredientRepository 
        extends IngredientRepository <BasicChemicalIngredient> {
    List<ChemicalIngredient> findByChemicalFormula(String chemicalFormula);
}
```

This way, we reduce the number of queries while bringing code duplication to a bare minimum:

```java
// Setting an interface with a method
// that adds a record to our Shampoo table
public interface CustomShampooRepository { 
    void create(BasicShampoo basicShampoo); 
}

// A class implementing our repository
@Repository
public class CustomShampooDaoImpl implements CustomShampooRepository { 

    // Injecting our Entity Manager         
    @PersistenceContext
    private EntityManager entityManager;                                        

    // Creating and persisting our record with a single transaction
    @Transactional
    public void create(BasicShampoo basicShampoo){                              
        entityManager.persist(basicShampoo);
    }
}
```

[/slide]