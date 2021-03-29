[slide hideTitle]

# Rezumat

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/03-Generics/RO/interactive-java-advanced-generics-27-Summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## În această lecție ați învățat:

- Genericele adaugă siguranță de tip
```java
List<String> strings = new ArrayList<String>();

strings.add("1");
strings.add("2");
strings.add(3); // Compile-time error
```
- Codul generic este mai reutilizabil
```java
List<Integer> integers = new ArrayList<>();
List<Person> people = new ArrayList<>();
```
- Clasele, interfețele și metodele pot fi generice
```java
interface List<T> {
    void add (T element);
    T get (int index);
    // ...
}
```
- Informațiile despre timpul de execuție asupra parametrilor de tip se pierd din cauza ștergerii


## În următoarea lecție, veți învăța:

- Argumente variabile (`Varargs`) în Java
- Iteratori
     - `Iterator`
     - `ListaIterator`
- Comparatoare
     - `Comparabil`


[/slide]
