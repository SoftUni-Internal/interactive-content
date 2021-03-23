# Problema 2: Press House
[slide hideTitle]
# Press House

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/07.JS-Advanced-Exam-Preparation/RO/Problem-2-Press-House-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Press House" taskId="js-advanced-exam-preparation-press-house" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]
```
function pressHouse() {
  // Scrieți codul dvs. aici

  return {
    Article,
    ShortReports,
    BookReview,
  };
}

```
[/code-editor]
[task-description]
# Descriere

Trebuie să creați mai multe clase pentru **Casa de presă**.

**Implementăm** următoarele clase:
"**Article**", "**ShortReports**", "**BookReview**".

## Article

- `constructor(title, content)` 

Clasa **Article** ar trebui să aibă **2 proprietăți**:

- **titlu** \- string

- **conținut** \- string 


Funcția `toString()` ar trebui să returneze titlul și conținutul:

```
Title: {title}
Content: {content}
```

## Rapoarte scurte
Clasa "**Rapoarte scurte**" moștenește de la clasa "**Articol**".

- `constructor(title, content, originalResearch)`

**Rapoarte scurte** ar trebui să aibă **4 proprietăți:**

- **title** \- string
 
- **content** \- string

- **originalResearches** \- un obiect cu proprietățile **titlu** și **autor**

- **comments** \- an array of strings

Scopul este de a crea rapoarte scurte. 

Ar trebui să limitați lungimea caracterelor păstrate în proprietatea **conținut**.

Ar trebui să accepte un raport de **mai puțin de 150 de simboluri**. 

Dacă conținutul trimis depășește limita, ar trebui să aruncați o eroare cu următorul mesaj:

"**Short reports content should be less than 150 symbols.**"

Obiectul **originalResearches** ar trebui să conțină și **autor** și **titlu**. 

Dacă nu atunci generați o excepție cu următorul mesaj:

"**The original research should have author and title.**"

- `addComment(comment)` - Această funcție ar trebui să primească un singur comentariu sub formă de șir, să-l adauge în **mulțimea de comentarii** și să returneze acest mesaj: 

"**The comment is added.**"

- `toString()` - Această funcție ar trebui să extindă metoda `toString()` clasei **Article** adăugând niște linii adiționale:

"**Original Research:** \{ **title** \} **by** \{ **author** \}"

Dacă există alte comentarii atunci afișați-le în acest format:
```
Comments:
Comment content goes here
Comment content goes here
// and so on
```

**Notă: Pentru mai multe explicații uitați-vă la exemplele de mai jos!**

## Recenzie de carte

Clasa "**BookReview"** moștenește de la clasa "**Article**".

- `constructor(title, content, book)`

**Recenzia de carte** ar trebui să aibă **4 proprietăți:**

- **title** \- string
- **content** \- string
- **book** \- un obiect cu proprietățile **nume** și **autor**
- **customers** \- o mulțime de obiecte **personalizate**.Fiecare obiect **personalizat** ar trebui să aibă următoarea structură "\{**customerName, orderDescription**\}"

"**addCustomer(customerName, orderDescription)**": 

Această **funcție** ar trebui să primească "**customerName**" și "**orderDescription**" ca șiruri. 

Aici ar trebui să verificați dacă **mulțimea clienților** și aceeqași comandă au fost plasate de același client, generăm o eroare cu următorul mesaj: 

"**This customer has already ordered this review.**

Altfel adăugați obiectul **client** în **mulțimea de clienți** și returnează următorul mesaj:

"\{**customerName**\} **has ordered a review for** \{**book name**\}`

`toString()`: 

Această **funcție** ar trebui să extindă metodă `toString()` clasei "**Article**" prin adăugarea unor linii:

"**Book:** \{**book name**\}"

Adițional dacă sunt și alte **comenzi** ar trebui să afișați pe fiecare pe o linie nouă:

```
Orders:
{ customerName } - { orderDescription }.
{ customerName } - { orderDescription }.
{ customerName } - { orderDescription }.
// and so on
```

**Notă: Pentru mai multe informații vedeți exemplele de pe jos!**

## Supunere

**Trimiteți funcția pressHouse.**

```js
function pressHouse() {
  // Write your code here

  return {
    Article,
    ShortReports,
    BookReview,
  };
}

```

## Exemple
Acesta este un exemplu de cum ar trebui folosit codul:

**Exemple de utilizare a codului**

