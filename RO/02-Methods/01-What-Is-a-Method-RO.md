# Ce Este o Metodă?

[slide hideTitle]
# Metode
[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/RO/interactive-java-fundamentals-methods-3-4-Simple-methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

O metodă este un bloc de cod care rulează doar când este apelată.

Puteți trece date, adică parametrii, într-o metodă.

Exemplu de metodă **definiție**:

```Java
public static void printHello () {
  System.out.println("Hello World");
}
```

* Invocarea/apelarea unei metode 

```Java
printHello();
```
[/slide]

[slide hideTitle]
# De ce să Folosim Metodele?

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/RO/interactive-java-fundamentals-methods-5-Why-Use-methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Metodele sunt folosite în Java din mai multe motive:

- **Refolosirea**: putem scrie o metodă o dată și să o folosim de **mai multe ori**

Nu trebuie să rescriem codul de mai multe ori. 

Gândiți-vă așa, `scriem o dată, folosim de mai multe ori`.

- **Pentru a parametriza codul**: pe lângă refolosirea codului, care este la fel în toate cazurile

De multe ori veți vrea să folosiți `parametri` care schimbă modul de funcționare al metodei.

- **Crearea de unități conceptuale**:  creați metode pentru fiecare sarcină aparte pe care programul vostru o va rezolva

- Metodele fac codul să fie mai citeț și mai ușor de depanat

- De exemplu, metoda `printHello()` este atât de concisă, astfel încât vom știi că această metodă va afișa `Hello`

- **Simplificarea problemelor**: Deoarece variabilele locale și instrucțiunile unei metode **nu pot fi văzute din exteriorul acesteia**

Ele sunt **ascunse** de alte părți ale programului, atfel prevenind erori accidentale și confuzii.

[/slide]

[slide hideTitle]
# Metode de Tipul Void

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/RO/interactive-java-fundamentals-methods-6-Void-type-method-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Metodele cu tipul de returnare "**void**" execută codul în blocul lor de cod.

Aceștia pot accepta parametri, dar nu returnează niciun rezultat.

```java
public static void doSomething() {
  //executes code
}
```

Metoda **main()** în care scriem cod este de asemenea o metodă de tipul void. 

```java
public static void main(String[] args) {
  System.out.println("Hello");
}
```
[/slide]
