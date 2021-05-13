[slide hideTitle]
# Rezumat

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/03.JS-Applications-Rest-Services-&-AJAX/RO/JS-Applications-REST-Services-And-AJAX-39-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## În această lecție ai învățat:

- HTTP - un **protocol client-server bazat pe text** utilizat pentru transferul resurselor Web

- REST - un stil arhitectural pentru **comunicarea client-server**

   * bazat pe **cerere-răspuns**

- **Solicitari HTTP:**

   * GET

   ```
   GET /api/example
   HOST: example-server
   token: example
   ```

   * POST

   ```
   POST /api/example
   HOST: example-server
   Content-Type:application/json
   Accept:application/json
   token: example
   {
   //BODY
   }
   ```

   * PUT

   ```
   PUT /api/example/1
   HOST: example-server
   Content-Type:application/json
   Accept:application/json
   token: example
   {
    //BODY
   }
   ```

   * PATCH

   ```
   PATCH /api/example/1
   HOST: example-server
   Content-Type:application/json
   Accept:application/json
   token: example
   {
    //BODY
   }
   ```

   * DELETE

   ```
   DELETE /api/example/1
   HOST: example-server
   token: example
   ```

-  **RESTful** serviciile furnizează operațiuni **CRUD** prin HTTP

-  **AJAX** ne permite să încărcăm conținut dinamic în fundal

   *  **XMLHttpRequest**

   ```js
   const httpRequest = new XMLHttpRequest();

   httpRequest.addEventListener('readystatechange', function () {});

   httpRequest.open('GET', url);
   httpRequest.send();
   ```

   -  **Fetch**

   ```js
   fetch('/api/example.json')
      .then((response) => {})
      .catch((err) => {});
   ```

## În lecția următoare veți învăța:

- Programare și promisiuni asincrone

   * Ce este **Programarea asincronă**

   * Scufundare profundă în **Promise**

   * `async` și `await`

[/slide]
