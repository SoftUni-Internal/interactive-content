# Problem 3: Veterinary Clinic
[slide hideTitle]
# Veterinary Clinic

[code-task title="Veterinary Clinic" taskId="js-advanced-exam-veterinary-clinic" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput]
[code-editor language=javascript]

```
class VeterinaryClinic {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Cerința voastră

Scrieți o clasă `VeterinaryClinic` și implementați următoarea funcționalitate:

## Funcționalitatea

- `constructor (clinicName, capacity)`

Primește **2** parametri la inițializarea clasei - **clinicName și capacity.**

Trebuie să aibă aceste **3 proprietăți:**

* **clinicName** - o proprietate de tip șir de caractere;
* **capacity** - o proprietate de tip număr;
* **customers** - inițial, o matrice goală;

Indiciu: Adăugați mai multe proprietăți precum `totalProfit` și `currentWorkload` pentru a vă ajuta să finalizați exercițiul. Citiți cerința problemei **până la final** pentru a înțelege ce se cere.

- `newCustomer(ownerName, petName, kind, procedures)`:

Variabilele `ownerName`, `petName` și ``kind`` sunt de tip **string**, iar **procedurile** sunt o **matrice** de șiruri de caractere. 

Această informație va fi folosită în următoarea metodă `toString()`.

- `ownerName`:

Un **șir de caractere** care stochează numele proprietarului curent al animalului de companie. 

Un proprietar **poate avea mai mult de un animal de companie** trecut pe numele lui. Modelați structura clientului cu mare atenție, astfel încât să puteți să colectați toate informațiile oferite.

- `petName`:

Un **șir de caractere** care conține numele animalului de companie curent.

- `kind`:

Un **șir de caractere** care stochează tipul animalului curent. 

**Fiți atenți** la majusculele șirului de date de intrare. Va trebui să le printați sub formă de **litere mici** mai târziu.

Odată ce s-au stocat informațiile cu privire la **ownerName**, **petName**, și **kind**, acestea rămân în baza de date a clinicii, chiar și după ce animalul a fost vindecat.

- `procedures`: 

O **matrice** de șiruri de caractere care stochează procedurile care trebuie să se realizeze pe animalul de companie curent. 

**Cunoașteți faptul că un animal de casă e un pacient curent al clinicii atunci când una sau mai multe proceduri sunt înregistrate în lista sa de proceduri.**

Când animalul e vindecat și părăsește clinica, **matricea de proceduri corespunzătoare acestuia trebuie să fie golită**, deci, în cazul în care animalul revine, noi proceduri pot fi adăugate în listă.

**Înainte de înregistrare:**

- Verificați dacă clinica poate accepta mai multe animale. 

Dacă clinica e plină, **generați o eroare**:

"**Sorry, we are not able to accept more patients!**"

- Verificați dacă animalul e deja înregistrat pe numele proprietarului său. 

Dacă e înregistrat și tot are o listă plină de proceduri, trebuie să **generați o eroare:**

"**This pet is already registered under** \{**ownerName**\} **name!** \{**petName**\} **is on our lists, waiting for** \{**all their procedures, separated by ', '**\}."

- Altfel, această funcție trebuie să adauge clinetul și animalul său, să actualizeze **munca** la momentul respectiv în cadrul clinicii și să **returneze:**

"**Welcome** \{**petName**\}!"

- `onLeaving (ownerName, petName)`:

Verificați dacă valoarea dată variabilei `ownerName` corespunde cu clientul din **matricea de clienți**, iar dacă nu, **generați o eroare:**

"**Sorry, there is no such customer!**"

Apoi verificați dacă valoarea dată variabilei `petName` e înregistrată sub numele corespunzător al proprietarului, `ownerName`, iar dacă nu e, sau dacă e **înregistrat, dar matricea de proceduri e goală**, atunci **generați o eroare:**

"**Sorry, there are no procedures for** \{**petName**\}!"

Altfel, la plecare, **generați** o factură pentru clientul curent, adăugați-o la profitul total al clinicii și salvați datele. 

Considerați costul fiecărei proceduri ca fiind `500.00$`. 

Nu uitați **să actualizați** nivelul curent de **muncă**. 

Goliți **matricea de proceduri** pentru animalul curent. 

Atunci când un animal părăsește clinica, `petName` și **kind** trebuie să rămână înregistrate în baza de date a clinicii, dar **matricea de proceduri** trebuie să fie golită de date.

După aceea, returnați următorul șir de caractere:

"**Goodbye** \{**petName**\}. **Stay safe!**"`

