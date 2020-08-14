# Homework

[slide]

# Problem: My First CSS Document

[vimeo-video]
[stream language="EN" videoId="431784598" default /]
[stream language="RO" videoId="445529735" /]
[/video-vimeo]

[code-task title="Problem: My First CSS Document" taskId="82450ec0-5224-4ad9-bff1-9c1e81a07dbb" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Change the document title to "My First CSS Document"
* Use h1 and h2 tags for headings
* Use background with color - rgb(51, 102, 153)
* Use white color for text


You can find an example view [here](https://i.imgur.com/zQabaWw.png)

You can download the resources [here](https://mega.nz/file/KRhlGKrT#SIRHX5heH3biQhXWfhiD717QRhzHsXC55qGqFaqLi3U)

[/task-description]

[tests]
[test open]
[input]
expect(document.title).to.equal("My First CSS Document","Incorrect title name");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("body").css("background")).to.equal("rgb(51, 102, 153)", "Incorrect background color.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let h1 = $("body > h1");
expect(h1).to.have.lengthOf(1,"Incorrect amount of h1 tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("body").css("color")).to.equal("white", "Incorrect text color.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let p = $("body p");
expect(p).to.have.lengthOf(5,"Incorrect amount of paragraphs.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let h2 = $("body > h2");
expect(h2).to.have.lengthOf(1,"Incorrect amount of h2 tag.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Problem: Style Lists

[code-task title="Problem: Style Lists" taskId="dc210cfe-0179-49f0-b2a2-6123084d14c2" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Change the document **title** to **Style Lists**
* Use **font-family**: Helvetica, sans-serif, with **font-size**: 16px and line-height: 1.5
* Add **section** with two **articles** inside (for each list)
* Each article must have a **h2** heading
* Use **ul** for unordered list
* Add 4 **list items**
* Use **ol** **reversed** for ordered reversed list
* Add 3 **list items**

You can find an example view [here](https://i.imgur.com/BPOf8LA.png)

You can download the resources [here](https://mega.nz/file/mUJ0gApA#QyX07cidXa4oge1IZd12t1PhP_Ja2x7R_JKUkq1VtRA)

[/task-description]

[tests]
[test open]
[input]
expect(document.title).to.equal("Style Lists","Incorrect title name");
[/input]
[output]
yes
[/output]
[/test]
[test open]
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
let ol = $("body \> section \> article \> ol\[reversed\]");
expect(ol).to.have.lengthOf(1,"Incorrect amount of ol tag. tag.");
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
expect($("html").css('font-size')).to.equal('16px', "Incorrect font size.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("html").css('line-height')).to.equal('1.5', "Incorrect line height.");
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

# Problem: Styling Tables

[vimeo-video]
[stream language="EN" videoId="431784201" default /]
[stream language="RO" videoId="445529736" /]
[/video-vimeo]

[code-task title="Problem: Styling Tables" taskId="c456515b-5d4d-4e5e-82dd-213559a00a8d" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Change the document **title** to **Styling Tables**
* Use **table** tag
* Use **thead** and **tbody** tags
* Style the **td** tags inside the **odd tr** tags with **background**: rgb(241, 241, 241)
* The **table**, **td** and **th** tags must have
* Border **width** - 1px
* Border **color** - rgb(221, 221, 221)
* Border **style** - solid
* When you **hover** the table row, the following styles must be updated:
* **Background**: rgb(0, 0, 0)
* Text **color**: rgb(255, 255, 255)

You can find an example view 1 [here](https://i.imgur.com/bC7mxyj.png)

You can find an example view 2 [here](https://i.imgur.com/qFL57H5.png)

You can download the resources [here](https://mega.nz/file/uZJXBAyJ#2sBfBmdhgWIRnOIXLtZCUwt0nwMeWw-BL3Oh6O9-yH0)

[/task-description]

[tests]
[test open]
[input]
expect(document.title).to.equal("Styling Tables","Incorrect title name");
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
let table = $("body table");
expect(table).to.have.lengthOf(1,"Incorrect amount of table tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let thead = $("table thead");
expect(thead).to.have.lengthOf(1,"Incorrect amount of thead tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let tbody = $("body tbody");
expect(tbody).to.have.lengthOf(1,"Incorrect amount of tbody tag.");
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
expect($("table thead td").css('text-align')).to.equal('left', "Incorrect text align.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("table tr:nth-child(odd)").css('background')).to.equal('rgb(241, 241, 241)', "Incorrect background color.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("table").css('border-width')).to.equal('1px', "Incorrect border width.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("th").css('border-width')).to.equal('1px', "Incorrect border width.")
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("table th").css('border-color')).to.equal('rgb(221, 221, 221)', "Incorrect td background color.")
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("table td").css('border-style')).to.equal('solid', "Incorrect border style.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Problem: Buttons

[vimeo-video]
[stream language="EN" videoId="431784275" default /]
[stream language="RO" videoId="445529737" /]
[/video-vimeo]

[code-task title="Problem: Buttons" taskId="2f4271bf-520a-4dc5-9fe6-83b440dbd290" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Create an **"index.html"** file with title - **Buttons CSS**
* Use **h2** tag for headings
* Create nine buttons on three rows with class **button**
* All buttons should have **cursor** pointer
* For the first button in each row use **a** tag
* For the next two buttons in the row use **button** tags
* The buttons in the second and the third row should have class - **fill**
* Every last button in the row should have class - **hover**
* You must use the following three colors: green(**rgb(0, 102, 0)**), white(**rgb(251, 251, 251)**) and gray(**rgb(51, 51, 51)**)
* Use **fontawesome** for this task. Import it in your css, with the **@import** rule

You can find an example gif [here](https://i.imgur.com/YLkbuxO.gif)

You can download the resources [here](https://mega.nz/file/fNpFmaSL#2t_KPboaPK6AElrkL-tChF4YJ-Kgd0HCIUstRGm1wiQ)

[/task-description]

[tests]
[test open]
[input]
expect(document.title).to.equal("Buttons CSS","Incorrect title name");
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
let h2 = $("body h2");
expect(h2).to.have.lengthOf(3,"Incorrect amount of h2 tags.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let a = $("body a");
expect(a).to.have.lengthOf(3,"Incorrect amount of a tags.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let button = $("body button");
expect(button).to.have.lengthOf(6,"Incorrect amount of button tags.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let button = $("body .hover");
expect((button).css('color')).to.equal('rgb(51, 51, 51)', "Incorrect button text color.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let button = $(".button.fill.hover");
expect((button).css('color')).to.equal('rgb(251, 251, 251)', "Incorrect text color.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
[slide]

# Problem: Fonts Speciment

[vimeo-video]
[stream language="EN" videoId="431784403" default /]
[stream language="RO" videoId="445529739" /]
[/video-vimeo]

[code-task title="Problem: Fonts Speciment" taskId="8537fe9d-9c33-4d1e-833b-4ff179ba0c27" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Create an **index.html** file with **Fonts Speciment** title 
* Use **Lato, sans-serif**  font-family for the document
* Make the **font-size** 16px
* Change the **line-height** to 1.5
* Use **Cormorant, serif** font-family for the headings	
* Change the **line-height** to 1.2
* Change the font weight to **bold**


You can find an example view [here](https://i.imgur.com/UX2jHmQ.png)

You can download the resources [here](https://mega.nz/file/GMokEQKI#5rh0TQUMAdcDsNFg7NcY4VNjXeyEiraXiJZlXkgVpgg)

[/task-description]

[tests]
[test open]
[input]
expect(document.title).to.equal("Fonts Speciment","Incorrect title name");
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
let ul = $("ul");
expect(ul).to.have.lengthOf(3,"Incorrect amount of ul tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let listItems = $("body ul li");
expect(listItems).to.have.lengthOf(9,"Incorrect amount of li tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let li = $("body ol \> li");
expect(li).to.have.lengthOf(3,"Incorrect amount of list items in ordered list.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("html").css('font-family')).to.equal('Lato, sans-serif', "Incorrect font family.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("html").css('font-size')).to.equal('16px', "Incorrect font size.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("html").css('line-height')).to.equal('1.5', "Incorrect line height.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("body h1").css('line-height')).to.equal('1.2', "Incorrect line height.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("body h1").css('font-family')).to.equal('Cormorant, serif', "Incorrect font family for headings.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("body h2").css('font-weight')).to.equal('bold', "Incorrect font weight for headings.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Problem: Fonts Speciment Part 2

[code-task title="Problem: Fonts Speciment Part 2" taskId="c01f3963-56d5-45b6-8524-645b719e9dd0" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Create an **index.html** file with **Fonts Speciment Part 2** title. (You can use the content of the previous task.)
* Use **Raleway, sans-serif**  font-family for the document
* Make the **font-size** 16px
* Change the **line-height** to 1.5
* Use **Great Vibes**, cursive **font-family** for the headings
* Change the **line-height** to 1.2
* Change the **font-weight** to bold


You can find an example view [here](https://i.imgur.com/Fx0LTEC.png)

You can download the resources [here](https://mega.nz/file/CBYSDaaA#IO0HwciNW-4Xz2SvkFub4SO9Vms6kZVtb4ir5kjUQ54)

[/task-description]

[tests]
[test open]
[input]
expect(document.title).to.equal("Fonts Speciment Part 2","Incorrect title name");
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
let ul = $("ul");
expect(ul).to.have.lengthOf(3,"Incorrect amount of ul tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let listItems = $("body ul li");
expect(listItems).to.have.lengthOf(9,"Incorrect amount of li tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let li = $("body ol \> li");
expect(li).to.have.lengthOf(3,"Incorrect amount of list items in ordered list.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("html").css('font-family')).to.equal('Raleway, sans-serif', "Incorrect font family.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("html").css('font-size')).to.equal('16px', "Incorrect font size.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("html").css('line-height')).to.equal('1.5', "Incorrect line height.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("body h1").css('line-height')).to.equal('1.2', "Incorrect line height.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("body h2").css('font-weight')).to.equal('bold', "Incorrect font weight for headings.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Problem: Contrasting Colors

[code-task title="Problem: Contrasting Colors" taskId="aadc33d6-af1c-46a7-aa63-9ae3e518bf20" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* The document **title** should be **Contrasting Colors** 
* Create an **article** inside the body
* Make the **background** of the article with rgb(51, 102, 153) color
* Set the **border radius** to the article to 1rem
* Use **Helvetica, sans-serif** font-family for the document
* Make the **font-size** 16px
* Change the **line-height** to 1.5
* Use **Georgia, serif** font-family for the headings

You can find an example view [here](https://i.imgur.com/Jys4q2I.png)

You can download the resources [here](https://mega.nz/file/rJhD0Szb#yCjY2c0tsolvu0TqKsFCfSmhRTFyesWBQpgip8tByV4)

[/task-description]

[tests]
[test open]
[input]
expect(document.title).to.equal("Contrasting Colors","Incorrect title name");
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
let article = $("article");
expect(article).to.have.lengthOf(1,"Incorrect amount of article tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let h1 = $("h1");
expect(h1).to.have.lengthOf(1,"Incorrect amount of h1 tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let p = $("p");
expect(p).to.have.lengthOf(3,"Incorrect amount of p tags.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("article").css('background')).to.equal('rgb(51, 102, 153)', "Incorrect background color.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("article").css('border-radius')).to.equal('1rem', "Incorrect border radius width.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("h1").css('font-family')).to.equal('Georgia, serif', "Incorrect font family for the heading.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("html").css('font-family')).to.equal('Helvetica, sans-serif', "Incorrect font family for the document");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("html").css('font-size')).to.equal('16px', "Incorrect document font size");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Problem: Icon Buttons

[vimeo-video]
[stream language="EN" videoId="431758945" default /]
[stream language="RO" videoId="445514424" /]
[/video-vimeo]

[code-task title="Problem: Icon Font Buttons" taskId="60f25f2a-8586-4680-a81f-f0296a679a52" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* The document **title** should be **Icon Fonts - Buttons**
* Use exactly 2 **paragraphs**
* Each of the **paragraphs** should have exactly 1 **anchor**
* Each of the **anchors** should have exactly one **icon** element
* The first anchor should have text - **"Click me!"**
* The second anchor should have text - **"E-mail me"**
* The page should be styled, exactly like the provided screenshot
* Use **FontAwesome** for this task. Import it in your CSS, with the **@import** rule

You can find an example view [here](https://i.imgur.com/Vvb6saO.png)

[/task-description]

[tests]
[test open]
[input]
expect(document.title).to.equal("Icon Fonts - Buttons","Incorrect title name");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let p = $("body p");
expect(p).to.have.lengthOf(2,"Incorrect amount of p elements.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let ps = $("body p");
expect(ps.filter((x, y) =\> $(y).children().length === 1)).to.have.lengthOf(2, "Incorrect number of anchors in the paragraphs.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let anchors = $("body\>p\>a");

let anchor1 = $(anchors\[0\]);
let anchor2 = $(anchors\[1\]);

let anchor1IconsLength = anchor1.find('i').length;
let anchor2IconsLength = anchor2.find('i').length;

let testString = anchor1IconsLength + "-" + anchor2IconsLength;

expect(testString).to.equal("1-1", "Incorrect icon elements in list items");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Problem: Icon Font List

[vimeo-video]
[stream language="EN" videoId="431784521" default /]
[stream language="RO" videoId="445529738" /]
[/video-vimeo]

[code-task title="Problem: Icon Font List" taskId="d92ce031-4ac5-479e-b447-3eae10f8590e" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* The **title** of the document should be **Icon Fonts - Lists**
* The **unordered lists** should have class - "icons"
* Each of the **unordered lists** should have exactly 3 **list** items
* Each of the **list** items should have exactly one **icon** element
* The page should be styled, exactly like the provided screenshot
* Use **FontAwesome** for this task. Import it in your CSS, with the **@import rule**

You can find an example view [here](https://i.imgur.com/45IjLLB.png)

You can download the resources [here](https://mega.nz/file/DQBGiIzB#L___Am11roaMmHgHFuuSQFw77bCf4LV0vI5FyTe5KzU)

[/task-description]

[tests]
[test open]
[input]
expect(document.title).to.equal("Icon Fonts - Lists","Incorrect title name");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let ul = $("body ul");
expect(ul).to.have.lengthOf(3,"Incorrect amount of ul elements.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let ul = $("body ul.icons");
expect(ul).to.have.lengthOf(3,"Incorrect class on ul elements.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let uls = $("body ul.icons");
expect(uls.filter((x, y) =\> $(y).children().length === 3)).to.have.lengthOf(3, "Incorrect number of list items in the uls.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let uls = $("body ul.icons");
let listItems1 = $(uls\[0\]).children();
let listItems2 = $(uls\[1\]).children();
let listItems3 = $(uls\[2\]).children();

let listItems1Length = listItems1.filter((x, y) =\> $(y).find('i').length === 1).length;
let listItems2Length = listItems2.filter((x, y) =\> $(y).find('i').length === 1).length;
let listItems3Length = listItems3.filter((x, y) =\> $(y).find('i').length === 1).length;

let testString = listItems1Length + "-" + listItems2Length + "-" + listItems3Length;

expect(testString).to.equal("3-3-3", "Incorrect icon elements in list items");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let uls = $("body ul.icons");
let listItems1 = $(uls\[0\]).children();
let listItems2 = $(uls\[1\]).children();
let listItems3 = $(uls\[2\]).children();

let listItem1 = $(listItems1\[0\]);
let listItem2 = $(listItems1\[1\]);
let listItem3 = $(listItems1\[2\]);

let listItem4 = $(listItems2\[0\]);
let listItem5 = $(listItems2\[1\]);
let listItem6 = $(listItems2\[2\]);

let listItem7 = $(listItems3\[0\]);
let listItem8 = $(listItems3\[1\]);
let listItem9 = $(listItems3\[2\]);

let index1 = listItem1.text().indexOf('Phasellus dictum interdum efficitur');
let index2 = listItem2.text().indexOf('Maecenas eleifend sapien felis, quis interdum ex tempor a');
let index3 = listItem3.text().indexOf('Aenean sodales, eros ac fermentum elementum, enim nisi finibus nisi, sed tempus turpis mauris ac quam');

let index4 = listItem4.text().indexOf('Phasellus dictum interdum efficitur');
let index5 = listItem5.text().indexOf('Maecenas eleifend sapien felis, quis interdum ex tempor a');
let index6 = listItem6.text().indexOf('Aenean sodales, eros ac fermentum elementum, enim nisi finibus nisi, sed tempus turpis mauris ac quam');

let index7 = listItem7.text().indexOf('university@softuni.bg');
let index8 = listItem8.text().indexOf('https://twitter.com/softunibg');
let index9 = listItem9.text().indexOf('https://www.facebook.com/SoftwareUniversity');

let testIndex = index1 + index2 + index3 + index4 + index5 + index6 + index7 + index8 + index9;

expect(testIndex).to.be.above(0);
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Problem: Create Typography CSS

[code-task title="Problem: Create Typography CSS" taskId="69b68913-3b79-4d43-a453-aa77319837aa" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Create an **index.html** and **style.css** files
* Change the document **title** to **Typography**
* Use **Helvetica, sans-serif** font-family for the document
* Make the **font-size** 16px
* Change the **line-height** to 1.5
* Use **Georgia, serif** font-family for the headings
* Use **headings** from h1 to h6
* Create a HTML **table** and style it
* Use **blockquote** tag
* Style its **left border** with **rgb(221,221,221)** color
* Style its **font** to italic
* Use **hr** tag for the horizontal lines

You can find an example view [here](https://i.imgur.com/BuxglXR.png)

You can download the resources [here](https://mega.nz/file/2FgQzYjQ#qfmOBoZ0Bfj677wAblo_JXqdd1quFpk5BVmOa4Ygcwg)

[/task-description]

[tests]
[test open]
[input]
expect(document.title).to.equal("Typography","Incorrect title name");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let table = $("body table");
expect(table).to.have.lengthOf(1,"Incorrect amount of table tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let h5 = $("body \> h5");
expect(h5).to.have.lengthOf(1,"Incorrect amount of h5 tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let blockquote = $("body blockquote");
expect(blockquote).to.have.lengthOf(1,"Incorrect amount of blockquote tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let thead = $("body table \> thead");
expect(thead).to.have.lengthOf(1,"Incorrect amount of thead tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("blockquote").css('font-style')).to.equal('italic', "Incorrect blockquote font-style.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let tbody = $("body table \> tbody");
expect(tbody).to.have.lengthOf(1,"Incorrect amount of tbody tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let hr = $("body hr");
expect(hr).to.have.lengthOf(2,"Incorrect amount of hr tags.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("body h1").css('font-family')).to.equal('Georgia, serif', "Incorrect font family for headings.");
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
[/tests]
[/code-task]
[/slide]
