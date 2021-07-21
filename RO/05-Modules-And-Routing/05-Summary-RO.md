[slide hideTitle]

# Rezumat

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/RO/05-Modules-and-Routing/Angular-Modules-and-routing-31-Summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## În această lecție ai învățat:

- Ce sunt NgModules
   * definesc structura proiectului nostru
   * organizează aplicația în **blocuri de funcționalități**

   ```js
   @NgModule({
      imports: [CommonModule],
      declarations: [CustomerListComponent, CustomerDetailsComponent],
      exports: [CustomerListComponent],
      providers: [CustomersService],
   })
   ```

-  **Rutarea** ne permite să afișăm diferite vizualizări fără a reîncărca întreaga pagină

- **Modulul Router** ne oferă navigare în aplicație
   * conține gărzi, rezolvatori și multe altele

   ```js
   <nav>
      <a routerLink='/home'>Home</a>
      <a routerLink='/about'>About</a>
   </nav>
   ```

## În lecția următoare veți învăța:

- Ce sunt **directivele**
   * atribute directive
   * directive structurale
   * construirea unei directive de atribute
- Folosirea formularelor în Angular
   * formulare bazate pe șabloane
   * formulare reactive

[/slide]
