[slide hideTitle]
# Aplicații pentru consolă în IntelliJ IDEA
Deja am instalat IntelliJ IDEA și putem începe să îl utilizăm.

Creați o nouă Console Application în IntelliJ IDEA: `[New Project]` -> `[Java]` -> `[Template Command Line App]` -> `[Finish]`

Vom seta **un nume cu sens** pentru programul nostru, de exemplu `HelloJava`:

[image assetsSrc="intro-to-programming-name-hellojava.png" /]

IntelliJ IDEA va crea pentru noi un **program Java gol**, pe care va trebui să -l scriem.

# Configurarea JDK în IntelliJ IDEA
Dacă încă nu aveți un JDK configurat, ar trebui să faceți acest lucru:

[image assetsSrc="intro-to-programming-4.png" /]

Dați clic pe [New] și localizați fișierul de instalare pentru JDK:

[image assetsSrc="intro-to-programming-5.png" /]
[/slide]

[slide hideTitle]
# Scrierea codului de program
Comenzile programului sunt scrise în `main(String[] args)`, între paranteze cretate `{ }`(deschideți paranteza, scrieți comanda, închideți paranteza).

Aceasta este principala metodă (acțiune) care se execută la începerea unui program Java. 

Apăsați `[Enter]` după **paranteza cretată de deschidere** `{` și **începeți să scrieți**.

Codul programului se scrie **în interior**, acest lucru fiind o parte din modelarea textului pentru conveniență în timpul depanării și/sau revizuirii.

[image assetsSrc="intro-to-programming-inwards-example.png" /]

Scrieți următoarea comandă:
```java
System.out.println("Hello Java");
```

Iată cum ar trebui să arate programul nostru în IntelliJ IDEA:

[image assetsSrc="intro-to-programming-code-in-intellij.png" /]

Comanda System.out.println („Bună ziua Java”) în limbajul Java înseamnă a executa tipărirea (System.out.println (...)) pe consolă și a imprima mesajul text Bună ziua Java, pe care ar trebui să îl înconjurăm de ghilimele , pentru a clarifica faptul că acesta este un text.

La finalul fiecărei comenzi în limbajul Java se pune simbolul `;` care spune că această comandă se finalizează în acel loc (nu mai continuă pe linia următoare).

Această comandă este larg întâlnită în programare: vom spune că un **obiect** dat ar trebui să se găsească (consola, cum este în cazul nostru), iar o oarecare **acțiune** ar trebui să se execute asupra lui (în cazul nostru, este vorba despre printarea a ceva ce este scris în interiorul parantezelor). 

Ca să furnizăm o explicație și mai tehnică, `out` este un membru static al clasei `System`, fiind o instanță a PrintStream. Iar println este o metodă normală (supraîncărcată) a clasei PrintStream căreia îi dăm ca parametru un text literal `"Hello Java"`.
[/slide]

[slide hideTitle]
# Începerea programului
Pentru a începe programul, apăsați `[Ctrl + Shift + F10]`. Dacă nu sunt erori, programul va fi rulat. 

Rezultatul va apărea pe consolă (fereastra terminală):

[image assetsSrc="intro-to-programming-console.png" /]

O altă modalitate de a vă iniția programul este prin clic pe butonul din dreapta al mouse-ului și selectarea **Run 'Main'**

[image assetsSrc="run-intellij-right-click.png" /]

De fapt, rezultatul din program este următorul mesaj text:
```
Hello Java
```
[/slide]

[slide hideTitle]

# Exemplu: Crearea unei aplicații pentru consolă în Intellij IDEA

[/slide]
