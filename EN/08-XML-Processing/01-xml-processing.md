# XML Processing

[slide hideTitle]

# XML Definition

**XML** stands for e**X**tensible **M**arkup **L**anguage.

It is used for encoding documents that are readable by not only machines but by humans as well.

This is done by using **opening and closing tags** to **define the structure** of the document and to **set rules** on how the document is to be stored and transferred.

You can compare it to HTML in that it uses a set of opening and closing tags to encode data.

The main difference is that XML is **extensible**.

It does not have a predefined markup language and allows you to create your own markup to describe your content as you see fit.

While HTML is focused on presenting content, XML is used for storing and transferring data.

XML is **language-independent**. It does not matter if you are coding in Java, JavaScript, C# or any other language.

The primary use for XML is **transmitting data** between web applications and servers.

[image assetsSrc="xml-processing-01.png" /]

[/slide]

[slide hideTitle]

# XML Markup and Content

XML documents contain markup tags placed between **< >** brackets and content between the markup tags.

Here is a sample XML document:

[image assetsSrc="xml-processing-02.png" /]

In this example:
- the `<vehicle>` tag is the markup tag for the `Vehicle` object
- the tags in between the opening and closing **vehicle** tags are properties of the object
    - `<model>` is a property of `<vehicle>` and the content or value of the model property is **X6**

```java
<?xml version="1.0" encoding="UTF-8"?>
```

The above is called a **prolog**.

It defines the XML version and character encoding.

This line is optional but if it exists it must be the first line of the document.

[/slide]

[slide hideTitle]
# XML Structure

When creating XML documents, you can write your **own elements** and by giving them descriptive names, they become **self-describing**.

For instance, if somebody reads through an XML, they would not have to guess what goes into the `<brandName></brandName>` tags.

XML documents can be most naturally expressed as **element trees**.

The XML tree begins with a **root element** and you can have many **sub-elements** that branch off of the root element or off of each other.

Every single element of an XML document can have its own child element(s).

The following example demonstrates a simple tree structure:

```java
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
- `Animal` is the **root element**
- `Cat` is a **child element** of the root element
- `Cat` also has its own child elements branching off of it such as `Name` and `Color`

The tree structure can be represented like this:

[image assetsSrc="xml-processing-03.png" /]

If you want to store more than one value in the XML file, you can add a wrapper around the objects, essentially creating a collection of them:

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

