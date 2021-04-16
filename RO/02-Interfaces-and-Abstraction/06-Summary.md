[slide hideTitle]
# Summary

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/03-Interface-and-Abstraction/EN/Java-OOP-Advanced-Interfaces-and-Abstraction-36-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson you learned:

- Inheritance and interfaces

- How to use abstraction

- What interfaces are

``` java
public interface Printable {
    void print();
}
```

``` java
class Document implements Printable {  
  public void print() { 
    System.out.println("Hello"); 
    }
  public static void main(String args[]) {
    Printable doc = new Document();  // We achieve Polymorphism
    doc.print();  // Hello
  }
}
```

- The differences between `implement` and `extends`

- `default` and `static` methods

- What the concept behind abstract classes is

``` java
class Device {

  // Abstract method
  abstract void call();
} // Class should be abstract.

abstract class Device {

  // method of abstract class
  public void call() {
    System.out.println("Calling....");
  }
}

class Main extends Device {

  public static void main(String[] args) {
    
    // Create an object of Main
    Main obj = new Main();

    // Access method of abstract class
    // Using object of Main class
    obj.call();
  }
}
```

- The differences between interfaces and abstract classes

## In the next lesson you will learn:

- Polymorphism
    * the concept of polymorphism
    * how to use polymorphism



[/slide]
