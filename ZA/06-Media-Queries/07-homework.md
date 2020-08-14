# Homework

[slide]

# Problem: MQs Playground

[code-task title="Problem: MQs Playground" taskId="0cd6aede-96b4-4ca8-b3c0-68d4f092f6f5" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Change the document title to **Media Queries Playground**
* Create three sections
* Each section has **span** and **after** element
* In the **span** you must write the text **before** ":". The text **after** ":" will be in **after** element
* First section with class **mq-width** must contain text that will change based on **width** queries
* Add a **width media query** to change the contents of the after elements when a query match
* Second **section** with class **mq-height** to contain text that will change based on height queries
* Add a **height media query** to change the contents of the after elements when a query match
* Third **section** with class **mq-ar** to contain text that will change based on aspect ratio queries
* Add an aspect ratio media query to change the contents of the after elements when a query match

You can find an example view [here](https://i.imgur.com/YlIrlMQ.png)

[/task-description]

[tests]
[test]
[input]
expect(document.title).to.equal("Media Queries Playground","Incorrect title name");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let section = $("body section");
expect(section).to.have.lengthOf(3,"Incorrect amount of section tags.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let resetCSS = $('\<link rel="stylesheet" href="reset.css" type="text/css"/\>');
expect(resetCSS).to.have.lengthOf(1,"Missing reset.css.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let typographyCSS = $('\<link rel="stylesheet" href="typography.css" type="text/css"/\>');
expect(typographyCSS).to.have.lengthOf(1,"Missing typography.css.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let section = $("body section\[class='mq-width'\]");
expect(section).to.have.lengthOf(1,"Incorrect amount of section tag or different class name.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Problem: MQs in Typography

[code-task title="Problem: MQs in Typography" taskId="58968712-3c70-433c-9969-13cf93e4591f" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Change the document title to **Media Queries in Typography**
* Make the **font size** for **phones** 12px
* Make the **font size** for screens **larger than 500** 14px
* Make the **font size** for screens **larger than 600** 16px
* Make the **font size** for screens **larger than 800** 18px
* Make the **font size** for screens **larger than 1300** 21px
* Make the **font size** for screens **larger than 1800** 23px

You can find an example for **desktop** view [here](https://i.imgur.com/UpACBOD.png)

You can find an example for **laptop** view [here](https://i.imgur.com/N3u2gMO.png)

You can find an example for **phone** view [here](https://i.imgur.com/x9Ta5Er.png)

You can find an example for **tablet** view [here](https://i.imgur.com/MqP6wRU.png)

[/task-description]

[tests]
[test]
[input]
expect(document.title).to.equal("Media Queries in Typography","Incorrect title name");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let img = $("body img");
expect(img).to.have.lengthOf(2,"Incorrect amount of img tag.");
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
let section = $("body section");
expect(section).to.have.lengthOf(1,"Incorrect amount of section tag.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Problem: Responsive Menu

[code-task title="Problem: Responsive Menu" taskId="36ef16e6-936f-4b46-bdc4-0e9a02547662" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Change the document title to **Responsive Menu**
* Add media queries to **hide** the toggle checkbox and label for **desktops**
* Add media queries to **show** the toggle checkbox and label for **mobile devices**


You can find an example for **desktop** view [here](https://i.imgur.com/GbDC0cV.png)

You can find an example for **laptop** view [here](https://i.imgur.com/DG767qz.png)

You can find an example for **phone** view [here](https://i.imgur.com/0CWrGEB.png)

You can find an example for **tablet** view [here](https://i.imgur.com/s4B8bxo.png)

[/task-description]

[tests]
[test open]
[input]
expect(document.title).to.equal("Responsive Menu","Incorrect title name");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let navigation = $("body header nav");
expect(navigation).to.have.lengthOf(1,"Incorrect amount of nav tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let ul = $("body header nav \> ul");
expect(ul).to.have.lengthOf(1,"Incorrect amount of ul in the navigation.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let label = $("body header label");
expect(label).to.have.lengthOf(1,"Incorrect amount of label tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let input = $("body \> input");
expect(input).to.have.lengthOf(1,"Incorrect amount of input tag.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Problem: Update Blog Layout

[code-task title="Problem: Update Blog Layout" taskId="0f6c2aa3-b6e8-4507-b481-30cd625681ae" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Change the document title to **Update Blog Layout**
* **Copy** the latest code from "Blog layout with Flexbox" exercise
* **Copy** your multilevel dropdown
* Make the **menu responsive**
* **Get** the latest **typography.css**
* Move the **layout** code to **layout.css**
* Move the **navigation** code to **navigation.css**
* Create **reset.css** file
* **Include** all CSS files from the main **styles.css** file

You can find an example for **desktop** view [here](https://i.imgur.com/luhotsh.png)

You can find an example for **laptop** view [here](https://i.imgur.com/kw5AE7j.png)

You can find an example for **phone** view [here](https://i.imgur.com/weuW9z5.png)

You can find an example for **tablet** view [here](https://i.imgur.com/d5KX5HF.png)

[/task-description]

[tests]
[test]
[input]
expect(document.title).to.equal("Update Blog Layout","Incorrect document title");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let resetCSS = $('\<link rel="stylesheet" href="reset.css" type="text/css"/\>');
expect(resetCSS).to.have.lengthOf(1,"Missing reset.css.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let typographyCSS = $('\<link rel="stylesheet" href="typography.css" type="text/css"/\>');
expect(typographyCSS).to.have.lengthOf(1,"Missing typography.css.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let layoutCSS = $('\<link rel="stylesheet" href="layout.css" type="text/css"/\>');
expect(layoutCSS).to.have.lengthOf(1,"Missing layout.css.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let navigationCSS = $('\<link rel="stylesheet" href="navigation.css" type="text/css"/\>');
expect(navigationCSS).to.have.lengthOf(1,"Missing navigation.css.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let nav = $("header nav");
expect(nav).to.have.lengthOf(1,"Incorrect amount of nav tag in the header.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let label = $("header label");
expect(label).to.have.lengthOf(1,"Incorrect amount of label tag in the header.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let aside = $("body aside");
expect(aside).to.have.lengthOf(1,"Incorrect amount of aside tag.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Problem: Responsive Forms

[code-task title="Problem: Responsive Forms" taskId="cdc4c755-5c26-40a5-8161-c4cc659b99f3" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Change the document title to **Responsive Forms**
* **Create** a simple **login form** using semantic html
* Add **icons** to the input fields using **FontAwesome**
* Add **focus** state that changes the **input** and the **icon**

You can find an example for **desktop** view [here](https://i.imgur.com/vSjYsLV.png)

You can find an example for **laptop** view [here](https://i.imgur.com/sECy1Re.png)

You can find an example for **phone** view [here](https://i.imgur.com/442PnP7.png)

You can find an example for **tablet** view [here](https://i.imgur.com/oobTYY9.png)

[/task-description]

[tests]
[test]
[input]
expect(document.title).to.equal("Responsive Forms","Incorrect title name");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let form = $("body form");
expect(form).to.have.lengthOf(1,"Incorrect amount of form tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let fieldset = $("body fieldset");
expect(fieldset).to.have.lengthOf(1,"Incorrect amount of fieldset tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let legend = $("body legend");
expect(legend).to.have.lengthOf(1,"Incorrect amount of legend tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let p = $("body form p");
expect(p).to.have.lengthOf(2,"Incorrect amount of p tag.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Problem: Landing Page

[code-task title="Problem: Landing Page" taskId="e0655724-dfc8-4ec7-8747-ca15c242a59f" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Create an **index.html** file with title - **Landing Page**
* Get the latest reset.css
* Get the latest typography.css
* Get the latest buttons.css
* Get the latest forms.css
* Create a section with a title **Need a website?**
* Create a section with a title **Our Team**
* Create a section with a title **Sign-up to our Newsletter**
* Create a section with a title **Testimonials**
* Create a **footer**
* Make the page **responsive** per the screenshots attached

You can find an example for **desktop** view [here](https://i.imgur.com/bsqUT02.png)

You can find an example for **laptop** view [here](https://i.imgur.com/XzkCC97.png)

You can find an example for **phone** view [here](https://i.imgur.com/OUUNl9x.png)

You can find an example for **tablet** view [here](https://i.imgur.com/S2Owx61.png)

[/task-description]

[tests]
[test]
[input]
expect(document.title).to.equal("Landing Page","Incorrect document title");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let resetCSS = $('\<link rel="stylesheet" href="reset.css" type="text/css"/\>');
expect(resetCSS).to.have.lengthOf(1,"Missing reset.css.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let typographyCSS = $('\<link rel="stylesheet" href="typography.css" type="text/css"/\>');
expect(typographyCSS).to.have.lengthOf(1,"Missing typography.css.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let buttonsCSS = $('\<link rel="stylesheet" href="buttons.css" type="text/css"/\>');
expect(buttonsCSS).to.have.lengthOf(1,"Missing buttons.css.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let elementsCSS = $('\<link rel="stylesheet" href="elements.css" type="text/css"/\>');
expect(elementsCSS).to.have.lengthOf(1,"Missing elements.css.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let formsCSS = $('\<link rel="stylesheet" href="forms.css" type="text/css"/\>');
expect(formsCSS).to.have.lengthOf(1,"Missing forms.css.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Problem: Responsive Tables

[code-task title="Problem: Responsive Tables" taskId="c697b445-da1a-4cb2-b995-4baa96817b8e" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Change the document title to **Responsive Tables**
* Create a **table** with **3 columns**: First Name, Last Name, Job Title
* **Get** the latest **reset.css**
* **Get** the latest **typography.css**
* Make the **table responsive**

You can find an example for **desktop** view [here](https://i.imgur.com/nTtLmvj.png)

You can find an example for **laptop** view [here](https://i.imgur.com/JmkaVPq.png)

You can find an example for **phone** view [here](https://i.imgur.com/i7gTN37.png)

You can find an example for **tablet** view [here](https://i.imgur.com/mTJvJum.png)

[/task-description]

[tests]
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
let typographyCSS = $('\<link rel="stylesheet" href="typography.css" type="text/css"/\>');
expect(typographyCSS).to.have.lengthOf(1,"Missing typography.css.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let resetCSS = $('\<link rel="stylesheet" href="reset.css" type="text/css"/\>');
expect(resetCSS).to.have.lengthOf(1,"Missing reset.css.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect(document.title).to.equal("Responsive Tables","Incorrect document title");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
