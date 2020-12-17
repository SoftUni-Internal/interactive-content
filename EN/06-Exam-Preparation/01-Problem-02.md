# Problem 2: Press House

[slide]
# Description

[code-task title="Task Manager" taskId="js-advanced-exam-preparation-press-house" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function pressHouse(){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Your need to create several classes for **Press House.**

**Implement** the following classes:
`Article`, `ShortReports`, `BookReview`.

## Article

- `constructor(title, content)` 

Should have these 2 properties:

   - title \- string
   - content \- string  

- `toString()`

This function should return the title and the content:
`Title: {title}`
`Content: {content}`

## ShortReports
Class `ShortReports` inherits class Article.

- `constructor(title, content, originalResearch)`

Should have these **4 properties:**

   - title \- string,  
   - content \- string, 
   - originalResearches \- object with properties title and author
   - comments \- array of strings

As we create a short reports here we have a length limit for the **content** property \- it should be less than 150 symbols, otherwise throw an error with the next message:

`Short reports content should be less then 150 symbols.`

The property should have the both required properties, otherwise throw error with this message:

`The original research should have author and title.`

- `addComment(comment)`

This function should receive single comment like string, add it to the comments array and return a message:

`The comment is added.`

- `toString()`

This function should extend the toString method of class Article adding same more lines like:

`Original Research: { title } by { author }`

And if there are any comments you should print on a new line 

`Comments:`

and then all comments each on a new line.

**Note: For more information see the examples below!**

## BookReview

Class `BookReview` inherits class `Article`.

- `constructor(title, content, book)`

Should have these **4 properties:**

   - title \- string,  
   - content \- string, 
   - book \- object with properties name and author,
   - clients \- array of objects,

The client object should have the following structure `{clientName, orderDescription}`.

- `addClient(clientName,  orderDescription)`

This **function** should receive `clientName` and `orderDescription` as strings. 

Here you should check our clients array and if we already have this order from the same client throw error with next message: 

`This client has already ordered this review.`

Otherwise we add our client object into the clients array and return a message:

`{ clientName } has ordered a review for { book name }`

- `toString()` 

This **function** should extend the `toString()` method of class `Article` adding same more lines like:

`Book: { book name }`

And if there are any orders you should print all orders each on a new line:
`Orders:`
`{ clientName } - { orderDescription }.`

**Note:  For more information see the examples below!**

## Submission

**Submit your pressHouse function.**

[image assetsSrc="exam-prep-pic6.png" /]

## Examples

This is an example how the code is **intended to be used:**

# Examples
**Input** 
```js
let classes = solveClasses();
let lorem = new classes.Article("Lorem", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non tortor finibus, facilisis mauris vel…");
console.log(lorem.toString()); 
------------------------------
let short = new classes.ShortReports("SpaceX and Javascript", "Yes, its damn true.SpaceX in its recent launch Dragon 2 Flight has used a technology based on Chromium and Javascript. What are your views on this ?", { title: "Dragon 2", author: "wikipedia.org" });
console.log(short.addComment("Thank god they didn't use java."))
short.addComment("In the end JavaScript"s features are executed in C++ — the underlying language.")
console.log(short.toString()); 
------------------------------
let book = new classes.BookReview("The Great Gatsby is so much more than a love story", "The Great Gatsby is in many ways similar to Romeo and Juliet, yet I believe that it is so much more than just a love story. It is also a reflection on the hollowness of a life of leisure. ...", { name: "The Great Gatsby", author: "F Scott Fitzgerald" });
console.log(book.addClient("The Guardian", "100 symbols"));
console.log(book.addClient("Goodreads", "30 symbols"));
console.log(book.toString()); 
```

**Output**
```js
Title: Lorem
Content: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non tortor finibus, facilisis mauris vel, ultricies est. Phasellus id pellentesque risus. Morbi aliquet at lectus ac malesuada. Morbi eu erat orci. Donec id turpis elit. Donec iaculis sapien odio, sit amet cursus lacus rutrum sit amet. Cras ac urna sapien. Pellentesque porta mauris ac dolor commodo, congue condimentum orci varius. Ut ultrices pretium commodo. Aenean facilisis mattis facilisis.
----------------------
The comment is added.
Title: SpaceX and Javascript
Content: Yes, its damn true.SpaceX in its recent launch Dragon 2 Flight has used a technology based on Chromium and Javascript. What are your views on this ?
Original Research: Dragon 2 by wikipedia.org
Comments:
Thank god they didn't use java.
In the end JavaScript's features are executed in C++ \- the underlying language.
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
        let expectedOutput = `Title: Lorem
Content: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non tortor finibus, facilisis mauris vel, ultricies est. Phasellus id pellentesque risus. Morbi aliquet at lectus ac malesuada. Morbi eu erat orci. Donec id turpis elit. Donec iaculis sapien odio, sit amet cursus lacus rutrum sit amet. Cras ac urna sapien. Pellentesque porta mauris ac dolor commodo, congue condimentum orci varius. Ut ultrices pretium commodo. Aenean facilisis mattis facilisis.`;
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
        expectedOutput = `The comment is added.
Title: SpaceX and Javascript
Content: Yes, its damn true.SpaceX in its recent launch Dragon 2 Flight has used a technology based on Chromium and Javascript. What are your views on this ?
Original Research: Dragon 2 by wikipedia.org
Comments:
Thank god they didn't use java.
In the end JavaScript’s features are executed in C++ — the underlying language.`
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
        let book = new classes.BookReview('The Great Gatsby is so much more than a love story', 'The Great Gatsby is in many ways similar to Romeo and Juliet, yet I believe that it is so much more than just a love story. It is also a reflection on the hollowness of a life of leisure. ...', \{ name: 'The Great Gatsby', author: 'F Scott Fitzgerald' \});
        output = book.addClient('The Guardian', '100 symbols');
        output += '\n' + book.addClient('Goodreads', '30 symbols');
        output += '\n' + book.toString();
        expectedOutput = `The Guardian has ordered a review for The Great Gatsby
Goodreads has ordered a review for The Great Gatsby
Title: The Great Gatsby is so much more than a love story
Content: The Great Gatsby is in many ways similar to Romeo and Juliet, yet I believe that it is so much more than just a love story. It is also a reflection on the hollowness of a life of leisure. ...
Book: The Great Gatsby
Orders:
The Guardian - 100 symbols
Goodreads - 30 symbols`
        expect(expectedOutput).to.be.equal(output, 'Incorrect output')
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// Is a valid constructor
let classes = result()
let longContent = 'Yes, its damn true.SpaceX in its recent launch Dragon 2 Flight has used a technology based on Chromium and Javascript. What are your views on this ?Yes, its damn true.SpaceX in its recent launch Dragon 2 Flight has used a technology based on Chromium and Javascript. What are your views on this ?'
         
expect(function()\{new classes.ShortReports('SpaceX and Javascript', longContent, \{ title: 'Dragon 2', author: 'wikipedia.org' \})\})
        .to.throw(Error, 'Short reports content should be less then 150 symbols.')
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
            expectedOutput = `Title: SpaceX and Javascript
Content: Yes, its damn true.SpaceX in its recent launch Dragon 2 Flight has used a technology based on Chromium and Javascript. What are your views on this ?
Original Research: Dragon 2 by wikipedia.org`;
     
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
        let book = new classes.BookReview('The Great Gatsby is so much more than a love story', 'The Great Gatsby is in many ways similar to Romeo and Juliet, yet I believe that it is so much more than just a love story. It is also a reflection on the hollowness of a life of leisure. ...', \{ name: 'The Great Gatsby', author: 'F Scott Fitzgerald' \});
        book.addClient('The Guardian', '100 symbols');
               
        expect(function()\{ book.addClient('The Guardian', '100 symbols'); \}).to.throw(Error, `This client has already ordered this review.`)
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

            expectedOutput = `Title: The Great Gatsby is so much more than a love story
Content: The Great Gatsby is in many ways similar to Romeo and Juliet, yet I believe that it is so much more than just a love story. It is also a reflection on the hollowness of a life of leisure. ...
Book: The Great Gatsby`;
     
            expect(expectedOutput).to.be.equal(output, 'Incorrect output');
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]