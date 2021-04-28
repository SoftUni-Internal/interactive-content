# UI Rendering Concepts

[slide hideTitle]

# Rendering Concepts

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/06-JS-Applications-Client-Side-Rendering/EN/JS-App-Client-Side-Rendering-3-4-UI-Rendering-Rendering-Concepts-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The process of **generating content dynamically** is called **rendering**.

Rendering can be **performed** on the client's **browser**, as well as on a **server**.

For a very long time, web pages **have been rendered on the server**.

While this method worked fine for **static** webpages, **interactivity**, which is crucial for most, if not all, web applications, **suffers** from it.

**Client-side rendering** comes to solve this issue by leveraging **JavaScript** and **AJAX** to make modern applications **interactive, fast and intuitive**.


[/slide]

[slide hideTitle]

# Server-Side vs. Client-Side

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/06-JS-Applications-Client-Side-Rendering/EN/JS-App-Client-Side-Rendering-5-Server-Side-Vs-Client-Side-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/06-JS-Applications-Client-Side-Rendering/EN/JS-App-Client-Side-Rendering-6-Pros-And-Cons-Of-Client-Side-Rendering-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/06-JS-Applications-Client-Side-Rendering/EN/JS-App-Client-Side-Rendering-7-What-Is-Templating-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Templating** is the procedure of separating an **HTML document's structure** from the actual **content**.

**Templates** enable the **replication of similar content** in a webpage, **without having to repeat the corresponding markup**.

This clear **distinction** between **logic and data** makes our code much **easier to read and work on**.

So far when we add DOM elements dynamically, we used loops for manipulating the elements, that activates the so-called "**reflow**" which is the process for **re-calculating** the positions and geometries of **elements** in the document, for **re-rendering** some part or all of the document's content. 

By **reducing reflow**, we increase the application's **performance**.
[/slide]

[slide hideTitle]

# Templating Concepts

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/06-JS-Applications-Client-Side-Rendering/EN/JS-App-Client-Side-Rendering-8-Templating-Concepts-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The **static** parts of our webpage are stored in the form of **templates**, while the **dynamic** content, such as user data, is being stored **separately**, most often in a database.

A **templating engine** is used to **combine the two**.

In server-side rendering, templates are used to generate HTML which is rendered before being sent to the client.

When using client-side rendering, we **do not create HTML elements**, but templates are used to create **DOM elements** on the client-side, which could be attached to the DOM tree.

The templates define the **structure** of each view, where a picture, button, etc. will be **placed** in the **web browser**.

For creating templates we need **dynamically** content, which can be fetched from a REST service.

Next, the structure is **recreated** and the data is **populated** inside the template. 

Instead of doing these steps **one by one**, a templating engine is used to make that process more abstract. 

[/slide]


[slide hideTitle]

# Templating Benefits

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/06-JS-Applications-Client-Side-Rendering/EN/JS-App-Client-Side-Rendering-9-Templating-Benefits-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/06-JS-Applications-Client-Side-Rendering/EN/JS-App-Client-Side-Rendering-10-Templating-Best-Practices-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

These are some recommended templating practices:

- Every template should be kept as **simple** as possible
    * **breaking up into smaller units** for better organization
    * it is recommended to store **each** template in its **own file**

- Templates are comparable to **pure functions**
    * the principles of **functional programming** can be applied to templates as well


[/slide]