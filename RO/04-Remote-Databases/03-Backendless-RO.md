[slide hideTitle]

# Prezentare Generală a Backendless

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/05.JS-Applications-Remote-Databases/EN/JS-Apps-Backendless-Overview-1-2-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Backendless** este o platformă mobilă Backend-as-a-Service (**mBaaS**).

Dați click [aici](https://develop.backendless.com/registration) pentru a vă **înregistra**, sau [aici](https://develop.backendless.com/login) - pentru a vă **loga**.

După ce v-ați autentificat, veți fi îndemnat să **creați o nouă aplicație**.

Alegeți un **nume** potrivit și o **zonă de hosting**.

Locația zonei de hosting este importantă - trebuie să fie **cât mai aproape posibil** de baza principală de utilizatori.

Puteți alege **opțional** un **plan** dacă aveți în minte **un tip specific de serviciu**.

Pentru a vedea Documentația Backendless **REST API**, dați click [aici](https://backendless.com/docs/rest/).

[/slide]

[slide hideTitle]

# Operații User Auth 

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/05.JS-Applications-Remote-Databases/EN/JS-Apps-Backendless-User-Auth-Operations-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Pentru a implementa **autentificarea** în Backendless, vizitați [User Registration Documentation](https://backendless.com/docs/rest/users_user_registration.html).

Apoi, deschideți **Postman** pentru a testa API-ul.

Pentru a primi **Cheia REST API**, accesați **Data** \> **Rest Console**.

Copiați link-ul din căsuța de text "**Request URL**".

Pentru a testa o **înregistrare** a unui utilizator, faceți o solicitare POST în Postman.

**URL-ul** ar trebui să arate așa:

`https://api.backendless.com/application-id/REST-api-key/users/register`

Corpul solicitării **trebuie** să includă un **email** și o **parolă**:

```js
{  
  "email" : value,  
  "password" : value,  
  "objectId" : value, 
  ...  
}
```

`objectId` este **opțional** și se folosește doar pentru [logările vizitatorilor temporari](https://backendless.com/docs/rest/users_guest_login.html).

Testați **logarea** și **delogarea** folosind următoarele **URL-uri**:

- Logare - **POST**: `https://api.backendless.com/application-id/REST-api-key/users/login`

Pentru a vă **loga**, folosiți informațiile din solicitarea de înregistrare:

```js
{  
  "email" : value,  
  "password" : value,  
}
```

Corpul **răspunsului** va arăta așa:

```js
{  
  "objectId" : value,  
  "user-token": value,   
  //all user properties (except for password) in the "prop-name":"prop-value" format  
  "prop-name1":value,  
  "prop-name2":value,  
  "prop-name3":value,  
  ...  
}

```

- Delogare folosind o solicitare **GET**: `https://api.backendless.com/application-id/REST-api-key/users/logout`

[/slide]

[slide hideTitle]

# Lucrul cu Database API

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/05.JS-Applications-Remote-Databases/EN/JS-Apps-Backendless-Working-with-the-Database-API-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Database API** este folosit pentru crearea, modificarea și eliminarea **obiectelor**.

Pentru a adăuga un **tabel nou**, accesați secțiunea **Data** și dați click pe semnul **"+"** din colțul de sus din stânga.

Veți fi îndemnat să vă creați propria **schemă** și propriile **coloane**.

Pentru mai multe informații, consultați [Database API Documentation](https://backendless.com/docs/rest/data_overview.html).

[/slide]
