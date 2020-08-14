# Homework

[slide]
# How to Submit your Solution for a Problem

* **Create** your **HTML** document and write the content of the problem in it;
* **Create** your **CSS** file;
* **Include link** to your **CSS** file **in the HTML** document: `<link rel="stylesheet" href="./style.css">` ;
* **Write** your **CSS code**;
* When you are ready with the solution, **zip both files** (`index.html and style.css`) and **upload** your `.zip` file in the platform.

**Note:** Be careful, because the uploaded file must be of **type zip**! .rar or .7zip will **NOT** be accepted!

[/slide]

[slide]
# Problem: Simple HTML Page

[vimeo-video]
[stream language="EN" videoId="431749775" default /]
[stream language="RO" videoId="444869128" /]
[/video-vimeo]

[code-task title="Simple HTML Page" taskId="c71fd240-cf92-43e1-95db-d79255ead525" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]
## Description

* Create a HTML document.
* Change the document **title** to *Simple HTML Page* 
* Use **paragraph** tag for plain text and **strong** tag for bold text

You can find an example view [here](https://i.imgur.com/k58mFsI.png)

[/task-description]

[tests]
[test]
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
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("strong")).to.have.lengthOf(2,"Incorrect amount of strong tags.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($(document.body).find("strong").text()).to.include("CSS","Incorrect text in strong tag.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide]

# Problem: Tags Cardio Paragraphs

[vimeo-video]
[stream language="EN" videoId="431778712" default /]
[stream language="RO" videoId="444876832" /]
[/video-vimeo]

