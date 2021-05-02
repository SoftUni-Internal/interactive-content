# Ce Este o Metodă?

[slide hideTitle]
# Metode
[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/RO/interactive-java-fundamentals-methods-3-4-Simple-methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

O metodă este un bloc de cod care rulează doar când este apelată.

Puteți transmite date unei metode prin intermediul **parametrilor**.

* Definirea unei metode:

```Java
public static void printHello () {
  System.out.println("Hello World");
}
```

* Invocarea / apelarea unei metode:

```Java
printHello();
```
[/slide]

[slide hideTitle]
# De ce Folosim Metodele?

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/RO/interactive-java-fundamentals-methods-5-Why-Use-methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Metodele sunt folosite în Java din mai multe motive:

- **Reutilizare**: după ce am creat metoda, putem să o folosim de **mai multe ori**

- **Pentru a introduce parametri în cod**: de cele mai multe ori dorim să folosim parametri care modifică comportamentul metodei în funcție de valoarea acestora 

- **Crearea unor unități conceptuale**: putem crea metode pentru fiecare sarcină separată pe care programul nostru o va rezolva

- Metodele fac codul mai lizibil și mai ușor de depanat

   - de exemplu, o metodă numită `printHello()` este doarte sugestivă pentru scopul pe care îl servește

- **Simplificarea problemelor**: variabilele locale și instrucțiunile unei metode **nu pot fi văzute în exteriorul acesteia**

   - ele sunt **ascunse** de alte părți ale programului, atfel prevenind erori și confuzii

[/slide]

[slide hideTitle]
# Metode de Tip Void

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/RO/interactive-java-fundamentals-methods-6-Void-type-method-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Metodele de tip "**void**" pot accepta parametri, dar nu returnează niciun rezultat.

```java
public static void doSomething() {
  //executes code
}
```

Metoda **main()** în care scriem cod este de asemenea o metodă de tip void. 

```java
public static void main(String[] args) {
  System.out.println("Hello");
}
```
[/slide]