- `toString()`:

**Returnați** întreaga informație cu privire la statusul clinicii.

Mai întâi, trebuie să calculăm cât de ocupată e clinica, folosind **procente**. 

Procentele reprezintă numărul total de animale care au proceduri curente împărțit la **întreaga capacitate** a clinicii.

Procentul e rotunjit în jos la cel mai apropiat număr:

"\{**clinicName**\} **is** \{**percentage**\}\% **busy today!**"

Pe a doua linie, returnați **profitul** strâns, care trebuie să fie **formatat** la **a doua zecimală** de după virgulă: 

"**Total profit:** \{**profit**\}\$"

Pe următoarele linii, returnați toate informațiile cu privire la proprietari, după următorul format. 

Printați proprietatea **kind** cu **litere mici**. 

Toate numele proprietarilor trebuie să fie returnate în **ordine alfabetică**, alături de toate animalele lor, scrise tot în **ordine alfabetică**:

"\{**ownerName**\} **with:**
\-\-\-\{**petName**\} \- **a** \{**kind**\} **that needs:** \{**procedures separated by ', '**\}"


## Exemple
Acesta este un exemplu de mod în care **se intenționează a utiliza codul:**

**Mod de folosire al codului** 
```js
let clinic = new VeterinaryClinic('SoftCare', 10);
console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B'])); 
console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
console.log(clinic.toString());
clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']); 
console.log(clinic.toString());
```

**Datele de ieșire corespunzătoare**

```
Welcome Tom!
Welcome Max!
Welcome Tiny!
Goodbye Tiny. Stay safe!
SoftCare is 20% busy today!
Total profit: 500.00$
Anna Morgan with:
---Max - a dog that needs: SK456, DFG45, KS456
Jim Jones with:
---Tiny - a cat that needs: 
---Tom - a cat that needs: A154B, 2C32B, 12CDB
SoftCare is 30% busy today!
Total profit: 500.00$
Anna Morgan with:
---Max - a dog that needs: SK456, DFG45, KS456
Jim Jones with:
---Sara - a dog that needs: A154B
---Tiny - a cat that needs: 
---Tom - a cat that needs: A154B, 2C32B, 12CDB
```

[/task-description]
[code-io /]
[tests]
[test open]
[input]
//Zero test 1 - 3 new costomer, get all cats, one leaving
let VeterinaryClinic = result;
        let clinic = new VeterinaryClinic('SoftCare', 10);
        let output = clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']);
        let expectedOutput = \`Welcome Tom!\`;
        expect(expectedOutput).to.be.equal(output, 'Incorrect output');
        expect(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456'])).to.be.equal('Welcome Max!', 'Incorrect output')
        expect(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B'])).to.be.equal('Welcome Tiny!', 'Incorrect output');
        let allProcedures = \`All procedures by pet kind "CAT"
Jim Jones
- Tom with need of: A154B, 2C32B, 12CDB
- Tiny with need of: A154B` 
        expect(clinic.onLeaving('Jim Jones', 'Tiny')).to.be.equal('Goodbye Tiny. Stay safe!', 'Incorrect output'); 
       
 
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
//Zero test 2 - same + toString
let VeterinaryClinic = result;
        let clinic = new VeterinaryClinic('SoftCare', 10);
        clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']);          
        clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456'])
        clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B'])
        clinic.onLeaving('Jim Jones', 'Tiny');
        
        let string = `SoftCare is 20% busy today!
Total profit: 500.00$
Anna Morgan with:
---Max - a dog that needs: SK456, DFG45, KS456
Jim Jones with:
---Tiny - a cat that needs: 
---Tom - a cat that needs: A154B, 2C32B, 12CDB`;
        expect(clinic.toString()).to.be.equal(string, 'Incorrect output');

