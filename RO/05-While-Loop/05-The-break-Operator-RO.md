[slide hideTitle]
# Operatorul break
Operatorul `break` oprește executarea unei bucle în momentul în care este apelată și continuă de la prima linie de după finalul buclei.

Asta înseamnă că iterația curentă a buclei nu va fi completată conform, iar restul codului din corpul buclei nu va fi executat. 

Dacă folosiți bucle imbricate, această declarație va opri executarea buclei din interior și va începe să execute următoarea linie de cod care urmează buclei. 

Acest exemplu oprește bucla atunci când intrarea este un număr par:
```java
Scanner scanner = new Scanner(System.in);
while (true) {
  int number = Integer.parseInt(scanner.nextLine());
  
  if (number % 2 != 0) {
    break;
  }
}
```
Când dorim să folosim intenționat buclele infinite, `break` va încheia bucla în momentul în care este începlinită o anumită condiție dată.
[/slide]