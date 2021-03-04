# Practici corespunzătoare pentru denumiri

[slide]
# Metode de denumire

[vimeo-video startTimeInSeconds="1996" endTimeInSeconds="2053"]
[stream language="EN" videoId="421775938" default /]
[stream language="RO" videoId="429688382" /]
[/video-vimeo]

Numele unei metode ar trebui să fie mereu un verb.

Ele reprezintă o acțiune și numele metodei ar trebui să spună clar ce acțiune face aceasta.

Numele metodei poate fii un singur cuvânt sau 2-3, astfel încât să descrie bine acțiunea.
## Exemple de nume potrivite

Numele metodelor ar trebui să răspundă la întrebarea:

`What does this method do?`

* Nume potrivite pentru metode: `findStudent`, `getReportByName`, `getId`.


## Exemple de nume nepotrivite

Dacă nu puteți găsi un nume bun, gândiți-vă dacă are o **intenție clară**.

* Nume nepotrivite pentru metode: `Method1`, `DoSomething`, `HandleStuff`, `SampleMethod`.


# Denumirea parametrilor metodelor

Numele parametrilor metodelor ar trebui să fie `[Noun]` or `[Adjective]` + `[Noun]`. De asemenea ar trebui să scriem metodele în camelCase,iar numele metodelor ar trebui să aibă înțeles:

* `firstName`, `report`, `speedKmH`, `usersList`, `fontSizeInPixels`, `font`.

# Metode- Practici corespunzătoare

Fiecare metodă ar trebui să facă o **singură**, și bine definită cerință.

Numele unei metode trebuie să **descrie cerința** într-un mod neambiguu.

**Evitați** metodedle **mai lungi decăt un ecran**, împărțiți-le în metode mai scurte.

* Aici sunt câteva exemple ușor de testat:

```Java
public static void printReceipt() {
    printHeader();
    printBody();
    printFooter();
}
```

# Structura și formatul codului

Aveți grijă să folosiți **indentare corectă**.

Lăsați o **linie goală** între **metode**, după **bucle** și dupa `if`.

Folosiți mereu **acolade** bucle `for`, afirmații `if`.
**Evitați linii lungi** și **expresii complexe**.

```Java
public static void main(args) {
    // some code…
    // some more code…
}
```
[/slide]