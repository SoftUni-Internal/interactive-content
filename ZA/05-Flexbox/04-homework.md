# Homework

[slide]

# Problem: Flexbox Layout

[code-task title="Problem: Flexbox Layout" taskId="da8a5a6d-feb0-4585-9d6c-a70c95f087f9" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Change the document title to **Flexbox Layout**
* Create **header**, **main**, **aside** and **footer** elements
* Set to the **body** display property **flex**
* Each element must have **flex grow**, **flex shrink** and **flex basis**

You can find an example view [here](https://i.imgur.com/oRg7HiJ.png)

[/task-description]

[tests]
[test]
[input]
expect(document.title).to.equal("Flexbox Layout","Incorrect title name");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let header = $("body header");
expect(header).to.have.lengthOf(1,"Incorrect amount of header tag.");
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
let footer = $("body footer");
expect(footer).to.have.lengthOf(1,"Incorrect amount of footer tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("body").css('display')).to.equal('flex', "Incorrect display property.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Problem: Flex Model Articles

[vimeo-video]
[stream language="EN" videoId="431792591" default /]
[/video-vimeo]

[code-task title="Problem: Flex Model Articles" taskId="f7442ee5-baa5-490b-9c1a-cc9a196acf3e" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Change the document title to **Articles**
* Create a **section** with three **articles** inside
* The **article** should have a **h2** title and a **paragraph** (p)
* **Font family** Helvetica, sans-serif with font **size** 16px and line **height** 1.5 for the **html**
* **Font family** Georgia, serif with font **size** 1em and line **height** 1.2 for the **headings**
* Change the **section display property** to flex and set **justify-content: space-between**
* Set on the **section** **max-width** 70vw

You can find an example view [here](https://i.imgur.com/GtvQoWN.png)

You can download the resources [here](https://mega.nz/file/7EIwlaoS#CdP5FcvtfQ6n4xqrbFa3t-4ZW1CchdnvXq5sPkqVGCo)

[/task-description]

[tests]
[test open]
[input]
expect(document.title).to.equal("Articles","Incorrect title name");
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
let section = $("body section");
expect(section).to.have.lengthOf(1,"Incorrect amount of section tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let articles = $("body \> section \> article");
expect(articles).to.have.lengthOf(3,"Incorrect amount of article tags.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let h2 = $("body \> section article");
expect(h2).to.have.lengthOf(3,"Incorrect amount of h2 tags.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let p = $("body \> section p");
expect(p).to.have.lengthOf(3,"Incorrect amount of p tags.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("section").css('max-width')).to.equal('70vw', "Incorrect section width.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("section").css('display')).to.equal('flex', "Incorrect section display property.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("section").css('justify-content')).to.equal('space-between', "Incorrect text align for items.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("h2").css('font-family')).to.equal('Georgia, serif', "Incorrect font-family for h2 tags.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("h2").css('line-height')).to.equal('1.2', "Incorrect line height for h2 tags.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Problem: Flexmodel ABC Game

[code-task title="Problem: Flexmodel ABC Game" taskId="3f27a4a2-94c4-44b1-ae33-ef8d1e61d90d" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Change the document title to **ABC Game**
* Create a **div** with class **container** and 12 **span** tags inside
* Type the **letters** in the spans **EXACTLY** as they are in the file text.txt
* Use **font-family**: Helvetica, sans-serif, with **font-size**: 20px
* Change the div **display** property to **flex** and **align** the items in center
* Set on the div **max-width**: 15vw and **height** 35rem
* The **span** must have
* Border **width** - 1px
* Border **color** - black
* Border **style** - solid
* To arrange the letters, use the **flex** property **order**

You can find an example view [here](https://i.imgur.com/P3ngOYk.png)

You can download the resources [here](https://mega.nz/file/2dJBwKBL#LEt0D2DXogY2Sgw4YT6aMA7-xeQunE306uvVHAGz8RA)

[/task-description]

[tests]
[test open]
[input]
expect(document.title).to.equal("ABC Game","Incorrect document title");
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
let div = $("body div.container");
expect(div).to.have.lengthOf(1,"Incorrect amount of div tag or incorrect class attribute.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let span = $("body \> div \> span");
expect(span).to.have.lengthOf(12,"Incorrect amount of span tags.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let spanSecond = $("div \> span:nth-child(2)");
expect(spanSecond.text()).to.include('e',"Incorrect text in span tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("html").css('font-family')).to.equal('Helvetica, sans-serif', "Incorrect document font family.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let spanTen = $("div \> span:nth-child(10)");
expect(spanTen.text()).to.include('L',"Incorrect text in span tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("div").css('display')).to.equal('flex', "Incorrect div display property.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("div").css('max-width')).to.equal('15vw', "Incorrect width to the div element.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("body span").css('border-width')).to.equal('1px', "Incorrect border-width.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("body span").css('border-style')).to.equal('solid', "Incorrect border-style.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Problem: Flexmodel Calendar

[vimeo-video]
[stream language="EN" videoId="431792519" default /]
[/video-vimeo]

[code-task title="Problem: Flexmodel Calendar" taskId="d3f3ab01-07e0-428e-81e8-858163bea2b2" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Change the document title to **Calendar**
* Create a **div** with class container and two sections inside
* First **section** has class **week**
* Second **section** has class **notes**
* Use **span** tags for all content
* Change the **div** and **sections** **display** property to **flex** and **align** the items in **center**
* Set on the **div** **max-width 65vw**
* The **span** must have
* Border **width** - 1px
* Border **color** - black
* Border **style** - solid
* For the **section** with class **notes** use the property **flex-direction column**
* Set on **all** HTML **elements** the property **box-sizing: border-box**

You can find an example view [here](https://i.imgur.com/jWRgdbx.png)

You can download the resources [here](https://mega.nz/file/KRAgVQha#3Fadc1SzzwDaG9IxoNjO-QKZdcB6YA7zWwc74Dh_09U)

[/task-description]

[tests]
[test open]
[input]
expect(document.title).to.equal("Calendar","Incorrect title name");
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
let div = $("body div.container");
expect(div).to.have.lengthOf(1,"Incorrect amount of div tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let section = $("body \> div \> section.week");
expect(section).to.have.lengthOf(1,"Incorrect amount of section tag or incorrect class attribute.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let span = $("body \> div \> section.week \> span");
expect(span).to.have.lengthOf(9,"Incorrect amount of span tags.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("div").css('display')).to.equal('flex', "Incorrect display property.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("div").css('max-width')).to.equal('65vw', "Incorrect div width.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let section = $("body \> div \> section.notes");
expect(section).to.have.lengthOf(1,"Incorrect amount of section tag or incorrect class attribute.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let span = $("body \> div \> section.notes\> span");
expect(span).to.have.lengthOf(2,"Incorrect amount of span tags.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("section").css('display')).to.equal('flex', "Incorrect display property.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("body \> div span").css('border-width')).to.equal('1px', "Incorrect border width.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("section.notes").css('flex-direction')).to.equal('column', "Incorrect flex direction property.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Problem: Navigation Flex

[code-task title="Problem: Navigation Flex" taskId="8db25eed-cef4-45b1-9e39-cbebfaa0f1e4" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Change the document title to **Navigation - Flexbox**
* Divide the **body** into **header** and **main** tag
* The underline in the **header** must have
* Border **width** - 2px
* Border **color** - rgb(0, 0, 0)
* Border **style** - solid
* The **display** property of the **header** must be **flex**
* The **unordered** list in the header must have **display** property **flex**
* The **anchors** text **color** in the **navigation** must be rgb(0, 153, 0)

You can find an example view [here](https://i.imgur.com/eDpyU5c.jpg)

You can download the resources [here](https://mega.nz/file/uNgxTJoR#GBEE5LU6ETJA8FxYO0mmsY9cgK8FTefDiY3IeF3cb5Y)

[/task-description]

[tests]
[test]
[input]
expect(document.title).to.equal("Navigation - Flexbox","Incorrect document title");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let header = $("body header")
expect((header).css('display')).to.equal('flex', "Incorrect display property.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let headerUnderline = $("body header");
expect((headerUnderline).css('border-bottom')).to.equal('2px solid rgb(0, 0, 0)', "Incorrect underline color.")
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let headerUl = $("header nav ul");
expect((headerUl).css('display')).to.equal('flex', "Incorrect display property.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let headerAnchor = $("header nav ul li a")
expect((headerAnchor).css('color')).to.equal('rgb(0, 153, 0)', "Incorrect anchor text color.");
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
let header = $("body \> header");
expect(header).to.have.lengthOf(1,"Incorrect amount of header tag.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Problem: Photo Gallery Flexbox

[vimeo-video]
[stream language="EN" videoId="431792397" default /]
[/video-vimeo]

[code-task title="Problem: Photo Gallery Flexbox" taskId="26b47638-08f7-4ef7-b542-d2e3a04b9bba" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Change the document title to **Photo Gallery - Flexbox**
* Add **section** with **class gallery** (section.gallery)
* Add **unordered list** with **list items** and **images** inside
* Change the **body**, **ul** and **li** display property to **flex**
* Use **font** Georgia, serif with **size** 1em/1.2 for the **headings**

You can find an example view [here](https://i.imgur.com/WWomfl0.png)

You can download the resources [here](https://mega.nz/file/DNRzxY5J#FE8nYa8dZ8F8Y-KdBrxAsTgeokocZOyQSYlpnyRnQHM)

[/task-description]

[tests]
[test]
[input]
expect(document.title).to.equal("Photo Gallery - Flexbox","Incorrect title name");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let gallery = $(".gallery");
expect(gallery).to.have.lengthOf(1,"Incorrect amount of section with class gallery.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let li = $("body li");
expect(li).to.have.lengthOf(9,"Incorrect amount of li tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let img = $("body img");
expect(img).to.have.lengthOf(9,"Incorrect amount of img tags.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("body").css('display')).to.equal('flex', "Incorrect display property.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($(".gallery ul").css('justify-content')).to.equal('space-between', "Incorrect justify content property.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("body").css('display')).to.equal('flex', "Incorrect display property.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Problem: Blog Layout Flexbox

[code-task title="Problem: Blog Layout Flexbox" taskId="6f6d7b8c-6841-467c-92af-5da594b16017" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Change the document title to **Blog Layout - Flexbox**
* The entire content must be in **div container** with class **page** (div.page)
* The page **container (div)** must be **flexed** and **wrapped**
* **Body** **background** color must be **rgb(238, 238, 238)**
* **Image background** color should be **rgb(255, 255, 255)**
* **Blockquote** **font** family must be Georgia, serif
* The **anchors** text **color** in the **aside** section must be **rgb(0, 153, 0)**
* Page **headings** **font family** must be Georgia, serif

You can find an example view [here](https://i.imgur.com/r8mik5Y.jpg)

You can download the resources [here](https://mega.nz/file/bBp3yKCS#lhMw-QiuyKF6c-cRVD8zdRENDik6XUSUMyTnC8hLo50)

[/task-description]

[tests]
[test]
[input]
expect(document.title).to.equal("Blog Layout - Flexbox","Incorrect document title");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let pageDiv = $(".page");
expect((pageDiv).css('display')).to.equal('flex', "Incorrect display property.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let pageDiv = $(".page");
expect((pageDiv).css('flex-wrap')).to.equal('wrap', "Incorrect flex property.");
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
expect($("img").css('background')).to.equal('rgb(255, 255, 255)', "Incorrect image background color.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("blockquote").css('font-family')).to.equal('Georgia, serif', "Incorrent font family for the blockquote.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let asideAnchor = $("aside a")
expect((asideAnchor).css('color')).to.equal('rgb(0, 153, 0)', "Incorrect anchors text color.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Problem: Sticky Footer Flexbox

[code-task title="Problem: Sticky Footer Flexbox" taskId="b611c727-744a-436b-aead-38f3dac38be0" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Change the document title to **Sticky Footer - Flexbox**
* Divide your content into **header**, **main** and **footer** tags
* The **body** must have **flex** display property
* The **body background** must be rgb(238, 238, 238)
* Set **height** to the **body: 100vh**
* The **footer** should be at the **bottom** of the page
* The **footer** text **color** must be rgb(255, 255, 255)
* The **footer** **background color** must be rgb(102, 102, 102)

You can find an example view [here](https://i.imgur.com/7kh5HOS.jpg)

You can download the resources [here](https://mega.nz/file/3UZ0ESKZ#s8Ze1YQcFnA8ZIHTYf9XDVh7wD-FaTLuaYw4x53m1z4)

[/task-description]

[tests]
[test]
[input]
expect(document.title).to.equal("Sticky Footer - Flexbox","Incorrect document title");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("body").css('display')).to.equal('flex', "Incorrect display property.");
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
let pageFooter = $("body footer");
expect((pageFooter).css('color')).to.equal('rgb(255, 255, 255)', "Incorrect footer text color.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let pageFooter = $("body footer");
expect((pageFooter).css('background')).to.equal('rgb(102, 102, 102)', "Incorrect footer background color.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let footer = $("body footer");
expect(footer).to.have.lengthOf(1,"Incorrect amount of footer tag.");
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
[/tests]
[/code-task]
[/slide]

[slide]

# Problem: Center Flexbox

[vimeo-video]
[stream language="EN" videoId="431792496" default /]
[/video-vimeo]

[code-task title="Problem: Center Flexbox" taskId="cfc9d115-46e2-45e3-9e42-7be5a4fe0472" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Change the document title to **Center Flexbox**
* The **document background color** must be rgb(238, 238, 238)
* The **body display** property must be **flex**
* The **content** must be placed into **div** with **class card** (div.card)
* The **div background color** must be **rgb(255, 255, 255)**

You can find an example view [here](https://i.imgur.com/fsG9LGK.jpg)

You can download the resources [here](https://mega.nz/file/GZg3iIbJ#7AiGUgdLABqux4xmAOLzCLbrLXlhvTeznYwmUHrhFVg)

[/task-description]

[tests]
[test open]
[input]
expect(document.title).to.equal("Center Flexbox","Incorrect document title.");
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
expect($("body").css('display')).to.equal('flex', "Incorrect display property.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let divCard = $('.card')
expect(divCard).to.have.lengthOf(1,"Card class is missing.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let divCard = $('div.card')
expect((divCard).css('background')).to.equal('rgb(255, 255, 255)', "Incorrect background color.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Problem: Expanding Flex Cards

[code-task title="Problem: Expanding Flex Cards" taskId="c455515f-ee34-4239-80b9-828a053a4aec" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Change the document title to **Expanding Flex Cards**
* **Body background color** must be **rgb(238, 238, 238)**
* The **body** **display** property must be **flex**
* **Align** the items in **center**
* The entire **page content** must be inside **section** with class named **container** (section.container)
* The **container** **display** property must be **flex**

You can find an example view [here](https://i.imgur.com/Xtv0cTW.jpg)

You can download the resources [here](https://mega.nz/file/PEI2QAYS#ikqnbEzo5lkBMcvw-HszUOPaV8e3lpGplvm2wmkLo-g)

[/task-description]

[tests]
[test open]
[input]
expect(document.title).to.equal("Expanding Flex Cards","Incorrect document title.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect($("body").css('background')).to.equal('rgb(238, 238, 238)', "Incorrect body background.");
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
expect($("body").css('display')).to.equal('flex', "Incorrect display property.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let container = $('.container')
expect(container).to.have.lengthOf(1,"There is no section with class container.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let container = $('.container')
expect((container).css('display')).to.be.equal('flex', "Incorrect container display property.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Problem: Cards with CSS Columns and Flexbox

[code-task title="Problem: Cards with CSS Columns and Flexbox" taskId="47d00a0a-76ef-47c4-8e96-07691f3f80e5" executionType="tests-execution" executionStrategy="html-and-css-zip-file" requiresInput="false"]

[code-upload allowedMemory="30" /]

[task-description]

## Description

* Change the document title to **Cards with CSS Columns and Flexbox**
* **Body background color** must be rgb(238, 238, 238)
* The content should be divided in **two parts**:
* **First part** is container unit (div) with **classes cards-layout and masonry**
* **Second part** is container unit (div) with **classes cards-layout and flex**
* Use **h2** for the **heading**

You can find an example view [here](https://i.imgur.com/1KtihJh.jpg)

You can download the resources [here](https://mega.nz/file/nVQmEYjY#iRgatsPgYLXwvU2JxGUBR_uCZGLIgz6fkZyIl79eiNQ)

[/task-description]

[tests]
[test]
[input]
expect(document.title).to.equal("Cards with CSS Columns and Flexbox","Incorrect document title.");
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
let container = $('.container')
expect(container).to.have.lengthOf(1,"There is no section with class container.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let headings = $('h2')
expect(headings).to.have.lengthOf(2,"Incorrect amount of h2 tag.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let images = $('img')
expect(images).to.have.lengthOf(16,"Incorrect amount of img tag.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
