[slide hideTitle]

# Find GPX Coordinates File

Go to the create route **localhost:8080/routes/add**, and we should see the following page:

[image assetsSrc="51-Add-Image.png" /]

If we look at the GPX Coordinates, we will see that we have to send a file. The program wants us to send a file with a **.gpx** extension.

There are a lot of **sites**, where we can create our .gpx coordinates. An easy site to create a route is **https://gpx.studio**.

[image assetsSrc="50-GPX-Coord.png" /]

Click to points on the map, and those will be our **starting** and **ending** locations. For example, our route will be **Mount Everest** so we select a route leading to it. After we are done, we export the file to our computer and now we can upload it to our site.

After we click the **Add Route** button, we should successfully create our record. If we are not sure if all fields are saved, we can go to our database and check.

[image assetsSrc="52-Database-Route.png" /]

We can see that the **route** is saved, and the categories are also saved in the **routes_categories** table.

In the next workshop, we will continue with our **PathFinder** workshop, and add more interesting features like:

- **custom user profile page**
- **weather api implementation**
- **comments and messages**

[/slide]
