# Recapitulare


[slide]
# Recapitulare


# În această lecție ai învățat:

- Metoda - **bloc de cod** care poate fi refolosit de mai multe ori

``` java
public static void printText(String text) { // Print text method
  System.out.println(text);
}
```

- Metodele sunt formate din **declarație** și **cuprins**

``` java
public static void printHeader() {
  System.out.println("----------");
}
```
- Metodele sunt invocate prin `name` + `()`

``` java
public static void main(String[] args) {
  printHeader();
}
```

- Metodele pot accepta **parametrii**

``` java
static void printNumbers(int start, int end) { // Method with parameters
  for (int i = start; i <= end; i++) {
    System.out.printf("%d ", i);
  }
}
```
- Metodele pot **returna o valoare** sau nimic - `void`




# În următoarea lecție vei învăța:

- Ce sunt **Listele** în Java?
- **Manipularea listelor**
- **Citirea listelor** din Consolă
- **Sortarea de liste și mulțimi**


[/slide]