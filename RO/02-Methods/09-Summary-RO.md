[slide hideTitle]
# Recapitulare


## În această lecție ai învățat:

- Metoda - **bloc de cod** care poate fi refolosit de mai multe ori

``` java
public static void printText(String text) {
  System.out.println(text);
}
```

- Metodele sunt formate din **declarație** și **cuprins**

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

- You can **overload** methods by declaring a new method with the same name but a different type or number of parameters

- The call stack - stores information about the active methods and the point where execution should return to after a method completes its task

## În următoarea lecție vei învăța:

- Ce sunt **Listele** în Java
- **Manipularea listelor**
- **Citirea listelor** din Consolă
- **Sortarea de liste și mulțimi**


[/slide]