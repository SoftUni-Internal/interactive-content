[slide hideTitle]
# Recapitulare

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/RO/interactive-java-fundamentals-methods-55-Summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## În această lecție ai învățat:

- Metoda - **bloc de cod** care poate fi refolosit de mai multe ori

``` java
public static void printText(String text) {
  System.out.println(text);
}
```

- Metodele sunt formate din **declarație** și **corp**

- Metodele sunt invocate prin `name` + `()`

``` java
public static void main(String[] args) {
  printHeader();
}
```

- Metodele pot accepta **parametrii**

``` java
static void printNumbers(int start, int end) { 
  for (int i = start; i <= end; i++) {
    System.out.printf("%d ", i);
  }
}
```
- Metodele pot **returna o valoare** sau nimic - `void`

- Puteți **supraîncărca** metodele prin declararea unei noi metode cu același nume, dar cu tipul diferit sau cu un număr diferit de parametri
- Stiva de apel - stochează informații despre metodele active și punctul în care execuția ar trebui să revină după ce o metodă își finalizează sarcina

## În următoarea lecție vei învăța:

- Ce sunt **Listele** în Java
- **Manipularea listelor**
- **Citirea listelor** de pe consolă
- **Sortarea de liste și matrice**


[/slide]