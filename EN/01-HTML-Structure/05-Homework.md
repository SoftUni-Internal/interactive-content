# Homework

[slide]

# Problem: Semantic-Tags

[vimeo-video]
[stream language="EN" videoId="431783399" default /]
[stream language="RO" videoId="445222425" /]
[/video-vimeo]

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

[slide]

# Problem: Semantic Article Page

[vimeo-video]
[stream language="EN" videoId="431783485" default /]
[stream language="RO" videoId="445222424" /]
[/video-vimeo]

[code-task title="Problem: Semantic Article Page" taskId="319b556a-3251-456b-824e-bd52a19f1b5a" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Create an index.html file with **Semantic Article Page** title
* Follow the instructions
* Use **article** tag to create an article
* The article has header with **h1** heading and a **paragraph** for the Published date inside
* Use **p** tag to create 3 paragraphs after the **header**. The paragraphs contain the article content (info for apple). Use **b** tags where it is needed.     
* After that, you have to create the Comment section. Use **section** tag to create it. This section has **h2** heading and **two articles** inside    
* Each article contains a comment and has:    
* **Header** with an **h3** heading and a **paragraph** for the time
* Exactly one **paragraph** for the comment  

You can find an example view [here](https://i.imgur.com/VZ3G7ds.png)
You can download the resources [here](https://mega.nz/file/DJZl2S4I#0VTmensITgR8ApVDNo9a2TLvNKNjHoNXbYM3oqu-uIE)

[/task-description]

[tests]
[test open]
[input]
let title = (document.title);
expect(title).to.be.equal('Semantic Article Page', "Incorrect title name.")
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let article = $("body \> article");
expect(article).to.have.lengthOf(1, "Incorrect amount of article tag.")
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let h1 = $("h1");
expect(h1).to.have.lengthOf(1, "Incorrect amount of h1 tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let section = $("body \> section \> article");
expect(section).to.have.lengthOf(2, "Incorrect amount of section tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let article = $("article");
expect(article).to.have.lengthOf(3, "Incorrect amount of article tags.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let h3 = $("section \> article \> header \> h3");
expect(h3).to.have.lengthOf(2, "Incorrect amount of h3 tags.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let p = $("p");
expect(p).to.have.lengthOf(8, "Incorrect amount of p tags.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let b = $("b");
expect(b).to.have.lengthOf(1, "Incorrect amount of b tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let p = $("body \> article \> p");
expect(p).to.have.lengthOf(3, "Incorrect amount of p tags.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Problem: Semantic Blog Layout

[vimeo-video]
[stream language="EN" videoId="431783656" default /]
[stream language="RO" videoId="445222422" /]
[/video-vimeo]

[code-task title="Problem: Semantic Blog Layout" taskId="a122986d-aed8-406f-8484-4e0077433c49" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Create an index.html file with **Semantic Blog Layout** title
* First use **header** tag
* Use **h1** tag for the heading
* Use **nav** tag for the navigation with an unordered list inside
* Create two **list** items with **anchor** tags inside the nav
* Second use **main** tag    
* Create two **sections** in the main. Each section has:
* A header with an **h2** heading
* Two articles with **h4** heading and three **p** tags inside
* For the dates use **time** tag
* Third use **footer** tag with exacly two paragraphs inside
* Use **anchor** tag for the name in the last sentence

You can find an example view [here](https://i.imgur.com/2nzQn8u.png)

You can download the resources [here](https://mega.nz/file/mAxW3A6T#bny_dYSk5pF4JsXJCTLjecwbh3N_VJM8CeW_VFDWx5g)

[/task-description]

[tests]
[test open]
[input]
let title = (document.title);
expect(title).to.be.equal('Semantic Blog Layout', "Incorrect title name.")
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
let h1 = $("body \> header \> h1");
expect(h1).to.have.lengthOf(1, "Incorrect amount of h1 tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let nav = $("body \> header \> nav");
expect(nav).to.have.lengthOf(1, "Incorrect amount of nav tag in header.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let ul = $("body \> header \> nav \> ul");
expect(ul).to.have.lengthOf(1, "Incorrect amount of ul tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let a = $("body \> header \> nav \> ul \> li a");
expect(a).to.have.lengthOf(2, "Incorrect amount of a tags.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let section = $("body \> main \> section");
expect(section).to.have.lengthOf(2, "Incorrect amount of section tags.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let article = $("body \> main \> section article");
expect(article).to.have.lengthOf(4, "Incorrect amount of article tags in section.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let time = $("body \> main \> section \> article time");
expect(time).to.have.lengthOf(4, "Incorrect amount of time tags in main.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let a = $("body \> footer a");
expect(a).to.have.lengthOf(1, "Incorrect amount of a tag in footer.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Problem: Semantic Tables

[vimeo-video]
[stream language="EN" videoId="431784098" default /]
[stream language="RO" videoId="445222429" /]
[/video-vimeo]

[code-task title="Problem: Semantic Tables" taskId="1a76ca0d-45a5-449f-a191-b57600b4a08b" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Create an index.html file with **Semantic Tables** title
* Use **h1** tag for heading
* Use **table** tag to create a table
* Use **thead** tag for table head
* Use **tbody** tag for table body
* Use **tfoot** tag for table footer
* Use **tr** tag for rows
* Use **th** and **td** tags for columns

You can find an example view [here](https://i.imgur.com/ynL1Z62.png)

You can download the resources [here](https://mega.nz/file/yA5CjYzA#XIxxNTzti9_h3k-igNY2LSHFvBoBOstZg2EAxGnnI8U)

[/task-description]

[tests]
[test open]
[input]
let title = (document.title);
expect(title).to.be.equal('Semantic Tables', "Incorrect title name.")
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let h1 = $("body").find("h1");
expect(h1).to.have.lengthOf(1,"Incorrect amount of h1 tag.");
expect(h1.text()).to.include("Diary","Incorrect text in h1 tag.");
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
let thead = $("body \> table \> thead");
expect(thead).to.have.lengthOf(1,"Incorrect amount of thead tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let tbody = $("body \> table \> tbody");
expect(tbody).to.have.lengthOf(1,"Incorrect amount of tbody tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let tfoot = $("body \> table \> tfoot");
expect(tfoot).to.have.lengthOf(1,"Incorrect amount of tfoot tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let th = $("body \> table \> thead \> tr \> th");
expect(th).to.have.lengthOf(6,"Incorrect amount of th tags.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let tr = $("body \> table \> tbody \> tr");
expect(tr).to.have.lengthOf(3,"Incorrect amount of tr tags in tbody.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let tr = $("body \> table tr");
expect(tr).to.have.lengthOf(5,"Incorrect amount of tr tags in the table.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let tr = $("body \> table \> tfoot \> tr");
expect(tr).to.have.lengthOf(1,"Incorrect amount of tr tag in tfoot.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let td = $("body \> table \> tbody \> tr td");
expect(td).to.have.lengthOf(18,"Incorrect amount of td tags in tbody.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Problem: Tags Cardio - DataTable

[code-task title="Problem: Tags Cardio - DataTable" taskId="577b8f22-44cb-4b4b-9a25-ad9661ffbb3a" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Change the document **title** to **Simple Data Table**
* Use **h2** tag for heading
* Use **table**, **thead**, and **tbody** tags to create table 
* Use **tr** tag for rows
* Use **th** and **td** tags for columns

You can find an example view [here](https://i.imgur.com/fpTEm46.png) .

You can download the resources [here](https://mega.nz/file/XFxmgIbZ#DnaoFqIPEIQ_z1AAwEt1VIBKMqUe7VA0b6nBDm8Yzaw)

[/task-description]

[tests]
[test open]
[input]
expect(document.title).to.equal("Simple Data Table","Incorrect title name.");
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
let th = $("body \> table \> thead \> tr \> th");
expect(th).to.have.lengthOf(3, "Incorrect amount of th tags.")
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let tr = $("body \> table \> tbody \> tr");
expect(tr).to.have.lengthOf(6,"Incorrect amount of tr tags in the tbody.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("body \> table \> tbody  tr:last-of-type  td:first-child").text()).to.include("Magazzini Alimentari Riuniti","Incorrect text in td tag in the tbody.");
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
[test]
[input]
let thead = $("body \> table \> thead");
expect(thead).to.have.lengthOf(1,"Incorrect amount of thead tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let tbody = $("body \> table \> tbody");
expect(tbody).to.have.lengthOf(1,"Incorrect amount of tbody tag.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Problem: Tags Cardio - Forms

[code-task title="Problem: Tags Cardio - Forms" taskId="6322d59e-a1e3-4091-85bf-e6ead192e1d1" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Change the document **title** to **Forms**
* Use a **form** tag
* Use a **fieldset** tag with legend - **Customer Details**
* Each **input** tag should have a **label** and should be inside a **div**
* The **first** input field must be **focused**
* The **3rd** and the **4th** input rows should be of **type="radio"**
* The **5th** input tag should be of **type="email"** 
* The **7th** label should have **select** tag and **option** tags with the city name values
* The **8th** label should have **input** tag with **type="number"** (with **min** value - 18 and **max** value - 70)
* The **9th** label should have **datalist** tag and **option** tags with the languages type value
* The **10th** label should have **textarea** tag with **5 rows** and **20 columns**
* The **11th** label should have **input** tag with **type="checkbox"** that is **checked**
* The **12th** label should have **input** tag with **type="submit"** 
* The **placeholders** are obligatory

You can find an example view 1 [here](https://i.imgur.com/Tmmlrr4.png)

You can find an example view 2 [here](https://i.imgur.com/XzGp5i1.png)

You can find an example view 3 [here](https://i.imgur.com/lTJkhf4.png)

You can download the resources [here](https://mega.nz/file/2RoBVJCK#h1WFPtz8tWg9ybzso5-13x2IqkACqQW5i9dmUPT_MeU)

[/task-description]

[tests]
[test open]
[input]
expect(document.title).to.equal("Forms","Incorrect title name");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let form = $("body \> form");
expect(form).to.have.lengthOf(1, "Incorrect amount of form tag.")
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let legend = $("body \> form \> fieldset \> legend");
expect(legend).to.have.lengthOf(1, "Incorrect amount of legend tag.")
expect(legend.text()).to.include("Customer Details","Incorrect text in the legend.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let datalist = $("body form datalist");
expect(datalist).to.have.lengthOf(1, "Incorrect ammount of datalist tag.")
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let textarea = $("body form textarea");
expect(textarea).to.have.lengthOf(1, "Incorrect amount of textarea tag.")
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let radio = $("body form input\[type='radio'\]");
expect(radio).to.have.lengthOf(5, "Incorrect amount of input tags with type: radio.")
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let areaPlaceholder = $("body form textarea\[placeholder = 'More information...'\]");
expect(areaPlaceholder).to.have.lengthOf(1,"Incorrect placeholder in textarea tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let textareaRows= $("body form textarea\[rows = '5'\]");
expect(textareaRows).to.have.lengthOf(1,"Incorrect amount of rows in textarea.")
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let email = $("body form input\[type='email'\]");
expect(email).to.have.lengthOf(1, "Incorrect input type.")
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let number = $("body form input\[type='number'\]\[min='18'\]");
expect(number).to.have.lengthOf(1, "Incorrect min value in input field.")
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Problem: Navigation Bar

[vimeo-video]
[stream language="EN" videoId="431757741" default /]
[stream language="RO" videoId="445205896" /]
[/video-vimeo]

[code-task title="Problem: Navigation Bar" taskId="a77b7efb-944f-414f-9f83-415cc8dd7968" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Change the document **title** to **Navigation Bar**
* Use **nav** tag as container
* The constraints for the **body** are:
* **Margin**: 0px;
* **Padding**: 0px;
* **Background Color**: rgb(255, 255, 255);
* Use **ul** tag for unordered list, with the following constraints:
* **Background Color**: rgb(68, 68, 68);
* **Center** the text
* **Padding**: 0px;
* **Margin**: 0px;
* **list-style**:none;
* Use **li** tag for list item, with the following constraints:
* **Text size**: 24px;
* **Line Height**: 40px;
* **Height**: 40px;
* **Padding**: 20px;
* Use **a** tag for hyperlink, with the following constraints:
* **Text decoration**: none;
* **Text-Color**: rgb(255,255,255);

You can find an example view [here](https://i.imgur.com/sMHAFNc.png)

You can download the resources [here](https://mega.nz/file/fEwFCAQa#XAZX8hRAOTmTxDzI5Tm2IS7jlJ0Kmt6mWvkCZngnEEs)

[/task-description]

[tests]
[test open]
[input]
expect(document.title).to.equal("Navigation Bar","Incorrect title name");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let nav = $("body \> nav");
expect(nav).to.have.lengthOf(1, "Incorrect amount of nav tag.")
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let li = $("body \> nav \> ul \> li");
expect(li).to.have.lengthOf(5, "Incorrect amount of li tag.")
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("body").css("background-color")).to.equal("rgb(255, 255, 255)", "Incorrect body background-color.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("ul").css("background-color")).to.equal("rgb(68, 68, 68)", "Incorrect ul background-color.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("li").css("font-size")).to.equal("24px", "Incorrect font size of the li items.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Problem: Page Content

[vimeo-video]
[stream language="EN" videoId="431757771" default /]
[stream language="RO" videoId="445205897" /]
[/video-vimeo]

[code-task title="Problem: Page Content" taskId="31c07ec9-c837-4c1a-819e-32a631c86521" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Change the document **title** to **Page Content**
* Use a **section** as a container
* Use an **article** tag for content
* Use **header** with:
* **h1** with **Text size**: 28px;
* **p** with **Font Style**: italic;
* Use Paragraph with:
* **Text size**: 24px;
* The **body** should have: 
* **Margin**: 0px;
* **Padding**: 0px;
* **Background color**: rgb(204,204,204);
* The **section**:
* **Margin**: 20px;

You can find an example view [here](https://i.imgur.com/cMAgFJi.png)

You can download the resources [here](https://mega.nz/file/GM51RTQT#h9K9i1kAsRtmruXOQcZzQDSPzI7bShNzb97OvyKyUFw)

[/task-description]

[tests]
[test open]
[input]
expect(document.title).to.equal("Page Content","Incorrect title name");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let article = $("body \> section \> article");
expect(article).to.have.lengthOf(2, "Incorrect amount of article tag.")
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
let p = $("body p");
expect(p).to.have.lengthOf(4, "Incorrect amount of p tag.")
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("h1").css("font-size")).to.equal("28px", "Incorrect h1 font-size.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("header p").css("font-style")).to.equal("italic", "Incorrect paragraph font style.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Problem: Simple Website

[vimeo-video]
[stream language="EN" videoId="431757799" default /]
[stream language="RO" videoId="445205898" /]
[/video-vimeo]

[code-task title="Problem: Simple Website" taskId="1109245d-538f-4c66-886a-dbe901f9e720" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Use the html and css from previous two problems
* Use **Footer**, with the following constraints
* **Background color**: rgb(68,68,68);
* Use **p** tag for text in footer
* **Text Color**: rgb(255,255,255);
* **Center** the text

You can find an example view [here](https://i.imgur.com/ZUPBhr3.png)

[/task-description]

[tests]
[test open]
[input]
let footer = $("body \> footer");
expect(footer).to.have.lengthOf(1, "Incorrect amount of footer tag.")
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let p = $("body \> footer \> p");
expect(p).to.have.lengthOf(1, "Incorrect amount of p tag in footer.")
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("footer").css("background-color")).to.equal("rgb(68, 68, 68)", "Incorrect footer background-color.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
