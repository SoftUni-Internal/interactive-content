[slide hideTitle]
# Bucla Do-While 
Următorul tip de bucle cu care ne vom familiariza sunt buclele `do-while`. 

Prin structură, acest tip de buclă amintește de buclele while, dar se diferențiază de acestea semnificativ. 

[image assetsSrc="05-while-loop-use-case-do-while.png" /]

Următorul exemplu ne arată folosirea buclei `do-while`:
```java live
int n = 0;
do {
    System.out.println(n);
    n++;
} while (n < 5);
```
Aici, bucla `do-while` va executa corpul său cel puțin o dată. De ce se întâmplă asta ? 

Rețineți că această expresie condițională apare la finalul buclei, așa că declarația din buclă e executată înainte de testarea condiției.

In construcția buclei do-while, **condiția** este întotdeauna verificată **în urma** corpului buclei. 

Acest mod de execuție ne asigură că **prima iterație a bucle va executa** codul și **verificarea finalului buclei** va fi aplicată fiecărei iterații subsecvente a buclei`do-while`.

In cazul in care condiția este adevărată, se sare înapoi la `do`, iar declația din buclă este executată din nou. 

Același proces se repetă până condiția dată devine falsă.
[/slide]

[slide hideTitle]
# Exemplu: Calculul Factorial
Pentru un număr natural n, calculează **n! = 1 * 2 * 3 * … * n**. 

De exemplu, dacă **n = 5**, rezultatul va fi **5! = 1 * 2 * 3 * 4 * 5 = 120**.

Iată cum putem calcula în mod specific **factorial**:
- Creăm variabila `n` căreia îi vom asigna o valoare integer luată de pe consolă 
- Creăm o altă variabilă- `fact` a cărei valoare inițială este 1. Vom folosi-o pentru calcularea și stocarea factorială
- Pentru o **condiție** de buclă, vom folosi `n > 1`, fiindcă de fiecare dată când efectuăm calculele în corpul buclei, vom  **decrementa** valoarea `n` cu 1
- In corpul buclei **body** :
    - Asignăm o valoare **new value** pentru `fact` care va fi rezultatul **înmulțirii** numărului curent valoarea `fact`  cu valoarea curentă a `n`.
    - Vom **decrementa** valoarea lui `n` cu -1.
- **În afara** corpului buclei, vom imprima valoarea finală factorială 

Acesta este un exemplu de cod care implementeză pașii descriși mai sus:
```java live
Scanner scanner = new Scanner(System.in);
int n = Integer.parseInt(scanner.nextLine());
int fact = 1;

do {
    fact = fact * n;
    n--;
} while(n > 1)

System.out.println(fact);
```
[/slide]