[slide hideTitle]
# Șabloane de proiectare 

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/08.JS-Applications-Design-Patterns-and-Best-Practices/RO/Design-Patterns-and-Best-Practices-3-4-what-is-pattern-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Șabloanele de proiectare** sunt ca planuri pentru  soluții la  probleme comune, recurente cu care se confruntă dezvoltatorii în contextul dezvoltării de software. 

Principalul beneficiu în a cunoaște și a utiliza șabloane de proiectare este că acestea au fost dezvoltate și testate de-a lungul timpului de multe persoane, cu scopul de a rezolva probleme similare din multiple limbaje de programare.

Aceste șabloane nu sunt neapărat unice limbajului de programare utilizat la momentul de față.

În schimb, acestea sunt principii de modelare care se pot aplica la nivel aproape universal.

**Șabloanele de proiectare** îmbunătățesc reutilizarea codului și facilitează citirea acestuia, eliminând nevoia de modificare în exces a codului. 

Sunt deja demonstrate și optimizate. Reprezintă soluții simple pentru anumite probleme date. 

Nu reprezintă soluții complete, ci mai degrabă metode de abordare încercate și testate cu scopul de a rezolva probleme și de a scrie implementări elegante.

## Ce este un Șablon?

Șabloanele reprezintă **soluții generale** pentru anumite probleme comune care pot apărea în proiectarea software.

Acestea economisesc timpul investit în arhitectura software, deoarece oferă orientare în ceea ce privește modelarea de aplicații, fără a fi nevoie de a căuta noi metode de abordare care nu sunt neapărat dovedite a fi de folos pe termen lung.

**Șabloanele de proiectare** permit programatorilor să beneficieze de experiența și cunoștințele anterior dezvoltate, prin aplicarea de **principii comune** utilizate în cadrul proiectării software.

Înțelegerea și utilizarea de **șabloane de proiectare** facilitează comunicarea dintre programatori, oferind un limbaj comun, cu termeni universal valabili și ușor de înțeles de către persoanele din domeniul proiectării software.

*Fiecare șablon descrie o problemă care apare din nou și din nou în mediul nostru. Apoi, acesta descrie miezul soluției acelei probleme, în așa fel încât puteți utiliza această soluție de un milion de ori, fără a proceda exact la fel de 2 ori.* - Christopher Alexander (1977), ”A Pattern Language: Towns, Buildings, Construction”.

[/slide]

[slide hideTitle]
# Categorii de Șabloane de Proiectare

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/08.JS-Applications-Design-Patterns-and-Best-Practices/RO/Design-Patterns-and-Best-Practices-5-categories-of-design-pattern-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Șabloanele de proiectare sunt grupate în **trei** categorii:

- **Creaționale**: se ocupă de mecanismele de creare ale obiectelor

- **Structurale**: se ocupă de relațiile dintre entități

- **Comportamentale**: descrie interacțiunea dintre obiecte care nu sunt similare, precum și împărțirea responsabilităților către acestea

[/slide]

[slide hideTitle]

# Șabloanele de Proiectare Creaționale 

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/08.JS-Applications-Design-Patterns-and-Best-Practices/RO/Design-Patterns-and-Best-Practices-6-creational-design-patterns-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Șabloanele de proiectare creaționale se concentrează pe mecanismele de creare a obiectelor, utilizate pentru a crește nivelul de flexibilitate și reutilizare al codului.

Cu alte cuvinte, acestea ajută în procesul de scriere de cod scalabil.

Să ne uităm puțin la unele dintre cele mai comune șabloane de proiectare din această categorie:

## Constructor

Șablonul de proiectare **constructor** se bazează pe clase și este unul dintre cele mai des utilizate.

Din moment ce **clasele** sunt un concept de bază al unui limbaj de programare, se utilizează des în contextul creării **obiectelor** de diferite tipuri.

