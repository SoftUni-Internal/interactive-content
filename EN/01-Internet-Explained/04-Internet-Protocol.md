# Internet Protocol

[slide hideTitle]

# Definition

The **Internet Protocol** is a communications protocol that essentially **forms the Internet**.

**IP** is very similar to a post office.

Its responsibility is to take data from a **source host** (computer) to a **destination host**.

To do that, it splits data into **small pieces** (**packets**) and provides a **unique** IP address for every computer.

The **Internet Protocol** is under constant **development** and **improvement**.

Even today, people are working on **newer** versions of the protocol, which will improve speed, security, and will reach more people.

[/slide]

[slide hideTitle]

# IP Address

The Internet consists of **billions** of computers that are connected.

For every computer to be recognizable, it must have a **unique** way of identification.

This is what an **IP address** is for.

The following IP address has two distinct parts:

```java
/*

195.92.173.152

*/
```

- The first two numbers, or `195.92`, specifying the user's network code

- The last two numbers, or `173.152`, identifying a user's computer

[/slide]

[slide hideTitle]

# IPv4

IPv4 or **Internet Protocol version 4** was the standard for creating IP addresses up until a few years ago.

It consists of four **numbers** (between **0** and **255**) separated by a dot.

```java
/*

148.101.118.162
6.233.41.132
159.63.60.27
42.75.221.103
48.105.157.10

*/
```

The **fourth version** of the **Internet protocol** has been in use since **1982**.

Despite its age, it is still the **most used version**.

There is a problem with **IPv4**, however, and it is connected to the rapid **growth of population** and **Internet use**.

There are close to **4.3 billion** possible combinations of an **IPv4 address**.

On **25 November 2019**, the last **IPv4 address** was assigned.

This means that from now on, **IPv4 addresses** addresses can only be **switched** by **buying** or **selling** one.

This was not an option, so the **IPv6** was created as an alternative to **IPv4**.

[/slide]

[slide hideTitle]

# IPv6

The **IPv6** was created as a draft standard in 1998.

It is a much larger number than the **IPv4**.

The sixth version of the Internet protocol has about **340 undecillion** possible combinations.

For reference, an **undecillion** is one, followed by 36 zeroes.

**IPv6** is a **128-bit** number, divided into **eight** sections of **16-bit** parts.

Each of its parts is converted to **hexadecimal** and is separated by a **colon**.

```java
/*

2001:0db8:0000:0000:0000:8a2e:0370:7334

*/
```

The zeroes can be **replaced** with another **colon** to shorten the address like so:

```java
/*

2001:db8::8a2e:370:7334

*/
```

[/slide]

[slide hideTitle]

# What is a DNS?

The DNS, or **Domain Name System**, is a way to represent those big **IP addresses** as **easily readable names**.

This is a more **efficient** way for people to **remember** the names of the websites they want to **access**.

The link between a **domain name** and an **IP address** is held in a **large Internet-wide decentralized database**.

Decentralization prevents a person from **hacking** and changing which **domain name** corresponds to which **IP**.

Take the following domain - `www.google.com`.

It has three distinct parts:

- `www` - Subdomain

- `google` - Domain name

- `com` - Top-level domain

When entered in the **browser**, a **request** is made to a **Domain Name Server**, which has many **domain names** and their respective **IP addresses** **cached**.

[/slide]

[slide hideTitle]

# DNS Example

The following image illustrates the connection between a **domain name** and an **IP address**:

[image assetsSrc="Java-Web-Introduction-To-The-Internet-3.png" /]

[/slide]
