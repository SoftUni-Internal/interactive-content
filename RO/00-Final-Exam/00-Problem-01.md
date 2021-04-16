# Problemă 1: Pet Me!
[slide hideTitle]

# Pet Me

[code-task title="Pet Me" taskId="js-advanced-exam-pet-me" executionType="tests-execution" executionStrategy="javascript-js-dom-unit-tests" requiresInput]
[code-editor language=javascript]

```
function petMe(){
  // Scrieți codul dvs. aici
}
```
[/code-editor]
[task-description]
# Cerință

**Aici se află un link spre** [resources](https://videos.softuni.org/resources/javascript/javascript-advanced/03-JS-Advanced-Exam.zip) **pentru această cerință.**

Utilizați **scheletul de proiect dat** pentru a rezolva această problemă.

**Țineți minte: Trebuie să realizați această cerință fără a schimba nimic în fișierul HTML dat (index.html)**.

[image assetsSrc="exam-pic1.png" /]

## Cerința voastră

Scrieți codul care lipsește în JavaScript pentru a face ca aplicația **Răsfață-mă** să funcționeze după așteptări.

Fiecare animal nou înregistrat trebuie să aibă următoarele proprietăți: `Name`, `Age`, `Kind` și `Current Owner`.

Când se apasă butonul `[Add]`, un nou element din **listă** trebuie să se adauge la secțiunea cu **identificatorul** `adoption`. 

Nu adăugați nimic dacă **oricare dintre câmpurile cu date de intrare e gol** sau dacă vârsta introdusă nu e un număr.

Nu uitați să **ștergeți datele de intrare** după ce un nou animal de companie e adăugat sau în cazul unor date de intrare nevalide (vedeți mai sus).

## Animalele de companie existente

[image assetsSrc="exam-pic2.png" /]

Orice nou element care e adăugat ar trebui să aibă **următoarea structură**:

```js
<section id="adoption">
   <h2>Find a new friend from here:</h2>
   <ul>
      <li>
         <p>
            <strong>Tom</strong>
            " is a "
            <strong>0.3</strong>
            " year old "
            <strong>cat</strong>
         </p>
         <span>Owner: Jim King</span>
         <button>Contact with owner</button>
      </li>
      <li>...</li>
   </ul>
</section>
```

Trebuie să creați un element de tip **listă**, care conține un element de tip **paragraf** cu numele, vârsta și tipul de animal de companie (pisică, câine, papagal, și așa mai departe). 

Formatarea: "\{**name**\} **is a** \{**years**\} **year old** \{**kind**\}", unde  **name**, **years** și **kind** se află în interiorul elementelor de tip `<strong>` din paragraf. 

După elementul de tip listă, avem un element de tip **span** cu `Owner: { owner name }` și un buton `[Contact Owner]`.

Când butonul `[Contact Owner]` e apăsat, apar niște date de intrare, iar butonul se schimbă în `[ Yes! I will take it! ]`, în felul următor:

[image assetsSrc="exam-pic4.png" /]

Noile elemente trebuie să fie plasate în interiorul unui element de tip `div`, iar **structura se schimbă în felul următor:**

```js
<ul>
   <li>
      <p>
        <strong>Tom</strong>
        " is a "
        <strong>0.3</strong>
        " year old "
        <strong>cat</strong>
      </p>
      <span>Owner: Jim King</span>
      <div>
         <input placeholder="Enter your names">
         <button>Yes! I take it!</button>
      </div>
   </li>
   <li>...</li>
</ul>

```

## Mutarea animalelor de companie în secțiunea de casă nouă

Când se apasă butonul `[Yes! I will take it!]`, **dacă se introduce un nume**, ar trebui ca **elementul curent din listă se fie mutat** în **secțiunea de adopție.**

[image assetsSrc="exam-pic6.png" /]
[image assetsSrc="exam-pic7.png" /]

Aici am schimbat **numele proprietarului** în noul nume.

Avem de asemenea și un buton `[Checked]`:

```js
<section id="adopted">
   <h2>Buddies with a new home:</h2>
   <ul>
      <li>
         <p> 
            <strong>Tom</strong>
            " is a "
            <strong>0.3</strong>
            " year old "
            <strong>cat</strong>
         </p>
         <span>New Owner: Lara Smith</span>
         <button>Checked</button>
      </li>
   </ul>
</section>
```

Atunci când e apăsat, butonul `[Checked]` trebuie să **șteargă** elementul curent din listă.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
//Zero Test - Add New Pet
document.body.innerHTML = `\<h1\>Pet Me!\</h1\>
    \<p\>Want to adopt a pet or need to rehome a dog or cat?\</p\>
    \<p\>Here we can help!\</p\>
    \<form id="add"\>
        \<h2\>Add New Pet\</h2\>
        \<div id='container'\>
            \<input type="text" placeholder="Name" /\>
            \<input type="text" placeholder="Age" /\>
            \<input type="text" placeholder="Kind" /\>
            \<input type="text" placeholder="Current Owner" /\>
            \<button\>Add\</button\>
        \</div\>
    \</form\>
    \<section id="adoption"\>
        \<h2\>Find a new friend from here:\</h2\>
        \<ul\>\</ul\>
    \</section\>
    \<section id="adopted"\>
        \<h2\>Buddies with a new home:\</h2\>
        \<ul\>\</ul\> 
    \</section\>
    \<script\>document.onload = solve();\</script\>`;


result();

const form = document.getElementById('container');
        let \[name, age, kind, owner, addBtn\] = Array.from(form.children);

        name.value = 'Tom';
        age.value = '0.3';
        kind.value = 'cat';
        owner.value = 'Jim King';

        addBtn.click();
        let newLiItem = Array.from(document.querySelector("\#adoption \> ul").children)\[0\];
        let insideLiElements = Array.from(newLiItem.children); // \[p, span, btn\]
        let \[p, span, btn\] = insideLiElements; 
        let \[strongName, strongAge, strongKind\] = Array.from(p.children); // \[apn, span, span\]
        

// Add new Pet, check structure;
        expect(insideLiElements.length).to.be.equal(3,'New list item has invalid structure'); 

        expect(p.tagName).to.be.equal("P", 'Pet main information should be P');
        expect(span.tagName).to.be.equal("SPAN", 'Pet owner element should be SPAN');
        expect(btn.tagName).to.be.equal("BUTTON", 'Add element - button');
        expect(strongName.tagName).to.be.equal("STRONG", 'Pet name element should be STRONG');
        expect(strongAge.tagName).to.be.equal("STRONG", 'Pet age element should be STRONG'); 
        expect(strongKind.tagName).to.be.equal("STRONG", 'Pet kind element should be STRONG'); 

        expect(strongName.textContent).to.be.equal("Tom", 'Pet name should be Tom');
        expect(strongAge.textContent).to.be.equal("0.3", 'Pet age should be Main'); 
        expect(strongKind.textContent).to.be.equal("cat", 'Pet kind should be 12.00');  
        expect(p.textContent).to.be.equal("Tom is a 0.3 year old cat", 'P element must contains - Tom is a 0.3 year old cat'); 
        expect(btn.textContent).to.be.equal("Contact with owner", 'Button text content must be - Contact with owner');  
        expect(span.textContent).to.be.equal("Owner: Jim King", 'Span must contains - Owner: Jim King');
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
//Zero Test - click Connect with owner
document.body.innerHTML = `\<h1\>Pet Me!\</h1\>
    \<p\>Want to adopt a pet or need to rehome a dog or cat?\</p\>
    \<p\>Here we can help!\</p\>
    \<form id="add"\>
        \<h2\>Add New Pet\</h2\>
        \<div id='container'\>
            \<input type="text" placeholder="Name" /\>
            \<input type="text" placeholder="Age" /\>
            \<input type="text" placeholder="Kind" /\>
            \<input type="text" placeholder="Current Owner" /\>
            \<button\>Add\</button\>
        \</div\>
    \</form\>
    \<section id="adoption"\>
        \<h2\>Find a new friend from here:\</h2\>
        \<ul\>\</ul\>
    \</section\>
    \<section id="adopted"\>
        \<h2\>Buddies with a new home:\</h2\>
        \<ul\>\</ul\> 
    \</section\>
    \<script\>document.onload = solve();\</script\>`;


result();

        const form = document.getElementById('container');
        let \[name, age, kind, owner, addBtn\] = Array.from(form.children);

        name.value = 'Tom';
        age.value = '0.3';
        kind.value = 'cat';
        owner.value = 'Jim King';

        addBtn.click();
        let newLiItem = Array.from(document.querySelector("\#adoption \> ul").children)\[0\];
        let \[p, span, btn\] = Array.from(newLiItem.children); // \[p, span, btn\]
                
        btn.click();

        let \[pNew, spanNew, div\] = Array.from(Array.from(document.querySelector("\#adoption \> ul").children)\[0\].children); // \[p, span, x\]

        let \[ newInput, newBtn \] = Array.from(div.children);
        expect(div.tagName).to.be.equal("DIV", 'New DIV element shoud appear');
        expect(newInput.tagName).to.be.equal("INPUT", 'New DIV element shoud appear');
        expect(newBtn.tagName).to.be.equal("BUTTON", 'New DIV element shoud appear');

        expect(newInput.placeholder).to.be.equal("Enter your names", 'Check input placeholder - Enter your names');
        expect(newBtn.textContent).to.be.equal("Yes! I take it!", 'The new button name is Yes! I take it!');
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
//Adopt pet;
document.body.innerHTML = `\<h1\>Pet Me!\</h1\>
    \<p\>Want to adopt a pet or need to rehome a dog or cat?\</p\>
    \<p\>Here we can help!\</p\>
    \<form id="add"\>
        \<h2\>Add New Pet\</h2\>
        \<div id='container'\>
            \<input type="text" placeholder="Name" /\>
            \<input type="text" placeholder="Age" /\>
            \<input type="text" placeholder="Kind" /\>
            \<input type="text" placeholder="Current Owner" /\>
            \<button\>Add\</button\>
        \</div\>
    \</form\>
    \<section id="adoption"\>
        \<h2\>Find a new friend from here:\</h2\>
        \<ul\>\</ul\>
    \</section\>
    \<section id="adopted"\>
        \<h2\>Buddies with a new home:\</h2\>
        \<ul\>\</ul\> 
    \</section\>
    \<script\>document.onload = solve();\</script\>`

result();
    // fill inputs
    const form = document.getElementById('container');
        let \[name, age, kind, owner, addBtn\] = Array.from(form.children);

        name.value = 'Tom';
        age.value = '0.3';
        kind.value = 'cat';
        owner.value = 'Jim King';

    // click add
    addBtn.click();

    // fill contact btn
    let newLiItem = Array.from(document.querySelector("\#adoption \> ul").children)\[0\];
    let \[p, span, btn\] = Array.from(newLiItem.children); // \[p, span, btn\]               
    btn.click();

    // fill new input 
    document.querySelector("\#adoption \> ul \> li \> div \> input").value = 'Lara Smith'; 
    document.querySelector("\#adoption \> ul \> li \> div \> button").click(); 
    
    let countLi = document.querySelector("\#adopted \> ul").children.length;
      
    expect(countLi).to.be.equal(1,'One pet is adopted'); 
    expect(document.querySelector("\#adopted \> ul \> li \> p").textContent).to.be.equal("Tom is a 0.3 year old cat",'One pet is adopted - Tom is a 0.3 year old cat'); 
    expect(document.querySelector("\#adopted \> ul \> li \> span").textContent).to.be.equal("New Owner: Lara Smith",'One pet is adopted from Lara Smith'); 
    expect(document.querySelector("\#adopted \> ul \> li \> button").textContent).to.be.equal("Checked",'Button text is Checked');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
//Check pet;
document.body.innerHTML = `\<h1\>Pet Me!\</h1\>
    \<p\>Want to adopt a pet or need to rehome a dog or cat?\</p\>
    \<p\>Here we can help!\</p\>
    \<form id="add"\>
        \<h2\>Add New Pet\</h2\>
        \<div id='container'\>
            \<input type="text" placeholder="Name" /\>
            \<input type="text" placeholder="Age" /\>
            \<input type="text" placeholder="Kind" /\>
            \<input type="text" placeholder="Current Owner" /\>
            \<button\>Add\</button\>
        \</div\>
    \</form\>
    \<section id="adoption"\>
        \<h2\>Find a new friend from here:\</h2\>
        \<ul\>\</ul\>
    \</section\>
    \<section id="adopted"\>
        \<h2\>Buddies with a new home:\</h2\>
        \<ul\>\</ul\> 
    \</section\>
    \<script\>document.onload = solve();\</script\>`

result();
    // fill inputs
    const form = document.getElementById('container');
        let \[name, age, kind, owner, addBtn\] = Array.from(form.children);

        name.value = 'Tom';
        age.value = '0.3';
        kind.value = 'cat';
        owner.value = 'Jim King';

    // click add
    addBtn.click();

    // fill contact btn
    let newLiItem = Array.from(document.querySelector("\#adoption \> ul").children)\[0\];
    let \[p, span, btn\] = Array.from(newLiItem.children);               
    btn.click();

    // fill new input and click Yes!...
    document.querySelector("\#adoption \> ul \> li \> div \> input").value = 'Lara Smith'; 
    document.querySelector("\#adoption \> ul \> li \> div \> button").click(); 

    // click Checked
    document.querySelector("\#adopted \> ul \> li \> button").click();

    let countLi = document.querySelector("\#adopted \> ul").children.length; 
    expect(countLi).to.be.equal(0,'No pet itnto the adopted secition');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
//Add pet with empty inputs;
document.body.innerHTML = `\<h1\>Pet Me!\</h1\>
    \<p\>Want to adopt a pet or need to rehome a dog or cat?\</p\>
    \<p\>Here we can help!\</p\>
    \<form id="add"\>
        \<h2\>Add New Pet\</h2\>
        \<div id='container'\>
            \<input type="text" placeholder="Name" /\>
            \<input type="text" placeholder="Age" /\>
            \<input type="text" placeholder="Kind" /\>
            \<input type="text" placeholder="Current Owner" /\>
            \<button\>Add\</button\>
        \</div\>
    \</form\>
    \<section id="adoption"\>
        \<h2\>Find a new friend from here:\</h2\>
        \<ul\>\</ul\>
    \</section\>
    \<section id="adopted"\>
        \<h2\>Buddies with a new home:\</h2\>
        \<ul\>\</ul\> 
    \</section\>
    \<script\>document.onload = solve();\</script\>`

result();
    // fill inputs
        const form = document.getElementById('container');
        let \[name, age, kind, owner, addBtn\] = Array.from(form.children);
 
    // click add
    addBtn.click();
    expect(Array.from(document.querySelector("\#adoption \> ul").children).length).to.be.equal(0,'Incorrect input'); 

        name.value = '1';
        age.value = '';
        kind.value = '';
        owner.value = '';


    // click add
    addBtn.click();
    expect(Array.from(document.querySelector("\#adoption \> ul").children).length).to.be.equal(0,'Incorrect input'); 
        name.value = '';
        age.value = '1';
        kind.value = '';
        owner.value = '';

    // click add
    addBtn.click();
    expect(Array.from(document.querySelector("\#adoption \> ul").children).length).to.be.equal(0,'Incorrect input');
        name.value = '';
        age.value = '';
        kind.value = '1';
        owner.value = '';

    // click add
    addBtn.click();
    expect(Array.from(document.querySelector("\#adoption \> ul").children).length).to.be.equal(0,'Incorrect input');  

        name.value = '';
        age.value = '';
        kind.value = '';
        owner.value = '1';

    // click add
    addBtn.click();
    expect(Array.from(document.querySelector("\#adoption \> ul").children).length).to.be.equal(0,'Incorrect input');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
//Age must be number;
document.body.innerHTML = `\<h1\>Pet Me!\</h1\>
    \<p\>Want to adopt a pet or need to rehome a dog or cat?\</p\>
    \<p\>Here we can help!\</p\>
    \<form id="add"\>
        \<h2\>Add New Pet\</h2\>
        \<div id='container'\>
            \<input type="text" placeholder="Name" /\>
            \<input type="text" placeholder="Age" /\>
            \<input type="text" placeholder="Kind" /\>
            \<input type="text" placeholder="Current Owner" /\>
            \<button\>Add\</button\>
        \</div\>
    \</form\>
    \<section id="adoption"\>
        \<h2\>Find a new friend from here:\</h2\>
        \<ul\>\</ul\>
    \</section\>
    \<section id="adopted"\>
        \<h2\>Buddies with a new home:\</h2\>
        \<ul\>\</ul\> 
    \</section\>
    \<script\>document.onload = solve();\</script\>`

result();
    // fill inputs
        const form = document.getElementById('container');
        let \[name, age, kind, owner, addBtn\] = Array.from(form.children); 

        name.value = 'x';
        age.value = 'x';
        kind.value = 'x';
        owner.value = 'x';


    // click add
    addBtn.click();
    expect(Array.from(document.querySelector("\#adoption \> ul").children).length).to.be.equal(0,'Incorrect input - age must be number');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
//Adopt pet;
document.body.innerHTML = `\<h1\>Pet Me!\</h1\>
    \<p\>Want to adopt a pet or need to rehome a dog or cat?\</p\>
    \<p\>Here we can help!\</p\>
    \<form id="add"\>
        \<h2\>Add New Pet\</h2\>
        \<div id='container'\>
            \<input type="text" placeholder="Name" /\>
            \<input type="text" placeholder="Age" /\>
            \<input type="text" placeholder="Kind" /\>
            \<input type="text" placeholder="Current Owner" /\>
            \<button\>Add\</button\>
        \</div\>
    \</form\>
    \<section id="adoption"\>
        \<h2\>Find a new friend from here:\</h2\>
        \<ul\>\</ul\>
    \</section\>
    \<section id="adopted"\>
        \<h2\>Buddies with a new home:\</h2\>
        \<ul\>\</ul\> 
    \</section\>
    \<script\>document.onload = solve();\</script\>`

result();
    // fill inputs
    const form = document.getElementById('container');
        let \[name, age, kind, owner, addBtn\] = Array.from(form.children);

        name.value = 'Tom';
        age.value = '0.3';
        kind.value = 'cat';
        owner.value = 'Jim King';

    // click add
    addBtn.click();

    // fill contact btn
    let newLiItem = Array.from(document.querySelector("\#adoption \> ul").children)\[0\];
    let \[p, span, btn\] = Array.from(newLiItem.children); // \[p, span, btn\]               
    btn.click();

    // fill new input  
    document.querySelector("\#adoption \> ul \> li \> div \> button").click(); 
    
    let countLi = document.querySelector("\#adopted \> ul").children.length;
      
    expect(countLi).to.be.equal(0,'Fill the new owner name');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
//Add 3 New Pets and adopt 1
document.body.innerHTML = `\<h1\>Pet Me!\</h1\>
    \<p\>Want to adopt a pet or need to rehome a dog or cat?\</p\>
    \<p\>Here we can help!\</p\>
    \<form id="add"\>
        \<h2\>Add New Pet\</h2\>
        \<div id='container'\>
            \<input type="text" placeholder="Name" /\>
            \<input type="text" placeholder="Age" /\>
            \<input type="text" placeholder="Kind" /\>
            \<input type="text" placeholder="Current Owner" /\>
            \<button\>Add\</button\>
        \</div\>
    \</form\>
    \<section id="adoption"\>
        \<h2\>Find a new friend from here:\</h2\>
        \<ul\>\</ul\>
    \</section\>
    \<section id="adopted"\>
        \<h2\>Buddies with a new home:\</h2\>
        \<ul\>\</ul\> 
    \</section\>
    \<script\>document.onload = solve();\</script\>`;


result();

const form = document.getElementById('container');
        let \[name, age, kind, owner, addBtn\] = Array.from(form.children);

        name.value = 'Tom';
        age.value = '0.3';
        kind.value = 'cat';
        owner.value = 'Jim King';

        addBtn.click(); 

        name.value = '2';
        age.value = '0.32';
        kind.value = 'cat';
        owner.value = 'Jim King2';

        addBtn.click(); 

        name.value = '3';
        age.value = '0.323';
        kind.value = 'cat';
        owner.value = 'Jim King3';

        addBtn.click(); 
        document.querySelector("\#adoption \> ul \> li:nth-child(2) \> button").click()
        document.querySelector("\#adoption \> ul \> li:nth-child(2) \> div \> input").value = 'new';
        document.querySelector("\#adoption \> ul \> li:nth-child(2) \> div \> button").click();
 
        expect(document.querySelector("\#adopted \> ul").children.length).to.be.equal(1,'New adopted');  
        expect(document.querySelector("\#adoption \> ul").children.length).to.be.equal(2,'New adopted');  

        expect(document.querySelector("\#adopted \> ul \> li \> p").textContent).to.be.equal("2 is a 0.32 year old cat",'New adopted');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
//Add New Pet chacking the holl structure
document.body.innerHTML = `\<h1\>Pet Me!\</h1\>
    \<p\>Want to adopt a pet or need to rehome a dog or cat?\</p\>
    \<p\>Here we can help!\</p\>
    \<form id="add"\>
        \<h2\>Add New Pet\</h2\>
        \<div id='container'\>
            \<input type="text" placeholder="Name" /\>
            \<input type="text" placeholder="Age" /\>
            \<input type="text" placeholder="Kind" /\>
            \<input type="text" placeholder="Current Owner" /\>
            \<button\>Add\</button\>
        \</div\>
    \</form\>
    \<section id="adoption"\>
        \<h2\>Find a new friend from here:\</h2\>
        \<ul\>\</ul\>
    \</section\>
    \<section id="adopted"\>
        \<h2\>Buddies with a new home:\</h2\>
        \<ul\>\</ul\> 
    \</section\>
    \<script\>document.onload = solve();\</script\>`;


result();

const form = document.getElementById('container');
        let \[name, age, kind, owner, addBtn\] = Array.from(form.children);

        name.value = 'Tom';
        age.value = '0.3';
        kind.value = 'cat';
        owner.value = 'Jim King';

        addBtn.click();
        let newLiItem = Array.from(document.querySelector("\#adoption \> ul").children)\[0\];
        let insideLiElements = Array.from(newLiItem.children); // \[p, span, btn\]
        let \[p, span, btn\] = insideLiElements; 
        let \[strongName, strongAge, strongKind\] = Array.from(p.children); // \[apn, span, span\]
        

// Add new Pet, check structure;
        expect(insideLiElements.length).to.be.equal(3,'New list item has invalid structure'); 

        expect(p.tagName).to.be.equal("P", 'Pet main information should be P');
        expect(span.tagName).to.be.equal("SPAN", 'Pet owner element should be SPAN');
        expect(btn.tagName).to.be.equal("BUTTON", 'Add element - button');
        expect(strongName.tagName).to.be.equal("STRONG", 'Pet name element should be STRONG');
        expect(strongAge.tagName).to.be.equal("STRONG", 'Pet age element should be STRONG'); 
        expect(strongKind.tagName).to.be.equal("STRONG", 'Pet kind element should be STRONG'); 

        expect(strongName.textContent).to.be.equal("Tom", 'Pet name should be Tom');
        expect(strongAge.textContent).to.be.equal("0.3", 'Pet age should be Main'); 
        expect(strongKind.textContent).to.be.equal("cat", 'Pet kind should be 12.00');  
        expect(p.textContent).to.be.equal("Tom is a 0.3 year old cat", 'P element must contains - Tom is a 0.3 year old cat'); 
        expect(btn.textContent).to.be.equal("Contact with owner", 'Button text content must be - Contact with owner');  
        expect(span.textContent).to.be.equal("Owner: Jim King", 'Span must contains - Owner: Jim King');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
//click Connect with owner
document.body.innerHTML = `\<h1\>Pet Me!\</h1\>
    \<p\>Want to adopt a pet or need to rehome a dog or cat?\</p\>
    \<p\>Here we can help!\</p\>
    \<form id="add"\>
        \<h2\>Add New Pet\</h2\>
        \<div id='container'\>
            \<input type="text" placeholder="Name" /\>
            \<input type="text" placeholder="Age" /\>
            \<input type="text" placeholder="Kind" /\>
            \<input type="text" placeholder="Current Owner" /\>
            \<button\>Add\</button\>
        \</div\>
    \</form\>
    \<section id="adoption"\>
        \<h2\>Find a new friend from here:\</h2\>
        \<ul\>\</ul\>
    \</section\>
    \<section id="adopted"\>
        \<h2\>Buddies with a new home:\</h2\>
        \<ul\>\</ul\> 
    \</section\>
    \<script\>document.onload = solve();\</script\>`;


result();

        const form = document.getElementById('container');
        let \[name, age, kind, owner, addBtn\] = Array.from(form.children);

        name.value = 'Tom';
        age.value = '0.3';
        kind.value = 'cat';
        owner.value = 'Jim King';

        addBtn.click();
        let newLiItem = Array.from(document.querySelector("\#adoption \> ul").children)\[0\];
        let \[p, span, btn\] = Array.from(newLiItem.children); // \[p, span, btn\]
                
        btn.click();

        let \[pNew, spanNew, div\] = Array.from(Array.from(document.querySelector("\#adoption \> ul").children)\[0\].children); // \[p, span, x\]

        let \[ newInput, newBtn \] = Array.from(div.children);
        expect(div.tagName).to.be.equal("DIV", 'New DIV element shoud appear');
        expect(newInput.tagName).to.be.equal("INPUT", 'New DIV element shoud appear');
        expect(newBtn.tagName).to.be.equal("BUTTON", 'New DIV element shoud appear');

        expect(newInput.placeholder).to.be.equal("Enter your names", 'Check input placeholder - Enter your names');
        expect(newBtn.textContent).to.be.equal("Yes! I take it!", 'The new button name is Yes! I take it!');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
//Adopt pet;
document.body.innerHTML = `\<h1\>Pet Me!\</h1\>
    \<p\>Want to adopt a pet or need to rehome a dog or cat?\</p\>
    \<p\>Here we can help!\</p\>
    \<form id="add"\>
        \<h2\>Add New Pet\</h2\>
        \<div id='container'\>
            \<input type="text" placeholder="Name" /\>
            \<input type="text" placeholder="Age" /\>
            \<input type="text" placeholder="Kind" /\>
            \<input type="text" placeholder="Current Owner" /\>
            \<button\>Add\</button\>
        \</div\>
    \</form\>
    \<section id="adoption"\>
        \<h2\>Find a new friend from here:\</h2\>
        \<ul\>\</ul\>
    \</section\>
    \<section id="adopted"\>
        \<h2\>Buddies with a new home:\</h2\>
        \<ul\>\</ul\> 
    \</section\>
    \<script\>document.onload = solve();\</script\>`

result();
    // fill inputs
    const form = document.getElementById('container');
        let \[name, age, kind, owner, addBtn\] = Array.from(form.children);

        name.value = 'Tom';
        age.value = '0.3';
        kind.value = 'cat';
        owner.value = 'Jim King';

    // click add
    addBtn.click();

    // fill contact btn
    let newLiItem = Array.from(document.querySelector("\#adoption \> ul").children)\[0\];
    let \[p, span, btn\] = Array.from(newLiItem.children); // \[p, span, btn\]               
    btn.click();

    // fill new input 
    document.querySelector("\#adoption \> ul \> li \> div \> input").value = 'Lara Smith'; 
    document.querySelector("\#adoption \> ul \> li \> div \> button").click(); 
    
    let countLi = document.querySelector("\#adopted \> ul").children.length;
      
    expect(countLi).to.be.equal(1,'One pet is adopted'); 
    expect(document.querySelector("\#adopted \> ul \> li \> p").textContent).to.be.equal("Tom is a 0.3 year old cat",'One pet is adopted - Tom is a 0.3 year old cat'); 
    expect(document.querySelector("\#adopted \> ul \> li \> span").textContent).to.be.equal("New Owner: Lara Smith",'One pet is adopted from Lara Smith'); 
    expect(document.querySelector("\#adopted \> ul \> li \> button").textContent).to.be.equal("Checked",'Button text is Checked');
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]