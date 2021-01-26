[slide hideTitle]
# Summary


[vimeo-video]
[stream language="EN" videoId="497194765/f46f0ca68a" default /] 
[stream language="RO" videoId="497194765/f46f0ca68a" /]
[/video-vimeo]

# In this lesson you learnt:

- Templates make our HTML modular
    - Resulting in less repetitive code and fewer data to load
    - They speed up and simplify our development process

```
<div class="entry">
  <h1>{{ title }}</h1>
  <div class="body">
    {{ body }}
  </div>
</div>

```

- Templating engines combine templates with data
    - Transforming templates to client-ready HTML

```
<div class="entry">
  <h1>My New Post</h1>
  <div class="body">
    This is my first post!
  </div>
</div>

```

- Handlebars offers many functionalities
    - Effective templates
    - Helper functions

```
<ul id="contacts">
  {{#each contacts}}
    <li>{{name}}: {{email}}</li>
  {{/each}}
</ul>
```

## In the next lesson you will learn:

- What are Single Page Applications \(SPAs\) and Multi Page Apps?
  - Lifecycles
  - Query Parameters

- Routing in SPAs
  - How routers work
  - Hash\-based routing
  - Push\-based routing

[/slide]
