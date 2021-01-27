[slide]
# html-and-css-zip-file
[code-task title="Problem: Semantic-Tags" taskId="6af05e6b-ce89-4e6a-a4ed-723e6cc4980c" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Create an **index.html** file with **Semantic Tags** title
* Create header section with a **header** tag 
* Use **h1** tag for heading
* Create a main section with a **main** tag
* Create two paragraphs inside the main section
* Use **footer** tag for the last section
* Create two paragraphs inside the footer


You can find an example view [here](https://i.imgur.com/CyqSQVg.png)

You can download the resources [here](https://mega.nz/file/yIojERLL#nboU3_h_hxh-gEX8NBh9ALy1O7jzS05yI91vLDUwsRM)

[/task-description]

[tests]
[test open]
[input]
let title = (document.title);
expect(title).to.be.equal('Semantic Tags', "Incorrect title name.")
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let header = $("body \> header");
expect(header).to.have.lengthOf(1, "Incorrect amount of header tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let main = $("body \> main");
expect(main).to.have.lengthOf(1, "Incorrect amount of main tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let footer = $("body \> footer");
expect(footer).to.have.lengthOf(1, "Incorrect amount of footer tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let p = $("body \> footer \> p");
expect(p).to.have.lengthOf(2, "Incorrect amount of p tags in footer.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let p = $("body \> main \> p");
expect(p).to.have.lengthOf(2, "Incorrect amount of p tags in main.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let h1 = $("body \> header \> h1");
expect(h1).to.have.lengthOf(1, "Incorrect amount of h1 tag in header.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($(document.body).find("h1").text()).to.include("I washed my face with sparkling water for a week","Incorrect text in h1 tag.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]