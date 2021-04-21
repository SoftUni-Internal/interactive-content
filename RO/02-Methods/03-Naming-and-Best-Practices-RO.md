# Practici Corespunzătoare Pentru Denumiri

[slide hideTitle]
# Metode de denumire
[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/RO/interactive-java-fundamentals-methods-11-12-13-Naming-methods-and-parameters-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Numele unei metode ar trebui să fie mereu un verb.

Metoda reprezintă o acțiune și numele metodei ar trebui să spună clar ce acțiune face aceasta.

Numele metodei poate fi un singur cuvânt sau 2-3, astfel încât să descrie bine acțiunea.

## Exemple de nume potrivite

Numele metodelor ar trebui să răspundă la întrebarea:

*What does this method do?*

* Nume potrivite pentru metode: **findStudent**, **getReportByName**, **getBrowserId**


## Exemple de nume nepotrivite

Dacă nu puteți găsi un nume bun, gândiți-vă dacă are o **intenție clară**.

* Nume nepotrivite pentru metode: **Method1**, **DoSomething**, **HandleStuff**, **SampleMethod**


## Denumirea parametrilor metodei

Numele parametrilor metodelor ar trebui să fie \[Noun\] or \[Adjective\] + \[Noun\]. 

De asemenea ar trebui să scriem metodele în **camelCase**:

- **firstName**, **report**, **speedKmH**, **getListOfUsers**, **calculateFontSizeInPixels**

[/slide]

[slide hideTitle]
# Cele Mai Bune Practici 

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/RO/interactive-java-fundamentals-methods-14-Methods-Best-Practices-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Fiecare metodă ar trebui să îndeplinească o **singură** și bine definită cerință.

Numele unei metode trebuie să **descrie cerința** într-un mod clar.

**Evitați** metodedle **mai lungi decăt un ecran**, împărțiți-le în metode mai scurte.

Aici sunt câteva exemple de nume auto-explicative:

```Java
public static void printReceipt() {
    printHeader();
    printBody();
    printFooter();
}
```
[/slide]

[slide hideTitle]
# Structura și Formatul Codului
[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/RO/interactive-java-fundamentals-methods-15-Code-Structure-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


Aveți grijă să folosiți **indentare corectă**.

Lăsați o **linie goală** între **metode**, după **bucle** și dupa instrucțiunile **if**.

**Evitați liniile lungi** și **expresiile complexe**.

```Java
public static void main(args) {
    // some code…
    // some more code…
}
```
[/slide]