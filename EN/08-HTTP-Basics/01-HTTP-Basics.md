# HTTP Protocol

[slide]
# Video

[vimeo-video startTimeInSeconds="122" endTimeInSeconds="1043"]
[stream language="EN" videoId="429002366" default /]
[stream language="RO" videoId="429006590"  /]
[/video-vimeo]

[/slide]

[slide]
# HTTP Basics

[image assetsSrc="HTTPBasicsPic2.png" /]

**HTTP** is the main Internet protocol (IP) used to communicate between:

- **Web servers:** which host Web sites and server-side software components

- **Web clients:** such as Web browsers and mobile apps, which display the information to the users and interact with them.

HTTP comes from **Hyper Text Transfer Protocol** and It is a protocol originally created for transferring `HTML`, `CSS`, images and other Web resources within the global distributed information system called **World Wide Web** (or just Web).

**The Web** consists of all Web sites in **Internet**, which are accessed via the **HTTP protocol**.

Later, HTTP was extended to a **general-purpose client-server protocol for the Internet** and was widely used for transferring almost anything over the Internet: text, images, documents, audio streaming, video streaming, chat messages and many others.

There are different kinds of **protocols**:

- a **communication protocol** is a set of rules, which define how two or more parties are talking to each other.

It defines the format of the messages exchanged and their semantics

- programming Protocols are `languages`, used to communicate between machines.

Like in the human languages, protocols have syntax, which specifies the structure of commands and semantics, which specifies their meaning.

[/slide]


[slide]
# HTTP Explained

[image assetsSrc="HTTPBasicsPic.png" /]

HTTP is **text-based client-server protocol** for the Internet.

- **Text-based** means that the messages, which are exchanged, are human-readable text, not binary data, such as JPEG images.

- **Client-server** means that the communication takes place between a server.

- **Server** is a software that stores the data and provides it upon request and a client, a software which reads and visualizes the data from the server.

**HTTP** is mostly used to transfer Web resources such as HTML files, images, styles, media, and documents.

## Example

When you open a **Web site**, the **Web browser** connects to the **Web server**, hosting the requested site, and requests the **URL** that you have entered in the browser's location bar via the **HTTP protocol**.

In most cases, the Web server returns an HTML document that contains references to other resources, such as CSS styles, images, and scripts, which are downloaded by the Web browser in subsequent HTTP requests.

**HTTP** follows the `request-response model`, which means that the **HTTP client software**, in most cases is a Web browser, requests resources from the **HTTP servers** (the Web servers) and gets these resources as a response.

Clients **request** and servers **respond** to the requests: this is how it works!

HTTP **does not directly allow** a Web sites to send data to the clients, unless this data is explicitly requested.

And this is perfectly normal: users don't want a Web site to open when it is not requested.

The H**TTP protocol** lies on the `request-response` paradigm and cannot open a website unless someone has asked to open it.

The **HTTP protocol** relies on unique resource locators (URLs), like `https, column, slash, slash, softuni dot org`.

When a resource is downloaded from the Web server, it comes with metadata (such as content-type and encoding), which helps in visualizing the resource correctly.

The **HTTP protocol** is stateless by design, which means that it does not preserve the state.

Each HTTP request is **independent** of the others.

Stateful HTTP conversations can be implemented by extra effort, using cookies, custom header fields, Web storage, or other techniques.

[/slide]

[slide]

# Front-End and Back-End

[image assetsSrc="FrontEndBackEndPic.png" /]

**Front-end** and **back-end** separates the modern apps into **client-side** user (interface, or UI) components and **server-side** (data storage and processing) components.

These components are in constant interaction with each other and they usually communicate via **HTTP**.

## The front-end

- consists of the client-side software components, the so-called `presentation layer`.

### Example

The front-end component can be a `React` app, `iOS mobile` app, or `Windows desktop` app.

If we create an instant messaging app, for example, the **front-end** is where the chat heads are shown and where users read, type, and send messages.

- implements the user interface, the UI of the software, what you see at the screen.

In Web apps the **front-end** is build from `HTML`, `CSS`, `JavaScript`, `JavaScript frameworks` and some libraries.

In mobile apps the **front-end** is built using the native mobile UI toolkit.

## The back-end

- consists of **server-side** components, which implement the **app business logic**, **data storage**, **data processing logic** and **server-side APIs**, exposed as services through a communication protocol like HTTP.

### Example

Back-end component can be an **ASP.NET Core** app, **Java Spring** app, or **Python Django** app or other.

If we create an instant messaging app, for example, the back-end is where the users, their friends, chat conversations, and chat messages are stored and processed.

- component which typically implements **data storage** and **data processing**, is designed to be accessed through an **API** (application programming interface), exposed as RESTful services or other technology, usually over HTTP.

In some scenarios the back-end directly **produces** (renders) HTML and CSS, without exposing an API.

This is called a server-side Web app.

**HTTP protocol is what connects the front-end with the back-end.**

The **front-end requests** resources using HTTP requests and the **back-end sends** these resources as HTTP responses.

[/slide]

[slide]
# The Client-Server Model in Web Apps

[image assetsSrc="http-example(1).png" /]

## Here is how it works

- front-end app, running in the Web client (typically the Web browser) **requests** a resource from the **Web server** via the **HTTP protocol**.

- Web server processes the HTTP request and invokes the **back-end** component to produce and deliver the requested resource.

It can be a **static resource** from the file system (such as a JPEG image), or dynamic resource (such as data coming from a database query or from an external API).

- back-end processing is completed, the **HTTP response** is returned from the **Web server** to the **Web client** and is processed by the front-end app.

- front-end app may **request**, via HTTP some additional resources, such as some images and CSS styles.

These **HTTP requests** again:

- come from the Web client to the Web server

- then are handled by the back-end logic

- which reads and returns static files from the local file system

- then the HTTP responses are returned from the Web server to the Web client and the front-end app displays them on the screen

[/slide]


[slide]

# Network Layers and HTTP

[image assetsSrc="HyperTextTransferProtocol.png" /]

**HTTP** is an **application-level protocol**, which uses **lower-level network protocols** to transfer data from the Web client to the Web server and vice versa.

When an **HTTP request** is sent, is it prepared as a **text message**, following the HTTP standard. We shall see examples a bit later.

The data sent over an HTTP connection travels to the Web server via a **TCP stream**.

**TCP** is a transport layer protocol, that connects two endpoints through a reliable, bi-directional, stream-oriented connection.

It is important to mention that TCP uses port numbers to allow **multiple parallel connections** between two endpoints.

The **TCP protocol** sends the stream data broken down into **IP packets** over the Internet using the **IP protocol**.

The IP protocol transfers data packets between two IP addresses on the Internet.

IP packets **travel** from the sender to the local network gateway, then to some Internet router, then to the next router, until they reach their final IP address.

When the data packets reach the destination data center, they travel between the network devices around the data center over Ethernet, PPP or other local area network protocol, until they reach the machine, operating the destination Web server.

These data packets called `Ethernet frames` in the Ethernet local network are transferred between two MAC addresses, over LAN cables.

To use HTTP we need a unique resource address on the Web - URL, which identifies:

- the Web server IP or server name (which is resolved to IP address)

- the port number, when we use different than the default ports 80 or 443

- and the path to the resource on the Web server


[/slide]
