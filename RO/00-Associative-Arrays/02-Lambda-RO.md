

[slide hideTitle]
# Expresiile Lambda

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/01.Java-Fundamentals-Associative-Arrays/RO/interactive-java-fundamentals-associative-arrays-16-18-lambda-functions-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

O expresie lambda este o **funcție anonimă** care conține **expresii și instrucțiuni**. 

Aceasta este asemănătoare metodei, dar **nu are nevoie de un nume** și poate fi implementată direct în corpul unei metode, lucru care economisește timp și îmbunătățește lizibilitatea codului.

O funcție lambda este un **bloc scurt de cod** care acceptă parametri și returnează o valoare.

Folosiți operatorul lambda `->`, care este citit ca "goes to".

Partea din **stânga** operatorului specifică parametrii de **intrare**.

Partea din **dreapta** conține corpul metodei funcției lambda - **expresie** sau **instrucțiune**.

În loc să creăm o funcție care acceptă un parametru întreg `int a` și care apoi returnează dacă `a` este mai mare decât 5 sau nu, еste posibil să scriem același lucru folosind o expresie lambda:

```java
(a -> a > 5)
```
Găsiți mai jos câteva exemple de **funcții lambda**:

- Funcția lambda `x -> x / 2` este echivalentul metodei care acceptă un parametru întreg și returnează rezultatul împărțirii lui `x` la 2

```java
static int function(int x) { 
    return x / 2; 
}
```

- Funcția lambda `x -> x != 0` este echivalentul metodei care acceptă un număr întreg ca parametru și returnează o valoare booleană:

```java
static boolean function(int x) { 
    return x != 0; 
}
```

- Funcția lambda `() -> 42` este echivalentul unei metode care returnează întotdeauna `42` :
```java
static int function() { 
    return 42; 
}
```
Dacă funcția lambda necesită mai mult de un parametru de intrare, aceștia trebuie mereu plasați între paranteze `()`.
Când nu avem niciun parametru, adăugăm doar paranteze goale `()`.

[/slide]
