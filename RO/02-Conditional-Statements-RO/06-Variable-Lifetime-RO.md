[slide hideTitle]

# Domeniul de aplicare variabil
Fiecare variabilă există intr-o gamă numită **domeniul de aplicare variabil**.

Această gamă specifică unde poate fi utilizată o variabilă și cât de lungă este **durata sa de viață**.

În limbajul JavaScript, domeniul în care există o variabilă, începe de la linia în care am **definit-o** și se termină cu prima paranteză închisă `}` (a metodei, declarație **if**)

Astfel, este important să știm că **orice variabilă definită în interiorul unei anumite declarații** `if` **nu va fi disponibilă în afara acesteia**, cu excepția cazului în care am definit-o anterior într-un domeniu mai înalt în codificare.
[/slide]

[slide hideTitle]

## Example: Variable Lifetime

În exemplul de mai jos, pe ultima linie încercăm să imprimăm variabila `salariu` care este definită în declarația `if`, vom primi o **eroare** deoarece nu avem acces la ea.
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

Codul de mai sus **nu se va compila**, deoarece încercăm să accesăm o variabilă **în afara domeniului său de aplicare**.
[/slide]