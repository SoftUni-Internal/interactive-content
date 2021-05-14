# UI Rendering Concepts

[slide hideTitle]

# Rendering Concepts

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/06-JS-Applications-Client-Side-Rendering/EN/JS-App-Client-Side-Rendering-3-4-UI-Rendering-Rendering-Concepts-FIX-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The process of **generating content dynamically** is called **rendering**.

Rendering can be **performed** in the client's **browser** or on a **server**.

Until recently, web pages **were only rendered at the server**.

While this method works fine for **static** webpages, **interactivity is slowed down** by it.

**Client-side rendering** aims to solve this issue by using **JavaScript** and **AJAX** to make modern applications **interactive, fast and intuitive**.


[/slide]

[slide hideTitle]

# Server-Side vs. Client-Side

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/06-JS-Applications-Client-Side-Rendering/EN/JS-App-Client-Side-Rendering-5-Server-Side-Vs-Client-Side-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Server-side rendering** renders JavaScript code into static HTML and CSS **on the server**, sending **client-ready** HTML.

When a user tries to **access** a website, the **server** prepares the **HTML** templates and **compiles** them.

Then, the **generated** HTML is **sent** to the **client**.

The browser **interprets** the HTML code, **visualizing** the page.

To enable **interaction**, the browser **downloads** the necessary **scripts** from the server, and **runs them**.

**Client-side rendering** does most of this process on the client's machine.

When the browser sends a GET **request** to the website, a **Content Delivery Network** \(CDN\) serves the **static files** and the **scripts**.

Then **JavaScript** makes **multiple requests** to a REST Service, continuously **fetching data**.

Once the needed content is **downloaded**, JavaScript **generates** the **DOM elements**, creating a **view**.

[/slide]

[slide hideTitle]

# Pros and Cons of Client-Side Rendering

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/06-JS-Applications-Client-Side-Rendering/EN/JS-App-Client-Side-Rendering-6-Pros-And-Cons-Of-Client-Side-Rendering-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Client-side rendering** has many **benefits** but also comes with some **drawbacks**.

|**Benefits**|**Drawbacks**|
|---|---|
|**User interaction** is nearly **instant**.|**Search engine optimization** may **function slower** if routing is **not** implemented **properly**.|
|Data can be **shared** across multiple **views**.|Websites take **longer to initially load**.|
|**Saves bandwidth** by only fetching **dynamic content**.|Requires more **powerful hardware** on the **client-side** since **most processing is done there**.|
|Provides developers with a large variety of **JavaScript libraries**.|Requires a **library** to be **implemented**.|

[/slide]


[slide hideTitle]

# What is Templating?

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/06-JS-Applications-Client-Side-Rendering/EN/JS-App-Client-Side-Rendering-7-What-Is-Templating-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Templating** is the process of separating an **HTML document's structure** from the actual **content**.

**Templates** enable the **replication of similar content** in a webpage, **without having to repeat the corresponding markup**.

This clear **distinction** between **logic and data** makes our code much **easier to read and work on**.

So far when we added DOM elements dynamically, we used loops to manipulate them, that activates the so-called "**reflow**" which is the process for **re-calculating** the positions and geometries of **elements** in the document, to **re-render** some part or all of the document's content. 

By **reducing the reflow**, we increase the application's **performance**.
[/slide]

[slide hideTitle]

# Templating Concepts

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/06-JS-Applications-Client-Side-Rendering/EN/JS-App-Client-Side-Rendering-8-Templating-Concepts-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The **static** parts of our webpage are stored in the form of **templates**, while the **dynamic** content, such as user data is stored **separately**, most often in a database.

A **templating engine** is used to **combine the two**.

In server-side rendering, templates are used to generate HTML which is rendered before being sent to the client.

When using client-side rendering, we **do not create HTML elements** - templates are used to create **DOM elements** at the client-side, which could be attached to the DOM tree.

The templates define the **structure** of each view - where pictures, buttons and all other elements will be **placed**.

To create templates we need **dynamical** content, which can be fetched from a REST service.

Using it the structure is **rendered** and the data is **placed** inside the template. 

Instead of executing these steps **one by one**, a templating engine is used making that process more abstract. 

[/slide]


[slide hideTitle]

# Templating Benefits

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/06-JS-Applications-Client-Side-Rendering/EN/JS-App-Client-Side-Rendering-9-Templating-Benefits-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Templates have several **benefits**:


- **Productivity**
    * templating results in **less repetitive code**
    * they make our markup **easier to read** and interpret

- **Bandwidth Savings**
    * the **HTML** code is sent only **once**
    * the **templating engine** takes care of similar elements
    * only the **data** for a given entity is being sent

- **Composability**
    * allows for the use of a **single element on multiple pages**
    * **headers**, **Footers** and **Sidebars** are examples of that

- **Separation of concerns**
    * isolates **HTML components** from the associated **content**

- **Interactivity**
    * since only **dynamic data** is fetched, views can be rendered **faster**, resulting in **less** load time

[/slide]


[slide hideTitle]

# Templating Best Practices

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/06-JS-Applications-Client-Side-Rendering/EN/JS-App-Client-Side-Rendering-10-Templating-Best-Practices-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Some recommended templating practices:

- A template should be kept as **simple** as possible
    * **break code up into smaller units** for better organization
    * store **each** template in its **own file**

- Templates are comparable to **pure functions**
    * the principles of **functional programming** can be applied to templates as well


[/slide]
