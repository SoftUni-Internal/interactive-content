[slide]

# Database Persistence

**All pages** in the application should persist data to **MongoDB** & work with **MongoDB**.

## Additional Pages

You should implement **2** new routes:

- **/create/accessory** - should render the create accessory form

- **/attach/accessory/:id** - should render the accessory page about attaching new accessory for cube

And **update the view** on **/details/:id route**, that render the cube's details.

Use the provided Resources to create the additional templates using Handlebars (The authentication here is the same as above - **username: student, password: student**).

Identify the dynamic parts and use appropriate syntax for interpolating and rendering the application context. Replace the old **CSS** file with the given one.

## Create Accessory Page View

[image assetsSrc="Workshop-Mongoose1.png" /]

## Attach new accessory view

[image assetsSrc="Workshop-Mongoose2.png" /]

**Note that, the options inside the select element must be only these ones which the current cube doesn’t have attached to itself.**

## Updated Details Page View

[image assetsSrc="Workshop-Mongoose3.png" /]

[/slide]