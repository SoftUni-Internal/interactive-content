[slide hideTitle]

# Christmas Blog

[code-task title="Christmas-Blog" taskId="html-css-exam-christmas-blog" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

Download the resources from [here](https://videos.softuni.org/resources/HTML-CSS/Final-Exam/02-Christmas-Blog/Resources.zip)

## Tasks
* You are given an **unresponsive** website **(HTML + CSS + images)** - your task is to make the site **responsive**
* The site layout should change according to the browser **viewport / screen size**

## Constraints
* You need to implement 2 layouts: 
	* **width <= 1236px**
	* **width <= 768px**
*(Check the given screenshots for more details)*
* You are **NOT permitted** to modify the given HTML and CSS
* You are **permitted** to modify **ONLY** the **responsive.css** file
* You are **NOT permitted** to use libraries like Bootstrap 
* Pixel-perfect implementation is **NOT required**
* The site should open correctly in the latest version of Chrome
 
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
[/tests]
[/code-task]


 [/slide]