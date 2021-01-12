# XML Processing
[slide]
# What is XML?

**XML** stands for E**x**tensible **M**arkup **L**anguage. It is used for encoding documents that are readable not only by machines but also by humans. This is done by using opening and closing tags to define the structure of the document and to set rules on how the document is to be stored and transferred. You can compare it to HTML in that it uses a set of opening and closing tags to encode data. The main difference, however, is that XML is **extensible** - it does not have a predefined markup language and allows you to create your own markup to describe your content as you see fit. While HTML is focused on presenting content, XML is used for storing and transferring data.

One of the best things about XML is that it is **language-independent**. It does not matter if you are coding in Java, JavaScript, C# or any other language.

The primary use for XML is transmitting data between web applications and servers.

[image assetsSrc="xml-processing-01.png" /]

[/slide]

[slide]
# XML Markup and Content

XML documents contain markup tags placed between **< >** brackets and content between the markup tags.

Here is a sample XML document:

[image assetsSrc="xml-processing-02.png" /]

In this example:
- the ``<vehicle>`` tag is the markup tag for the Vehicle object.
- the tags in between the opening and closing **vehicle** tags are properties of the object
- ``<model>`` is a property of ``<vehicle>`` and the content or value of the model property is **X6**.

```html
<?xml version="1.0" encoding="UTF-8"?>
```

The above is called a **prolog** and it defines the XML version and character encoding. This line is optional but if it exists it must be the first line of the document.

[/slide]

[slide]
# XML Structure

When you create XML documents you can write your own elements and by giving them descriptive names, they become self-describing. For instance, if somebody reads through an XML, he would not have to guess what goes into the ``<brandName></brandName>`` tags.

XML documents can be most naturally expressed as **element trees**. The XML tree begins with a **root element** and you can have many **sub-elements** that branch off the root element or off each other. Every single element of an XML document can have its own child element(s).

The following example demonstrates a simple tree structure:

```html
<?xml version="1.0" encoding="UTF-8"?>
<Animal>
    <Cat>
        <Name>Barney</Name>
        <Age>5</Age>
        <Breed>British Shorthair</Breed>
        <Color>Blue</Color>
    </Cat>
</Animal>
```

Let us examine the XML tree in detail:
- **Animal** is the **root element**.
- **Cat** is a **child element** of the root.
- **Cat** also has its own child elements branching off of it such as **Name** and **Color**.

The tree structure can be represented like this:

[image assetsSrc="xml-processing-03.png" /]

What about having a bunch of cats added to the above XML tree example? You can do so by adding a wrapper around the objects, essentially creating a collection of them like so:

```html
<?xml version="1.0" encoding="UTF-8"?>
<Animal>
    <Cats>
        <Cat>
            <Name>Barney</Name>
            <Age>5</Age>
            <Breed>British Shorthair</Breed>
            <Color>Blue</Color>
        </Cat>
        <Cat>
            <Name>Jerry</Name>
            <Age>3</Age>
            <Breed>Tomcat</Breed>
            <Color>Black</Color>
        </Cat>
    </Cats>
</Animal>
```

In the above example, ``<Cats></Cats>`` is a wrapper around the group of objects.

[/slide]

