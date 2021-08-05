# Spring Boot Introduction Lab

[slide hideTitle]

# 1. Functionality Overview

The application should be able to easily **accept** hard-formatted.

The application is called - **Super Market**.

Look at the pictures below to see what must happen:

- When you've ran the project:

[image assetsSrc="Java-Spring-Boot-Exercises-1.jpg" /]

- Successfully adding a new category:

[image assetsSrc="Java-Spring-Boot-Exercises-2.jpg" /]

[image assetsSrc="Java-Spring-Boot-Exercises-3.jpg" /]

- Invalid category name message:

[image assetsSrc="Java-Spring-Boot-Exercises-4.jpg" /]

- Successfully adding a new town:

[image assetsSrc="Java-Spring-Boot-Exercises-5.jpg" /]

- Successfully adding a new shop:

[image assetsSrc="Java-Spring-Boot-Exercises-6.jpg" /]

- Successfully adding a new seller:

[image assetsSrc="Java-Spring-Boot-Exercises-7.jpg" /]

- Successfully adding a new product:

[image assetsSrc="Java-Spring-Boot-Exercises-8.jpg" /]

- Successfully setting a manager:

[image assetsSrc="Java-Spring-Boot-Exercises-9.jpg" /]

- Successfully distributing products to shops:

[image assetsSrc="Java-Spring-Boot-Exercises-10.jpg" /]

- Showing all sellers in a specific shop:

[image assetsSrc="Java-Spring-Boot-Exercises-11.jpg" /]

- Showing all products in a specific shop:

[image assetsSrc="Java-Spring-Boot-Exercises-12.jpg" /]

[/slide]

[slide hideTitle]

# 2. Model Definition

There are 5 main models that the **Super Market database** application should contain in its functionality.

Design them in the **most appropriate** way, considering the following **data constraints**:

## Town

- **id** - a **char sequence**

- **name** - a **char sequence**

## Shop

- **id** - a **char sequence**

- **address** - a **char sequence** (It is **unique** and cannot be **null**. Must be at least **2 characters**.)

- **name** - a **char sequence** (Must be at least **2 characters**.)

## Seller

- **id** - a **char sequence**

- **firstName** - a **char sequence** (Cannot be **null**. Must be at least **2 characters**.)

- **lastName** - a **char sequence** (Cannot be **null**. Must be at least **2 characters**.)

- **age** - an **integer** (Cannot be **null**. The person must be at least 18 years old.)

- **salary** - a **number** (Must be a positive number. Cannot be **null**.)

## Category

- **id** - a **char sequence**

- **name** - a **char sequence** (It's **unique** and cannot be **null**. Must be at least **2 characters**.)

## Product

- **id** - a **char sequence**

- **bestBefore** - a **date**

- **description** - a **very long char sequence**

- **name** - a **char sequence** (Cannot be **null**. Must be at least **2 characters**.)

- **price** - a **number** (Mmust be a positive number. Cannot be **null**.)

**NOTE**: Name the entities and their class members, **exactly** in the **format stated** above.

Do not name them in snake case with the dashes, of course.

## Relationships

Your partners gave you a little hint about the more complex relationships in the database, so that you can implement it correctly.

One **Shop** may be in only one **Town**, and one **Town** may have many **Shops**.

One **Seller** may be in only one **Shop**, and one **Shop** may have many **Sellers**.

One **Product** may have only one **Category**, and one **Category** may have many **Products**.

One **Product** may be in many **Shops**, and one **Shop** may have many **Products**.

[image assetsSrc="Java-Spring-Boot-Exercises-13.jpg" /]

[/slide]
