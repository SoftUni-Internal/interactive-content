[slide hideTitle]
# Problem: Random HTML Problem
[code-task title="Random HTML Problem" taskId="random-html-problem" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false" /]
[code-upload allowedMemory="30" /]
[task-description]
## Description
- Change the document title to Simple HTML Page
- Use paragraph tag for plain text and strong tag for bold text
[/task-description]
[tests]
[test open]
[input]
expect(document.title).to.equal("Simple HTML Page","Incorrect title name");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("p")).to.have.lengthOf(1,"Incorrect amount of p tag.");
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("strong")).to.have.lengthOf(2,"Incorrect amount of strong tags.");
[output]
yes
[/output]
[/test]
[test]
[input]
expect($(document.body).find("strong").text()).to.include("CSS","Incorrect text in strong tag.");
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]