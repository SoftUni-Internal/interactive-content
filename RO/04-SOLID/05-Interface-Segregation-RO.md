[slide hideTitle]

# Segregarea Interfaței

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/RO/interactive-java-oop-advanced-s.o.l.i.d-20-21-isp-interface-segregation-principle-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

„**Un client nu ar trebui să fie obligat să implementeze o interfață care nu este utilizată**”.

Această regulă sugerează că ar trebui să **împărțim** interfețele **noastre în multe altele** mai mici **astfel încât să satisfacă mai bine** nevoile exacte ale clienților noștri.

Scopul **Principiului de segregare a interfeței** este de a minimiza consecințele secundare și repetiția.

Se realizează acest lucru prin **împărțirea software-ului în mai multe părți independente**.

Ne propunem să avem mai multe **interfețe mai mici** decât o singură interfață mare.

Cu cât este mai mare o bucată de cod - cu atât este mai dificil de livrat clienților.

Fiecare interfață separată ar trebui să izoleze comportamentul codului celorlalte interfețe care nu se pot lega direct.

[/slide]

[slide hideTitle]

# Interfețe Grase

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/RO/interactive-java-oop-advanced-s.o.l.i.d-22-fat-interfaces-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Exemplu:

```java
public interface Worker {
  void work();
  void sleep();
}
```

```java
public class Employee implements Worker {

  public void work() {}
  public void sleep() {}
}

```

```java
public class Robot implements Worker {

  public void work() {}

  public void sleep() { 
    throw new UnsupportedOperationException();
  }
}
```
Interfața `Worker` are două metode – `work()` și `sleep()`.​

Când o clasă `Employee` implementează acea interfață, nu vor exista complicații.

Asta deoarece metodele de interfață sunt potrivite pentru clasa `Employee`.

Să vedem ce se întâmplă atunci când clasa `Robot` implementează aceeași interfață.

Clasa `Robot` poate implementa metoda `work()`, dar cea `sleep()` nu este adecvată pentru această clasă.

Problema este că forțăm clasa `Robot` să implementeze o metodă pe care nu ar trebui să o necesite.

Să vedem câteva soluții peotențiale la acest lucru.

[/slide]

[slide hideTitle]

# Interfețe Grase - Consecințe

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/RO/interactive-java-oop-advanced-s.o.l.i.d-23-fat-interfaces-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**A avea interfețe grase poate provoca unele consecințe de care ar trebui să fim conștienți.**

Când vedem o interfață cu mai mult de 5-6 membri, ar trebui să vedem dacă nu este fir să fie împărțit în două interfețe sau mai multe.

- Clasele pot avea metode pe care nu le folosesc

- Ar putea exista o cuplare sporită între interfață și clase

- Datorită cuplării sporite, flexibilitatea codului ar putea fi redusă

- Este mai greu să mențineți un cod foarte cuplat

[/slide]

[slide hideTitle]

# Cum să Aplicăm Principiul Segregării Interfeței (ISP)

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/RO/interactive-java-oop-advanced-s.o.l.i.d-24-how-to-isp-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Soluția de separare a interfeței este simplă.

Păstrați-vă interfețele mici, dar cu o coeziune puternică.

Aplicarea **principiului responsabilității unice** alături de ISP vă va ajuta să vă asigurați că interfețele dvs. îndeplinesc un singur rol.

[/slide]

[slide hideTitle]

# Interfețe Coezive

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/RO/interactive-java-oop-advanced-s.o.l.i.d-25-cohesive-interfaces-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Soluția la această problemă este separarea metodei `sleep()` într-o altă interfață:

```java
public interface Worker {

  void work();

}
```

```java
public interface Sleeper {

  void sleep();

}
```
Ca rezultat, clasa **Robot** poate implementa doar interfața **Worker** fără a se baza pe o metodă pe care nu o va folosi.

```java
public class Robot implements Worker {

  void work() { 
    // Do some work… 

  }
}
```

[/slide]
