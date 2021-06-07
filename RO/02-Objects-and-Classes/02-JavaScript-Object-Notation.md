# Notare obiect JavaScript (JSON)

[slide hideTitle]
# Ce este JSON?

JSON, prescurtare pentru **JavaScript Object Notation**, este un format **bazat pe text** pentru schimbul de date.

Este **independent de limbaj**, deși este cel mai des utilizat în contextul proiectelor bazate pe JavaScript, cum ar fi site-urile web și aplicațiile cu o singură pagină.

JSON este un mod de stocare a informațiilor într-o abordare **organizată** și ușor de **înțeles**.

```js
{
  "posts": [
    { "id": 1, "title": "JavaScript is Awesome", "author": "michaelp_95" },
    { "id": 2, "title": "How to Set Up Windows 10", "author": "jacob17" },
    { "id": 3, "title": "Why I Think Java is Great for Beginners", "author": "jane_garcia" },
  ]
}
```

Sintaxa JSON seamănă foarte mult cu cea a unui **obiect**  JavaScript - constă din perechi **cheie-valoare** și poate servi ca o **reprezentare** a tuturor tipurilor de date JavaScript, cu excepția funcțiilor.

Similar cu XML, poate fi folosit pentru a stoca date într-o ordine **ierarhică**.

[/slide]

[slide hideTitle]
# Reguli de sintaxă

Următorul fragment ilustrează un răspuns tipic **JSON** de la un server:

``` js
{
    "id": 98953,
    "name": "Glenna Miller",
    "username": "glennar57",
    "email": "glenna_r@gmail.com",
    "favoriteNums": [4, 82, 39, 174],
    "friendList": {
        "73827": "Logan Pearson",
        "27834": "Alexandra Walters",
        "93421": "Nathan Adams"
    }
}
```

Primul lucru pe care l-ați putea observa este că fiecare intrare de date este o pereche **cheie-valoare**.

Aceste perechi sunt închise între acolade `{}` - sintaxa utilizată pentru a **defini** un JSON.

Toate cheile, precum și valorile șirurilor, sunt în **ghilimele duble** - JSON **nu** acceptă ghilimele unice.

Valorile sunt **separate** de cheile lor folosind simbolul doua puncte - `:`.

În mod similar cu JavaScript, **matricele** sunt ținute între paranteze drepte și **obiectele** - între acolade.

[/slide]

[slide hideTitle]
# Transformarea șirurilor

JSON este adesea utilizat pentru **citirea datelor de pe un server** și utilizarea răspunsului pentru **randarea** unei interfețe din browserul clientului.

Pentru a face acest lucru, trebuie să **convertim** răspunsul **JSON** într-un **obiect** JavaScript folosind metoda `JSON.parse()`.

```js live
let car = '{"make":"Renault","model":"Clio","colour":"grey"}';  

let data = JSON.parse(car);  

console.log(data);
```

În acest exemplu, primim un șir JSON - `car`, pe care apoi îl **transformăm** cu un obiect `data`.

[/slide]

[slide hideTitle]
# Conversia în șir

Metoda `JSON.stringify()` convertește o valoare JavaScript într-o reprezentare șir JSON.

Poate accepta obiecte, precum și matrice.

```js live
let notebook = {
    pages: '120',
    size: 'A4',
    manufacturedBy: 'Rocketbook',
};

let cities = ['London', 'Bucharest', 'Paris']

let notebookData = JSON.stringify(notebook);
let cityData = JSON.stringify(cities);

console.log(notebookData);
console.log(cityData);
```

După cum reiese din rezultat, `stringify` returnează un șir **JSON** gata de transfer.

[/slide]

[slide hideTitle]
# Problemă rezolvată: From JSON to HTML Table

