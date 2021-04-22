# Teme Pentru Acasă

[slide hideTitle]

# Problemă: Database

**Aici este un link către** [resursele](https://videos.softuni.org/resources/java/java-oop-advanced/07.Java-OOP-Advanced-Unit-Testing-Exercise-Resources.zip) **pentru aceste sarcini.**

Veți primi o clasă simplă - **Database**. 

Aceasta **stochează numere întregi.** Sarcina voastră este să **testați clasa.** 

Creați **teste** pentru a vă asigura că metodele funcționează în mod corespunzător.

## Constrângeri

- **Capacitatea** matricei de stocare trebuie să fie de **exact 16 numere întregi.**

  * dacă dimensiunea matricei nu este de 16 numere întregi, aruncați **OperationNotSupportedException**

- Operația **Add**  - trebuie să **adauge un element în următoarea celulă liberă** (similar cu o stivă)

  * dacă elementul adăugat este nul, aruncați **OperationNotSupportedException**

- Operația **Remove** - permite eliminarea elementului **corespunzător ultimului indice** (ca o stivă)

  * dacă încercați să eliminați un element dintr-o matrice Database goală, aruncați **OperationNotSupportedException**

- **Constructorii** primesc doar numere întregi și le stochează într-o **matrice**

- **Metoda Fetch** trebuie să returneze elementele sub forma unei **matrice**


## Sfat

Nu uitați să **testați constructorii**, deoarece și aceștia sunt metode.



[/slide]

[slide hideTitle]

# Problemă: Extended Database

Deja aveți clasa Database. 

Sarcina voastră este să o **extindeți**.

Aceasta trebuie să conțină următoarele metode: adăugarea, eliminarea, și găsirea unor persoane. 

În alte cuvinte, trebuie să stocheze informații despre persoane. 

Trebuie să existe două tipuri de metode de căutare:
- `findById(long id)`
- `findByUsername(String username)`

Fiecare persoană trebuie să aibă propriul său **id** unic și un **nume de utilizator** unic. 

Sarcina voastră este să testați aceste funcții.

## Constrângeri

Baza de date trebuie să aibă următoarele metode:

- `add`

  * dacă sunt mai mulți utilizatori cu acest id, aruncați **OperationNotSupportedException**

  * dacă sunt prezente id-uri negative sau nule, aruncați **OperationNotSupportedException**

- `remove`

- `findByUsername`

  * dacă nu este prezent niciun utilizator cu acest nume, aruncați **OperationNotSupportedException**

  * dacă parametrul numelui de utilizator este nul, aruncați **OperationNotSupportedException**

  * toate argumentele sunt sensibile la tipul de litere folosit (majusculă/minusculă)

- `findById`

  * dacă nu este prezent niciun utilizator cu acest id, aruncați **OperationNotSupportedException**

## Sfat

Nu uitați să testați constructorii.



[/slide]

[slide hideTitle]

# Problemă: Iterator Test

Folosiți **resursele** pe care le-ați descărcat în cadrul primei voastre sarcini.

Vă este dată o clasă simplă numită `ListIterator`.

Trebuie să primească o colecție de șiruri prin care va itera, injectată prin constructorul său. 

Trebuie să stocați elementele în `List`. 

Dacă constructorului îi este transmis nul, aruncați **OperationNotSupportedException**. 

Clasa trebuie să aibă trei funcții principale:

- `Move` - trebuie să mute poziția unui indice intern la indicele următor din listă
    * metoda trebuie să returneze **true** dacă este executată cu succes și **false** dacă nu există un indice următor

- `HasNext` - trebuie să returneze true dacă nu există un indice următor și false dacă indicele este deja la ultimul element al listei

- `Print` - tipărește elementul corespunzător indicelui intern curent
    * apelarea `Print` pentru o colecție fără elemente trebuie să arunce excepția corespunzătoare, cu mesajul **"Invalid Operation!"** 

| **Comandă** | **Tipul Returnat** | **Descriere** |
| --- | --- | --- |
| Move | boolean | Această comandă trebuie să mute indicele intern la următorul indice. |
| Print | void | Această comandă trebuie să returneze elementul corespunzător indicelui intern curent. |
| HasNext | boolean | Verifică dacă colecția are un element următor. |

## Testare 

Creați teste pentru a vă asigură că toate metodele din clasa `ListIterator` funcționează în mod corespunzător.

## Constrângeri

- Va exista doar o singură comandă **Create**, și aceasta va fi mereu prima comandă transmisă

- Comanda finală va fi întotdeauna comanda **END**

# Exemple

## Exemplul 1
| **Intrare** | **Ieșire** |
| --- | --- |
| Create | Invalid Operation! |
| Print | 
| END | 

## Exemplul 2
| **Intrare** | **Ieșire** |
| --- | --- |
| Create Bob George | true |
| HasNext | Bob |
| Print | true |
| Move | George |
| Print |
| END |

## Exemplul 3
| **Intrare** | **Ieșire** |
| --- | --- |
| Create 1 2 3 | true |
| HasNext | true |
| Move | true |
| HasNext | true |
| HasNext | true |
| Move | false |
| HasNext |
| END |


[/slide]


[slide hideTitle]

# Problemă: Custom Linked List

Folosiți **resursele** pe care le-ați descărcat în cadrul primei sarcini.

Vi se oferă o structură de date care trebuie testată. 

Utilizați fișierul **CustomLinkedList.java** și:

- Creați o clasă de testare și metode de testare pentru **toți membri publici** care trebuie testați

- Creați teste pentru a vă asigura că toate metodele, toți getters și setters **funcționează corect**.

- Folosiți adnotația **@Test(expected = ExpectedException.class)** pentru metode de la care este anticipată aruncarea unei excepții în cazul în care datele de intrare au fost introduse greșit

    * aceste teste nu au nevoie de mesaje de aserțiune

- Folosiți **mesaje de aserțiune sugestive** pentru testele nereușite


[/slide]

[slide hideTitle]

# Problemă: Tire Pressure Monitoring System

Folosiți **resursele** din cadrul primei sarcini.

Vă este dat un proiect mic pentru un sistem care monitorizează presiunea din anvelopele unei mașini. 

Sarcina voastră este să scrieți teste unitare pentru sistem. 

Trebuie să folosiți tehnica de **mocking** pentru a transmite dependențele. 

Gândiți-vă la cazurile proiectului care apar doar în afara parametrilor normali de operare (corner cases). 

[/slide]
