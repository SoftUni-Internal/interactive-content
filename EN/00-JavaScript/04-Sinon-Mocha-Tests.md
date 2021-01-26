[slide]

# javascript-code-against-unit-tests-with-mocha
[code-task title="Problem: Repository" taskId="Js-Advanced-Repository" executionType="tests-execution" executionStrategy="javascript-code-against-unit-tests-with-mocha" requiresInput]
[code-editor language=javascript]
```

```
[/code-editor]
[task-description]
## Description
Problem 2.

Repository

## Examples

Test the strategy "Javascript-Sinon-Mocha-Unit-Tests" with that task

[/task-description]
[code-upload /]
[tests]
[test open]
[input]
// \<minTestCount\>3\</minTestCount\>
var Repository = function () \{\}
[/input]
[output]
Test Passed!
[/output]
[/test]
[test open]
[input]
Repository = class Repository \{
    constructor(props) \{
        this.props = props;
        this.data = new Map();

        let id = 0;
        this.nextId = function () \{
            return id++;
        \}
    \}

    get count() \{
        return this.data.size;
    \}

    add(entity) \{
        this._validate(entity);
        let id = this.nextId();
        this.data.set(id, entity);
        return id;
    \}

    getId(id) \{
        if (!this.data.has(id)) \{
            throw new Error(`Entity with id: \\$\{id\} does not exist!`);
        \}

        return this.data.get(id);
    \}

    update(id, newEntity) \{
        if (!this.data.has(id)) \{
            throw new Error(`Entity with id: \\$\{id\} does not exist!`);
        \}

        this._validate(newEntity);
        this.data.set(id, newEntity);
    \}

    del(id) \{
        if (!this.data.has(id)) \{
            throw new Error(`Entity with id: \\$\{id\} does not exist!`);
        \}

        this.data.delete(id);
    \}

    _validate(entity) \{
        //Validate existing property
        for (let propName in this.props) \{
            if (!entity.hasOwnProperty(propName)) \{
                throw new Error(`Property \\$\{propName\} is missing from the entity!`);
            \}
        \}

        //Validate property type
        for (let propName in entity) \{
            let val = entity\[propName\];
            if (typeof val !== this.props\[propName\]) \{
                throw new TypeError(`Property \\$\{propName\} is not of correct type!`);
            \}
        \}
    \}
\}
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//testing constructor properties

Repository = class Repository \{
    constructor(props) \{
        this.properties = props; //properties instead of props
        this.data = new Map();

        let id = 0;
        this.nextId = function () \{
            return id++;
        \}
    \}

    get count() \{
        return this.data.size;
    \}

    add(entity) \{
        this._validate(entity);
        let id = this.nextId();
        this.data.set(id, entity);
        return id;
    \}

    getId(id) \{
        if (!this.data.has(id)) \{
            throw new Error(`Entity with id: \\$\{id\} does not exist!`);
        \}

        return this.data.get(id);
    \}

    update(id, newEntity) \{
        if (!this.data.has(id)) \{
            throw new Error(`Entity with id: \\$\{id\} does not exist!`);
        \}

        this._validate(newEntity);
        this.data.set(id, newEntity);
    \}

    del(id) \{
        if (!this.data.has(id)) \{
            throw new Error(`Entity with id: \\$\{id\} does not exist!`);
        \}

        this.data.delete(id);
    \}

    _validate(entity) \{
        //Validate existing property
        for (let propName in this.props) \{
            if (!entity.hasOwnProperty(propName)) \{
                throw new Error(`Property \\$\{propName\} is missing from the entity!`);
            \}
        \}

        //Validate property type
        for (let propName in entity) \{
            let val = entity\[propName\];
            if (typeof val !== this.props\[propName\]) \{
                throw new TypeError(`Property \\$\{propName\} is not of correct type!`);
            \}
        \}
    \}
\}
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//getter count returns incorrect

