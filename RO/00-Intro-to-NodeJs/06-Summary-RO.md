[slide hideTitle]
# Rezumat

## În cadrul acestei lecții ați învățat următoarele:

- Bucla eveniment
  * definește **ordinea de execuție** a tuturor funcțiilor apelate
  * caută în continuu, colectează și prelucrează evenimente 

- Modulele
  * Modulele sunt **centrale**, **locale** și **produse de părți terțe (third-party)** și care sunt caracteristicile lor
  
  * **instalarea** unui modul produs de un terț
    
  * **utilizarea modulelor** într-un program

```js
const qs = require("querystring");

const query = "?product=Sofa&quantity=3";

const queryObject = qs.parse(query);
```

- Serverele web

   * soluții software care operează cu **cereri web**

   * **crearea** unui server web

```js
const http = require("http");

http
    .createServer((req, res) => {
        res.write("This text will be sent to the client.");
        res.end();
    })
    .listen(3000);

console.log("Node.js server running on port 3000");
```

- Interfețele de cerere și răspuns

   * **învelirea** informației despre cereri și răspunsuri într-un **obiect unic**

## În lecția următoare veți învăța despre:

- Fluxuri și utilități

- **Fluxuri continue** de date

- Cum se lucrează cu **sistemul de fișiere**

- **Depanarea** unei aplicații Node.js

[/slide]
