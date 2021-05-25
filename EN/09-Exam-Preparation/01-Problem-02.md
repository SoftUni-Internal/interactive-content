# Problem 2: Press House
[slide hideTitle]
# Press House

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/07.JS-Advanced-Exam-Preparation/EN/Problem-2-Press-House-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Press House" taskId="js-advanced-exam-preparation-press-house" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]
```
function pressHouse() {
  // Write your code here

  return {
    Article,
    ShortReports,
    BookReview,
  };
}

```
[/code-editor]
[task-description]
# Description

You need to create several classes for **Press House**.

**Implement** the following classes: "**Article**", "**ShortReports**", and "**BookReview**".

## Article

- `constructor(title, content)` 

The **Article** class should have **2 properties**:

- **title** \- string

- **content** \- string  


The `toString()` function should return the title and the content:

```
Title: {title}
Content: {content}
```

## ShortReports
The "**ShortReports**" class inherits from the "**Article**" class.

- `constructor(title, content, originalResearch)`

**ShortReports** should have **4 properties:**

- **title** \- string
 
- **content** \- string

- **originalResearches** \- an object with properties **title** and **author**

- **comments** \- an array of strings

The goal is to create short reports. You should limit the length of characters that can be stored in the **content** property. 

It should accept a report of **less than 150 symbols**. 

If the submitted content exceeds the limit you should throw an error with the following message:

"**Short reports content should be less than 150 symbols.**"

The **originalResearches** object is should contain both **author** and **title**. 

If it does not then throw an error with the following message:

"**The original research should have author and title.**"

- `addComment(comment)`- this function should receive a single comment as a string, add it to the **comments array** and return this message: 

"**The comment is added.**"

- `toString()`- this function should extend the `toString()` method of the  **Article** class by adding some additional lines:

"**Original Research:** \{ **title** \} **by** \{ **author** \}"

And if there are any comments then print them in this format:
```
Comments:
Comment content goes here
Comment content goes here
// and so on
```

**Note: For more information see the examples below!**

## BookReview

The "**BookReview"** class inherits from the "**Article**" class.

- `constructor(title, content, book)` - **BookReview** should have **4 properties:**
    - **title** \- string
    - **content** \- string
    - **book** \- an object with properties **name** and **author**
    - **customers** \- an array of **customer** objects. Each **customer** object should have the following structure "\{**customerName, orderDescription**\}"

- `addCustomer(customerName,  orderDescription)`: 

This **function** should receive "**customerName**" and "**orderDescription**" as strings.  

Here you should check the **customers array** and the same order has already been placed by the same customer, throw an error with the following message: 

"**This customer has already ordered this review.**"

Otherwise, add the **customer** object into the **customers array** and return this message:

"\{ **customerName** \} **has ordered a review for** \{ **book name** \}"

- `toString()`: 

This **function** should extend the `toString()` method of the "**Article**" class by adding some more lines:

"**Book:** \{ **book name** \}"

Additionally, if there are **any orders**, you should print each of them on a new line:

```
Orders:
{ customerName } - { orderDescription }.
{ customerName } - { orderDescription }.
{ customerName } - { orderDescription }.
// and so on
```

**Note: For more information, see the examples below!**

## Submission

**Submit your pressHouse function.**

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

## Examples
This is an example of how the code is **intended to be used:**

**Sample code usage:**

```js
let classes = solveClasses();

let lorem = new classes.Article("Lorem", 
`Lorem ipsum dolor sit amet, consectetur adipiscing
 elit. Fusce non tortor finibus, facilisis mauris vel…`);

console.log(lorem.toString()); 
------------------------------
let short = new classes.ShortReports("SpaceX and Javascript",
`Yes, it is true that in its recent launch, the SpaceX Dragon
 2 Flight used technology based on Chromium and JavaScript. 
 What are your views on this?`,
{ title: "Dragon 2", author: "wikipedia.org" });

console.log(short.addComment("Thank God they didn't use Java."));

short.addComment(`In the end the JavaScript features are
 executed in C++ - the underlying language.`);

console.log(short.toString()); 
------------------------------
let book = new classes.BookReview(`The Great Gatsby is so much
 more than a love story`, `The Great Gatsby is in many ways
 similar to Romeo and Juliet, yet I believe that it is so
 much more than just a love story. It is also a reflection
 on the hollowness of a life of leisure. ...`,
{ name: "The Great Gatsby", author: "F. Scott Fitzgerald" });

console.log(book.addCustomer("The Guardian", "100 symbols"));

console.log(book.addCustomer("Goodreads", "30 symbols"));

console.log(book.toString()); 
```

**Corresponding output:**

```
Title: Lorem
Content: Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Fusce non tortor finibus, facilisis
mauris vel, ultricies est. Phasellus id pellentesque 
risus. Morbi aliquet at lectus ac malesuada. 
Morbi eu erat orci. Donec id turpis elit. Donec
iaculis sapien odio, sit amet cursus lacus rutrum
sit amet. Cras ac urna sapien. Pellentesque porta 
mauris ac dolor commodo, congue condimentum orci 
varius. Ut ultrices pretium commodo. Aenean facilisis
mattis facilisis.
----------------------
The comment is added.
Title: SpaceX and Javascript
Content: Yes, it is true that in its recent launch, 
 the SpaceX Dragon 2 Flight used technology based on 
 Chromium and JavaScript. What are your views on this?
Original Research: Dragon 2 by wikipedia.org
Comments:
Thank god they didn't use Java.
In the end the JavaScript features are executed in 
C++ - the underlying language.
----------------------
The Guardian has ordered a review for The Great Gatsby
Goodreads has ordered a review for The Great Gatsby
Title: The Great Gatsby is so much more than a love story
Content: The Great Gatsby is in many ways similar to Romeo 
and Juliet, yet I believe that it is so much more 
than just a love story. It is also a reflection on the 
hollowness of a life of leisure. ...
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
