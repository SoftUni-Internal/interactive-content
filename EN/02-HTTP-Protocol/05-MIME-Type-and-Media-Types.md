[slide hideTitle]

# MIME and Media Types

[video src="https://videos.softuni.org/hls/Java/Java-Spring-Fundamentals/EN/HTTP-Protocol/23-mime-and-media-types-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Multi-Purpose Internet Mail Extensions**

It's the internet's standard for indicating the type of data sent through the internet.

Originally developed for mail attachments, further adopted by the HTTP as well for declaring the type of the data sends.

The **MIME type** is used to tell the browser how to interpret and work with given resources.

**MIME** defines several concepts:

- Content-Type, e.g. text/html, image/gif, application/pdf.
    - content charset, e.g. utf-8, ascii, windows-1251
- The Content disposition, e.g. attachment; filename=logo.jpg
- Multipart message (if you send several resources in a single document).

Now let's see the most common MIME Media Types.

| **MIME Type / Subtype** | **Description** |
|---|---|
| application/json  | JSON data  |
| image/png  | PNG image  |
| image/gif  | GIF image  |
| text/html  | HTML  |
| text/plain  | Text  |
| text/xml  | XML  |
| video/mp4  | MP4 video  |
| application/pdf  | PDF document  |
|   |   |

[/slide]
