# Templating Concepts

[slide]

# What is Templating?

**Templating** is the procedure of separating an **HTML document's structure** from the actual **content**.

**Templates** enable the **replication of similar content** in a webpage, **without having to repeat the corresponding markup**.

[image assetsSrc="JS-Applications-templating-1.png" /]

This clear **distinction** between **logic and data** makes our code much **easier to read and work on**.

[/slide]



[slide]

# Templating Concepts

The **static** parts of our webpage are stored in the form of **templates**, while the **dynamic** content, such as user data, is being stored **separately**, most often in a database.

A **templating engine** is used to **combine the two**.

We will discuss templating engines in a later video.

These are the main **templating concepts**:

- Templates are used to **define the structure** of our website
    - Isolating **HTML components** from the associated **content**

- Every **templating system** has its **own syntax**
    - Generally very **easy to learn**
    - **Minor differences in syntax** between **templating engines**

- **Token replacement** is most commonly used as a placeholder for either **data** or a **partial**
    - `({{ ... }}, <%...%> etc.)`

- Every template should be kept as **simple** as possible
    - **Breaking up into smaller units** whenever possible

- Templates are comparable to **pure functions**
    - The principles of **functional programming** can be applied to templates as well


[/slide]


[slide]

# Benefits of Templating

Templates bring a number of **benefits**.

Here are the most prominent ones:

- **Productivity**
    - Templating results in **less repetitive code**
    - They make our markup **easier to read** and interpret

- **Bandwidth Savings**
    - The **HTML** is sent only **once**
    - The **templating engine** takes care of similar elements
    - Only the **data** for a given entity is being sent

- **Composability**
    - Allows for the use of a **single element on multiple pages**
    - **Headers**, **Footers** and **Banners** are examples of that

[/slide]




[slide]

# When Should We Use JavaScript Templating

**Templating** is a great solution in many given scenarios:

- Adding or updating **new entities in lists**

- Anywhere you need to add new complex **content** to your page

- Anything that requires **client side HTML rendering**


[/slide]