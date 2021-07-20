# Sending and Receiving Information

[slide hideTitle]

# Packets

It is commonly known that computers break down information into **bits**.

**Packets** are the Internet's way of dividing data into **small** pieces.

Imagine that Tom wants to buy a new bed for his apartment on the 6th floor.

It would be very difficult for him to bring it to the top of the building in one piece.

Instead, the bed is broken down into small parts, that can be individually carried and reassembled.

**Packets** act just like the parts of the bed.

A large file is broken into **packets** and send through the Internet.

On arrival, the **packets** are brought back together, recreating the original file.

For **packets** to work properly, the carry some **crucial information** with them:

- `Addresses` - Where a **packet** **comes from** and where it is **supposed to go**

- `Length` - The **size of a packet**

- `Payload` - The **data** in the packet

- `Priority` - Should the packet be processed immediately or not

[/slide]

[slide hideTitle]

# Travelling on the Packets in the Network

The following image illustrates the "road" that a **packet** travels:

[image assetsSrc="Java-Web-Introduction-To-The-Internet-2.png" /]

[/slide]
