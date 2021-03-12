[slide hideTitle]

# Domeniul de aplicare a variabilei
[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/02-conditional-statements/EN/interactive-programming-basics-with-java-conditional-statements-30-31-variable-scope-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Each variable has a range in which it exists, called **variable scope**. 

This range specifies where a variable can be used and how long is its **lifetime**. 
Fiecare variabilă există intr-un interval numit **domeniul de aplicare a variabilei**.

În limbajul Java, domeniul în care există o variabilă, începe de la linia în care am **definit-o** și se termină cu prima paranteză închisă `}` (a metodei, instrucțiunii **if** etc.)

Astfel, este important să știm că **orice variabilă definită în interiorul unei anumite instrucțiuni** `if` **nu va fi disponibilă în afara acesteia**, cu excepția cazului în care am definit-o anterior într-un domeniu mai înalt în codificare.
[/slide]

[slide hideTitle]

# Example: Variable Lifetime
[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/02-conditional-statements/EN/interactive-programming-basics-with-java-conditional-statements-30-31-variable-scope-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In the example below, on the last line we are trying to print the variable `salary` that is defined in the `if` statement, we will get an **error** because we don't have access to it.

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

În exemplul de mai sus, pe ultima linie încercăm să imprimăm variabila `salariu` care este definită în declarația `if`, vom primi o **eroare** deoarece nu avem acces la ea.

Codul de mai sus **nu se va compila**, deoarece încercăm să accesăm o variabilă **în afara domeniului său de aplicare**.
[/slide]