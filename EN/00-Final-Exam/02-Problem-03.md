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
# Your Task

Write a `VeterinaryClinic` class and implement the following functionality:

## Functionality

- `constructor (clinicName, capacity)` - should have these **3 properties:**
    * **clinicName** - a property of type string
    * **capacity** - a property of type number
    * **customers** - initially an empty array

Receives **2** parameters at initialization of the class - **clinicName and capacity.**

**Hint:** Add more properties like `totalProfit` and `currentWorkload` to help you complete the task. Read the problem description **until the end** to understand what is required.

- `newCustomer(ownerName, petName, kind, procedures)`:

The `ownerName`, `petName` and `kind` are of type **string** and the **procedures** are an **array** of strings. 

This information will be used in the following `toString()` method.

- `ownerName`:

A **string** that stores the name of the current pet owner. 

One owner **may have more than one pet** under their name. Design the customer's structure wisely so you can collect all the provided information.

- `petName`:

A **string** containing the name of the current pet.

- `kind`:

A **string** that stores the current kind of pet. 

Be **careful** of the capitalization of the input string. You will need to print it out in **lowercase** later on.

Once stored information about **ownerName**, **petName**, and **kind** stays in the clinic's data, even after the pet has been healed.

- `procedures`: 

An **array** of strings that stores the procedures that need to be performed on the current pet. 

**You know that a pet is currently a patient of the clinic when one or more procedures are recorded in their list of procedures.**

When the pet is healed and leaves the clinic, **its array of procedures must be emptied** so if the pet comes back again, it can be listed with new procedures.

**Before registering:**

- Check if the clinic can accept more pets. 

If the clinic is full **throw an error**:

"**Sorry, we are not able to accept more patients!**"

- Check if the pet is already registered under this owner's name. 

If it is registered and still has a full list of procedures, you should **throw an error:**

"**This pet is already registered under** \{**ownerName**\} **name!** \{**petName**\} **is on our lists, waiting for** \{**all their procedures, separated by ', '**\}."

- Otherwise, this function should add the customer and their pet, update the current clinic  **workload** and **return:**

"**Welcome** \{**petName**\}!"

- `onLeaving (ownerName, petName)`:

Check if the given `ownerName` corresponds to a customer in the **customers array**, if not, **throw an error:**

"**Sorry, there is no such customer!**"

Then check if the given `petName` is registered under this `ownerName`, if not or if it is **registered but the procedures array is empty**, then **throw an error:**

"**Sorry, there are no procedures for** \{**petName**\}!"

Otherwise, on leaving **generate** bill of the current customer, add it to the total profit of the clinic and save the data. 

Consider the cost of each procedure to be `500.00$`. 

Do not forget to **update** the current **workload**. 

Clear the **procedures array** for the current pet. 

When a pet leaves the clinic, `petName` and **kind** should be kept in the clinic's data, but the **procedures array** should be cleared.

After that return, the following string:

"**Goodbye** \{**petName**\}. **Stay safe!**"

- `toString()`:

**Return** the full clinic's status information.

First, we have to calculate how busy the clinic is, in **percentages**. 

The percentage represents all current pets that have procedures, based on the **full capacity** of the clinic.

It is rounded down to the nearest number:

"\{**clinicName**\} **is** \{**percentage**\}\% **busy today!**"

On the second line, return the collected **profit**, which must be **formatted** to the **second digit** after the decimal point: 

"**Total profit:** \{**profit**\}\$"

On the next lines, return the entire information about the owners in the following format. 

Print the **kind** property in **lowercase**. 

All owners should be returned in **alphabetical order**, along with all their pets also in **alphabetical order**:

"\{**ownerName**\} **with:**
\-\-\-\{**petName**\} \- **a** \{**kind**\} **that needs:** \{**procedures separated by ', '**\}"


## Examples
This is an example of how the code is **intended to be used.**

**Sample code usage:** 
```js
let clinic = new VeterinaryClinic('SoftCare', 10);

console.log(clinic.newCustomer('Jim Jones', 'Tom', 
            'Cat', ['A154B', '2C32B', '12CDB']));
            
console.log(clinic.newCustomer('Anna Morgan', 'Max', 
            'Dog', ['SK456', 'DFG45', 'KS456']));
            
console.log(clinic.newCustomer('Jim Jones', 'Tiny', 
            'Cat', ['A154B'])); 
            
console.log(clinic.onLeaving('Jim Jones', 'Tiny'));

console.log(clinic.toString());

clinic.newCustomer('Jim Jones', 'Sara', 'Dog',
                  ['A154B']); 

console.log(clinic.toString());
```

**Corresponding output:**

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
