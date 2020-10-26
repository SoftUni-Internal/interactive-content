
# Iterators

[slide]

# Iterable

## Collections Hierarchy

The Collection interface extends Iterable and hence all child classes of Collection also implement Iterable.

[image assetsSrc="iterators-example(1).png" /]

`Iterable<T>` is the root interface of the Java collection classes.

An Iterable represents a collection which can be traversed.

A class that implements the `Iterable<T>` can be used with the new for loop.

It does that by internally calling the `iterator()` method on the object.

## Iterable\<T\> Methods

- Iterable `iterator()` method

The Iterable `iterator()` method returns an iterator over elements of type T.

In the following example, we have a List which extends `Iterable<T>`.

The iterator() method of this List returns Iterator of type String.

So we can use all the Iterator methods to iterate over collection.

The hasNext() - methods returns true if the iterator has more elements, and false if not.

So, we pass the `iterator.hasNext()` into the while loop and by this way we begin to iterate over the collection.

We use the `iterator.next()` - method to get the next element from the collection.

```java live
List<String> names = new ArrayList<>();
list.add("Peter");
list.add("Maria");
list.add("Alex");

Iterator<String> iterator = names.iterator();

while(iterator.hasNext()) {
    String name = iterator.next();
    System.out.println( name );
}
```

- `forEach(Consumer<? super T> action)`

Another way to iterate the elements of a Java Iterable is via its forEach() method. 

The forEach() method takes a Java Lambda Expression as parameter. 

This lambda expression is called once for each element in the Iterable. 

In the following example, we have a List which extends `Iterable<T>`.

We use the `forEach()` method to iterate over the collection.

```java
List<String> names = new ArrayList<>();
list.add("Peter");
list.add("Maria");
list.add("Alex");

names.forEach( (name) -> {
    System.out.println( name );
});
```

- `spliterator()`

The iterable `spliterator()` method of this List returns Spliterator of type String.

If you observe the output of the following example, you will find `Spliterator.forEachRemaining()` method works in the same way as `ArrayList.foreach()` but it provides **better performance**.


```java live
List<String> list = new ArrayList<>();
list.add("Peter");
list.add("Maria");
list.add("Alex");

Spliterator<String> names = list.spliterator();

names.forEachRemaining((name) -> System.out.println(name)); 
```


[/slide]

[slide]

# Implement Custom Iterator

There is a way to implement a custom Iterator, let's supose, we want a custom list with names.

We want our NamesList to iterate only the names whose start with "A".

For that reason our NamesList class have to implement Iterable interface.

```java
public class NamesList implements Iterable<String> {

}
```
Let's create a field `String[] names` where we are going to save our names

```java
public class NamesList implements Iterable<String> {

    private String[] names;

    public NamesList(String... names) {
        this.names = names;
    }

    @Override
    public Iterator<String> iterator() {
        return new NamesIterator();
    }

    private class NamesIterator implements Iterator<String> {

        private int counter;

        NamesIterator() {
            this.counter = 0;
        }

        @Override
        public boolean hasNext() {
            while (this.counter < names.length) {

                String name = names[this.counter];

                if (name.startsWith("A")) {
                    return true;
                }
                counter++;
            }
            return false;
        }

        @Override
        public String next() {
            return names[this.counter++];
        }
    }
}
```



[/slide]

