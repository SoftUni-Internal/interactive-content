[slide hideTitle]

# Responsabilitate unică

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/05-SOLID/RO/interactive-java-oop-advanced-s.o.l.i.d-6-8-single-responsibility-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

„O clasă ar trebui să aibă **unul** și doar **un singur**, motiv pentru schimbare”.

Acesta este primul principiu **SOLID** - **Responsabilitate unică**.

După cum se menționează, fiecare clasă ar trebui să îndeplinească **un singur scop**.

Acest lucru nu implică faptul că fiecare clasă ar trebui să aibă o singură metodă, dar toate ar trebui **să se raporteze direct** la **responsabilitatea clasei**.

Toate **metodele și proprietățile** ar trebui să funcționeze către **același obiectiv**.

Când o clasă îndeplinește **multiple scopuri sau responsabilități**, aceasta ar trebui împărțită în **clase separate**.

Să vedem următorul exemplu:

```java
public class HeroSettings {

  public static void changeName(Hero hero) {
    // logic...
  }

  public static void selectRole(Hero hero) {
    // logic...
  }

  public void printHeroName() {
    // logic...
  }

  public void printHeroRole() {
    // logic...
  }
}
```
Numele clasei spune de ce este responsabilă, în acest caz - setările eroului.

Prin urmare, în această clasă, nu ar trebui să căutăm ceva care să nu aibă legătură cu setările personajului.

Dar aceasta are două responsabilități: **manipularea** și **tipărirea**.

A avea o metodă care tipărește caracteristicile eroului din această clasă **încalcă principiul responsabilității unice**.

În acest scop, ar trebui să creăm o altă clasă, **care se va ocupa doar de tipărirea caracteristicilor**:

```java
public class PrintHeroFeatures {

  public void printHeroName() {
    // logic...
  }

  public void printHeroRole() {
    // logic...
  }
}
```

**Principiul responsabilității unice** nu înseamnă că ar trebui să avem doar o singură metodă pe clasă.

De asemenea, nu necesită crearea unei clase separate pentru fiecare funcționalitate mică.

Cheia este că codul din clasă trebuie să fie **direct legat de scopul principal** al clasei.

Este o practică bună să **scriem metode** care sunt **exacte**, **concise** și cât mai **simple**, deși în unele situații nu putem respecta acest principiu.

Datorită **principiului responsabilității unice**, putem detecta și elimina cu ușurință erorile din software.

Când toate metodele dintr-o clasă sunt destinate să îndeplinească un singur scop, spunem că această clasă are o **coeziune puternică**.

[/slide]
