# Problem 1: Pet Me (DOM Manipulation)

[slide]
# Description

[code-task title="Task Manager" taskId="js-advanced-exam-pet-me" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

[Download resource here!](https://mega.nz/file/CdQn3aQK#5vUL-hIF1uHQ9L0C4O8iLXj2j3WMJU2_nbr6KodjtDU)

Use the **given skeleton** to solve this problem.

**Note: You have NO permission to change directly the given HTML (index.html file).**

[image assetsSrc="exam-pic(1).png" /]

## Your task

Write the missing JavaScript code to make the Pet Me application work as expected.

Each new registered pet must have `Name`, `Age`, `Kind` and `Current Owner`.

When you click the `[Add]` button and **only** if all inputs are **filled** and the age is a number, then a new **list item** should be added to the section with id `adoption`.

Do not forget to **clear the inputs** when you add a new pet.

## Already added pets

[image assetsSrc="exam-pic(2).png" /]

The new item should have the **following structure:**

[image assetsSrc="exam-pic(3).png" /]

You should create a `li` element that contains **paragraph** element with the name, age and kind of the new pet, follow the format `{ name } is a { years } year old { kind }`, where  **name**, **years** and **kind** are in a strong elements inside the paragraph. 

After that we have `span` element with `Owner: { owner name }` and a button `[Contact with owner]`.

When you click the `[Contact with owner]` button an input appears and the button changes to `[ Yes! I take it! ]` like this:

[image assetsSrc="exam-pic(4).png" /]

The new elements are into a `div` element and **structure is changed like this:**

[image assetsSrc="exam-pic(5).png" /]

## Moving pets into the new home section

When you click the `[Yes! I take it!]` button **if there is entered name** you should **move the current list item** to the **adopted section.**

[image assetsSrc="exam-pic(6).png" /]
[image assetsSrc="exam-pic(7).png" /]

Here we have changed the **owner name** with the new one.

And the button is `[Checked]`.

We have the next HTML structure:

[image assetsSrc="exam-pic(8).png" /]

And in the end button `[Checked]` must **delete** the current list item.

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
//Zero Test - click Conect with owner
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
//click Conect with owner
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