[code-task title="TagsCardio-Paragraphs" taskId="54728b5a-74cd-4128-bbcc-ae48f9b61be4" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Create a HTML document.
* Change the document **title** to *Paragraphs*
* Use the **h1** tag for heading
* Use **p** tags for each line of the text
* See the screenshot and use **strong** and **em** tags where needed

You can find an example view [here](https://i.imgur.com/r2uiWda.png)

You can download the resources [here](https://mega.nz/file/3Qp2hQTT#uc-eYG1FPqQ5sm9sKl4XIqJRUVcA6tAoNvBuhtPwJ4Q)

[/task-description]

[tests]
[test open]
[input]
let title = document.title;
expect(title).to.equal("Paragraphs","Incorrect title name");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let p = $(document.body).find("p");
expect(p).to.have.lengthOf(11,"Incorrect amount of p tags.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($(document.body).find("p").text()).to.include("This page draws on published","Incorrect text in paragraph");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let strong = $(document.body).find("strong");
expect(strong).to.have.lengthOf(10,"Incorrect amount of strong tags.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let em = $(document.body).find("em");
expect(em).to.have.lengthOf(3,"Incorrect amount of em tags.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let header = $(document.body).find("h1");
expect(header).to.have.lengthOf(1,"Incorrect amount of h1 tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($(document.body).find("h1").text()).to.include("Top Tips for Effective Presentations","Incorrect text in h1 tag.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Problem: Single Article Page 

[vimeo-video]
[stream language="EN" videoId="431783216" default /]
[stream language="RO" videoId="444876835" /]
[/video-vimeo]

[code-task title="Single Article Page " taskId="99d9c4dc-4e2b-45fb-ba21-351551e15cdf" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Create a HTML document.
* Change the document **title** to *Single Article Page*
* Create an **article** with several items inside
* Use **h2** and **h4** tags for headings
* Use **p** tags for the text
* Use **img** tag for the photo

You can find an example view [here](https://i.imgur.com/OFIZzEc.png)

You can download the resources [here](https://mega.nz/file/udoAHCBI#m0lErwm3xJFfHmtX2tTc0Xs17p4G6xrL04bFL-6ST2g)

[/task-description]

[tests]
[test open]
[input]
expect(document.title).to.equal("Single Article Page","Incorrect title name");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("article")).to.have.lengthOf(1,"Incorrect amount of article.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("h2")).to.have.lengthOf(1,"Incorrect amount of h2 tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("h4")).to.have.lengthOf(1,"Incorrect amount of h4 tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("p")).to.have.lengthOf(2,"Incorrect amount of p tags.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("img")).to.have.lengthOf(1,"Incorrect amount of img tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($(document.body).find("h2").text()).to.include("Egyptian Mau","Incorrect text in h2 tag.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Problem: Tags Cardio - Lists

[vimeo-video]
[stream language="EN" videoId="431783303" default /]
[stream language="RO" videoId="444876838" /]
[/video-vimeo]

[code-task title="Tags Cardio - Lists" taskId="74d19b02-e0c8-47dd-826f-c71e099967a2" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Create HTML document
* Change the document **title** to *Lists*
* Add section with two articles inside (for each list)
* Each article must have a **h2** heading
* Use **ul** for unordered list
* Add four list items
* Use **ol reversed** for ordered reversed list
* Add three **list** items

You can find an example view [here](https://i.imgur.com/wU3Sxjy.png)

You can download the resources [here](https://mega.nz/file/HY4jxA5L#KUt-Q7VkYnFKmCLT8Xb8oE7AcJhvqbp5Fppbc6O7giY)

[/task-description]

[tests]
[test open]
[input]
let title = document.title;
expect(title).to.equal("Lists","Incorrect title name");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let section = $(document.body).find("section");
expect(section).to.have.lengthOf(1,"Incorrect amount of section tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let article = $(document.body).find("article");
expect(article).to.have.lengthOf(2,"Incorrect amount of article tags.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let ul = $("body \> section \> article \> ul");
expect(ul).to.have.lengthOf(1,"Incorrect amount of ul tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let ol = $("body \> section \> article \> ol\[reversed\]");
expect(ol).to.have.lengthOf(1,"Incorrect amount of ol tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let li= $("body \> section \> article \> ul \> li");
expect(li).to.have.lengthOf(4,"Incorrect amount of li tags.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let li = $("body \> section \> article \> ol \> li");
expect(li).to.have.lengthOf(3,"Incorrect amount of li tags.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let articles = $("body \> section \> article");
expect(articles).to.have.lengthOf(2,"Incorrect amount of article tags.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let heading = $(document.body).find("h2");
expect(heading).to.have.lengthOf(2,"Incorrect amount of h2 tag.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Problem: Tags Cardio - Nested Lists

[vimeo-video]
[stream language="EN" videoId="431749705" default /]
[stream language="RO" videoId="444869130" /]
[/video-vimeo]

[code-task title="Tags Cardio - Nested Lists" taskId="0fd6a4ba-4dfb-494d-a5ed-2aa9a9e6b652" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Create a HTML document
* Change the document **title** to *Nested Lists*
* Use **h2** tag for heading
* Use different types for **ordered** and **unordered** lists
* See the screenshot and use different type attribute as **circle**, **disc** etc. 

You can find an example view [here](https://i.imgur.com/TenhpeD.png)

You can download the resources [here](https://mega.nz/file/3ZQ0FaRR#vAK8zZHSkuCr8Q9eievu2o5Gk-Z_Wqiwt4MHtOb0hQo)

[/task-description]

[tests]
[test open]
[input]
let title = document.title;
expect(title).to.equal("Nested Lists","Incorrect title name");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let ol = $(document.body).find("ol");
expect(ol).to.have.lengthOf(3,"Incorrect amount of ol tags.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($(document.body).find("h2").text()).to.include("Nested List","Incorrect text in h2 tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let li = $(document.body).find("li");
expect(li).to.have.lengthOf(23,"Incorrect amount of li tags.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let header = $("body").find("h2");
expect(header).to.have.lengthOf(1,"Incorrect amount of h2 tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($(document.body).find("h2").text()).to.include("Nested List","Incorrect text in h2");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let attribute = $("body ul\[type='disc'\]");
expect(attribute).to.have.lengthOf(1, "Incorrect type of ul tag.")
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let attribute = $("body ul\[type='circle'\]");
expect(attribute).to.have.lengthOf(1, "Incorrect type of ul tag.")
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Problem: Tags Cardio - Table

[vimeo-video]
[stream language="EN" videoId="431780276" default /]
[stream language="RO" videoId="444876834" /]
[/video-vimeo]

[code-task title="Tags Cardio - Table" taskId="d1cb2a6b-64b9-4589-8c5e-3852f952588d" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Create a HTML document
* Change the document **title** to *Checkout table*
* Use **h2** tag for heading
* Use **table** tag to create a table
* Use **tr** tag for rows
* Use **th** and **td** tags for columns 
* Use **span** tag with value **checked** for checked items

You can find an example view [here](https://i.imgur.com/kWf4KPN.png)

You can download the resources [here](https://mega.nz/file/XJJXmALY#wasQcGhrShimGMS95NX7ZtxKbRtEunlVM0mHBdWRPqk)

[/task-description]

[tests]
[test open]
[input]
expect(document.title).to.equal("Checkout table","Incorrect title name");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let h2 = $("body").find("h2");
expect(h2).to.have.lengthOf(1,"Incorrect amount of h2 tag.");
expect(h2.text()).to.include("HTML Table","Incorrect text in h2 tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let table = $("body \> table");
expect(table).to.have.lengthOf(1,"Incorrect amount of table tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let tr = $("table").find("tr");
expect(tr).to.have.lengthOf(7,"Incorrect amount of tr tags.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let span = $('body').find('span');
expect(span).to.have.length(3, "Incorrect amount of span tags.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let th = $("body \> table tr:first-child \> th");
expect(th).to.have.lengthOf(3, "Incorrect ammount of th tags.")
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let td = $("body \> table tr:last-of-type \> td");
expect(td).to.have.lengthOf(3,"Incorrect amount of td tags.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("body \> table  tr:first-child  th:first-child").text()).to.include("Name","Incorrect text in th tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("body \> table  tr:last-of-type  td:last-of-type").text()).to.include("Italy","Incorrect text in td tag.")
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Problem: Wiki Page

[vimeo-video]
[stream language="EN" videoId="431749880" default /]
[stream language="RO" videoId="444869131" /]
[/video-vimeo]

[code-task title="Wiki Page" taskId="013018fb-27bb-4949-ba4b-d569871c9e00" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Create a **Web Page**
* Change the document **title** to **The Brown Bear**
* Use **h1** for heading
* Hyperlink: https://en.wikipedia.org/wiki/Brown_bear
* Text: use **paragraph**
* List: use **ordered list** and **unordered list**


You can find an example view [here](https://i.imgur.com/wiaKXp1.png)

You can download the resources [here](https://mega.nz/file/DdY13YJb#ouZRgCPvvaY__R3-UaVhI8le6DumAWOj8hEUETNh3JI)

[/task-description]

[tests]
[test open]
[input]
expect(document.title).to.equal("The Brown Bear","Incorrect title name");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let h1 = $("body").find("h1");
expect(h1).to.have.lengthOf(1,"Incorrect amount of h1 tag.");
expect(h1.text()).to.include("The Brown Bear","Incorrect text in h1 tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let a = $("body").find("a");
expect(a).to.have.lengthOf(1,"Incorrect amount of a tag.");
expect(a.text()).to.include("Learn More","Incorrect text in a tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let ul = $("body").find("ul");
expect(ul).to.have.lengthOf(1,"Incorrect amount of ul tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let ol = $("body").find("ol");
expect(ol).to.have.lengthOf(1,"Incorrect amount of ol tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let li = $("body").find("li");
expect(li).to.have.lengthOf(7,"Incorrect amount of li tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let img = $("body").find("img");
expect(img).to.have.lengthOf(1,"Incorrect amount of img tag.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]

[/slide]

[slide]
# Problem: Todo List

[vimeo-video]
[stream language="EN" videoId="431749750" default /]
[stream language="RO" videoId="444869127" /]
[/video-vimeo]

[code-task title="Todo List" taskId="4f94f3a4-9b35-47a3-8747-30f286f04287" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Change the document **title** to **to-do-list**
* Use **div** tag with **class="my-list"** as container
* **Background color**: #f7f381;
* **Padding**: 8px 24px;
* **Width**: 500px;
* **Text size**: 30px;
* **Border**: 1px solid #f7f381;
* **Background Color**: #f7f381;
* **box-shadow**: 0 0 10px 2px #333333;
* Use **ol** tag
* **Margin**: 12px;
* Use **p** tag
* Center the text

You can find an example view [here](https://i.imgur.com/pgYsLCn.png)

You can download the resources [here](https://mega.nz/file/7NBkjSwL#A576TCCkT_eHYZ-4H4NA1iUpBymyWwK2ULVxNLGwI7s)

[/task-description]

[tests]
[test open]
[input]
expect(document.title).to.equal("to-do-list","Incorrect title name");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let div = $("body").find("div");
expect(div).to.have.lengthOf(1,"Incorrect amount of div tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let p = $("body").find("p");
expect(p).to.have.lengthOf(1,"Incorrect amount of p tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let h1 = $("body").find("h1");
expect(h1).to.have.lengthOf(1,"Incorrect amount of h1 tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let ol = $("body").find("ol");
expect(ol).to.have.lengthOf(1,"Incorrect amount of ol tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let li = $("body").find("li");
expect(li).to.have.lengthOf(6,"Incorrect amount of li tag.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]

[/slide]

