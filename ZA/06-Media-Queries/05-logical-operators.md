# Logical Operators

[slide]
# Logical Operators

[vimeo-video]
[stream language="EN" videoId="431769798" default /]
[/video-vimeo]

The logical operators **not**, **and**, and **only** can be used to compose a complex media query.

* `and` **combines** multiple media features;
* `not` **negates** a media query; 
* `only` is used to apply a style **only** if an entire query matches;
* `,` (comma) is used to **combine** multiple media queries into a single rule.

**Example:**
```html
@media screen and (min-width: 400px) and (orientation: landscape) {
   body {
	color: blue;
   }
}
```

[vimeo-video]
[stream language="EN" videoId="431769864" default /]
[/video-vimeo]

[/slide]