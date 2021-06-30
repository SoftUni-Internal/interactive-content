[slide hideTitle]

# Repository Inheritance

## Inheritance

Now let's have a look at repository inheritance and when it might get handy.

Let's remind what's **inheritance**.

It's actually as simple as, when you want to create a new class that extends the functionallity of an another class, 

instead of duplicating the code we can inherit, 

bringing the benefits of having code just in one place and the golden programming rule "Lesser code, lesser bugs".

## Inheritance in repositories

In repositories, inheritance can be used with the same intentions.

When our applications get bigger, we have similar entities, extending an abstract class.

The base attributes and actions towards them are more or less the same, regardless of their differences.

We can set up a base repository, which furhter we can inherit, to achieve reduction in the queries and the code duplication.


**Example**: 

```java
@NoRepositoryBean       //Not a repository.
public interface IngredientRepository<T extends Ingredient> extends JpaRepository<T, Long>{
	//…
}

@Repository                                                     //A repository that extends the IngeredientRepository, letting us use inheritet entity of the original.
public interface ChemicalIngredientRepository extends IngredientRepository <BasicChemicalIngredient> {
   List<ChemicalIngredient> findByChemicalFormula(String chemicalFormula);
}
```

```java
public interface CustomShampooRepository {                      //Setting an interface

    void create(BasicShampoo basicShampoo);                     //with a method which adds an record to our Shampoo table.
}


@Repository
public class CustomShampooDaoImpl implements CustomShampooRepository {          //A class implementing our repository.
    @PersistenceContext
    private EntityManager entityManager;                                        //Injecting our Entity Manager.

    @Transactional
    public void create(BasicShampoo basicShampoo){                              //Creating and persisting our record with a single transaction.
        entityManager.persist(basicShampoo);
    }
}
```
[/slide]