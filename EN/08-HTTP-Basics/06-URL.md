# URL

[slide]
# Video

[vimeo-video startTimeInSeconds="4466" endTimeInSeconds="5410"]
[stream language="EN" videoId="429002366" default /]
[stream language="RO" videoId="429006590"  /]
[/video-vimeo]

[/slide]

[slide]
# Uniform Resource Locator (URL)

# ADD PICTURE

**Uniform Resource Locator** `URL` identifiers are unique **addresses** on Internet, used to identify resources, Web sites and documents on the Web.

The **URL** is what we type in the browser address bar, for example: `https://softuni.org`.

The **URL** string contains the **hostname** and **path** to the resource, and sometimes it can include more elements like port and query string.

URL address example:

`http://mysite.com:8080/demo/index.php?id=27&lang=en#lectures`

In this example the URL uses:

- The network protocol is `http`:

   - protocol used to talk to the server

   - It can be `HTTP`, `https`, `FTP`, `sftp`, `RTMP`, `ramps` or other.

   - All these are protocols used to a**ccess remote resources**, such as files, documents, and streaming media.

- Hostname is `mysite.com`:

   - This is the server **name** or **IP address**, which runs the server software, used to access the specified resource.

   - The host together with the port defines the endpoint for establishing the connection with the server.

- the connection port is `8080`:

   - the default port for the **http protocol** is `80` and for the **https protocol** is `443`.

   - port number is an integer number in the range `0…65535`.

   - port comes from the underlying TCP protocol, which operates using port numbers

- the resource path is `/demo/index.php`:

   - This is the path to the **requested resource**, relative to the server root.

- the query string is `?id=27&lang=en`:

   - this string is **optional** part of the URL, which follows after the path.

   - this string holds parameters passed in the URL. 

   - It is separated from the path by the `question mark` symbol.

- the fragment is `#lectures`: 

   - this is the last **optional** part in the URL, and It follows after the `hash` symbol.


[/slide]

[slide]
# Query String

```
http://example.com/path/to/page?name=tom&color=purple
```

The query string in the URL contains data that is **not part** of the path structure.

The query string in this URL example is:

- `?name=tom&color=purple`

The query string is commonly used in **searches** and **dynamic** pages:

- For example: `https://nakov.com/?s=book`

The query string is the **part of the URL** after the question mark `?` symbol and it is optional.

Parameters in the query string have:

- `name=value` format, which hold **special characters** are URL-encoded.

   - Example: `https://nakov.com/?s=Svetlin%20Nakov`

Multiple parameters are separated by the `&` delimiter, like it is shown at the above example, where the query string is `?name=tom&color=purple`.

This query string holds two pairs of parameters:

- `name=tom`

- `color=purple`

# URL Encoding

`!  *  '  (  )  ;  :  @  &  =  +  $  /  ,  ?  #  [  ]`

Sometimes the query string parameters need to hold **special characters** like the `=` symbol or the `?` symbol and others shown in the example above.

To maintain this, the query string need **character escaping**, which means that some special characters are **replaced** by **sequences of other characters**.

This is called `URL encoding`.

**URLs are encoded** according to the `RFC 1738` standard, which describes the **Uniform Resource Locators** or URLs.

Normal URL characters such as `[0-9a-zA-Z]` has no special meaning in the URLs and are not encoded.

**Reserved URL characters** have a special meaning in the URLs and are encoded, in order to be part of the URL without breaking it.

The reserved characters are the most **punctuation marks** and many others.

Reserved characters are escaped by using the so-called `percent-encoding`, which uses the `%` symbol plus the hex code of the character in its UTF-8 representation.

An example of reserved character is the character `?`, which is encoded as `%3F`.

The space is also a reserved character in the URLs and it can be encoded in two different forms: as `+` or `%20`.

[/slide]

[slide]
# URL Encoding – Examples

| **Char** | **URL  Encoding** |
| --- | --- |
| `space` | \%20 |
| `"` | \%22 |
| `#` | \%23 |
| `$` | \%24 |


| **Char** | **URL  Encoding** |
| --- | --- |
| `%` | \%25 |
| `&` | \%26 |
| `щ` | \%D1\%89 |
| `爱` | \%E7\%88\%B1 |

Most non-letter and non-digit characters are escaped in the `% hex code` format.

It combines Cyrillic letters, Chinese letters, and Latin letters, which after URL encoding take the form shown on the screen.

During the URL encoding each **non-standard char** is converted to its corresponding **UTF-8 bytes**, represented as hex digits with the percentage as prefix.

# Valid and Invalid URLs – Examples

Some **valid** URLs:

```
http://www.google.bg/search?sourceid=navclient&ie=UTF-8&rlz=1T4GGLL_enBG369BG369&q=http+get+vs+post
```

```
http://bg.wikipedia.org/wiki/%D0%A1%D0%BE%D1%84%D1%82%D1%83%D0%B5%D1%80%D0%BD%D0%B0_%D0%B0%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D0%B8%D1%8F
```

Some **invalid** URLs:

- In this example, the space should be encoded as `+` or `%20`

```
http://google.com/search?&q=C# .NET 4.0
```

- In this example, the Cyrillic letters should be encoded as `%D0%BA%D0%BE%D0%B4`

```
http://google.com/search?&q=код
```
[/slide]