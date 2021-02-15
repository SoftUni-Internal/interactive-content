[slide hideTitle]
# Ce reprezintă codificarea
**A programa** înseamnă  **a transmite comenzi** computerului, de exemplu, *"să emită un sunet"*, *"să imprime ceva pe ecran"* sau *"să înmulțească două numere"*. 


Când comenzile se succed una după alta, ele se numesc **program de calculator**. 

Textul unui program de calculator se numește **cod de program** (sau **cod sursă**, sau chiar și mai scurt – **cod**).

Exemple de comenzi pentru calculator:
```java live
System.out.println("I am coding");
```

[/slide]

[slide hideTitle]

# Exemplu: Comenzi simple 


[/slide]


[slide hideTitle]
# Programele de calculator
Programele de calculator reprezintă **o secvență de comenzi** care sunt scrise în anumite **limbaje de programare**, precum C#, Java, JavaScript, Python, C++, PHP, C, Ruby, Swift, Go sau alt program cunoscut.

Exemple de **programe de calculator** în Java:
```java live no-template
public class Main {
  public static void main(String[] args) {
    int size = 5;
    System.out.println("Size = " + size);
    System.out.println("Area = " + size * size);
  }
}
```

Programul mai sus menționat definește o **clasă** `Main`, care are în ea o **metodă** `main()`, care deține o secvență de **3 comenzi**:
- Declară și alocă o **variabilă**: `int size = 5;`
- Calculează și **imprimă** o **expresie**: `System.out.println("Size = " + size);`
- Calculează și **imprimă** o **expresie**: `System.out.println("Area = " + size * size);`

Rezultatul (datele de ieșire) programului mai sus menționat este următorul:
```
Size = 5
Area = 25
```

Vom **explica detaliat cum se scrie programele în Java**, de ce avem nevoie să definim o **clasă** și de ce avem nevoie să definim o **metodă** `main()` ceva mai târziu. 

Acum, să presupunem că limbajul Java ne cere întreg codul de mai sus pentru a executa o secvență de comenzi.

Pentru a scrie comenzi, ar trebui să cunoaștem **sintaxa și semantica limbajului** cu care lucrăm, în cazul nostru – **Java**. 

Drept urmare, ne vom familiariza cu sintaxa și semantica limbajului Java, și cu ale programării în general, învățând pas cu pas să scriem de la cele mai simple construcții de programare până la cele mai complexe.
[/slide]

[slide hideTitle]

# Exemplu: Program de calculator complet

[/slide]

[slide hideTitle]
# Algoritmi
Programele de computer execută, de obicei, algoritmi. 

**Algoritmii** sunt o **secvență de pași**, necesari pentru finalizarea unei anumite sarcini și pentru atingerea unui anumit rezultat așteptat, asemănător unei ”rețete”.

De exemplu, dacă facem ouă prăjite, vom folosi următoarea rețetă (un algoritm): 
- Se încălzește uleiul într-o tigaie
- Se sparg ouăle în tigaie
- Se așteaptă până se prăjesc
- Se îndepărtează de aragaz

În mod similar, în programare, **programele de calculator execută algoritmi**: secvențe de comenzi, necesare pentru finalizarea unei anumite sarcini. 

De exemplu, pentru a aranja o secvență de numere în ordine crescătoare, este nevoie de un algoritm, de ex. să găsești cel mai mic număr și să îl tipărești, apoi să găsești următorul cel mai mic număr din restul numerelor rămase și să îl tipărești, și să repeți acest lucru până când nu mai rămâne nici un număr.

Pentru conveniență, atunci când creăm programe, când scriem coduri de programare, când executăm programe și în cazul oricăror alte operațiuni conexe programării, avem nevoie de **un mediu de dezvoltare**, cum este, de exemplu, IntelliJ IDEA.
[/slide]

[slide hideTitle]
# Programele Java bazate pe consolă – Exemplu
Să ne uităm puțin la un program simplu care citește ca date de intrare ale utilizatorului anumite sume de bani exprimate în dolari (USD) - un număr întreg, apoi îl convertește în Euro (EUR) făcând împărțirea sumei prin cursul de schimb Euro-dolar și tipărește rezultatul obținut.

Acesta este un program cu 3 comenzi consecutive:
```java
import java.util.Scanner;

public class Program {
  public static void main(String[] args) {
    
    Scanner scanner = new Scanner(System.in);
    int dollars = scanner.nextInt();
    double euro = dollars * 0.883795087;
    System.out.print("Euro: " + euro);
  }
}
```
[/slide]