Repository = class Repository \{
    constructor(props) \{
        this.props = props;
        this.data = new Map();

        let id = 0;
        this.nextId = function () \{
            return id++;
        \}
    \}

    get count() \{
        return this.data.size+1; // returns the size + 1
    \}

    add(entity) \{
        this._validate(entity);
        let id = this.nextId();
        this.data.set(id, entity);
        return id;
    \}

    getId(id) \{
        if (!this.data.has(id)) \{
            throw new Error(`Entity with id: \\$\{id\} does not exist!`);
        \}

        return this.data.get(id);
    \}

    update(id, newEntity) \{
        if (!this.data.has(id)) \{
            throw new Error(`Entity with id: \\$\{id\} does not exist!`);
        \}

        this._validate(newEntity);
        this.data.set(id, newEntity);
    \}

    del(id) \{
        if (!this.data.has(id)) \{
            throw new Error(`Entity with id: \\$\{id\} does not exist!`);
        \}

        this.data.delete(id);
    \}

    _validate(entity) \{
        //Validate existing property
        for (let propName in this.props) \{
            if (!entity.hasOwnProperty(propName)) \{
                throw new Error(`Property \\$\{propName\} is missing from the entity!`);
            \}
        \}

        //Validate property type
        for (let propName in entity) \{
            let val = entity\[propName\];
            if (typeof val !== this.props\[propName\]) \{
                throw new TypeError(`Property \\$\{propName\} is not of correct type!`);
            \}
        \}
    \}
\}
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//testing add 

Repository = class Repository \{
    constructor(props) \{
        this.props = props;
        this.data = new Map();

        let id = 0;
        this.nextId = function () \{
            return id++;
        \}
    \}

    get count() \{
        return this.data.size;
    \}

    add(entity) \{
        this._validate(entity);
        let id = this.nextId();
        this.data.set(id, entity);
        return entity;  //returns entity instead id
    \}

    getId(id) \{
        if (!this.data.has(id)) \{
            throw new Error(`Entity with id: \\$\{id\} does not exist!`);
        \}

        return this.data.get(id);
    \}

    update(id, newEntity) \{
        if (!this.data.has(id)) \{
            throw new Error(`Entity with id: \\$\{id\} does not exist!`);
        \}

        this._validate(newEntity);
        this.data.set(id, newEntity);
    \}

    del(id) \{
        if (!this.data.has(id)) \{
            throw new Error(`Entity with id: \\$\{id\} does not exist!`);
        \}

        this.data.delete(id);
    \}

    _validate(entity) \{
        //Validate existing property
        for (let propName in this.props) \{
            if (!entity.hasOwnProperty(propName)) \{
                throw new Error(`Property \\$\{propName\} is missing from the entity!`);
            \}
        \}

        //Validate property type
        for (let propName in entity) \{
            let val = entity\[propName\];
            if (typeof val !== this.props\[propName\]) \{
                throw new TypeError(`Property \\$\{propName\} is not of correct type!`);
            \}
        \}
    \}
\}
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//testing getId 

Repository = class Repository \{
    constructor(props) \{
        this.props = props;
        this.data = new Map();

        let id = 0;
        this.nextId = function () \{
            return id++;
        \}
    \}

    get count() \{
        return this.data.size;
    \}

    add(entity) \{
        this._validate(entity);
        let id = this.nextId();
        this.data.set(id, entity);
        return id;
    \}

    getId(id) \{  //the if condition is missing
        // if (!this.data.has(id)) \{
        //     throw new Error(`Entity with id: \\$\{id\} does not exist!`);
        // \}

        return this.data.get(id);
    \}

    update(id, newEntity) \{
        if (!this.data.has(id)) \{
            throw new Error(`Entity with id: \\$\{id\} does not exist!`);
        \}

        this._validate(newEntity);
        this.data.set(id, newEntity);
    \}

    del(id) \{
        if (!this.data.has(id)) \{
            throw new Error(`Entity with id: \\$\{id\} does not exist!`);
        \}

        this.data.delete(id);
    \}

    _validate(entity) \{
        //Validate existing property
        for (let propName in this.props) \{
            if (!entity.hasOwnProperty(propName)) \{
                throw new Error(`Property \\$\{propName\} is missing from the entity!`);
            \}
        \}

        //Validate property type
        for (let propName in entity) \{
            let val = entity\[propName\];
            if (typeof val !== this.props\[propName\]) \{
                throw new TypeError(`Property \\$\{propName\} is not of correct type!`);
            \}
        \}
    \}
\}
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//no validation by update

