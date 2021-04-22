[slide hideTitle]
# Rezumat

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/04-Polymorphism/RO/interactive-java-oop-advanced-polymorphism-22-Summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## În această lecție ai învățat despre:

- Polimorfism - Definiție și tipuri

``` java
class Mammal {
  public void makeSound() {
    System.out.println("The animal makes a sound");
  }
}
```

``` java
class Cat extends Mammal {
  public void makeSound() {
    System.out.println("Meow Meow...");
  }
}
```

``` java
class Dog extends Mammal {
  public void makeSound() {
    System.out.println("Woof Woof!");
  }
}
```

``` java
class Main {
  public static void main(String[] args) {
    Mammal animal = new Mammal();  
    Mammal myCat = new Cat(); 
    Mammal myDog = new Dog(); 
    animal.makeSound();
    myDog.makeSound();
    myCat.makeSound();
  }
}
```

- Metode suprascrise

``` java
class Animal {
  public void eat() {
    System.out.println("Animals can eat");
  }
}

class Dog extends Animal {
   public void eat() {
      System.out.println("Dogs can eat meat");
   }
}

public class Main {
   public static void main(String args[]) {
      Animal animal = new Animal(); // We declare our Animal reference and object
      Animal dog = new Dog();
      animal.eat(); 
      dog.eat();
   }
}
```

- Metode de supraîncărcate

``` java
class Calculation {  
  void sum(int a,int b) {
  System.out.println(a+b);
  }  
  void sum(int a,int b,int c){
  System.out.println(a+b+c);
  }  

  public static void main(String args[]) {  
    Calculation calculator = new Calculation();  
    obj.sum(5,10,15);  // 30
    obj.sum(20,40);   // 60
  }  
}  
```

- Abstracție

- Clasele abstracte

```java
public abstract class Animal {} // Can not be instantiated
public class Cat extends Animal {}
Animal cat = new Animal(); // Compile time error
Animal cat = new Cat(); // Polymorphism
```

- Metode abstracte

```java
public abstract class Animal {
abstract void SayHello();
abstract void Eat();
} 

public class Cat extends Animal{
    public void SayHello(){
        System.out.println("Meow...");
    }
}

```

## În următoarea lecție vei învăța despre:

- Principiile S.O.L.I.D 

- Cum să structurați corect un proiect



[/slide]