```js live
class Book {
    constructor(title, author) {
        //setting the values of properties
        this.title = title;
        this.author = author;

        // declaring a method inside the class
        this.getInfo = function() {
            return `${this.title} is written by ${this.author}`;
        };
    }
}

// creating new instances of Hero
let harryPotter = new Book('Harry Potter', 'J. K. Rowling');

console.log(harryPotter.getInfo());
```

## Factory

Șablonul de proiectare **factory** este de asemenea des folosit în contextul programării.

Este un alt șablon bazat pe clase, care se ocupă de crearea de obiecte.

Principala diferență dintre șablonul factory și celelalte șabloane de tip creațional este că acesta **nu necesită** utilizarea constructorilor. 

[image assetsSrc="js-application-design-patterns-01.png" /]

## Prototype

Șablonul de proiectare **prototype** e folosit pentru a crea obiecte care servesc drept un model de start pentru alte obiecte.

Acesta se obține prin **moștenirea de tip prototip**, care e suportată în mod nativ în JavaScript.

Este esențial **să copiați obiecte existente** fără a avea codul dependent de clasele lor.

Obiectele sunt **clone** în acest caz, acestea nu sunt create utilizând **constructori**, ceea ce îmbunătățește **performanța**.

Se aplică de cele mai multe ori atunci când crearea de obiecte prin intermediul **constructorului** ar consuma timp.

[image assetsSrc="js-application-design-patterns-02.png" /]

## Singleton

Șablonul de proiectare **singleton** este utilizat atunci când dorim să avem o instanță **unică** a unui obiect.

Apoi oferim **acces** global tuturor clienților care trebuie să îl folosească dintr-un punct de final **unic**.

[image assetsSrc="js-application-design-patterns-03.png" /]

[/slide]

[slide hideTitle]
# Șabloanele de Proiectare Structurale

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/08.JS-Applications-Design-Patterns-and-Best-Practices/RO/Design-Patterns-and-Best-Practices-7-structural-design-patterns-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Șabloanele de proiectare structurale** se ocupă de compoziția de obiecte, pentru a forma structuri mai mari, realizând o extindere a funcționalităților existente.

Aceste șabloane se ocupă atât de modul în care **clasele moștenesc** una de la cealaltă, cât și de modul în care clasele sunt compuse din alte clase.

Implementând aceste șabloane, putem introduce noi **funcționalități**, fără a le schimba **pe cele existente**.

Unele din cele mai comune șabloane de proiectare de tip structural sunt:

## Decorator

Șablonul de proiectare **decorator** este utilizat atunci când trebuie să adăugăm funcționalități unei clase **existente**, fără a risca introducerea de **erori** în implementările existente ale acelei clase.

Imaginați-vă că aveți o **clasă monumentală** care e utilizată în cadrul aplicației și **schimbați** orice în interior. Această acțiune ar putea afecta întreaga aplicație.

[image assetsSrc="js-application-design-patterns-04.png" /]

## Facade

Șablonul de proiectare **facade** este folosit în aplicații cu nivele multiple, unde doar o **anumită logică** și funcționalitate trebuie să fie expusă unor **diferiți clienți**, protejându-i pe aceștia de orice logică complexă de care clienții nu trebuie să fie interesați.

Este folositor și atunci când au loc modificări și **îmbunătățește** aproape întotdeauna reutilizarea codului.

[image assetsSrc="js-application-design-patterns-05.png" /]

## Adapter

Șablonul de proiectare **adapter** permite utilizatorilor să conecteze componente de programare care nu funcționează împreună, în mod normal.

Putem realiza acest lucru translatând o interfață în altă interfață.

[image assetsSrc="js-application-design-patterns-06.png" /]

## Proxy

Șablonul de proiectare **proxy** este implementat atunci când un obiect se comportă ca un auxiliar sau ca un înlocuitor pentru un alt obiect.

Pentru a fi mai specifici, obeictul proxy **extinde** obiectul original.

