# Homework

[slide]

# Problem: Box Model Container

[vimeo-video]
[stream language="EN" videoId="431791702" default /]
[stream language="RO" videoId="446514844" /]
[/video-vimeo]

[code-task title="Problem: Box Model Container" taskId="ad6dd487-24e4-452f-8515-0769efa121c1" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Change the document title to **Box Model Container**
* Use **p** tag to create a paragraph
* Set the paragraph **width**: 200px;
* Set **padding** and **margin**
* Set **5px solid border** with **border-radius**
* Use **rgb(64, 224, 208)** color for the **background**
* Try to center the container with **margin: auto**

You can find an example view [here](https://i.imgur.com/YPecbHc.png)

You can download the resources [here](https://mega.nz/file/6U4j0K5D#bE77e7n5MZyQ_fuAKBPOHa6UOb9N27_3nLtSwQahIbw)

[/task-description]

[tests]
[test]
[input]
expect(document.title).to.equal("Box Model Container","Incorrect title name");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let p = $("body p");
expect(p).to.have.lengthOf(1,"Incorrect amount of p tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("p").css('background')).to.equal('rgb(64, 224, 208)', "Incorrect background color.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("p").css('border-width')).to.equal('5px', "Incorrect border width.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("p").css('border-style')).to.equal('solid', "Incorrect border-style");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Problem: Box Sizing

[vimeo-video]
[stream language="EN" videoId="431791778" default /]
[stream language="RO" videoId="446514840" /]
[/video-vimeo]

[code-task title="Problem: Box Sizing" taskId="3e91f1aa-9e58-43a6-948b-fa3701dbe74f" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Change the document title to **Box Sizing**
* Use **section** tag to create a section
* Use **h1** heading with content **Front End** in the section
* Use **paragraph** with content **I like HTML and CSS!** in the section
* The section has **width** 250px, **height** 250px and **border**
* The paragraph has **width 100%**, **border** and **padding 20px** on all sides

You can find an example view [here](https://i.imgur.com/Orafv63.png)

You can download the resources [here](https://mega.nz/file/TAAUTAKD#iXs0ItpkU43ToiWyF73hjc3kocY4y02_SDtZqIRo5Mc)

[/task-description]

[tests]
[test]
[input]
expect(document.title).to.equal("Box Sizing","Incorrect title name");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let section = $("body section");
expect(section ).to.have.lengthOf(1,"Incorrect amount of section tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let p = $("body section \> p");
expect(p).to.have.lengthOf(1,"Incorrect amount of p tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let h1 = $("body section \> h1");
expect(h1).to.have.lengthOf(1,"Incorrect amount of h1 tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("section").css('height')).to.equal('250px', "Incorrect section height.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("p").css('width')).to.equal('100%', "Incorrect paragraph width.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("html").css('box-sizing')).to.equal('inherit', "Incorrect box-sizing property.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Problem: Simple Article Page

[code-task title="Problem: Simple Article Page" taskId="d5147f27-86be-44a1-82cf-a9b754251da0" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Change the document title to **Simple Article Page**
* Use **article** tag to create an article
* **Divide** the article content into **header**, **section** and **footer** tags
* Use **background** with color - rgb(238, 238, 238)
* Use rgb(51, 51, 51) **color** for the text

You can find an example view [here](https://i.imgur.com/c3wG5rE.png) .

You can download the resources [here](https://mega.nz/file/icwz0BCb#y7UNCy8HPuB0qD_djk2EjzA9RZOOcZ-GtVmZnUrsy-g)

[/task-description]

[tests]
[test open]
[input]
expect(document.title).to.equal("Simple Article Page","Incorrect title name");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let article = $("body \> article");
expect(article).to.have.lengthOf(1,"Incorrect amount of article tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let header = $("body \> article \> header");
expect(header).to.have.lengthOf(1,"Incorrect amount of header tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let section = $("body \> article \> section");
expect(section).to.have.lengthOf(1,"Incorrect amount of section tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let footer = $("body \> article \> footer");
expect(footer).to.have.lengthOf(1,"Incorrect amount of footer tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("body").css('background')).to.equal('rgb(238, 238, 238)', "Incorrect background color.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let ul = $("body \> article \> section \> ul");
expect(ul).to.have.lengthOf(1,"Incorrect amount of ul tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let li = $("body \> article \> section \> ul li");
expect(li).to.have.lengthOf(5,"Incorrect amount of li tags.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("body").css('color')).to.equal('rgb(51, 51, 51)', "Incorrect text color.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Problem: Navigation Inline Block

[vimeo-video]
[stream language="EN" videoId="431791841" default /]
[stream language="RO" videoId="446514842" /]
[/video-vimeo]

[code-task title="Problem: Navigation Inline Block" taskId="00dc40db-2b53-4c0f-a883-0a116ec838ef" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Change the document title to **Navigation Inline Block**
* Use font-family **Helvetica, sans-serif**
* Divide your content into **header** and **main** tags
* Create a **navigation bar** 
* Add four **list** items in **nav** tag with **a** tags inside 
* Add **display: inline-block;** style for each item in the nav

You can find an example view [here](https://i.imgur.com/iN6xIbU.png) .

You can download the resources [here](https://mega.nz/file/uZxzDaRJ#CJ9QOWjUG_ayNIa0B3T51ZZLpxJAkRdNlKm0G_aHUDg)

[/task-description]

[tests]
[test open]
[input]
expect(document.title).to.equal("Navigation Inline Block","Incorrect title name");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let header = $("body \> header");
expect(header).to.have.lengthOf(1,"Incorrect amount of header tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let listItems = $("body \> header \> nav \> ul \> li ");
expect(listItems).to.have.lengthOf(4,"Incorrect amount of list items in the navigation bar.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let nav = $("body \> header \> nav");
expect(nav).to.have.lengthOf(1,"Incorrect amount of nav tags.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("html").css('font-family')).to.equal('Helvetica, sans-serif', "Incorrect font family.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let a = $("body \> header \> nav a");
expect(a).to.have.lengthOf(4,"Incorrect amount of a tags.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("nav").css('display')).to.equal('inline-block', "Incorrect navigation display property.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("li").css('display')).to.equal('inline-block', "Incorrect li items display property.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
[slide]

# Problem: Photo Gallery Inline Block

[vimeo-video]
[stream language="EN" videoId="431791578" default /]
[stream language="RO" videoId="446514843" /]
[/video-vimeo]

[code-task title="Problem: Photo Gallery Inline Block" taskId="5ca63611-d253-4c58-a887-a40ae0bca967" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Change the document title to **Photo Gallery Inline Block**
* Create **unordered list** with **class** gallery (ul.gallery) 
* Add **list items** with images inside
* The **list items** must have
* Border **width** - 0.4rem
* Border **color** - black
* Border **style** - solid

You can find an example view [here](https://i.imgur.com/1i4nU0x.png)

You can download the resources [here](https://mega.nz/file/SEJyTarD#VkQOABHPYEBCwUHE5O9YU3wL-P8rYfdSeT9m7LsItA4)

[/task-description]

[tests]
[test open]
[input]
expect(document.title).to.equal("Photo Gallery - Inline Block","Incorrect title name");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let ul = $("body ul");
expect(ul).to.have.lengthOf(1,"Incorrect amount of ul tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let img = $("body img");
expect(img).to.have.lengthOf(12,"Incorrect amount of img tags.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let li = $("body ul li");
expect(li).to.have.lengthOf(12,"Incorrect amount of li tags.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let gallery = $(".gallery");
expect(gallery).to.have.lengthOf(1,"Incorrect amount of ul tag with class gallery.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("li").css('display')).to.equal('inline-block', "Incorrect display property to the list items.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
