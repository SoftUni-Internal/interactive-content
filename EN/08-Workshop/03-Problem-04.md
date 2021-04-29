# CRUD

[slide hideTitle]
# Create Car Listing

// Video: 06: Create Car Listing page 

The Create page is available to logged-in users. 

It contains a form for creating new listings. Check if all the fields are filled before sending the request. 

[image assetsSrc="js-application-cartube-workshop-15.gif" /]

To create a listing, send the following **request**: 

```
Method: POST 
URL: /data/cars 
```
The required **headers** are described in the documentation. 

The service expects a body with the following structure: 
```
{ 
  brand, 
  model, 
  description, 
  year, 
  imageUrl, 
  price 
} 
```
The required **headers** are described in the documentation. 

The values for the **year** and the **price** must be positive numbers. 

The service will return the newly created record. 

Upon a success, **redirect** the user to the "**All Listings**" page. 
[/slide]


[slide hideTitle]
# Edit Listing

// Video: 07: Edit Listing page 

The "**Edit**" page is available to logged-in users and allows the author to **edit** their **own** listings. 

Clicking on the "**Edit**" link of a specific listing on the "**Details**" page should display the Edit page. 

It contains a form with input fields for all relevant properties. 

Check if all the fields are filled before you send the request. 

[image assetsSrc="js-application-cartube-workshop-17.gif" /]

To edit a listing, send the following **request**: 

```
Method: PUT 
URL: /data/cars/:id 
```

Where `:id` is the **id** of the desired listing. 

The service expects a body with the following shape: 

```
{ 
  brand, 
  model, 
  description, 
  year, 
  imageUrl, 
  price 
} 
```
The required **headers** are described in the documentation. 

The values for the **year** and the **price** must be positive numbers. 

The service will return the modified record. 

Upon success, **redirect** the user to the "**Details**" page. 

**Note:** "**PUT**" requests **do not** merge properties and will instead **replace** the entire record.  

## Delete Listing 

The delete action is available to **logged-in** users and for the listing that they have created. 

When the author clicks on the "**Delete**" action on any of their listing, a confirmation dialog should be displayed. 

Upon confirming this dialog, the listing should be deleted from the system. 

To delete a listing, send the following **request**: 

```
Method: DELETE 
URL: /data/cars/:id 
```

The `:id` is the **id** of the desired listing. 

The required headers are described in the documentation. 

The service will return an object, containing the deletion time. 

Upon success, **redirect** the user to the "**All Listings**" page. 

[/slide]

[slide hideTitle]
# My Listings

// Video: 08: My Listings page + Tests 

This page displays a list of all listings made by the current user.  

[image assetsSrc="js-application-cartube-workshop-18.gif" /]

If there are no listings, the following view should be displayed: 

[image assetsSrc="js-application-cartube-workshop-19.gif" /]

Send the following **request** to read the list of ads: 

```
Method: GET 
URL: /data/cars?where=_ownerId%3D%22{userId}%22&sortBy=_createdOn%20desc 
```

The `{userId}` is the id of the currently logged-in user. 

The required **headers** are described in the documentation. 

The service will return an array of listings. 
[/slide]

