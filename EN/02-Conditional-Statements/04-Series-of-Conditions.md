[slide hideTitle]
# Sequence of If-Else Conditions

[video src="https://videos.softuni.org/hls/javascript-basics/02.Conditions/EN/02-conditional-statements-js-24,25-Sequence-of-if-else-conditions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Sometimes we need to do a sequence of conditions before we decide what actions our program will execute. 

In such cases, we can apply the construction `if-else if ... -else` **in series**.

For this purpose, we use the following format:
```js
if (condition) {
  // condition body;
} else if (second condition) {
  // condition body;
} else if (third condition) {
  // condition body;
}
…
else {
  // else construction body;
}
```
[/slide]

[slide hideTitle]
# Example: Digits in English

[video src="https://videos.softuni.org/hls/javascript-basics/02.Conditions/EN/02-conditional-statements-js-26-Series-of-conditions-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Print the digits in the range of 1 to 9 (digits are read from the console) in English. 

We can read the digit and then, through a **sequence of conditions** we can print the relevant English word: 
```js
let num = Number(input);

if (num == 1) {
    console.log("one");
} else if (num == 2) {
    console.log("two");
} else if (num == 3) {
    console.log("three");
} else if (num == 4) {
    console.log("four");
} else if (num == 5) {
    console.log("five");
} else if (num == 6) {
    console.log("six");
} else if (num == 7) {
    console.log("seven");
} else if (num == 8) {
    console.log("eight");
} else if (num == 9) {
    console.log("nine");
} else {
    console.log("number too big");
}
```

The program logic from the above example **sequentially compares** the input number from the console with the digits from 1 to 9, when **each following comparison is being performed only in case the previous comparison is not true**. 

Eventually, if none of the `if` statements are true, the last `else` **clause** is performed.
[/slide]
