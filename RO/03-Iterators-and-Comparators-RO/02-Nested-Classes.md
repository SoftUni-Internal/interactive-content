# Clasele Imbricate 
[slide hideTitle]

# Clasele Imbricate 

In Java, este posibil să **nest classes** (o clasă din interiorul altei clase).

Scopul claselor imbricate este să **group classes that belong together**, care fac codul mai ușor de menținut.

- Exemple de Clase Imbricate:

```java live no-template
class OuterClass {
    int x = 10;

    class InnerClass {
        int y = 5;
    }

    public static void main(String[] args) {
        OuterClass myOuter = new OuterClass();
        OuterClass.InnerClass myInner = myOuter.new InnerClass();
        System.out.println(myInner.y + myOuter.x);
    }
}
``` 

[/slide]
