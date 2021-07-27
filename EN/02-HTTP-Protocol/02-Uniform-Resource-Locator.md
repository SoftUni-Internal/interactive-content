[slide hideTitle]

# Uniform Resource Locator - URL

HTTP is the protocol by which the client and the server communicate.

It is the set of rules both parties should keep for the communication to happen without any misunderstandings.

But how does the HTTP know which resource to ask for? 

This is why we have the **Uniform Resource Locator** or **URL**.

The URL indicates which resource we need, but more than that, it indicates which **HTTP** protocol to use.

The **URL** is a formatted string consisting of several key parts. 

[image assetsSrc="02-Java-Spring-Fund-HTTP(1)-v2.png" /]

## Protocol

Protocols set the rules for communication.

There are different protocols such as HTTP, HTTPS and FTP. 

HTTPS is the most commonly used these days for client - server communication when browsing web resources because it means you are communicating over a secure connection.

When we send data from a computer to the server it is transferred through different routes.

In its pure form **HTTP** is just encoded bytes.

This means that somewhere along the way, a person with bad intentions can gather the information we send. 

It is especially dangerous if you are logging to your account or paying for goods online if the connection is not secure.

This is why today HTTPS is widely popular and even websites that do not deal with sensitive information usually use this protocol to increase their credibility with the users and with search engines.

**HTTPS** is a version of the standard HTTP protocol in which the bytes are **encrypted**.

## Host or IP Address

The **Host or IP address** is the location of the resource or web page that is being accessed such as **www.softuni.org**, **gmail.com**, **127.0.0.1**.

## Port

There are 65535 possible networking ports.

The default one is 80 and the port can be any whole number in the range [0...65535].

These ports are used from the programs on the computer to accept data from the network.

When a program starts, it asks the operating system for a port at which it will accept data.

And when data is received at the given port the operating system knows that it should send it to the program that reserved this port.



## Path

A path is the exact location of a resouce (/forum/path/index.php).

When we define a given path it helps the server to find exactly what we need.

## Query String

The query string is used when we want to send data to the server for instance when we have a **GET Request**.

A query string consisting of `?id=27&lang=en`, for example, requests a resource with an id of 27 and will fetch the English version of the page.

## Fragment

The fragment is a keyword used to navigate to some section in the given page.

For example `#lectures`.

[/slide]

[slide hideTitle]

# URL Encoding (Percentage Encoding)

**URLs** can only contain **ASCII characters**.

This is why in order to send symbols that are not contained in the **ASCII Table** that part of the url will have to be encoded.

URL encoding is the process of replacing non-ASCII characters with combination of a percent sign **%** (Percentage encoding) and two hexadecimal digits.

This is the pattern used for a single character encoding: **%[character hex code]**.

| **Char** | **URL Encoding** | 
| --- | --- |
| space | %20 |
| щ | %D1%89 |
| " | %22 |
| # | %23 |
| $ | %24 |
| % | %25 |
| & | %26 |
|   |   |

Conditions for encoding characters:

- They are not present in the ASCII character set
- Special character used for other purposes in the URL such as `/`, `?`, `&`
- Unsafe characters that can be misinterpreted such as `%`, `<`, `>` and others


Space is also an unsafe character, it is escaped with a **"+"** or **"%20"**.

An URL encoded string looks like this:

**%D0%9D%D0%B0%D0%BA%D0%BE%D0%B2-%E7%88%B1-SoftUni​**

[/slide]

[slide hideTitle]

# Valid and Invalid URLs

Let us have a look at few valid and invalid examples of **URLs**.

- **Valid URLs:**

    1. `http://www.google.bg/search?sourceid=navclient&ie=UTF-8&rlz=1T4GGLL_enBG369BG369&q=http+get+vs+post`
    2. `https://fr.wikipedia.org/wiki/Portail:%C3%89nergie​`


- **Invalid URLs:**

    1. `http://www.google.bg/search?&q=C# .NET 4.0` - Should be **?q=C%23+.NET+4.0​** instead.
    2. `http://www.google.bg/search?&q=énergie​` - Should be **?q=%C3%A9nergie**

[/slide]