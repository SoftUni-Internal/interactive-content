# UI Rendering Concepts

[slide hideTitle]

# Rendering Concepts

The process of **generating content dynamically** is called **rendering**.

Rendering can be **performed** on the client's **browser**, as well as on a **server**.

For a very long time, web pages **have been rendered on the server**.

While this method worked fine for **static** webpages, **interactivity**, which is crucial for most, if not all, web applications, **suffers** from it.

**Client-side rendering** comes to solve this issue by leveraging **JavaScript** and **AJAX** to make modern applications **interactive, fast and intuitive**.


[/slide]

[slide hideTitle]

# Server-Side vs. Client-Side

**Server-side rendering** takes and renders our JavaScript code to static HTML and CSS **on the server**, sending **client-ready** HTML.

When a user tries to **access** a website, the **server** prepares the **HTML** templates and **compiles** them.

Then, the **generated** HTML is **sent** to the **client**.

The browser **interprets** the HTML, making the page **visible**.

To enable **interaction**, the browser **downloads** the necessary **scripts** from the server, and **runs them**.

**Client-side rendering** does most of the work on the client's machine.

When the browser makes a GET **request** to the website, a **Content Delivery Network** \(CDN\) serves the **static files** and the **scripts**.

Then **JavaScript** makes **multiple requests** to a REST Service, continuously **fetching data**.

Once the needed content is **downloaded**, JavaScript **generates** the **DOM elements**, resulting in a **view**.

[/slide]

[slide hideTitle]

# Pros and Cons of Client-Side Rendering

**Client-side rendering** brings numerous **benefits**, but also comes with some **drawbacks**.

|**Benefits**|**Drawbacks**|
|---|---|
|**User interaction** is nearly **instant**.|**Search engine optimization** may **suffer** if routing is **not** implemented **properly**.|
|Data can be **shared** across multiple **views**.|Websites take **longer to load** for the **first time**.|
|**Saves bandwidth** by only fetching **dynamic content**.|Requires more **powerful hardware** to the **client-side**, since **most of the work is done there**.|
|Provides developers with a large variety of **JavaScript libraries**.|Requires a **library** to be **implemented**.|

[/slide]


[slide hideTitle]

# What is Templating?

**Templating** is the procedure of separating an **HTML document's structure** from the actual **content**.

**Templates** enable the **replication of similar content** in a webpage, **without having to repeat the corresponding markup**.

This clear **distinction** between **logic and data** makes our code much **easier to read and work on**.

[/slide]

[slide hideTitle]

# Templating Concepts

The **static** parts of our webpage are stored in the form of **templates**, while the **dynamic** content, such as user data, is being stored **separately**, most often in a database.

A **templating engine** is used to **combine the two**.

In server-side rendering, templates are used to generate HTML which is rendered before being sent to the client.

When using client-side rendering, templates are used to create **DOM elements** on the client:

- They define the **structure** of each view

- Dynamic content is **fetched** from a REST service

- Once the data is **downloaded**, it is used to **populate** the template and **render** it with the help of a templating engine

[/slide]


[slide hideTitle]

# Templating Benefits

Templates bring several **benefits**.

Here are the most prominent ones:

- **Productivity**
    * templating results in **less repetitive code**
    * they make our markup **easier to read** and interpret

- **Bandwidth Savings**
    * the **HTML** is sent only **once**
    * the **templating engine** takes care of similar elements
    * only the **data** for a given entity is being sent

- **Composability**
    * allows for the use of a **single element on multiple pages**
    * **headers**, **Footers** and **Sidebars** are examples of that

- **Separation of concerns**
    * isolating **HTML components** from the associated **content**

- **Interactivity**
    * since only **dynamic data** is fetched, views can render **faster**, resulting in **less** waiting time

[/slide]


[slide hideTitle]

# Templating Best Practices

These are some recommended templating practices:

- Every template should be kept as **simple** as possible
    * **breaking up into smaller units** for better organization
    * it is recommended to store **each** template in its **own file**

- Templates are comparable to **pure functions**
    * the principles of **functional programming** can be applied to templates as well


[/slide]