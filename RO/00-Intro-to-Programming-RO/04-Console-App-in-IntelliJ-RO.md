[slide hideTitle]
# Aplicații pentru Consolă în IntelliJ IDEA

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/00-intro-programming/RO/Java-basics-introduction-to-programming-26-27-28-Console-app-in-IntelliJ-IDEA-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Deja am instalat IntelliJ IDEA și putem începe să îl utilizăm.

Creați o nouă aplicație de consolă în IntelliJ IDEA: `[New Project]` \-\> `[Java]` \-\> `[Template Command Line App]` \-\> `[Finish]`

Vom selecta **un nume sugestiv** pentru programul nostru, de exemplu `HelloJava`:

[image assetsSrc="intro-to-programming-name-hellojava.png" /]

IntelliJ IDEA va crea pentru noi un **program Java gol**, în care putem să plasăm logica codului nostru.

## Configurarea JDK în IntelliJ IDEA
Dacă încă nu aveți un JDK configurat, ar trebui să faceți acest lucru:

[image assetsSrc="intro-to-programming-4.png" /]

Dați clic pe `[edit]` și localizați fișierul de instalare pentru JDK:

[image assetsSrc="intro-to-programming-5.png" /]
[/slide]

[slide hideTitle]
# Scrierea Codului de Program

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/00-intro-programming/RO/Java-basics-introduction-to-programming-29-writing-programming-code-in-intelliJ-IDEA-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Comenzile programului sunt scrise în `main(String[] args)`, între acolade `{ }`.

Aceasta este metoda main, care se execută la pornirea unui program Java. 

Apăsați `[Enter]` după **acolada de deschidere** `{` și **începeți să scrieți**.

Codul programului se scrie **spre interior**, acest lucru contribuind la vizualizarea și întelegerea codului. 

[image assetsSrc="intro-to-programming-inwards-example.png" /]

Scrieți următoarea comandă:
```java
System.out.println("Hello Java");
```

Iată cum ar trebui să arate programul nostru în IntelliJ IDEA:

[image assetsSrc="intro-to-programming-code-in-intellij.png" /]

Comanda `System.out.println("Hello Java")` în limbajul Java înseamnă tipărirea (`System.out.println(…)`) mesajului text `Hello Java`, pe care trebuie să îl încadrăm între ghilimele, pentru a clarifica faptul că acesta este un text.

La finalul fiecărei comenzi în limbajul Java se pune simbolul `;`, care spune că acea comandă se finalizează în acel loc (nu continuă pe linia următoare).

Această comandă este des întâlnită în programare: vom spune că un **obiect** dat trebuie să fie găsit (consola, cum este în cazul nostru), iar o oarecare **acțiune** trebuie să fie executată asupra lui (în cazul nostru, este vorba despre imprimarea unui text specific). 

Ca să furnizăm o explicație mai tehnică, `out` este un membru static al clasei `System`, fiind o instanță a lui PrintStream. **Println** este o metodă normală (supraîncărcată) a clasei PrintStream, căreia îi dăm ca parametru literalul de tip text `"Hello Java"`.
[/slide]

[slide hideTitle]
# Pornirea Programului

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/00-intro-programming/RO/Java-basics-introduction-to-programming-30-Starting-the-program-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Pentru a porni programul, apăsați `[Ctrl + Shift + F10]`. 

Dacă nu sunt erori, programul va fi rulat. 

Rezultatul va apărea pe consolă (fereastra terminală):

[image assetsSrc="intro-to-programming-console.png" /]

O altă modalitate de a vă iniția programul este prin clic dreapta și selectarea **Run 'Main'**

[image assetsSrc="run-intellij-right-click.png" /]

Ieșirea programului este următorul mesaj text:

```
Hello Java
```
[/slide]

