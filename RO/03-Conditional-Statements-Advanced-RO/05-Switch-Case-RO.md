// sectionId: "Javascript::Programming-Basics::Conditional-Statements-Advanced::Switch-Case"

[slide hideTitle]
# Instrucțiunea "switch-case"

[video src="https://videos.softuni.org/hls/javascript-basics/RO/03-Conditions-Advanced/02-conditional-statements-advanced-js-27-28-The-switch-case-statement-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Instrucțiunea de comutare a cazurilor funcționează ca o secvență de blocuri if-else.

Ori de câte ori munca programului nostru depinde de valoarea unei variabile, în loc să facem condiții consecutive cu blocuri `if-else`, putem **folosi** instrucțiunea condițională "**switch**".

Aceasta este utilizată pentru **alegerea între o listă de posibilități**.

Instrucțiunea compară o valoare dată cu constantele definite și, în funcție de rezultat, ia o măsură.

- Punem **variabila** pe care vrem să o **comparăm** în **parantezele după operatorul** "**switch**" și acesta se numește **"selector"**
- **Tipul trebuie să fie comparabil** (numere, șiruri etc.)
- **Consecutiv**, programul începe să compare fiecare valoare care se găsește după etichetele de caz
- În caz de potrivire, executarea codului din locul respectiv începe și continuă până când ajunge la operatorul `break`

`break` poate fi sărit pentru a executa un cod din altă construcție `case`, până când ajunge la un alt operator.

Când **nu sunt găsite** potriviri, se execută construcția `default`, **dacă** aceasta **există**.

```js
switch (selector) {
  case value1:
    statements;
    break;
  case value2:
    statements;
    break;
}
```
[/slide]

[slide hideTitle]
# Cazul Implicit
[video src="https://videos.softuni.org/hls/javascript-basics/RO/03-Conditions-Advanced/02-conditional-statements-advanced-js-29-switch-case-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Cazul implicit specifică secțiunea "**switch**" de executat **dacă expresia de potrivire nu se potrivește cu nicio altă etichetă de caz**.

Dacă un caz implicit nu este prezent și expresia de potrivire nu se potrivește cu nicio altă etichetă de caz, fluxul de program **cade** prin instrucțiunea de comutare.

Cazul implicit poate apărea în orice ordine în instrucțiunea switch, dar indiferent de ordinea acestuia în codul sursă este întotdeauna evaluat **ultimul**, după ce au fost evaluate toate etichetele de caz.

```js
switch (selector) {
  case value1:
    statements;
    break;
  case value2:
    statements;
    break;
  default:
    statements;
    break;
}
```

## Exemplu: Day of the Week
Să scriem un program care tipărește **ziua săptămânii** (în limba engleză) în funcție de **numărul dat** (1 ... 7) sau **"Error!"** dacă este dată o intrare nevalidă.
```js
let day = Number(input);
switch (day) {
    case 1:
      console.log('Monday');
      break;
    case 2:
      console.log('Tuesday');
      break;
    case 3:
      console.log('Wednesday');
      break;
    case 4:
      console.log('Thursday');
      break;
    case 5:
      console.log('Friday');
      break;
    case 6:
      console.log('Saturday');
      break;
    case 7:
      console.log('Sunday');
      break;
    default:
      console.log('Error!');
      break;
}
```
[/slide]

[slide hideTitle]
# Etichete Multiple
[video src="https://videos.softuni.org/hls/javascript-basics/RO/03-Conditions-Advanced/02-conditional-statements-advanced-js-30-31-Multiple-Labels-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

În **JS** avem posibilitatea de a utiliza `cazuri` **multiple** în construcția "**switch-case**", atunci când trebuie să execute **același cod**.

În acest fel, când **programul** nostru găsește o **potrivire**, acesta va executa **următorul** cod, deoarece **după** eticheta respectivă **nu există un cod** de executat și un operator `break`.
```js
switch (selector) {
    case value1:
    case value2:
    case value3:
        construction;
        break;
    case value4:
    case value5:
        construction;
        break;
    default:
        construction;
        break;
}
```
[/slide]

[slide hideTitle]
# Exemplu: Animal Type
[video src="https://videos.softuni.org/hls/javascript-basics/RO/03-Conditions-Advanced/02-conditional-statements-advanced-js-32-Multiple-Labels-Example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Scrieți un program care tipărește tipul animalului în funcție de numele acestuia:
- Dog \-\> **mammal**
- Crocodile, tortoise, snake \-\> **reptile**
- Others \-\> **unknown**

Putem rezolva sarcina cu condiții "**switch-case**" cu mai multe etichete în felul următor:
```js live
let animal = 'snake';
switch (animal) {
    case 'dog':
    case 'cat':
      console.log('mammal');
      break;
    case 'crocodile':
    case 'tortoise':
    case 'snake':
      console.log('reptile');
      break;
    default:
      console.log('unknown');
      break;
}
```
[/slide]