[code-task title="From JSON to HTML Table" taskId="java-path-js-advanced-objects-and-classes-from-json-to-html-table" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function JsonToHtmlTable(json){
    // Write your code here
}
```
[/code-editor]
[code-adapter]
```
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```
[/code-adapter]
[task-description]
# Descriere

Sarcina dvs. este să creați un tabel HTML care să conțină studenți și scorurile acestora. 

Veți primi un singur șir reprezentând o **matrice de obiecte**.

Titlurile tabelului trebuie să fie egale cu **cheile obiectului**, în timp ce **fiecare dintre valorile obiectului** ar trebui să fie o **intrare nouă** în tabel. 

Toate **valorile text** dintr-un obiect trebuie **evitate** pentru a evita introducerea unui cod periculos în HTML.
 
## Intrare
**Intrarea** vine ca un **argument cu un singur șir** (matricea de obiecte). 

## Ieșire 
**Ieșirea** ar trebui tipărită pe consolă - pentru fiecare **rând introdus** din intrare, tipăriți **obiectul care îl reprezintă**.

## Notă: 
**Cheile** obiectului vor fi întotdeauna **aceleași**. Verificați mai multe informații despre **Entitatea HTML** [here](https://developer.mozilla.org/en-US/docs/Glossary/Entity). 

## HTML 
Vi se **oferă** un **fișier HTML** pentru a vă testa tabelul în **browser**::

```js
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>FromJSONToHTMLTable</title>
  <style>
    table,
    th {
      border: groove;
      border-collapse: collapse;
    }

    td {
      border: 1px solid black;
    }

    td,
    th {
      padding: 5px;
    }
  </style>
</head>

<body>
  <div id="wrapper">
  </div>
  <script>
    function JsonToHtmlTable(studentData) {
      // Write your code here
    }
    window.onload = function () {
      let container = 
        document.getElementById('wrapper');
      container.innerHTML = 
        JsonToHtmlTable(['input goes here']);
    };
  </script>
</body>

</html>
```

## Transmiterea
Transmiteți **numai** funcția `JsonToHtmlTable`.


## Exemplu

### Intrare

JsonToHtmlTable('\[\{"Name":"Peter \<div\>\-a", "Age":20,"City":"London"\}, \{"Name":"George","Age":18,"City":"Liverpool"\}, \{"Name":"Tom","Age":18,"City":"Manchester"\}\]')

### Ieșire

```html
<table> 
   <tr><th>Name</th><th>Age</th><th>City</th></tr> 
   <tr><td>Peter &lt;div&gt;-a</td><td>20</td><td>London</td></tr> 
   <tr><td>George</td><td>18</td><td>Liverpool</td></tr> 
   <tr><td>Tom</td><td>18</td><td>Manchester</td></tr> 
</table> 
```

[/task-description]
[code-io /]
[tests]
[test open]
[input]
JsonToHtmlTable('\[\{"Name":"Peter \<div\>-a","Age":20,"City":"London"\},\{"Name":"George","Age":18,"City":"Liverpool"\},\{"Name":"Tom","Age":18,"City":"Manchester"\}\]')
[/input]
[output]
\<table\>
   \<tr\>\<th\>Name\</th\>\<th\>Age\</th\>\<th\>City\</th\>\</tr\>
   \<tr\>\<td\>Peter \&lt;div\&gt;-a\</td\>\<td\>20\</td\>\<td\>London\</td\>\</tr\>
   \<tr\>\<td\>George\</td\>\<td\>18\</td\>\<td\>Liverpool\</td\>\</tr\>
   \<tr\>\<td\>Tom\</td\>\<td\>18\</td\>\<td\>Manchester\</td\>\</tr\>
\</table\>
[/output]
[/test]
[test]
[input]
JsonToHtmlTable('\[\{"Name":"Tomatoes & Chips","Price":2.35\},\{"Name":"J&B Chocolate","Price":0.96\}\]')
[/input]
[output]
\<table\>
   \<tr\>\<th\>Name\</th\>\<th\>Price\</th\>\</tr\>
   \<tr\>\<td\>Tomatoes \&amp\; Chips\</td\>\<td\>2.35\</td\>\</tr\>
   \<tr\>\<td\>J\&amp\;B Chocolate\</td\>\<td\>0.96\</td\>\</tr\>
\</table\>
[/output]
[/test]
[test]
[input]
JsonToHtmlTable('\[\{"X":5,"Y":7\},\{"X":2,"Y":4\},\{"X":\-5,"Y":13\},\{"X":4.44,"Y":8\},\{"X":\-10,"Y":\-120.12\}\]')
[/input]
[output]
\<table\>
   \<tr\>\<th\>X\</th\>\<th\>Y\</th\>\</tr\>
   \<tr\>\<td\>5\</td\>\<td\>7\</td\>\</tr\>
   \<tr\>\<td\>2\</td\>\<td\>4\</td\>\</tr\>
   \<tr\>\<td\>-5\</td\>\<td\>13\</td\>\</tr\>
   \<tr\>\<td\>4.44\</td\>\<td\>8\</td\>\</tr\>
   \<tr\>\<td\>\-10\</td\>\<td\>\-120.12\</td\>\</tr\>
\</table\>
[/output]
[/test]
[test]
[input]
JsonToHtmlTable('\[\{"Name":"\<script\>alert(\\'Hacked\\');\</script\>","Age":20,"City":"\\'Vinkel Town\\' Pernik & Co."\}\]')
[/input]
[output]
\<table\>
   \<tr\>\<th\>Name\</th\>\<th\>Age\</th\>\<th\>City\</th\>\</tr\>
   \<tr\>\<td\>\&lt;script\&gt;alert(\&\#39;Hacked&\#39;);\&lt;/script\&gt;\</td\>\<td\>20\</td\>\<td\>\&\#39;Vinkel Town\&\#39; Pernik \&amp; Co.\</td\>\</tr\>
\</table\>
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