Repository = class Repository \{
    constructor(props) \{
        this.props = props;
        this.data = new Map();

        let id = 0;
        this.nextId = function () \{
            return id++;
        \}
    \}

    get count() \{
        return this.data.size;
    \}

    add(entity) \{
        this._validate(entity);
        let id = this.nextId();
        this.data.set(id, entity);
        return id;
    \}

    getId(id) \{
        if (!this.data.has(id)) \{
            throw new Error(`Entity with id: \\$\{id\} does not exist!`);
        \}

        return this.data.get(id);
    \}

    update(id, newEntity) \{
        if (!this.data.has(id)) \{
            throw new Error(`Entity with id: \\$\{id\} does not exist!`);
        \}

        // this._validate(newEntity); //no validation
        this.data.set(id, newEntity);
    \}

    del(id) \{
        if (!this.data.has(id)) \{
            throw new Error(`Entity with id: \\$\{id\} does not exist!`);
        \}

        this.data.delete(id);
    \}

    _validate(entity) \{
        //Validate existing property
        for (let propName in this.props) \{
            if (!entity.hasOwnProperty(propName)) \{
                throw new Error(`Property \\$\{propName\} is missing from the entity!`);
            \}
        \}

        //Validate property type
        for (let propName in entity) \{
            let val = entity\[propName\];
            if (typeof val !== this.props\[propName\]) \{
                throw new TypeError(`Property \\$\{propName\} is not of correct type!`);
            \}
        \}
    \}
\}
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//testing delete

Repository = class Repository \{
    constructor(props) \{
        this.props = props;
        this.data = new Map();

        let id = 0;
        this.nextId = function () \{
            return id++;
        \}
    \}

    get count() \{
        return this.data.size;
    \}

    add(entity) \{
        this._validate(entity);
        let id = this.nextId();
        this.data.set(id, entity);
        return id;
    \}

    getId(id) \{
        if (!this.data.has(id)) \{
            throw new Error(`Entity with id: \\$\{id\} does not exist!`);
        \}

        return this.data.get(id);
    \}

    update(id, newEntity) \{
        if (!this.data.has(id)) \{
            throw new Error(`Entity with id: \\$\{id\} does not exist!`);
        \}

        this._validate(newEntity);
        this.data.set(id, newEntity);
    \}

    del(id) \{
        if (!this.data.has(id)) \{
            throw new Error(`Entity with id: \\$\{id\} does not exist!`);
        \}

        this.data.delete(0); //always deleting the first element (0 instead of id)
    \}

    _validate(entity) \{
        //Validate existing property
        for (let propName in this.props) \{
            if (!entity.hasOwnProperty(propName)) \{
                throw new Error(`Property \\$\{propName\} is missing from the entity!`);
            \}
        \}

        //Validate property type
        for (let propName in entity) \{
            let val = entity\[propName\];
            if (typeof val !== this.props\[propName\]) \{
                throw new TypeError(`Property \\$\{propName\} is not of correct type!`);
            \}
        \}
    \}
\}
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//testing _validate

Repository = class Repository \{
    constructor(props) \{
        this.props = props;
        this.data = new Map();

        let id = 0;
        this.nextId = function () \{
            return id++;
        \}
    \}

    get count() \{
        return this.data.size;
    \}

    add(entity) \{
        this._validate(entity);
        let id = this.nextId();
        this.data.set(id, entity);
        return id;
    \}

    getId(id) \{
        if (!this.data.has(id)) \{
            throw new Error(`Entity with id: \\$\{id\} does not exist!`);
        \}

        return this.data.get(id);
    \}

    update(id, newEntity) \{
        if (!this.data.has(id)) \{
            throw new Error(`Entity with id: \\$\{id\} does not exist!`);
        \}

        this._validate(newEntity);
        this.data.set(id, newEntity);
    \}

    del(id) \{
        if (!this.data.has(id)) \{
            throw new Error(`Entity with id: \\$\{id\} does not exist!`);
        \}

        this.data.delete(id);
    \}

    _validate(entity) \{
        //Validate existing property
        for (let propName in this.props) \{//missing if conditions
            
            // if (!entity.hasOwnProperty(propName)) \{
            //     throw new Error(`Property \\$\{propName\} is missing from the entity!`);
            // \}
        \}

        //Validate property type
        for (let propName in entity) \{
            let val = entity\[propName\];
            // if (typeof val !== this.props\[propName\]) \{
            //     throw new TypeError(`Property \\$\{propName\} is not of correct type!`);
            // \}
        \}
    \}
\}
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//testing delete

