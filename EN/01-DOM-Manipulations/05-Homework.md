# Homework

[slide]
# Problem: Sections
[code-task title="Sections" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
You will receive an **array** of strings. 

For each string, create a **div** with a **paragraph** with the string in it. 

Each paragraph is initially **hidden** having the display attribute to `display:none`. 

Add a **click event listener** to each **div** that displays the hidden paragraph. 

Finally, you should **append** all divs to the element with an **id** **content**.

# Example
**Input**
[image assetsSrc="Sections-Input.png" /]

**Output**
[image assetsSrc="Sections-Output.png" /]

[/task-description]
[tests]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Notification
[code-task title="Notification" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a **function** that receives a string **message** and **displays** it inside a div with an **id notification** for 2 seconds. 

The div is initially **hidden** and when the function is called, it must be shown. 

After 2 seconds, **hide** the div. 

In the example below, a notification is shown when you click the button.

# Example
**Input**
[image assetsSrc="Notification-Input.png" /]

**Output**
[image assetsSrc="Notification-Output.png" /]

[/task-description]
[tests]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Time Converter
[code-task title="Time Converter" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Create a program that **converts** different time units. 

Your task is to add a **click** event listener to all `CONVERT` buttons. 

When a button is **clicked**, read the **corresponding** input field and **display** the rest of the values inside the other three inputs.

One day is equal to 24 hours, 1440 minutes, 86400 seconds. 

Whichever button we click, the input fields should change depending on the added value on the left. 

For example, if we type in 48 hours and click convert the days, the field value should change to 2.

# Example
**Input**
[image assetsSrc="Time-Converter-Input.png" /]

**Output**
[image assetsSrc="Time-Converter-Output.png" /]

[/task-description]
[tests]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Locked Profile
[code-task title="Locked Profile" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
In this problem, you should **create a JS functonality** which **shows** and **hides** the additional information about users.

When the `Show more` button is clicked, the **hiden information** inside the div should
be shown, only if **the profile is not locked**! 

If the current profile is **locked**, nothing should happen.

If the hidden information is displayed and we lock the profile again, the `Hide it` button
**should not be working**! 

Otherwise, when the profile is **unlocked** and we click on the `Hide it` button, the fields must hide again.

# Example
**Input**
[image assetsSrc="Locked-Profile-Input.png" /]

**Output**
[image assetsSrc="Locked-Profile-Output.png" /]

[/task-description]
[tests]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Encode And Decode Messages
[code-task title="Encode And Decode Messages" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
In this problem, create a JS functonality which encodes and decodes some messages, which travel to the network.

The program should contain two functionalities.

The first one is to encode the given message and send it to the receiver.

The second one is to decode the received message and display it.

When the `Encode and send it` button is clicked, you should get the given message from the first textarea. 

When you get the current message, you should encode it as follows:
- Change the ASCII CODE on every single character in that message by adding 1 to the current ASCII NUMBER, that represent the current character in that message.
- Clear the sender textarea and append the encoded message to the receiver textarea.

After that, when the `Decode and read it` button is clicked, you need to get the encoded message from the receiver textarea and do the opposite logic:
- Subtract 1 from the current ASCII NUMBER, that represents the current character in that message.
- Replace the encoded message with your decoded message in the receiver textrea to make it readable.

# Example
**Input**
[image assetsSrc="Encoding-Messages-Input1.png" /]
[image assetsSrc="Encoding-Messages-Input2.png" /]

**Output**
[image assetsSrc="Decoding-Messages-Output.png" /]

[/task-description]
[tests]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Table Search Engine
[code-task title="Table Search Engine" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a function that searches in a table by given input.

When the `Search` button is clicked, go through all cells in the table except for the first row, which is the header of the table Student name, Student email and Student course.

Check if the given input has a match, check for both full words and single letters.

If any of the rows contain the submitted string, add a **select class** to that row. 

**Note that more than one row may contain the given string**.

If there is no match, **nothing should happen**.

Note: After every search, **clear the input field** and **remove all already selected classes**, if any exist from the previous search, in order for the **new search** to contain only the **new result**.

# Example
**Input**
[image assetsSrc="Table-Search-Engine-Input.png" /]

**Output**
[image assetsSrc="Table-Search-Engine-Output.png" /]

[/task-description]
[tests]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Furniture
[code-task title="Furniture" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
You will be given a furniture as an array of objects. 

Each object will have a name, a price and a decoration factor.

When the `Generate` button is **clicked**, add a new row to the table for each piece of furniture with its **image**, **name**, **price** and **decoration factor**.

When the `Buy` button is clicked, get all checkboxes that are marked and show in the result textbox the names of the furnitures that were **checked**, separated by a comma and single space `", "` in the following format\: `Bought furniture: {furniture1} {furniture2}…`.

On the next line, print the total price in format: `Total price: {totalPrice}`, formatted to the second decimal point.

Finally, print the average decoration factor in the format: `Average decoration factor: {decFactor}`.


# Example
**Input**
`[{"name": "Sofa", "img": "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg", "price": 150, "decFactor": 1.2}]`

**Output**
[image assetsSrc="Furniture-Output.png" /]

[/task-description]
[tests]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Cards
[code-task title="Cards" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a function which checks cards, shows which one is greater and keeps history of all hands.

Firstly, **add click events to all cards**. 

When one of the cards is clicked, the current background card must be changed with the `whiteCard.jpg` picture given in the skeleton.

The card name should be appended to one of the **span** elements in the div with `id="result"`.

If a card from **the top side** is **clicked**, append the card name to the **left span**, first empty the span, otherwise append the card name to the right span, which will be second or last span.

When cards from **both sides are selected**, check which one is **greater**. 

The greater card should have a border `2px solid green` and the other card should have a border `2px solid red`.

You should clear the span elements which hold the current card names when both are selected, and the winner is selected. 

After every hand, push the current card names in the **history div** in the following format:
`[{top side card name} vs {bottom side card name}]`


# Example
**Input**
[image assetsSrc="Cards-Input.png" /]

**Output**
[image assetsSrc="Cards-Output.png" /]

[/task-description]
[tests]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[test]
[input]

[/input]
[output]

[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]