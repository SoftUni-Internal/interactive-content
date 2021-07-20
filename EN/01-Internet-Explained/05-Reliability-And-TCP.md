# Reliability and TCP

[slide hideTitle]

# Reliability

The transfer of data through the Internet is a **complicated process**.

It is very common for packets to travel through **different routes**.

Not only that, but they can even arrive in a **different order** than they were sent.

It can even get as bad as **packets** not arriving at all.

**TCP**'s task is to assure that Internet communication happens **without** the aforementioned **problems**.

It can be said that **TCP** brings **reliability** of packet transfers.

[/slide]

[slide hideTitle]

# Transmission Control Protocol - TCP

The **TCP** is like a big machine for **solving a puzzle**.

As covered previously, **packets** hold important information in their **headers**.

**TCP** goes through these **headers** and makes sure there are not any problems.

These are some of the things **TCP** checks for:

- `Packet number` - The total number of packets

- `Packet size` - The expected size of the packets

- `Packet order` - How packets should be ordered

If it finds a **problem** in any of these categories, it **discards** the **packet**.

If the transmission is **problem-free** and the packets are **in order**, the data is **certified**.

It is then **merged** into the **original file**.

[/slide]

[slide hideTitle]

# User Datagram Protocol

**UDP** is a simple transaction protocol.

Data delivery with the **User Datagram Protocol** is **not guaranteed**, and neither is **correct order** or proper **error checking**.

**UDP** is preferred when data needs to be transferred within a **short time frame**.

It is known as the "**fire-and-forget**" protocol.

With it, it does not matter if the data was successfully transferred.

[/slide]

[slide hideTitle]

# TCP vs UDP

**TCP** and **UDP** both have their strength and weaknesses.

Here are a few categories in which one outshines the other:

- `Reliability` - **TCP** is the clear winner here as packets are **neatly-organised** and **checked for errors**.

- `Speed` - **UDP** is faster than **TCP** as it does not lose time to **recover errors**.

- `Header size` - Headers in **UDP** are **8 bytes**, that is 250% lighter than **TCP** headers (**20 bytes**).

- `Data integrity` - **TCP** uses **handshaking protocols** to ensure the integrity of the data, while **UDP does not**.

Even though most of the data is transmitted with **TCP**, **UDP** still has some use cases.

In conclusion, **TCP** is **safe and secure**, while **UDP** is **fast and lightweight**.

[/slide]