Repository = class Repository \{
    constructor(props) \{
        this.props = props;
        this.data = new Map();

        let id = 0;
        this.nextId = function () \{
            return id++;
        \}
    \}

    get count() \{
        return this.data.size;
    \}

    add(entity) \{
        this._validate(entity);
        let id = this.nextId();
        this.data.set(id, entity);
        return id;
    \}

    getId(id) \{
        if (!this.data.has(id)) \{
            throw new Error(`Entity with id: \\$\{id\} does not exist!`);
        \}

        return this.data.get(id);
    \}

    update(id, newEntity) \{
        if (!this.data.has(id)) \{
            throw new Error(`Entity with id: \\$\{id\} does not exist!`);
        \}

        this._validate(newEntity);
        this.data.set(id, newEntity);
    \}

    del(id) \{
        if (!this.data.has(id)) \{
            //do not throw
            // throw new Error(`Entity with id: \\$\{id\} does not exist!`);
        \}

        this.data.delete(id);
    \}

    _validate(entity) \{
        //Validate existing property
        for (let propName in this.props) \{
            if (!entity.hasOwnProperty(propName)) \{
                throw new Error(`Property \\$\{propName\} is missing from the entity!`);
            \}
        \}

        //Validate property type
        for (let propName in entity) \{
            let val = entity\[propName\];
            if (typeof val !== this.props\[propName\]) \{
                throw new TypeError(`Property \\$\{propName\} is not of correct type!`);
            \}
        \}
    \}
\}
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//testing nextId

Repository = class Repository \{
    constructor(props) \{
        this.props = props;
        this.data = new Map();

        let id = 0;
        this.nextId = function () \{ //incrementing by 2 not by 1
            return id+=2;
        \}
    \}

    get count() \{
        return this.data.size;
    \}

    add(entity) \{
        this._validate(entity);
        let id = this.nextId();
        this.data.set(id, entity);
        return id;
    \}

    getId(id) \{
        if (!this.data.has(id)) \{
            throw new Error(`Entity with id: \\$\{id\} does not exist!`);
        \}

        return this.data.get(id);
    \}

    update(id, newEntity) \{
        if (!this.data.has(id)) \{
            throw new Error(`Entity with id: \\$\{id\} does not exist!`);
        \}

        this._validate(newEntity);
        this.data.set(id, newEntity);
    \}

    del(id) \{
        if (!this.data.has(id)) \{
            throw new Error(`Entity with id: \\$\{id\} does not exist!`);
        \}

        this.data.delete(id);
    \}

    _validate(entity) \{
        //Validate existing property
        for (let propName in this.props) \{
            if (!entity.hasOwnProperty(propName)) \{
                throw new Error(`Property \\$\{propName\} is missing from the entity!`);
            \}
        \}

        //Validate property type
        for (let propName in entity) \{
            let val = entity\[propName\];
            if (typeof val !== this.props\[propName\]) \{
                throw new TypeError(`Property \\$\{propName\} is not of correct type!`);
            \}
        \}
    \}
\}
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
// testing if update throws error

Repository = class Repository \{
    constructor(props) \{
        this.props = props;
        this.data = new Map();

        let id = 0;
        this.nextId = function () \{
            return id++;
        \}
    \}

    get count() \{
        return this.data.size;
    \}

    add(entity) \{
        this._validate(entity);
        let id = this.nextId();
        this.data.set(id, entity);
        return id;
    \}

    getId(id) \{
        if (!this.data.has(id)) \{
            throw new Error(`Entity with id: \\$\{id\} does not exist!`);
        \}

        return this.data.get(id);
    \}

    update(id, newEntity) \{
        if (!this.data.has(id)) \{
            // throw new Error(`Entity with id: \\$\{id\} does not exist!`);
        \}

        this._validate(newEntity);
        this.data.set(id, newEntity);
    \}

    del(id) \{
        if (!this.data.has(id)) \{
            throw new Error(`Entity with id: \\$\{id\} does not exist!`);
        \}

        this.data.delete(id);
    \}

    _validate(entity) \{
        //Validate existing property
        for (let propName in this.props) \{
            if (!entity.hasOwnProperty(propName)) \{
                throw new Error(`Property \\$\{propName\} is missing from the entity!`);
            \}
        \}

        //Validate property type
        for (let propName in entity) \{
            let val = entity\[propName\];
            if (typeof val !== this.props\[propName\]) \{
                throw new TypeError(`Property \\$\{propName\} is not of correct type!`);
            \}
        \}
    \}
\}
[/input]
[output]
Test Passed!
[/output]
[/test]
[/tests]
[/code-task]


[/slide]
