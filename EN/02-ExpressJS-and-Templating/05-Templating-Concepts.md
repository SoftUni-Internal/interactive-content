# Templating Concepts

[slide hideTitle]

# What is Templating?

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/EN/03.ExpressJS-And-Templating/interactive-express.js-and-view-engines-21-22-templating-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Templating** is the process of separating an **HTML document's structure** from the actual **content**.

**Templates** enable the **replication of similar content** in a webpage, such as a list of products in an online store, by automatically generating the needed markup.

This clear **distinction** between **logic and data** makes our code much **easier to read and work on**.

This introduces a more **effective** way to build user interfaces and results in **less boilerplate code**.

[image assetsSrc="JS-Back-End-ExpressJs-and-Templating-1.png" /]

[/slide]

[slide hideTitle]

# Templating Concepts

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/EN/03.ExpressJS-And-Templating/interactive-express.js-and-view-engines-23-templating-concepts-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The **static** parts of our webpage are stored in the form of **templates**, while the **dynamic** content, such as entity data, is being stored **separately**, most often in a database.

A **templating engine** is used to **combine the two**.

We will discuss templating engines later in this lesson.

These are the main **templating concepts**:

- Templates are used to **define the structure** of our website
    - isolating **HTML components** from the actual **content**

- Every **templating system** has its **own syntax**
    - generally very **easy to learn**
    - **minor differences in syntax** between **templating engines**

- Every template should be kept as **simple** as possible
    - **breaking up into smaller units** whenever possible

[/slide]


[slide hideTitle]
# Templating Examples

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/EN/03.ExpressJS-And-Templating/interactive-express.js-and-view-engines-24-examples-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Examples of actual situations in which templating will be useful are: 

- Displaying **articles** in a blog

- Displaying a gallery of **photos**

- Visualizing user **profiles**

- Showing items in a **catalog**

[image assetsSrc="JS-Back-End-ExpressJs-and-Templating-2.png" /]

[/slide]

[slide hideTitle]

# Server View Engines

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/EN/03.ExpressJS-And-Templating/interactive-express.js-and-view-engines-25-server-view-engines-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Server view engines** parse the data to HTML **directly on the server**.

This results in **greater security**, as you are not relying on the client to ignore the data they are not meant to see.

However, **Single Page Applications do not use server-side rendering** in most cases.

This means that applications with server-side rendering **are not real SPAs**.

Many templating engines support Express:

- **Express-handlebars**: Adaptation of the Handlebars engine, tailored to work better with Express
  
- **Pug**: Haml\-inspired template engine (formerly called Jade)
  
- **Express-views-dom**: A DOM view engine for Express

- **Rivets-server**: Renders [Rivets.js](http://rivetsjs.com) templates on the server

[/slide]
