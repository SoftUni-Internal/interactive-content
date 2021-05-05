# CRUD

[slide hideTitle]
# Create Meme Screen 

// Video: 06: Create Car Listing page 

The **Create** page is available to logged-in users. 

It contains a form for creating a new meme. 

Check if all the fields are filled before you send the request.

[image assetsSrc="js-application-exap-prep-6.png" /]

To create a meme, send the following request:

```
Method: POST
URL: /data/memes
```

The required **headers** are described in the documentation. 

The service expects a body with the following structure:

```
{
  title,
  description,
  imageUrl
}
```

The service will return the newly created record. 

Upon success, **redirect** the user to the **All Memes** page.


[/slide]


[slide hideTitle]
# Edit Meme Screen 

// Video: 07: Edit Listing page 

The **Edit** page is available to logged-in users and allows the author to **edit** their **own** meme. 

Each meme`s Details page should hold a link which redirects us to its edit page. 

It contains a form with input fields for all relevant properties. Check if all the fields are filled before you send the request.

[image assetsSrc="js-application-exap-prep-10.png" /]

To edit a meme, send the following request:

```
Method: PUT
URL: /data/memes/:id
```

Where `:id` is the **id** of the desired listing.

The service expects a body with the following structure:

```
{
  title,
  description,
  imageUrl
}
```

The required **headers** are described in the documentation. 

The service will return the modified record. 

If successful, redirect the user to the **Details** page.

**Note:** **PUT** requests **do not** merge properties and will instead **replace** the entire record. 


## Delete Meme  

The delete functionality is available to **logged-in** users and only for memes that they have created. 

When the author clicks **Delete**, a confirmation dialog should be displayed. 

Upon completing this dialog, the meme should be deleted from the system.

To delete a meme, send the following request:

```
Method: DELETE
URL: /data/memes/:id
```

The `:id` is the **id** of the desired listing. 

The required **headers** are described in the documentation. 

The service will return an object, containing the deletion time. 

Upon success, **redirect** the user to the **All Memes page**.


[/slide]

[slide hideTitle]
# User Profile

// Video: 08: My Listings page + Tests 

Each **logged-in user** should be able to view their profile by clicking on the `[My Profile]` button. 

The fields for the  **Username**, **Email** and **My memes count** should be filled with the data of the current user.

Note that the gender field of the user determines which picture is displayed as their avatar.

[image assetsSrc="js-application-exap-prep-11.png" /]

If there are no memes, the following view should be displayed:

[image assetsSrc="js-application-exap-prep-12.png" /]

Send the following request to read the list of ads:

```
Method: GET
URL: /data/memes?where=_ownerId%3D%22{userId}%22&sortBy=_createdOn%20desc
```
Where `{userId}` is the id of the currently logged-in user.

The required **headers** are described in the documentation. 

The service will return an array of listings.

[/slide]