```js
let classes = solveClasses();
let lorem = new classes.Article("Lorem", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non tortor finibus, facilisis mauris vel…");
console.log(lorem.toString()); 
------------------------------
let short = new classes.ShortReports("SpaceX and Javascript", "Yes, it is true that in its recent launch, the SpaceX Dragon 2 Flight used technology based on Chromium and JavaScript. What are your views on this?", { title: "Dragon 2", author: "wikipedia.org" });
console.log(short.addComment("Thank God they didn't use Java."))
short.addComment("In the end the JavaScript features are executed in C++ - the underlying language.")
console.log(short.toString()); 
------------------------------
let book = new classes.BookReview("The Great Gatsby is so much more than a love story", "The Great Gatsby is in many ways similar to Romeo and Juliet, yet I believe that it is so much more than just a love story. It is also a reflection on the hollowness of a life of leisure. ...", { name: "The Great Gatsby", author: "F. Scott Fitzgerald" });
console.log(book.addCustomer("The Guardian", "100 symbols"));
console.log(book.addCustomer("Goodreads", "30 symbols"));
console.log(book.toString()); 
```

**Datele de ieșire corespunzătoare**

```
Title: Lorem
Content: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non tortor finibus, facilisis mauris vel, ultricies est. Phasellus id pellentesque risus. Morbi aliquet at lectus ac malesuada. Morbi eu erat orci. Donec id turpis elit. Donec iaculis sapien odio, sit amet cursus lacus rutrum sit amet. Cras ac urna sapien. Pellentesque porta mauris ac dolor commodo, congue condimentum orci varius. Ut ultrices pretium commodo. Aenean facilisis mattis facilisis.
----------------------
The comment is added.
Title: SpaceX and Javascript
Content: Yes, it is true that in its recent launch, the SpaceX Dragon 2 Flight used technology based on Chromium and JavaScript. What are your views on this?
Original Research: Dragon 2 by wikipedia.org
Comments:
Thank god they didn't use Java.
In the end the JavaScript features are executed in C++ - the underlying language.
----------------------
The Guardian has ordered a review for The Great Gatsby
Goodreads has ordered a review for The Great Gatsby
Title: The Great Gatsby is so much more than a love story
Content: The Great Gatsby is in many ways similar to Romeo and Juliet, yet I believe that it is so much more than just a love story. It is also a reflection on the hollowness of a life of leisure. ...
Book: The Great Gatsby
Orders:
The Guardian - 100 symbols
Goodreads - 30 symbols
```

