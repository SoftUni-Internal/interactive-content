# Routes & Templates

[slide hideTitle]
# Routes

You should implement the following routes:
- `/`: the main page should visualize all the cubes in the database and a search field
- `/about`: should render the about page
- `/create`: should render the create cube form
- `/details/:id`: should render the details for the selected cube.
- `Any other`: should render the `404 Not Found` page

[/slide]

[slide hideTitle]
# Main Page
[image assetsSrc="cubicle-workshop-08.png" /]

[image assetsSrc="cubicle-workshop-09.png" /]

[/slide]

[slide hideTitle]
# About Page
[image assetsSrc="cubicle-workshop-10.png" /]

[/slide]

[slide hideTitle]
# Create Page
[image assetsSrc="cubicle-workshop-11.png" /]

[/slide]

[slide hideTitle]
# Details Page
[image assetsSrc="cubicle-workshop-12.png" /]

[/slide]

[slide hideTitle]
# Not Found Page
[image assetsSrc="cubicle-workshop-13.png" /]

[/slide]

[slide hideTitle]
# Create Templates

Use the provided HTML to create templates using Handlebars. 

Identify the dynamic parts and use the appropriate syntax for interpolating and rendering the application context.
[/slide]

[slide hideTitle]
# Bonus: Search

Implement searching logic. Use the following validation:
- If the user searches **only** a string and **NO difficulty**, render **all difficulties**
- If the search does **NOT** meet the requirements, just redirect to the home page `/`

## Good luck!
[/slide]
