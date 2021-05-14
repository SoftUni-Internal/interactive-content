# Bonus
[slide hideTitle]
# Search


[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/09-JS-Applications-Workshop/EN/CarTube-09-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Pagina **Search** permite utilizatorilor să filtreze listările în funcție de anul lor de producție. 

Conține un câmp de introducere și la trimiterea unei interogări afișează toate listările care se potrivesc.

[image assetsSrc="js-application-cartube-workshop-20.gif" /]

Dacă nu există rezultate potrivite, ar trebui afișată următoarea vizualizare:

[image assetsSrc="js-application-cartube-workshop-21.gif" /]

Trimiteți următoarea **cerere** pentru a citi o listă filtrată a anunțurilor după anul lor de producție:

```
Method: GET 
URL: /data/cars?where=year%3D{query} 
```
`{query}` este informația de căutare introdusă de utilizator în câmpul de introducere.

Necesarele **anteturi** sunt descrise în documentație.

Serviciul va returna o serie de listări.

Dacă nu există potriviri, afișați textul "**No matching listings**".
[/slide]

