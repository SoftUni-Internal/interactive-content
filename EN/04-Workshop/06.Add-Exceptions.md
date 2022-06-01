[slide hideTitle]

# Add Exceptions

In the util package, we will add two **exception** classes. We will need them later for the **comment** functionality.

In the **util** package, we will create another package called an **exception**. This is where we will store the classes:

- **ApiError**
- **ObjectNotFoundException**

[image assetsSrc="08-Exceptions.png" /]

[/slide]

[slide hideTitle]

# ObjectNotFoundException and ApiError

For the **ObjectNotFoundException**, we will want to **extend** the **RuntimeException**.

Here is the full code for the class:

```java
package com.example.pathfinderproject.util.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ObjectNotFoundException extends RuntimeException{
    public ObjectNotFoundException(String message) {
        super(message);
    }
}
```

For the **ApiError**, we will have a simple class that will store the error from the **API**. We will use it for the **comment functionality**.

Here is the full code for the class:

```java
package com.example.pathfinderproject.util.exception;

import org.springframework.http.HttpStatus;

import java.util.ArrayList;
import java.util.List;

public class ApiError {
    private final HttpStatus status;
    private List<String> fieldWithErrors = new ArrayList<>();

    public ApiError(HttpStatus status) {
        this.status = status;
    }

    public HttpStatus getStatus() {
        return status;
    }

    public void addFieldWithError(String error) {

    }

    public List<String> getFieldWithErrors() {
        return fieldWithErrors;
    }

    public void setFieldWithErrors(List<String> fieldWithErrors) {
        this.fieldWithErrors = fieldWithErrors;
    }
}
```

[/slide]