[/task-description]
[code-io /]
[tests]
[test open]
[input]
// zero test 1
 // Article toString test
 let classes = result()
        let lorem = new classes.Article('Lorem', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non tortor finibus, facilisis mauris vel, ultricies est. Phasellus id pellentesque risus. Morbi aliquet at lectus ac malesuada. Morbi eu erat orci. Donec id turpis elit. Donec iaculis sapien odio, sit amet cursus lacus rutrum sit amet. Cras ac urna sapien. Pellentesque porta mauris ac dolor commodo, congue condimentum orci varius. Ut ultrices pretium commodo. Aenean facilisis mattis facilisis.');
        let output = lorem.toString();
        let expectedOutput = \`Title: Lorem
Content: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non tortor finibus, facilisis mauris vel, ultricies est. Phasellus id pellentesque risus. Morbi aliquet at lectus ac malesuada. Morbi eu erat orci. Donec id turpis elit. Donec iaculis sapien odio, sit amet cursus lacus rutrum sit amet. Cras ac urna sapien. Pellentesque porta mauris ac dolor commodo, congue condimentum orci varius. Ut ultrices pretium commodo. Aenean facilisis mattis facilisis.\`;
        expect(expectedOutput).to.be.equal(output, 'Incorrect output')
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
//zero test 2
//ShortReports toString test
let classes = result()
        let short = new classes.ShortReports('SpaceX and Javascript', 'Yes, its damn true.SpaceX in its recent launch Dragon 2 Flight has used a technology based on Chromium and Javascript. What are your views on this ?', \{ title: 'Dragon 2', author: 'wikipedia.org' \});
        short.addComment("Thank god they didn't use java.")
        output = short.addComment('In the end JavaScript’s features are executed in C++ — the underlying language.')
        output += '\n' + short.toString();
        expectedOutput = \`The comment is added.
Title: SpaceX and Javascript
Content: Yes, its damn true.SpaceX in its recent launch Dragon 2 Flight has used a technology based on Chromium and Javascript. What are your views on this ?
Original Research: Dragon 2 by wikipedia.org
Comments:
Thank god they didn't use java.
In the end JavaScript’s features are executed in C++ — the underlying language.\`
        expect(expectedOutput).to.be.equal(output, 'Incorrect output')
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
//zero test 3
//BookReview toString test
let classes = result()
        let book = new classes.BookReview('The Great Gatsby is so much more than a love story', 'The Great Gatsby is in many ways similar to Romeo and Juliet, yet I believe that it is so much more than just a love story. It is also a reflection on the hollowness of a life of leisure. ...', { name: 'The Great Gatsby', author: 'F Scott Fitzgerald' });
        output = book.addClient('The Guardian', '100 symbols');
        output += '\n' + book.addClient('Goodreads', '30 symbols');
        output += '\n' + book.toString();
        expectedOutput = \`The Guardian has ordered a review for The Great Gatsby
Goodreads has ordered a review for The Great Gatsby
Title: The Great Gatsby is so much more than a love story
Content: The Great Gatsby is in many ways similar to Romeo and Juliet, yet I believe that it is so much more than just a love story. It is also a reflection on the hollowness of a life of leisure. ...
Book: The Great Gatsby
Orders:
The Guardian - 100 symbols
Goodreads - 30 symbols\`
        expect(expectedOutput).to.be.equal(output, 'Incorrect output')
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// ShortReports -- The original research should have author and title. -- no author"
   let classes = result()
        let content = 'Yes, its damn true.SpaceX in its recent launch Dragon 2 Flight has used a technology based on Chromium and Javascript.'
         
        expect(function(){new classes.ShortReports('SpaceX and Javascript', content, { title: 'Dragon 2' })})
        .to.throw(Error, 'The original research should have author and title.')
       
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// ShortReports -- The original research should have author and title. -- no author"
   let classes = result()
        let content = 'Yes, its damn true.SpaceX in its recent launch Dragon 2 Flight has used a technology based on Chromium and Javascript.'
         
        expect(function()\{new classes.ShortReports('SpaceX and Javascript', content, \{ title: 'Dragon 2' \})\})
        .to.throw(Error, 'The original research should have author and title.')
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// ShortReports -- The original research should have author and title. -- no title
     let classes = result()
        let content = 'Yes, its damn true.SpaceX in its recent launch Dragon 2 Flight has used a technology based on Chromium and Javascript.'
        expect(function()\{new classes.ShortReports('SpaceX and Javascript', content, \{ author: 'Dragon 2' \})\})
        .to.throw(Error, 'The original research should have author and title.')
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// ShortReports toString with no comments 
 let classes = result()
            let short = new classes.ShortReports('SpaceX and Javascript', 'Yes, its damn true.SpaceX in its recent launch Dragon 2 Flight has used a technology based on Chromium and Javascript. What are your views on this ?', \{ title: 'Dragon 2', author: 'wikipedia.org' \});
                    
            output = short.toString();
            expectedOutput = \`Title: SpaceX and Javascript
Content: Yes, its damn true.SpaceX in its recent launch Dragon 2 Flight has used a technology based on Chromium and Javascript. What are your views on this ?
Original Research: Dragon 2 by wikipedia.org\`;
     
            expect(expectedOutput).to.be.equal(output, 'Incorrect output')
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// ShortReport and BookReview shoud inherit Article
let classes = result()
        expect(Object.getPrototypeOf(classes.ShortReports) && Object.getPrototypeOf(classes.BookReview)).to.be.equal(classes.Article,
            "'ShortReports class' does not inherit 'Article class'");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// BookReview throw -- This client has already ordered this review.
let classes = result()
        let book = new classes.BookReview('The Great Gatsby is so much more than a love story', 'The Great Gatsby is in many ways similar to Romeo and Juliet, yet I believe that it is so much more than just a love story. It is also a reflection on the hollowness of a life of leisure. ...', { name: 'The Great Gatsby', author: 'F Scott Fitzgerald' });
        book.addClient('The Guardian', '100 symbols');
               
        expect(function(){ book.addClient('The Guardian', '100 symbols'); }).to.throw(Error, `This client has already ordered this review.`)
    
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// BookReview toString with no comments 
let classes = result()
            let book = new classes.BookReview('The Great Gatsby is so much more than a love story', 'The Great Gatsby is in many ways similar to Romeo and Juliet, yet I believe that it is so much more than just a love story. It is also a reflection on the hollowness of a life of leisure. ...', \{ name: 'The Great Gatsby', author: 'F Scott Fitzgerald' \});                      
            output = book.toString();
            expectedOutput = \`Title: The Great Gatsby is so much more than a love story
Content: The Great Gatsby is in many ways similar to Romeo and Juliet, yet I believe that it is so much more than just a love story. It is also a reflection on the hollowness of a life of leisure. ...
Book: The Great Gatsby\`;     
            expect(expectedOutput).to.be.equal(output, 'Incorrect output');
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
