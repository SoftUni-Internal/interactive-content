# Homework

[slide]

# Problem: Blog Layout Float

[vimeo-video]
[stream language="EN" videoId="431792308" default /]
[/video-vimeo]

[code-task title="Problem: Blog Layout Float" taskId="622d4bae-b217-4f4d-97a2-de4f1d1ed981" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Change the document title to **Blog Layout - Float**
* Divide your content into **header**, **main** and **aside** tags
* Create a **paragraph** inside the header for the site title
* Add **class** site-title to the paragraph in the header (p.site-title)
* Change the **display** property of the paragraph to **inline-block**
* Transform the text of the paragraph to **uppercase**
* Create an **article** inside the main
* Create two **sections** inside the aside
* The sections should have a **h3** heading and a **navigation** - nav with **ul**, **li** and **a** elements
* Use rgb(238, 238, 238) for **body background**
* Use rgb(255, 255, 255) for **image background** and rgba(0, 0, 0, 0.25) for **image box shadow**
* Use **font family** Georgia, serif for the **blockquote**
* Use **font family** Georgia, serif with **size** 1em/1.2 for the **headings**
* Use **float** property to position the **first** image on the right
* Use **float** property to position the **second** image on the left

You can find an example view [here](https://i.imgur.com/hUNHDR2.jpg)

You can download the resources [here](https://mega.nz/file/PZYmiYoL#aVOf_N5Bl8bFvhaOR4HNzjXo8Mv2SAbnVcjiTIUQBwI)

[/task-description]

[tests]
[test open]
[input]
expect(document.title).to.equal("Blog Layout - Float","Incorrect title name");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let main = $("body main");
expect(main).to.have.lengthOf(1,"Incorrect amount of main tag.");
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
[test]
[input]
expect($(".site-title").css('display')).to.equal('inline-block', "Incorrect display property in the header.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($(".site-title").css('text-transform')).to.equal('uppercase', "Incorrect text transform property.");
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
expect($("blockquote").css('font-family')).to.equal('Georgia, serif', "Incorrect font family.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("h1").css('font-family')).to.equal('Georgia, serif', "Incorrect font family.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("img:first-of-type").css('float')).to.equal('right', "Incorrect float property.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let ul = $("body ul");
expect(ul).to.have.lengthOf(2,"Incorrect amount of ul tags.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Problem: Position Playground

[code-task title="Problem: Position Playground" taskId="2dcbfcb2-fb11-4c45-b241-a228b5f200cf" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Change the document title to **Positioning Playground**
* Import **Font Awesome** into your CSS file
* Add two **container units** (divs) with **class viewport** inside the body
* Inside each one add **section** with **class card** (section.card)
* Change the **display** property of the section to **block**
* Try to center the **section** with **position** property **absolute**

You can find an example view [here](https://i.imgur.com/yt446ue.png)

You can download the resources [here](https://mega.nz/file/SF4CDIAa#wvDYpYWyE4X4rPOxMREeUKb73QtJgCEU2BTFiDJyCic)

[/task-description]

[tests]
[test]
[input]
expect(document.title).to.equal("Positioning Playground","Incorrect title name");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let cardSection = $("section.card");
expect(cardSection).to.have.lengthOf(2,"Incorrect amount of sections with class card.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let img = $("body img");
expect(img).to.have.lengthOf(2,"Incorrect amount of img tags.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("section.card").css('display')).to.equal('block', "Incorrect display property.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("section.card").css('position')).to.equal('absolute', "Incorrect position property.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Problem: Center Position and Transform

[vimeo-video]
[stream language="EN" videoId="431791969" default /]
[/video-vimeo]

[code-task title="Problem: Center Position and Transform" taskId="8becba9e-7472-41f6-b7d1-3931ab47f89e" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Change the document title to **Center Position and Transform**
* Create **section** with two divs
* Look the **screenshot** for the inner items
* Use rgb(238, 238, 238) for **body background**
* Use rgb(255, 255, 255) for **card background**
* Use rgb(0, 153, 0) for **card button background**
* Use **font** Georgia, serif with **size** 1em/1.2 for the headings
* Set the **image position** property to **absolute**

You can find an example view [here](https://i.imgur.com/VTbCmOo.jpg)

You can download the resources [here](https://mega.nz/file/CRIkSKAC#kdCTCqYsIUKXov45YpwLQzxzMwzK4hI7eUEovxqgxag)

[/task-description]

[tests]
[test]
[input]
let section = $("body section.card");
expect(section).to.have.lengthOf(1,"Incorrect amount of section tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let img = $("body img");
expect(img).to.have.lengthOf(1,"Incorrect amount of img tag.");
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
let div = $("section \> div");
expect(div).to.have.lengthOf(2,"Incorrect amount of div tags.");
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
expect(document.title).to.equal("Center Position and Transform","Incorrect title name");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("img").css('position')).to.equal('absolute', "Incorrect position property.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Problem: Navigation Float

[code-task title="Problem: Navigation Float" taskId="28aa1e99-7fb2-45eb-9ab8-74736a79ea1d" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Change the document title to **Navigation - Float**
* Create a **header** with a **p** for the title
* Inside the header add a **nav** with a **ul** and **4 li** elements
* Create a **main**, which contains an **article** with a **header** and **h1** heading
* Add a **section** inside the **article**
* Create an **aside** element with **two sections** inside
* The sections should have a **h3** heading and a **navigation** - nav with **ul**, **li** and **a** elements
* Use rgb(0, 102, 0) for the **anchors**
* Use rgb(238, 238, 238) for **body background**
* Use rgb(255, 255, 255) for **image background** and rgba(0, 0, 0, 0.25) for **image box shadow**
* Use **font** Georgia, serif for the **blockquote**
* Use **font** Georgia, serif with **size** 1em/1.2 for the **headings**

You can find an example view [here](https://i.imgur.com/B9hsvP1.jpg)

You can download the resources [here](https://mega.nz/file/DUZggYRK#UynBTd1HjPiy7JlQBUlX08lloPj4e6RBwHx4l-O_f1g)

[/task-description]

[tests]
[test]
[input]
expect(document.title).to.equal("Navigation - Float","Incorrect document title");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let nav = $("body nav");
expect(nav).to.have.lengthOf(3,"Incorrect amount of navigation (\<nav\>) elements.");
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
expect($("blockquote").css('font-family')).to.equal('Georgia, serif', "Incorrect blockquote font family.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("body header nav ul li").length).to.equal(4, "Incorrect header navigation. The navigation should have 4 (\<li\>) elements.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("body aside section nav ul li").length).to.equal(7, "Incorrect aside navigation. There should be 7 (\<li\>) elements.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("img:first-of-type").css('float')).to.equal('right', "Incorrect float property.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Problem: Social Media Icons

[vimeo-video]
[stream language="EN" videoId="431792036" default /]
[/video-vimeo]

[code-task title="Problem: Social Media Icons" taskId="2cbed203-6ab2-4e75-b7b2-32a9c9ed23b2" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Change the document title to **Social Media Icons**
* All you need for your HTML are **ul**, **li** and **a** tags
* Use **FontAwesome** to add social icons
* Change the **li** display property to **inline-block**
* **Remove** list items **default** style
* Each **a** tag must have **border-radius**: 50%;
* Check the provided screenshots to see the hover effects

You can find an example view [here](https://i.imgur.com/BMcLCLg.png)

You can find an example view 2 (hover the first icon) [here](https://i.imgur.com/EtKugYG.png)

You can find an example view 3 (hover the second icon) [here](https://i.imgur.com/xRkWkHK.png)

You can find an example view 4 (hover the third icon) [here](https://i.imgur.com/hdqVuXH.png)

You can find an example view 5 (hover the fourth icon) [here](https://i.imgur.com/riOBoCz.png)

You can find an example view 6 (hover the fifth icon) [here](https://i.imgur.com/XyBDGVm.png)

[/task-description]

[tests]
[test open]
[input]
expect(document.title).to.equal("Social Media Icons","Incorrect document title");
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
let li = $("body \> ul \> li");
expect(li).to.have.lengthOf(5,"Incorrect amount of li tags.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let a = $("body \> ul \> li \> a");
expect(a).to.have.lengthOf(5,"Incorrect amount of a tags.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("i").length).to.equal(5, "Incorrect amount of i tags.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("li").css('display')).to.equal('inline-block', "Incorrect ul items display property.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("a").css('border-radius')).to.equal('50%', "Incorrect border radius.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("li").css('list-style')).to.equal('none', "Incorrect li items style.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
