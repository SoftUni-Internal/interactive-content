# Ce este o metodă?

[slide]
# Method

[vimeo-video startTimeInSeconds="199" endTimeInSeconds="1995"]
[stream language="EN" videoId="421775938" default /]
[stream language="RO" videoId="429688382" /]
[/video-vimeo]

O metodă este un bloc de cod care rulează doar când este apelată.

Puteți să pasați date, adică parametrii, într-o metodă.

Metodele sunt folosite pentru a face anumite acțiuni, adică **funcții**.

Exemplu de metodă **definiție**:

```Java
public static void printHello () {
  System.out.println("Hello World");
}
```

* Apelarea unei metode \(Invoking\)

```Java
printHello();
```

# De ce să folosim metodele?

Metodele sunt folosite în Java din mai multe motive:

- **Refolosirea**: putem scrie o metodă o dată și să o folosim de **mai multe ori**. 

Nutrebuie să rescriem codul de mai multe ori. Gândiți-vă așa, `write once, reuse multiple times`.

- **pentru a parametriza codul**: pe lângă refolosirea codului, care este la fel în toate cazurile,  
De multe ori veți vrea să folosiți `parameters` care schimbă modul de funcționare al metodei.

- **Crearea de unități conceptuale**:  creați metode care fac ceva într-o singură acțiune în **viziunea voastră asupra problemei**.

Asta va face munca cu programele voastre **mult mai ușoară**.

- Metodele fac codul să fie mai citeț și mai ușor de făcut debugging pe el. 

De exemplu, metoda `printHello()` este atât de concisă, astfel încât vom știi că această metodă va afișa `Hello`.

- **Simplificarea problemelor**: Deoarece variabilele locale și afirmațiile unei metode **nu pot fi văzute din exteriorul acesteia**. 

Ele \(șicomplexitatea lor\) sunt **ascunse** de alte părți ale programului, atfel prevenind erori accidentale și confuzii.

[/slide]