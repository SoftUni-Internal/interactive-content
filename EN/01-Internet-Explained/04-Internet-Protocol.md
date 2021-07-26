# Internet Protocol

[slide hideTitle]

# Definition

The **Internet Protocol** is a communications protocol that essentially **forms the Internet**.

This protocol is strictly **stateless**, meaning that it does not maintain any state between messages.

Its responsibility is to take data from a **source host** (computer) to a **destination host**.

To do that, it splits data into **small pieces** (**packets**) and provides a **unique** IP address for every computer (**host**).

The **Internet Protocol** is under constant **development** and **improvement**.

Developers are working on **newer** versions of the protocol, aiming to improve speed and security.

The main goal is to provide Internet access to more people.

[/slide]

[slide hideTitle]

# IP Address

The Internet consists of **billions** of interconnected computers.

For every computer to be recognizable, it must have a **unique** way of identification - an **IP address**.

The following IP address has two distinct parts:

```
195.92.173.152
```

- The first two numbers, or `195.92`, specifying the user's network code

- The last two numbers, or `173.152`, identifying a user's computer

The IP protocol has had many **versions** over the years, but only two are in current use:

- **IPv4**: the most common version
- **IPv6**: a newer version, with a much higher number of addresses

[/slide]

[slide hideTitle]

# IPv4

IPv4 or **Internet Protocol version 4** was the standard for creating IP addresses until the introduction of IPv6 a few years ago.

It consists of four **numbers** (between **0** and **255**) separated by a dot.

```
148.101.118.162
6.233.41.132
159.63.60.27
42.75.221.103
48.105.157.10
```

The **fourth version** of the **Internet protocol** has been in use since **1982**.

Despite its age, it is still the **most used version**.

There is a problem with **IPv4**, related to the rapid **growth of active Internet users**.

There are close to **4.3 billion** possible combinations of an **IPv4 address**.

The last **IPv4 address** was assigned on **November 25th, 2019**.

From that date, **IPv4 addresses** addresses can only be **switched** by **buying** or **swapping** them.

The **IPv6** standard, an alternative to **IPv4**, has a significantly larger number of possible addresses.

[/slide]

[slide hideTitle]

# IPv6

**IPv6** was created as a draft standard in 1998.

The sixth version of the Internet protocol has about **340 undecillion** possible combinations.

For reference, an **undecillion** is one, followed by 36 zeroes.

**IPv6** is a **128-bit** number, divided into **eight** sections of **16-bit** parts.

Each of its parts is converted to **hexadecimal** and separated by a **colon**.

```
2001:0db8:0000:0000:0000:8a2e:0370:7334
```

The zeroes can be **replaced** with another **colon** to shorten the address like so:

```
2001:db8::8a2e:370:7334
```

[/slide]

[slide hideTitle]

# What is a DNS?

The DNS, or **Domain Name System**, is a way to represent those large **IP addresses** as **easily readable names**.

It provides a more **efficient** way for users to **remember** the names of the websites they want to **access**.

The link between a **domain name** and an **IP address** is held in an **Internet-wide decentralized database**.

Decentralization prevents a person from changing which **domain name** corresponds to which **IP**.

Consider the following domain: `www.google.com`

It has three distinct parts:

- `www` - subdomain

- `google` - domain name

- `com` - top-level domain

When entered by a user, the **browser** makes a **request** to a **Domain Name Server**, which caches **domain names** and their respective **IP addresses**.

[/slide]

[slide hideTitle]

# DNS Example

The following image illustrates the connection between a **domain name** and an **IP address**:

[image assetsSrc="Java-Web-Introduction-To-The-Internet-3.png" /]

[/slide]