Este un înlocuitor, cu posibilitatea de adăugare a unor verificări care ajută în controlul accesului la obiectul pentru care se comportă ca proxy.

[image assetsSrc="js-application-design-patterns-07.png" /]

[/slide]

[slide hideTitle]
# Șabloane de Proiectare Comportamentale

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/08.JS-Applications-Design-Patterns-and-Best-Practices/RO/Design-Patterns-and-Best-Practices-8-behavioral-design-patterns-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Șabloanele de proiectare comportamentale** se concentrează pe îmbunătățirea comunicării dintre obiecte separate.

Anumite șabloane din această categorie, utilizate des sunt: 

## Iterator

Șablonul de proiectare **iterator** oferă un mod de a accesa elementele unei colecții (obiecte agregate) fără a le expune reprezentarea de la baza acestora.

Este cunoscut și drept "**cursor**".

[image assetsSrc="js-application-design-patterns-08.png" /]

## Mediator

Șablonul de proiectare **mediator** este implementat având un **unic obiect responsabil** pentru **comunicarea** dintre diverse alte module ale aplicației.

În această manieră, evităm să avem prea multe relații directe între componente.

[image assetsSrc="js-application-design-patterns-09.png" /]

## Observer

În cadrul **șablonului de proiectare observer**, un obiect numit **subject** menține o listă de obiecte **dependente** și le atenționează atunci când apar schimbări de stare, de obicei prin apelarea uneia dintre metodele lor.

Șablonul de proiectare **observer** facilitează un model corespunzător de programare orientată pe obiect și promovează principiul cuplajului redus.

[image assetsSrc="js-application-design-patterns-10.png" /]

## Visitor

Șablonul de proiectare **visitor** este folositor atunci când lucrăm cu o **colecție de obiecte** și noi funcționalități trebuie asociate acestora fără a schimba în vreun fel obiectele în sine.

Noua logică este asignată unui obiect nou creat, numit **visitor**.

[image assetsSrc="js-application-design-patterns-11.png" /]

[/slide]

[slide hideTitle]
# Avantaje și Dezavantaje 

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/08.JS-Applications-Design-Patterns-and-Best-Practices/RO/Design-Patterns-and-Best-Practices-9-10-benefits-and-drawbacks-of-design-patterns-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## Avantajele utilizării șabloanelor de proiectare

- Șabloanele de proiectare **ajută la rezolvarea problemelor legate de dezvoltarea software**, bazându-se pe **tehnici dovedite**, beneficiind din experiențele altor programatori

- Numele șabloanelor de proiectare și **vocabularul stabilit** ajută la **comunicarea** dintre programatori

- Șabloanele de proiectare sunt metode robuste de rezolvare a problemelor care pot fi alterate pentru a se potrivi nevoilor acelui caz particular

- Acestea pot fi **alterate** ușor, dacă un anumit șablon nu funcționează pentru cazul vostru

- Acestea îmbunătățesc procesul de dezvoltare software și pot **reduce numărul de erori**

- Ele sunt **scalabile** și **reutilizabile**

- Acestea pot **accelera procesul de dezvoltare software** și pot reduce timpul investit în găsirea de soluții

## Dezavantajele utilizării șabloanelor de proiectare

- Șabloanele de proiectare introduc anumite **consecințe**, iar dacă acestea sunt aplicate **incorect** sau fără a ține cont de modul în care aplicația s-ar putea schimba pe viitor, ele pot **cauza probleme**

- Șabloanele nu oferă **cod concret pentru a-l putea utiliza în mod direct**
  * în schimb, ele ne oferă o posibilă **metodă de abordare** de luat în considerare atunci când modelăm aplicații

- Acestea par **simple**, dar au **complexități** și pot fi înțelese greșit sau utilizate în mod incorect

Acestea trebuie aplicate doar dacă **beneficiile** lor sunt mai numeroase decât costurile utilizării acestora.

[/slide]
