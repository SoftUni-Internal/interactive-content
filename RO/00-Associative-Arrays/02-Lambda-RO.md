

[slide hideTitle]
# Expresiile Lambda

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/01.Java-Fundamentals-Associative-Arrays/RO/interactive-java-fundamentals-associative-arrays-16-18-lambda-functions-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

O expresie lambda este o **funcție anonimă** care conține **expresii și instrucțiuni**. 

Ea **înlocuiește o funcție întreagă** și **îmbunătățește** scrierea de cod. 

Funcția Lambda este o **expresie mai scurtă** care oferă un rezultat, dar nu este întotdeauna necesară.

Folosiți operatorul lambda `->`, care este citit ca "goes as"

Partea din **stângă**  a operatorului specifică parametrii de **intrare**.

Partea din **dreaptă** conține corpul metodei funcției lambda - **expresie** sau **instrucțiune**.

Funcțiile Lambda sunt **metode inline** (funcții) care primesc parametri de intrare și returnează valori:

In loc să scriem o funcție care acceptă, de exemplu, un parametru întreg `int a` și care apoi returnează dacă `a` este mai mare decât 5 sau nu., еste posibil să scriem același lucru, folosind expresia lambda:

```java
(a -> a > 5)
```
Găsiți mai jos câteva exemple pentru **funcțiile lambda**:

- Această funcție lambda `x -> x / 2` este echivalentul metodei care acceptă un parametru întreg ca un singur parametru și returnează un număr întreg împărțit cu 2:

```java
static int function(int x) { 
    return x / 2; 
}
```

- Această funcție lambda `x -> x != 0` este echivalentul metodei care acceptă un număr întreg ca un singur parametru și returnează un o valoare booleană:

```java
static boolean function(int x) { 
    return x != 0; 
}
```

- Această funcție lambda `() -> 42` este echivalentă cu metoda care returnează întotdeauna `42`:
```java
static int function() { 
    return 42; 
}
```
Dacă funcția lambda cere mai multe de o ieșire, ar trebui să le introducem în paranteze `()`.

Când nu avem niciun parametru, imprimăm doar paranteze goale `()`. Dacă avem mai mulți parametri, îi imprimăm între paranteze `()`, separați prin virgule.

[/slide]
