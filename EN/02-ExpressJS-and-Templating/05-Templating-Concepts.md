# Templating Concepts

[slide]

# What is Templating?

**Templating** is the procedure of separating an **HTML document's structure** from the actual **content**.

**Templates** enable the **replication of similar content** in a webpage, **without having to repeat the corresponding markup**.

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

- Every template should be kept as **simple** as possible
    - **Breaking up into smaller units** whenever possible

[/slide]

[slide]

# Server View Engines

**Server view engines** parse the data to HTML **directly on the server**.

This results in **greater security**, as you are not relying on the client to ignore the data they are not meant to see.

However, **Single Page Applications do not use server-side rendering** in most cases.

This means that applications with server-side rendering **are not real SPAs**.

Many templating engines support Express:

- **express-handlebars** \- Adaptation of the Handlebars engine, tailored to work better with Express.
  
- **Pug** \- Haml\-inspired template engine (formerly called Jade).
  
- **express-views-dom** \- A DOM view engine for Express.

- **rivets-server** \- Renders [Rivets.js](http://rivetsjs.com) templates on the server.

[/slide]