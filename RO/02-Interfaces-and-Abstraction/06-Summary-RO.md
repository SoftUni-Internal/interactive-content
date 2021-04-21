[slide hideTitle]
# Rezumat

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/03-Interface-and-Abstraction/RO/Java-OOP-Advanced-Interfaces-and-Abstraction-36-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## În această lecție ați învățat despre:

- Moștenire și interfețe

- Cum se utilizează abstractizarea

- Ce sunt interfețele

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
    Printable doc = new Document();  // Realizăm polimorfismul
    doc.print();  // Hello
  }
}
```

- Diferențele dintre `implement` și `extends`

- Metodele `default` și `static`

- Care este conceptul din spatele claselor abstracte

``` java
class Device {

  // Metoda abstractă
  abstract void call();
} // Clasa ar trebui să fie abstractă.

abstract class Device {

  // metoda clasei abstracte
  public void call() {
    System.out.println("Calling....");
  }
}

class Main extends Device {

  public static void main(String[] args) {
    
    // Creați un obiect al Main
    Main obj = new Main();

    // Metoda de acces a clasei abstracte
    // Utilizarea obiectului clasei Main
    obj.call();
  }
}
```

- Diferențele dintre interfețe și clase abstracte

## În lecția următoare veți învăța:

- Polimorfism
    * conceptul de polimorfism
    * modul de utilizare a polimorfismului



[/slide]
