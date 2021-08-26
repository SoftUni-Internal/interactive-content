# Lab: Hibernate Code First 

[slide hideTitle]
# Vehicle Hierarchy

[video src="https://videos.softuni.org/hls/Java/Java-ORM-and-Spring-Data/04.Hibernate-Code-First/04-Hibernate-Code-First-problem-3-solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Your task is to **create a Vehicle hierarchy.**

## Vehicle - Abstract Class

- Has an **Id - Long**
- Has a **Type - String**
- Has a **Model - String**
- Has a **Price - BigDecimal**
- Has a **fuelType - String**

## Car 

Extends from the **Vehicle** class

- Has **Seats - Integer**

## Truck

Extends from the **Vehicle** class

- Has **loadCapacity - Double**

## Bike

Extends from the **Vehicle** class


## Plane

Extends from the **Vehicle** class

- Has **passengerCapacity - Integer**

Use the appropriate **inheritance types** to reach **the diagrams** in the examples. 

[image assetsSrc="Hibernate-Code-First-Lab.png" /]

[image assetsSrc="Hibernate-Code-First-Lab(1).png" /]

[image assetsSrc="Hibernate-Code-First-Lab(2).png" /]

## Relations

## Plane_number

- Has an **id - BigInteger**
- Has a **number - String**
- Has a **one to one** relations with **Cars**


[image assetsSrc="Hibernate-Code-First-Lab(3).png" /]

## Companies

- Has an **id - BigInteger**
- Has a **name - String**
- Has a **one to many** relations with **Planes**

[image assetsSrc="Hibernate-Code-First-Lab(4).png" /]

## Drivers 

- Has an **id - BigInteger**
- Has a **full_name - String**
- Has a **many to many** relations with **Cars**

[image assetsSrc="Hibernate-Code-First-Lab(5).png" /]

[/slide]

[slide hideTitle]
# One-to-Many Relationship: Company and Planes

[video src="https://videos.softuni.org/hls/Java/Java-ORM-and-Spring-Data/04.Hibernate-Code-First/04-Hibernate-Code-First-problem-1-solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]

[slide hideTitle]
# One-to-One Relationship: Cars and Plate Numbers

[video src="https://videos.softuni.org/hls/Java/Java-ORM-and-Spring-Data/04.Hibernate-Code-First/04-Hibernate-Code-First-problem-2-solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]


[slide hideTitle]
# Many-to-Many Relationship: Drivers and Trucks

[video src="https://videos.softuni.org/hls/Java/Java-ORM-and-Spring-Data/04.Hibernate-Code-First/04-Hibernate-Code-First-problem-4-solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]