[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
//Zero test 3 - same + new dog, all procedures again and toString
let VeterinaryClinic = result;
        let clinic = new VeterinaryClinic('SoftCare', 10);
        clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']);          
        clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']);
        clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B']);
        clinic.onLeaving('Jim Jones', 'Tiny');
        clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']); 
          
        
        let string = `SoftCare is 30% busy today!
Total profit: 500.00$
Anna Morgan with:
---Max - a dog that needs: SK456, DFG45, KS456
Jim Jones with:
---Sara - a dog that needs: A154B
---Tiny - a cat that needs: 
---Tom - a cat that needs: A154B, 2C32B, 12CDB`;
        expect(clinic.toString()).to.be.equal(string, 'Incorrect output');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// Test 1 - instance properties check
let VeterinaryClinic = result;
        let clinic = new VeterinaryClinic('SoftCare', 10);
        
        expect(clinic.clinicName).to.be.equal('SoftCare', 'Incorrect clinicName');
        expect(clinic.capacity).to.be.equal(10, 'Incorrect clinicName'); 
        expect(clinic.customers.length).to.be.equal(0, 'Incorrect clinicName'); 
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// Test 10 - If pet is registered and with no procedures
let VeterinaryClinic = result;
        let clinic = new VeterinaryClinic('SoftCare', 10);
        clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']); 
        clinic.onLeaving('Jim Jones', 'Tom'); 

        expect(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B'])).to.eq(`Welcome Tom!`);
   
    
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// Test 2 - If capacity is exhausted throw an Error
let VeterinaryClinic = result;
        let clinic = new VeterinaryClinic('SoftCare', 1);
        clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']); 
        expect(function() {clinic.newCustomer('Jim', 'Tom', 'Cat', ['A154B'])} ).to.throw('Sorry, we are not able to accept more patients!');
   
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// Test 3 - If pet is registered and still waiting for his procedures you should throw an Error 
        let VeterinaryClinic = result;
        let clinic = new VeterinaryClinic('SoftCare', 10);
        clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']); 
        expect(function() {clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B'])} ).to.throw(\`This pet is already registered under Jim Jones name! Tom is on our lists, waiting for A154B, 2C32B, 12CDB.\`);
   
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// Test 4 - If pet is registered and still waiting for his procedures you should throw an Error", function () { 
        let VeterinaryClinic = result;
        let clinic = new VeterinaryClinic('SoftCare', 10);
        clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']); 
        expect(function() {clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B'])} ).to.throw(\`This pet is already registered under Jim Jones name! Tom is on our lists, waiting for A154B, 2C32B, 12CDB.\`);
   
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
//Test 5 - onLeaving - throw an Error Sorry, there is no such client!" 
        let VeterinaryClinic = result;
        let clinic = new VeterinaryClinic('SoftCare', 10);
        
        expect(function() {clinic.onLeaving('Jim Jones', 'Tom')} ).to.throw(`Sorry, there is no such client!`);   
    
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// Test 6 - onLeaving - throw an Error Sorry, there are no procedures for { petName }! 
        let VeterinaryClinic = result;
        let clinic = new VeterinaryClinic('SoftCare', 10);
        clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']); 
        clinic.onLeaving('Jim Jones', 'Tom');
        expect(function() {clinic.onLeaving('Jim Jones', 'TomX')} ).to.throw(\`Sorry, there are no procedures for TomX!\`);
        expect(function() {clinic.onLeaving('Jim Jones', 'Tom')} ).to.throw(\`Sorry, there are no procedures for Tom!\`);   
    
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
//Test 7 - onLeaving - clear the procedures  
        let VeterinaryClinic = result;
        let clinic = new VeterinaryClinic('SoftCare', 10);
        clinic.newCustomer('Jim Jones', 'A', 'Cat', ['A154B', '2C32B', '12CDB']);
        clinic.newCustomer('Jim Jones', 'B', 'Cat', ['A154B', '2C32B', '12CDB']); 

        clinic.onLeaving('Jim Jones', 'A');        
        expect(clinic.toString()).to.be.eq(`SoftCare is 10% busy today!
Total profit: 1500.00$
Jim Jones with:
---A - a cat that needs: 
---B - a cat that needs: A154B, 2C32B, 12CDB`);  
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// Test 8 - toString with more data 
        let VeterinaryClinic = result;
        let clinic = new VeterinaryClinic('SoftCare', 10);
        clinic.newCustomer('Jim Jones', 'A', 'Cat', ['A154B', '2C32B', '12CDB']);
        clinic.newCustomer('Jim Jones', 'B', 'Cat', ['A154B', '2C32B', '12CDB']);
        clinic.newCustomer('Jim Jones', 'C', 'Cat', ['A154B', '2C32B', '12CDB']);
        clinic.newCustomer('Max', 'A', 'Cat', ['A154B', '2C32B', '12CDB']);
        clinic.newCustomer('Ann', 'B', 'Cat', ['A154B', '2C32B', '12CDB']);
        clinic.newCustomer('Ann', 'Ba', 'Cat', ['A154B', '2C32B', '12CDB']);
        clinic.newCustomer('Jill', 'C', 'Cat', ['A154B', '2C32B', '12CDB']);  

        expect(clinic.toString()).to.be.eq(`SoftCare is 70% busy today!
Total profit: 0.00$
Ann with:
---B - a cat that needs: A154B, 2C32B, 12CDB
---Ba - a cat that needs: A154B, 2C32B, 12CDB
Jill with:
---C - a cat that needs: A154B, 2C32B, 12CDB
Jim Jones with:
---A - a cat that needs: A154B, 2C32B, 12CDB
---B - a cat that needs: A154B, 2C32B, 12CDB
---C - a cat that needs: A154B, 2C32B, 12CDB
Max with:
---A - a cat that needs: A154B, 2C32B, 12CDB`);  
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
//Test 9 - toString with more data 
        let VeterinaryClinic = result;
        let clinic = new VeterinaryClinic('SoftCare', 10);
        clinic.newCustomer('Jim Jones', 'A', 'Cat', ['A154B', '2C32B', '12CDB']);
        clinic.newCustomer('Jim Jones', 'B', 'Cat', ['A154B', '2C32B', '12CDB']);
        clinic.newCustomer('Jim Jones', 'C', 'Cat', ['A154B', '2C32B', '12CDB']);
        clinic.newCustomer('Max', 'A', 'Cat', ['A154B', '2C32B', '12CDB']);
        clinic.newCustomer('Ann', 'B', 'Cat', ['A154B', '2C32B', '12CDB']);
        clinic.newCustomer('Ann', 'Ba', 'Cat', ['A154B', '2C32B', '12CDB']);
        clinic.newCustomer('Jill', 'C', 'Cat', ['A154B', '2C32B', '12CDB']);  
        clinic.onLeaving('Jim Jones', 'B'); 
        

        expect(clinic.toString()).to.be.eq(`SoftCare is 60% busy today!
Total profit: 1500.00$
Ann with:
---B - a cat that needs: A154B, 2C32B, 12CDB
---Ba - a cat that needs: A154B, 2C32B, 12CDB
Jill with:
---C - a cat that needs: A154B, 2C32B, 12CDB
Jim Jones with:
---A - a cat that needs: A154B, 2C32B, 12CDB
---B - a cat that needs: 
---C - a cat that needs: A154B, 2C32B, 12CDB
Max with:
---A - a cat that needs: A154B, 2C32B, 12CDB`);
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
