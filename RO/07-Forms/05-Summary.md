[slide hideTitle]

# Rezumat

## În această lecție ai învățat:

js-angular-forms-49-Summary

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
