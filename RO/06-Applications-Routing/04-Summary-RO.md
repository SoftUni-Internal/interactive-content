[slide hideTitle]

# Rezumat

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/07.JS-Applications-Routing/En/JS-apps-routing-28-Summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## În această lecție ai învățat:

- **Aplicația pe mai multe pagini** reîncarcă întreaga pagină atunci când utilizatorul interacționează cu aplicația

-  **Aplicația pe o singură pagină** actualizează dinamic conținutul paginii fără a actualiza aplicația

-  Tipuri de **Rutare**

   * Bazată pe Hash

   ```js
   let changePath = function (path) {
      let currentPath = window.location.href;
      window.location.href = currentPath.replace(/#(.*)$/, '') + '#' + path;
   };
   ```

   * Bazată pe Push

```js
let stateObj = {
    facNum: '123'
};
history.replaceState(stateObj, '', 'newStudent.html');
```

   -  API-ul Istoric oferă acces la obiectul **istoric** al browserului

      * furnizează metode precum `back()`, `forward()`, `go()`, etc

## În următoarea lecție vei invăța despre:

- Șabloane de proiectare

   * ce este Șablonul

   * cele mai comune Șabloane de proiectare

[/slide]
