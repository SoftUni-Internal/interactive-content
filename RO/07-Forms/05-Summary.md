[slide hideTitle]

# Rezumat

## În această lecție ai învățat:

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/RO/07-Forms/js-angular-forms-49-Summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- Există trei tipuri de **directive**:
    * folosim directivele **component** pentru a defini interfețele utilizatorului    
    * directivele **attribute** modifică aspectul și comportamentul componentelor sau a altor directive
    * directivele **structural** controlează layout-ul HTML

```js
@Directive({
    selector: '[appHighlight]' 
})
export class HighlightDirective {
    constructor() { }
}
```

- Există două moduri de a gestiona **formularele** în Angular:
    * formularele bazate pe șabloane oferă acces direct la modelul de obiecte de formulare
    * formularele reactive sunt imuabile și mai ușor de testat
    
```js
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent {
  name = new FormControl('');
}
```

## În lecția următoare veți învăța:

- Un **atelier de formulare** aprofundat 
    * cum să implementați formulare într-o aplicație reală

[/slide]
