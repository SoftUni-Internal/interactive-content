[slide hideTitle]

# Domeniul Variabilei

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/02-conditional-statements/RO/interactive-programming-basics-with-java-conditional-statements-30-31-variable-scope-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Fiecare variabilă există într-un interval numit **domeniul variabilei**.

Acest interval specifică unde poate fi folosită variabila și care este **durata ei de viață**.

În limbajul Java, domeniul în care există o variabilă începe de la linia pe care am **definit-o** și se termină cu prima paranteză închisă `}` (a metodei, instrucțiunii **if**, etc.)

Astfel, este important să știm că **orice variabilă definită în interiorul unei anumite instrucțiuni** `if` **nu va fi disponibilă în afara acesteia**, cu excepția cazului în care am definit-o anterior într-un domeniu mai înalt al codului.
[/slide]

[slide hideTitle]

# Exemplu: Durata de Viață a Variabilei
[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/02-conditional-statements/RO/interactive-programming-basics-with-java-conditional-statements-30-31-variable-scope-demo-new-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

În exemplul de mai jos, pe ultima linie încercăm să imprimăm variabila `salary` care este definită în cadrul instrucțiunii `if` și vom obține o **eroare** pentru că nu avem acces la aceasta.

```java
int myMoney = 500;
int payDayDate = 10;
if (todayDate >= payDayDate) {
    int salary = 5000;
    myMoney = myMoney + salary;
}
System.out.println(myMoney); 
System.out.println(salary); //Error

```

Codul de mai sus **nu va fi compilat**, deoarece încercăm să accesăm o variabilă **în afara domeniului său**.
[/slide]
