[slide hideTitle]
# Ce Reprezintă Codarea

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/00-intro-programming/RO/Java-basics-introduction-to-programming-3-4-What-is-coding-and-demo-1-2-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Programarea** este procesul de **declarare a unor serii de comenzi ale calculatorului**, al căror scop este de a manipula și procesa numere sau text.

**Programele de calculator** reprezintă secvențe de asemenea comenzi. 

Textul unui program de calculator se numește **cod de program** (sau **cod sursă**, sau chiar și mai scurt – **cod**).

Exemple de comenzi pentru calculator:

```java live
System.out.println("I am coding");
```

[/slide]

[slide hideTitle]

# Exemplu: Comenzi Simple 

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/00-intro-programming/RO/Java-basics-introduction-to-programming-5-Commands-in-Java-and-demo-1-2-3-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]


[slide hideTitle]
# Programele de Calculator

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/00-intro-programming/RO/Java-basics-introduction-to-programming-7-computer-program-example-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Programele de calculator conțin **secvențe de comenzi** care sunt aplicabile în contextul unui anumit **limbaj de programare**. Câteva exemple populare de limbaje de programare sunt: C#, Java, JavaScript, Python, C++, PHP, C, Ruby, Swift, Go.

Aici aveți un program simplu care utilizează sintaxa Java. Acesta calculează aria unui pătrat și tipărește rezultatul:

```java live no-template
public class Main {
  public static void main(String[] args) {
    int size = 5;
    System.out.println("Size = " + size);
    System.out.println("Area = " + size * size);
  }
}
```

Programul menționat mai sus definește o **clasă** `Main`, care conține o **metodă** `main()`. Înăuntrul acesteia se află o secvență de **3 comenzi**:

- Prima comandă declară și inițializează o **variabilă**: `int size = 5;`
- A doua comandă **imprimă** o **expresie**: `System.out.println("Size = " + size);`
- A treia comandă calculează și **imprimă** o **expresie**: `System.out.println("Area = " + size * size);`

Rezultatul (datele de ieșire) programului menționat mai sus este următorul:
```
Size = 5
Area = 25
```

Definirea unei **clase** și a unei **metode** main() face parte din structura logică în Java care este necesară pentru funcționarea programului.

Limbajul Java necesită întreg codul de mai sus pentru a executa o secvență de comenzi.

Pentru a scrie comenzi, trebuie să cunoaștem **sintaxa și semantica limbajului** cu care lucrăm, în cazul nostru – **Java**. 

Drept urmare, ne vom familiariza cu sintaxa și semantica limbajului Java, și cu ale programării în general, învățând pas cu pas să scriem de la cele mai simple construcții de programare până la cele mai complexe.

[/slide]

[slide hideTitle]

# Exemplu: Program Complet de Calculator

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/00-intro-programming/RO/Java-basics-introduction-to-programming-8-complete-computer-program-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]

[slide hideTitle]
# Algoritmi

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/00-intro-programming/RO/Java-basics-introduction-to-programming-6-programming-and-algorithms-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Programele de computer execută, de obicei, algoritmi. 

**Algoritmii** sunt o **secvență de pași**, necesari pentru finalizarea unei anumite sarcini și pentru atingerea unui anumit rezultat așteptat, asemănător unei "rețete".

De exemplu, dacă facem ouă prăjite, vom folosi următoarea rețetă (un algoritm): 
- Se încălzește uleiul într-o tigaie
- Se sparg ouăle în tigaie
- Se așteaptă până se prăjesc
- Se îndepărtează de aragaz

În mod similar, în programare, **programele de calculator execută algoritmi**: secvențe de comenzi, necesare pentru finalizarea unei anumite sarcini. 

De exemplu, pentru a aranja o secvență de numere în ordine crescătoare, este nevoie de un algoritm. Cel mai simplu algoritm repetă aceeași acțiune: găsește cel mai mare număr și îl mută la sfârșitul secvenței, apoi găsește următorul cel mai mare număr și îl plasează înaintea celuilalt, funcționând până când algoritmul a procesat toate numerele din secvență.

Atunci când creăm programe apelăm la ajutorul unui IDE, care este o abreviere pentru **Integrated Development Environment**, un exemplu fiind **IntelliJ IDEA**.

Un IDE ne ajută să rulăm și să depanăm cod, evitând erorile de sintaxă. Mediile de dezvoltare integrate pot conține un număr mare de instrumente adiționale în funcție de scopul acestora.
[/slide]

[slide hideTitle]
# Exemplu: Programe Java Bazate pe Consolă 

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/00-intro-programming/RO/Java-basics-introduction-to-programming-9-console-based-java-program-example-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Să ne uităm puțin la un program simplu care citește ca date de intrare ale utilizatorului anumite sume de bani exprimate în dolari (USD) - un număr întreg, apoi îl convertește în Euro (EUR) înmulțind suma cu cursul de schimb valutar, și tipărește rezultatul obținut.

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
