# Bonus
[slide hideTitle]
# Search

// Video: 09: Search page + Tests

The Search page allows users to filter listings by their production year. It contains an input field and, upon submitting a query, a list of all matching listings. 

[image assetsSrc="js-application-cartube-workshop-20.gif" /]

If there are no results, the following view should be displayed: 

[image assetsSrc="js-application-cartube-workshop-21.gif" /]

Send the following **request** to read a filtered list of ads by their production year: 

```
Method: GET 
URL: /data/cars?where=year%3D{query} 
```
The `{query}` is the search query that the user has entered in the input field. 

The required **headers** are described in the documentation. 

The service will return an array of listings. 

If there are no matches, display the text "**No matching listings**" instead. 
[/slide]

