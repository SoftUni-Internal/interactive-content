[slide hideTitle]
# Rezumat

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/RO/interactive-java-fundamentals-methods-55-Summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## În această lecție ați învățat:

- Metodele sunt **blocuri de cod** care pot fi refolosite de mai multe ori

``` java
public static void printText(String text) {
  System.out.println(text);
}
```

- Metodele sunt formate din **declarație** și **corp**

- Metodele sunt invocate prin `nume3` + `()`

``` java
public static void main(String[] args) {
  printHeader();
}
```

- Metodele pot accepta **parametri**

``` java
static void printNumbers(int start, int end) { 
  for (int i = start; i <= end; i++) {
    System.out.printf("%d ", i);
  }
}
```
- Metodele pot **returna o valoare**, iar dacă nu returnează nicio valoare sunt de tip `void`

- Puteți **supraîncărca** metodele prin declararea unei noi metode cu același nume, dar cu un tip de date diferit sau cu un număr diferit de parametri

- Stiva de apeluri - stochează informații despre metodele active și punctul în care trebuie să revină execuția după ce o metodă își finalizează sarcina

## În următoarea lecție veți învăța:

- Ce sunt **listele** în Java
- **Manipularea listelor**
- **Citirea listelor** de pe consolă
- **Sortarea listelor și a matricelor**


[/slide]
