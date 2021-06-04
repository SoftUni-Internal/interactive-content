[slide hideTitle]

# Summary

## In this lesson you learned:

- Each component has its template

```js
@Component({ 
    selector: 'app', 
    template: `<h1>{{title}}</h1`
});
```
- There are three types of data binding
    - from model to view
    - from view to model
    - two-way binding
    
- We can intersect the lifecycle of a component

```js
ngOnInit() { this.data = 'Retrieve data'};
```

- Components can interact with each other

```js
@Output() fromChild = new EventEmitter<boolen>();
```

## In the next lesson, you will learn:

- Change Detection Strategy​
- SOLID Principles​
- Services​
- Observables and RxJS​
- HTTP Client

[/slide]