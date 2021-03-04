// sectionId: "Javascript::Programming-Basics::Conditional-Statements::Variable-Lifetime"

[slide hideTitle]
# Variable Scope

[video src="https://videos.softuni.org/hls/javascript-basics/02.Conditions/EN/02-conditional-statements-js-29-30-Variable-life-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Each variable has a range in which it exists, called **variable scope**. 

This range specifies where a variable can be used and how long is its **lifetime**. 

In the JavaScript language, the scope in which a variable exists, starts from the line in which we **defined it** and ends with the first closing braces `}` (of the method, the **if statement**, etc.).

Thus, it is important to know that **any variable defined inside the body of a certain** `if` **statement will not be available outside of it**, unless we have defined it previously in a higher scope in the code. 

## Variable Scope – Example
In the example below, on the last line we are trying to print the variable `salary` which is defined in the `if` statement, we will get an **error** because we don't have access to it.

```js
let myMoney = 500;
let payDayDate = 10;
if (todayDate >= payDayDate) {
    let salary = 5000;
    myMoney = myMoney + salary;
}
console.log(myMoney); 
console.log(salary); //Error
```

The above code **will not compile**, because we are trying to access a variable **out of its scope**.
[/slide]
