# Lab: Hibernate Code First 

[slide hideTitle]

# 1. Vehicle Hierarchy

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


[/slide]

[slide hideTitle]
# 2. Relations

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