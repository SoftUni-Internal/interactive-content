# Software Architectures
[slide hideTitle]

# Front-End, Back-End, Web Services, and APIs

[video src="https://videos.softuni.bg/hls/PROFESSIONAL-MODULES/QA/2021-04-QA-Automation/03.API-Testing/2.software-architectures-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


## Software Systems

Software systems consist of **interconnected components** organized in a certain structure called **architecture**.

- **Software architecture** is a broad engineering discipline
- In large organizations, the architecture is designed by **software architects**
- In smaller organizations, the architecture is designed by the **senior developers** or by the technical **team leader**
- The **software architecture** defines the **structure** of the system: its **components** and their **interactions**

Concepts related to **software architectures** are:
- **Monolith apps** – applications, consisting of a single component
- The **"client-server" model**, where the client requests resources from the server and displays them to the user
- The concept of **"front-end"** (the user interface of the system) and **"back-end"** (the data storage and processing logic)
- The classical **"3-tier"** and **"multi-tier"** architectural models, where the system is split into the user **interface**, **business logic**, and **data storage**
- The concept of **"SOA"** (service-oriented architecture) and **microservices** (self-contained software components)
- All these concepts are complicated, and developers learn them in detail as they gain experience for many years
- At **SoftUni** we shall **review only some of these concepts** because junior developers should be familiar with them




[/slide]


[slide hideTitle]

# The "Client-Server" Model

The **client-server** architectural model is widely used in modern apps. **Web sites**, **games**, **information systems**, **business software** are just few examples of client-server systems.

[image assetsSrc="API-Testing.png" /]


Unless the architecture is more complex, **if an app is connected to the Internet** and stores data at some server, it is built on a "**client-server**" architecture.

In the **"client-server" architectural model**, the **server** holds the **app data** and the business logic and provides **APIs** to clients to access the server data.

The **clients** implement the **user interface** (the UI) and **consume the server APIs**.

This is how most modern apps like **Facebook** and **YouTube** work:

**The server** holds the **app data**, such as users, chat messages, photos, videos, etc.

**The client** (such as mobile app or Web app) displays the data, stored at the server.

The **server** is responsible for **data storage** and **data processing**.

It holds the **business logic**: who can access the data, which data, who can store new data, etc.

The server **exposes an API** (application programming interface), typically accessible over HTTP, and clients call this API.

The **client** is responsible for the **user interface**: to read the data from the server and display it to the user.

Clients access the server through the Internet or through a local network.

**The data** in the client-server model is **shared**.

This means that several users can work on the same data in the same time.

The server usually implements mechanism to resolve the eventual conflicts when several users change the same data.

Let's look at these few **examples** of client-server systems:

- The first example is when a **Web browser opens a Web site**
- The **Web browser** is the client software
- The **Web server**, holding the Web site, is the server software
- The **app data** stored at the server-side is the Web site itself
- The **user interface** at the client side is the rendered Web page from the Web site
- The second **example** is when an **Email client retrieves the email messages from a mail server**
- The **email client** is the client software. It retrieves and email messages from the server and displays them
- The **mail server**, holding the users' mailboxes, is the server software
- The **app data** stored at the server-side are the mailboxes with the mail messages for each user
- The **user interface** at the client side is the email app (mobile, desktop or Web app)
- The **third example** is when a chat **client communicates with a chat server to display the most recent chat messages for certain user**.
- The **chat client** is the client software. It listens for new messages and displays the chat conversations for the current user
- The **chat server**, holding the users and their chat conversations, is the server software
- The **app data** stored at the server-side are the users and their chat conversations, photos, videos, documents, files, etc
- The **user interface** at the client side is the chat app (mobile, desktop or Web app)
- **The client-server** model is almost everywhere, when we have **connected applications**

It is an important concept in software development and programmers should understand is well.

At **SoftUni**, we teach the client-server model in many courses in the professional modules related to front-end and back-end development.



[/slide]


[slide hideTitle]

# Multi Tier Architecture

The **"3-tier architecture"** and its extension, the **"multi-tier architecture"** are architectural models for development of **complex software systems.**

The 3-tier architecture consists of 3 components (called tiers):

- The **presentation** tier – the user interface
- The **business logic** tier – where data is processed
- The **data management** tier – where data is stored

The **3-tier architecture** is used for structuring big and complex **enterprise-grade systems**.

It allows these **3 tiers** to be run as **separate components**, which simplifies the maintenance and improves the scalability.

In many systems these **3 tiers** run on **separate hardware** and are developed and maintained by different teams of developers.

Let's review what's inside these 3 tiers.

## Presentation Tier

The **presentation tier** holds the **client apps**:

**Client apps** are responsible for the **user interface** of the system: to display the data to the user and interact with the user.

The **client app** could be a **Web front-end app**, running in a Web browser, or a **mobile app**, or a **desktop app**.

In all cases it implements the **user interface** (the front-end) of the system.

The client apps **interact with the server-side**, using an **API**, a programming interface, such as RESTful service requests over HTTP.

For **example**, in a **chat app**, the client is the app, which displays the contact list and the chat conversations.

## Business Logic Tier

The **business logic** tier is implemented at the **server-side**.

Typically it runs in an **application server**, or **Web application server** or behind a simple **Web server**.

The **business logic** is the functionality, which is **invoked by the client apps** through the API.

It implements the business rules, the core functionality of the application.

It also handles users, authentication and authorization, access control and the business rules.

For **example**, in a **chat app**, the business logic tier will provide APIs for:

- User login an authentication, retrieving the contacts, retrieving the conversations, sending a message, receiving instant messages, etc.
- The business logic implements the core functionality of the chat system.

## Data Management Tier

The **data management tier** is responsible for **data storage**.

Typically, it is a **database system**, such as MySQL, MS SQL Server or PostgreSQL, or a **cloud-based data storage system**, such as Amazon S3 or Azure Table storage.

The **data management tier** does not care about the business rules.

It just stores and retrieves data: objects, table rows, files, documents, images, video and other assets.

Structuring the app into 3 separate subsystems (or tiers) has **many benefits** for large enterprise systems:

- Simplified **manageability**: different development or IT teams can implement the different tiers

- Improved **scalability**: the system can be upgraded to use multiple database instances in a cluster, for example, without changing the other tiers

- Improved **security**: a breach at some of the tiers does not directly affect the other tiers

- Hacked Web server does not mean full access to the entire database

- Improved **maintenance**: smaller and simpler components are maintained easier

- At the same time, decomposing the system into 3 separate tiers, **increases the system complexity** and takes more time for the development

- Some more complex systems can be decomposed into **more than 3 tiers**

For example: client tier, authentication tier, business logic tier, data access tier, and database tier.

This is called **"multi-tier" architecture.**



[/slide]
