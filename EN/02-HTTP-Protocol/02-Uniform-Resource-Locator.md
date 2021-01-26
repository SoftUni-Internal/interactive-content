[slide hideTitle]

# Uniform Resource Locator - URL

HTTP is the protocol by which the client and the server communicate.

It's the set of rules both parties should keep for the communication to happen without any misunderstandings.

But how does the HTTP know which resource to ask for? 

This is where the **Uniform Resource Locator - URL** comes in place. 

The URL indicates which resource we need, but even more than that, it indicates which **HTTP** protocol to use.

The **URL** is a formatted string consisting of several key parts, now let's have a look at each of them and try to understand their use.

[image assetsSrc="02-Java-Spring-Fund-HTTP(1).png" /]

1. **Protocol** (HTTP, FTP, HTTPS...) - Different protocols for communicating. HTTP in most cases.

    - As we already mentioned the protocol just sets the rules for communication between two machines.

        That is why the first part of every **URL** is the protocol by which the machines will be communicating.

        We are learning about the **HTTP** protocol, but there is also an **HTTPS**.

        As you know, when we send data from our computer to the server it's transferred through different routers.

        In its pure form **HTTP** is just encoded bytes.

        This means that somewhere along the way, a person with bad intentions (hacker) can gather the information we send. 

        Now, what if we send our credit card information.

        That's is why the need for **HTTPS** has arisen.

        It's a version of the **HTTPS** protocol in which the bytes are **encrypted**.
    
2. **Host or IP address** (www.softuni.org, gmail.com, 127.0.0.1).

3. **Port** (the default port is **80**) - a number in range [0...65535].
    - In our computers we have **65535 networking ports**.

        These ports are used from the programs on the computer to accept data from the network.

        When a program starts, it asks the operating system for a port at which it will accept data.

        And when we receive data to the given port our operational system knows that it should send it back to the program that occupies this port.

4. **Path** (/forum/path/index.php).
    - Path is the exact location of a page, post, file on our server. 
    
        When we define a given path it helps the server to find exactly what we need.

5. **Query String** (?id=27&lang=en).
    - The query string is used when we want to send data to the server for instance when we have **GET Request**.


6. **Fragment** (#lectures) - used on the client to navigate to some section in the given page.

[/slide]

[slide hideTitle]

# URL Encoding (Percentage Encoding)

One specific of the **URLs** is that they can contain only **ASCII characters**.

That is why when we want to send symbols that are not contained in the **ASCII Table** the URL has to convert them to valid ASCII format.

URL encoding is to replace any *unsafe ASCII* character with a **%** (Percentage encoding) followed by two hexadecimal digits.

In the pattern **%[character hex code]**.

Let's have some examples: 

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

- Space is also an unsafe character, it is escaped with a **"+"** or **"%20"**.

An URL encoded string:
**%D0%9D%D0%B0%D0%BA%D0%BE%D0%B2-%E7%88%B1-SoftUni​**

[/slide]

[slide hideTitle]

# Valid and Invalid URLs

Let's have a look at few valid and invalid examples of **URLs**.

- **Valid URLs:**

    1. **http://www.google.bg/search?sourceid=navclient&ie=UTF-8&rlz=1T4GGLL_enBG369BG369&q=http+get+vs+post**
    2. **http://bg.wikipedia.org/wiki/%D0%A1%D0%BE%D1%84%D1%82%D1%83%D0%B5%D1%80%D0%BD%D0%B0_%D0%B0%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D0%B8%D1%8F​**

- **Invalid URLs:**

    1. **http://www.google.bg/search?&q=C# .NET 4.0** - Should be **?q=C%23+.NET+4.0​** instead.
    2. **http://www.google.bg/search?&q=бира​** - Should be **?q=%D0%B1 %D0%B8%D1%80%D0%B0**

[/slide]