# Convenții de Denumire a Metodelor

[slide hideTitle]
# Denumirea Metodelor
[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/RO/interactive-java-fundamentals-methods-11-12-13-Naming-methods-and-parameters-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Numele unei metode trebuie să conțină întotdeauna un verb.

O metodă reprezintă o acțiune, iar numele metodei trebuie să indice clar ce acțiune efectuează aceasta.

Numele metodei poate fi un singur cuvânt sau 2-3 cuvinte, astfel încât să descrie corespunzător acțiunea.

## Exemple de nume potrivite

Numele metodelor trebuie să răspundă la întrebarea: *Ce face această metodă?*

Nume potrivite pentru metode: **findStudent**, **getReportByName**, **getBrowserId**


## Exemple de nume nepotrivite

Dacă nu puteți găsi un nume bun, gândiți-vă dacă metoda are o **intenție clară**.

Nume nepotrivite pentru metode: **Method1**, **DoSomething**, **HandleStuff**, **SampleMethod**

Este posibil ca metoda să execute prea multe acțiuni, ceea ce face ca alegerea unui nume să fie dificilă.

Acest lucru indică că ar trebui să împărțiți metoda în două sau mai multe metode.

## Denumirea parametrilor metodei

Numele parametrilor metodelor trebuie să respecte formatul: \[Substantiv\] sau \[Adjectiv\] + \[Substantiv\]. 

De asemenea trebuie să scriem metodele în **camelCase**:

- **firstName**, **report**, **speedKmH**, **getListOfUsers**, **calculateFontSizeInPixels**

[/slide]

[slide hideTitle]
# Cele mai Bune Practici 

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/RO/interactive-java-fundamentals-methods-14-Methods-Best-Practices-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Fiecare metodă trebuie să îndeplinească o sarcină bine definită și **unică**.

Numele unei metode trebuie să **descrie cerința** într-un mod clar.

**Evitați** metodele **mai lungi de un ecran** prin împărțirea acestora în câteva metode mai scurte.

Aici sunt câteva exemple de nume sugestive:

```Java
public static void printReceipt() {
    printHeader();
    printBody();
    printFooter();
}
```
[/slide]

[slide hideTitle]
# Formatarea și Structura Codului
[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/RO/interactive-java-fundamentals-methods-15-Code-Structure-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


Aveți grijă să folosiți **indentarea corectă**.

Lăsați un **rând liber** între **metode**, după **bucle** și după instrucțiunile **if**.

**Evitați rândurile lungi** și **expresiile complexe**.

```Java
public static void main(args) {
    // some code…
    // some more code…
}
```
[/slide]
