[slide hideTitle]
# Summary

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/03-Interface-and-Abstraction/EN/Java-OOP-Advanced-Interfaces-and-Abstraction-36-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson you learned:

- Inheritance and Interfaces

- How we achieve Abstraction

- What are Interfaces

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

- Differences between `implement` and `extends`

- `default` and `static` methods

- What is the concept behind abstract classes

``` java
class Device {

  // abstract method
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
    
    // create an object of Main
    Main obj = new Main();

    // access method of abstract class
    // using object of Main class
    obj.call();
  }
}
```

- Interfaces vs Abstract Classes overview

## In the next lesson you will learn:

- What is the concept behind `Polymorphism`

- How we achieve `Polymorphism`



[/slide]