[slide hideTitle]

# HTTP/2

[video src="https://videos.softuni.org/hls/Java/Java-Spring-Fundamentals/EN/HTTP-Protocol/43-http2-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**HTTP/2.0** is the first and major revision of the Hypertext Transfer Protocol since 1997 when we received the HTTP/1.1 version.

It was accepted as a Proposed Standard by the IETG (Internet Engineering Steering Group) and further introduced in most of the modern browsers (Chrome, Mozilla, Internet Explorer, etc.)

Fast and optimized, meeting the modern web usage requirements it was developed to solve the major problems we had with HTTP/1.1.

One of its goals was to maintain high Backwards-Compatible with HTTP 1.1, meaning that it allows the client and server to elect to use HTTP/1.1 or 2.0 or potentially any other non-HTTP protocol.

As of April 2020, 43.7% of all the websites support HTTP/2 (W3Techs statistics).

[/slide]

[slide hideTitle]

# What's new? 

[video src="https://videos.softuni.org/hls/Java/Java-Spring-Fundamentals/EN/HTTP-Protocol/45-what-is-new-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The first thing to understand is that HTTP/2 is times faster than HTTP/1.1.

This is achieved through several fundamental changes.

At its core **HTTP/2** is meant to erase the need of maintaining complex server infrastructure to perform well.

**HTTP/2** has a binary framing layer which **encodes the requests/responses into binary format and cuts them into smaller packets of information**.

This greatly increases the flexibility of data transfer.

We can compare it to HTTP/1.1 where the whole **response/request** is sent together with a new line delimiter.

[image assetsSrc="02-Java-Spring-Fund-HTTP(14).png" /]

The updated protocol has several new important elements:

- **HTTP/2** Multiplexing

- **HTTP/2** Header Comparison

- **HTTP/2** Server Push

[/slide]

[slide hideTitle]

# Multiplexing

The art of handling multiple streams over a single TCP connection is connected to the HTTP/2 ability to break the message into independent frames, interleave them, and then reassemble them on the other end. It is the most important enhancement in HTTP/2

It brings benefits across the entire stack of all web technologies but most importantly it delivers lower page load times by removing unnecessary latency and harvesting the full potential of the available network.

[image assetsSrc="02-Java-Spring-Fund-HTTP(15).png" /]

[/slide]

[slide hideTitle]

# Header Compression

With HTTP/1.1 each **request/response** carries its headers that describe the transferred resources and its properties this is metadata send as plain text sends at every HTTP transfer, this may add anywhere from 500-800 bytes or even more (depending on the cookies) of data which can be safely cached.

In HTTP/2 this problem is solved by introducing **Headers Table** both for client and server of seen headers.

This way we update these headers just when we need to add a new Header.

We encode the values by using the **Huffman code** we can transmit header **values** encoded, reducing the data transferred through the network.

HTTP/2 requires for both parties to keep an updated indexed list of all **Headers** previously seen, further used as a reference to efficiently encode previously transmitted values.

**Huffman coding** allows the individual values to be compressed when transferred, and the indexed list of previously transferred values allows us to encode duplicate values by transferring index values that can be used to efficiently look up and reconstruct the full header keys and values.

The process is essentially a de-duplication, rather than compression.

[image assetsSrc="02-Java-Spring-Fund-HTTP(16).jpg" /]

[/slide]

[slide hideTitle]

# Server Push

HTTP2 allows us to spend resources on clients without them asking for it.

Now let's understand why we need that. 

A typical webpage consists of dozens of resources, all of which we have to transfer for the client to load the page correctly.

In HTTP/1.1 the client had to examine the whole document and ask for each resource individually, which wasn't the most efficient thing, as the server already knows what the client needs.

That is why in HTTP/2.0 the server can push its resources without the client asking for each resource individually. 

This brings is additional performance benefits.

[image assetsSrc="02-Java-Spring-Fund-HTTP(17).jpg" /]

[/slide]

