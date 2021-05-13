# Bonus
[slide hideTitle]
# Search

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/09-JS-Applications-Workshop/EN/CarTube-09-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The **Search** page allows users to filter listings by their production year. 

It contains an input field and upon submitting a query it displays all matching listings.

[image assetsSrc="js-application-cartube-workshop-20.gif" /]

If there are no matching results, the following view should be displayed:

[image assetsSrc="js-application-cartube-workshop-21.gif" /]

Send the following **request** to read a filtered list of ads by their production year:

```
Method: GET 
URL: /data/cars?where=year%3D{query} 
```
`{query}` is the search information that the user has entered in the input field. 

The required **headers** are described in the documentation. 

The service will return an array of listings. 

If there are no matches, display the text "**No matching listings**".
[/slide]

