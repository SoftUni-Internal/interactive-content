# Routes & Templates

[slide hideTitle]
# Routes

You should implement the following routes:

- `/` - The main page where all the cubes and a search field should be visualized.
- `/about` - Render the `about` page.
- `/create` - Render the `create cube` form.
- `/details/:id` - Display the details for the selected cube.
- `Any other` - You should display the `404 Not Found` page.

[/slide]

[slide hideTitle]
# Main Page

Display the following view when there are cubes in the database:

[image assetsSrc="cubicle-workshop-08.png" /]

If no cubes were found, the user should see this:

[image assetsSrc="cubicle-workshop-09.png" /]

[/slide]

[slide hideTitle]
# About Page

This is how the `about` page should look:

[image assetsSrc="cubicle-workshop-10.png" /]

[/slide]

[slide hideTitle]
# Create Page

You should render the following form on the `create` page:

[image assetsSrc="cubicle-workshop-11.png" /]

[/slide]

[slide hideTitle]
# Details Page

This is what the user should see on the `details` page:

[image assetsSrc="cubicle-workshop-12.png" /]

[/slide]

[slide hideTitle]
# Not Found Page

Display this error message on any other route:

[image assetsSrc="cubicle-workshop-13.png" /]

[/slide]

[slide hideTitle]
# Creating Templates

Use the provided HTML to create templates using Handlebars. 

Identify the dynamic parts, then use the appropriate syntax for interpolating and rendering the application context.
[/slide]

[slide hideTitle]
# Bonus: Search

Implement search functionality. 

Use the following validation:

- If the user searches **only** by name and **NO difficulty**, render **all difficulties**

- If the search does **NOT** meet the requirements, redirect to the home page `/`

## Good luck!
[/slide]
