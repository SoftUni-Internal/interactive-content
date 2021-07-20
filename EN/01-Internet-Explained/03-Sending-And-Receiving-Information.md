# Sending and Receiving Information

[slide hideTitle]

# Packets

Computers tend to break down information into **bits** - the most basic unit of information.

**Packets** are the Internet's way of dividing data into **small** pieces.

Imagine that someone wants to buy a new bed for their apartment on the sixth floor.

It would be challenging for them to move it to the top of the building in one piece.

We must disassemble the bed into small parts that allow for more efficient transportation.

**Packets** act just like the parts of the bed.

A large file is divided into **packets** and sent through the Internet.

On arrival, the **packets** are brought back together, recreating the original file.

For **packets** to work properly, the carry some **crucial information** with them:

- `Addresses` - Where a **packet** **comes from** and where it is **supposed to go**

- `Length` - The **size of a packet**

- `Payload` - The **data** in the packet

- `Priority` - Should the packet be processed immediately or not

[/slide]

[slide hideTitle]

# Travelling On the Packets in the Network

The following image illustrates the "road" that a **packet** travels:

[image assetsSrc="Java-Web-Introduction-To-The-Internet-2.png" /]

[/slide]

