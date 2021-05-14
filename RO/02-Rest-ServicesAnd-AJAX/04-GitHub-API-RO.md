# GitHub API

[slide hideTitle]

# GitHub API - Exemplu

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/RO/JS-Applications-REST-Services-And-AJAX-18-19-github-api-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Pentru a testa **GitHub's API**, trebuie să folosim **Postman**.

În aceste exemple, vom trimite solicitări **GET** către următoarele adrese URL:

- Pentru a lista toate repozitoriile publice, URL-ul de care avem nevoie este: 

`https://api.github.com/users/SoftUni/repos`

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-23.png" /]

- Pentru a lista toate commit-urile dintr-un repozitoriu public, URL-ul de care avem nevoie este: 

`https://api.github.com/repos/softuni/js-apps/commits`

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-24.png" /]

- Pentru a obține problemele dintr-un repozitoriu public, URL-ul de care avem nevoie este: 

`https://api.github.com/repos/softuni/js-apps/issues`

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-25.png" /]

- Pentru a obține primul număr dintr-un repozitoriu public, URL-ul de care avem nevoie este: 

`https://api.github.com/repos/softuni/js-apps/issues/1`

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-26.png" /]

[/slide]

[slide hideTitle]

# GitHub: Numărul Etichetelor: Exemplu

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/RO/JS-Applications-REST-Services-And-AJAX-20-21-github-labels-api-getting-labels-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

În acest exemplu, trebuie să obținem o anumită problemă.

Trimitem o cerere **GET** către `https://api.github.com/repos/softuni/js-apps/issues/:id`, unde `:id` este problema - `1`:

`https://api.github.com/repos/softuni/js-apps/issues/1`.

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-26.png" /]

## Obținerea unei etichete

Pentru a obține eticheta unei anumite probleme, trebuie să trimitem o solicitare **GET** la următoarea adresă URL: 

`https://api.github.com/repos/softuni/js-apps/issues/1/labels`.

[image assetsSrc="JS-Applications-Rest-Services-and-AJAX-27.png" /]

[/slide]

[slide hideTitle]

# GitHub: Creare Problemă: Exemplu

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/RO/JS-Applications-REST-Services-And-AJAX-22-github-api-creating-an-issue-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


De data aceasta trebuie să **creăm** o problemă (datele ar trebui **trimise** către server). 

Pentru a face acest lucru, trebuie să trimitem o solicitare **POST** la următoarea adresă URL: 

`https://api.github.com/repos/softni/js-apps/issues`.

De asemenea, trebuie să alegem **Basic Authentication** în antetul **Authorization**. 

În câmpurile **Username** și **Password**, trebuie să introducem acreditările noastre GitHub.

Ultimul pas este de a trece un obiect JSON către **corpul** cererii.

Trimiteți cererea către server cu următorul JSON ca corp (trimiteți-l ca `application/json`): 

```
{
    "title":"Found a bug",
    "body":"I'm having a problem with this."
}
```

[/slide]
