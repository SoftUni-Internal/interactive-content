# Repository Inheritance

[slide hideTitle]

# Definition

Here you will learn what repository inheritance is and when it is applicable.

Let us start by reminding ourselves what typical **inheritance** is.

When we want to create a new class that extends the functionality of a different one, we can inherit its properties and methods.

That reduces duplicate code and increases modularity.

## Inheritance in Repositories

In repositories, we can use inheritance with the same intentions.

When our applications get bigger, we have similar entities, extending an abstract class.

The base attributes and actions towards them are more or less the same, regardless of their differences.

[/slide]

[slide hideTitle]

# Example

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
public interface ChemicalIngredientRepository extends IngredientRepository <BasicChemicalIngredient> {
    List<ChemicalIngredient> findByChemicalFormula(String chemicalFormula);
}
```

This way, we achieve a reduction in the number of queries, while also bringing code duplication to a bare minimum:

```java
// Setting an interface with a method
// that adds a record to our Shampoo table.
public interface CustomShampooRepository { 
    void create(BasicShampoo basicShampoo); 
}

// A class implementing our repository
@Repository
public class CustomShampooDaoImpl implements CustomShampooRepository { 

    //Injecting our Entity Manager         
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