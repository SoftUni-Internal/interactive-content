// sectionId: "Javascript::Programming-Basics::Conditional-Statements::Variable-Lifetime"

[slide hideTitle]
# Domeniul Variabilei

[video src="https://videos.softuni.org/hls/javascript-basics/RO/02-Conditions/02-conditional-statements-js-29-30-Variable-life-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Fiecare variabilă există intr-un interval numit **domeniul variabilei**.

Această gamă specifică unde poate fi utilizată o variabilă și cât de lungă este **durata sa de viață**.

În limbajul JavaScript, domeniul în care există o variabilă începe de la linia în care am **definit-o** și se termină cu prima paranteză închisă `}` (a metodei, a instrucțiunii **if**, etc.)

Astfel, este important să știm că **orice variabilă definită în interiorul unei anumite instrucțiuni** `if` **nu va fi disponibilă în afara acesteia**, cu excepția cazului în care am definit-o anterior într-un domeniu mai înalt al codului.

## Domeniul Variabilei - Exemplu 

În exemplul de mai jos, pe ultima linie încercăm să imprimăm variabila `salary` care este definită în instrucțiunea `if` și vom primi o **eroare** deoarece nu avem acces la ea.

```js
let myMoney = 500;
let payDayDate = 10;
if (todayDate >= payDayDate) {
    let salary = 5000;
    myMoney = myMoney + salary;
}
console.log(myMoney); 
console.log(salary); //Error
```

Codul de mai sus **nu se va compila**, deoarece încercăm să accesăm o variabilă **în afara domeniului său**.

[/slide]
