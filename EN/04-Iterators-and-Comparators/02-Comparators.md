# Comparators

[slide]

# Comparator

The Comparator interface allows us to provide a **custom comparison logic for types that we have no control over**.

It is simply an **external class** that exposes a `compare()` method that **accepts two objects**. 

Inside of the method body we only have the implementation of the comparison logic.  

That approach allows us to implement **multiple sorting sequences**. 

Keeping in mind that the Comparator is an external class means that it **won’t affect the original class**.

In the following example we compare **two Student objects** by student age.

Our AgeComparator class implements **Comparator** of type **Student**.

The `compare()` method takes two Student `(Student st1, Student st2)` objects as arguments.

The implementation is simple, we **return a positive number if the first student is bigger**, 

**negative in the other case**, and **0 when they are the same**.

By using the Comparator, **we could create as many comparators as we need** and used them according to our situation.

```java
public class AgeComparator implements Comparator<Student> {

    @Override
    public int compare(Student st1, Student st2) {
        return st1.age - st2.age;
    }
}
```


[/slide]

[slide]

# Comparable

Comparable allows us to specify how objects that we are implementing **compare to objects of the same type**. 

Once implementing this interface we will inherit the `compareTo()` method.

This time the **comparison logic** will be **inside of the object** we are trying to compare.

Therefore, we **affect the original class** and taking this approach will restrict us to using a single sorting sequence. 

Let’s see the following example: 

```java 
class Student implements Comparable<Student> { 

  private String name;
  private int age; 

  public int compareTo(Student st) { 

      if (this.age == st.age) {
           return 0; 
      } else if (this.age > st.age) {
           return 1; 
      } else {
           return -1; 
      }
   }
}
```
The example above is with class **Student** that implements **Comparable of Students**.

The only two fields we will need for the example are **name** and **age**.

Let’s say that, we want the Student objects to be **compared by age only**.

Therefore, we will have **three cases**.

The **first one** would be when **the age is equal**.

Then we would **return 0** which would mean that **the objects are the same**.

In case the **age of the current student is bigger** than the age of the one which we get as an argument, we will **return 1**.

By doing this we indicate that in by our sorting logic, **the current student is bigger**.

That leaves us with the last case, where we **return -1** because **the current student is less than the one from the arguments**.

I don't know if you have noticed, but while implementing the Comparable interface we placed a **Student generic parameter**.

That allows us to later implement the compare to method by **accepting a Student as an argument**. 

**Avoiding the generics** will force us to implement the method, **by accepting an Object**. 

**That would make the implementation a bit uglier** because we **won't be able** to directly access the members of the **Student class**.


[/slide]





