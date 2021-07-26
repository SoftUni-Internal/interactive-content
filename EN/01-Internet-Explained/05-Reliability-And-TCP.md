# Reliability and TCP

[slide hideTitle]

# Reliability

The transfer of data through the Internet is a **complicated process**.

It is common for packets to travel through **different routes**.

They can even arrive in a **different order** from how they were sent.

Sometimes **packets** fail to arrive at all.

The Transmission Control Protocol (**TCP**) ensures that Internet communication occurs **without** the aforementioned **problems**.

**TCP** brings **reliability** to the packet transferring process.

[/slide]

[slide hideTitle]

# Transmission Control Protocol - TCP

As covered previously, **packets** hold important information in their **headers**.

**TCP** goes through these **headers** and verifies there are not any problems.

These are some of the things **TCP** checks for:

- `Packet number` - the total number of packets

- `Packet size` - the expected size of the packets

- `Packet order` - how packets were originally ordered

If it finds a **problem** in any of these categories, it **discards** the **packet**.

If the transmission is **problem-free** and the packets are **in order**, the data is **certified**.

It is then **merged** into the **original file**.

[/slide]

[slide hideTitle]

# User Datagram Protocol

**UDP** is a simple transaction protocol.

Data delivery with the **User Datagram Protocol** is **not guaranteed**, and neither is **correct order** or proper **error checking**.

**UDP** is preferred when data needs to be transferred within a **short time frame**.

Often referred to as the "**fire-and-forget**" protocol, it is not concerned with whether the data was transferred successfully or not.

[/slide]

[slide hideTitle]

# TCP vs. UDP

The following list aims to compare **TCP** and **UDP**:

- `Reliability` - **TCP** is the clear winner here as packets are **neatly-organised** and **checked for errors**

- `Speed` - **UDP** is faster than **TCP** as it does not lose time to **recover errors**

- `Header size` - headers in **UDP** are **8 bytes**, that is 250% lighter than **TCP** headers (**20 bytes**)

- `Data integrity` - **TCP** uses **handshaking protocols** to ensure the integrity of the data, while **UDP does not**

While **TCP** is more widespread, **UDP** still has some use cases.

**TCP** is **safer and more secure**, while **UDP** is **fast and lightweight**.

[/slide]

