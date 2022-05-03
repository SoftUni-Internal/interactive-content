[slide hideTitle]

# Create Route Model

When we create a route, the user will send fields for:

- **name**
- **description**
- **gpxCoordinates**
- **level**
- **videoUrl**
- **categories**

In the code below, we will see that the **gpxCoordinates** are from a **MultipartFile** type. This means that we will ask the user to upload a file, that will store the location of the route.

```java
package com.example.pathfinderproject.model.binding;

import com.example.pathfinderproject.model.entity.enums.CategoryNameEnum;
import com.example.pathfinderproject.model.entity.enums.UserLevelEnum;
import com.sun.istack.NotNull;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.Size;
import java.util.Set;

public class RouteCreateBM {
    private String name;
    private String description;
    private MultipartFile gpxCoordinates;
    private UserLevelEnum level;
    private String videoUrl;
    private Set<CategoryNameEnum> categories;

    public RouteCreateBM() {
    }

    @Size(min = 3, max = 20, message = "Route name must be between 3 and 20 characters.")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Size(min = 3) // temporary
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public MultipartFile getGpxCoordinates() {
        return gpxCoordinates;
    }

    public void setGpxCoordinates(MultipartFile gpxCoordinates) {
        this.gpxCoordinates = gpxCoordinates;
    }

    @NotNull
    public UserLevelEnum getLevel() {
        return level;
    }

    public void setLevel(UserLevelEnum level) {
        this.level = level;
    }

    public String getVideoUrl() {
        return videoUrl;
    }

    public void setVideoUrl(String videoUrl) {
        this.videoUrl = videoUrl;
    }

    public Set<CategoryNameEnum> getCategories() {
        return categories;
    }

    public void setCategories(Set<CategoryNameEnum> categories) {
        this.categories = categories;
    }
}
```

[/slide]

[slide hideTitle]

# Route Service Model

While we are on the service level, we don't want to directly work with the **Route** model. For this, we will use the **RouteServiceModel**.
It will have fields for:

- **id**
- **gpxCoordinates**
- **description**
- **level**
- **name**
- **author**
- **videoUrl**
- **pictures**
- **categories**

Here is the full code for the model:

```java
package com.example.pathfinderproject.model.service;

import com.example.pathfinderproject.model.entity.Picture;
import com.example.pathfinderproject.model.entity.User;
import com.example.pathfinderproject.model.entity.enums.CategoryNameEnum;
import com.example.pathfinderproject.model.entity.enums.UserLevelEnum;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.ManyToMany;
import java.util.Set;

public class RouteServiceModel {
private Long id;
private String gpxCoordinates;
private String description;
private UserLevelEnum level;
private String name;
private User author;
private String videoUrl;
private Set<Picture> pictures;
private Set<CategoryNameEnum> categories;

    public RouteServiceModel() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getGpxCoordinates() {
        return gpxCoordinates;
    }

    public void setGpxCoordinates(String gpxCoordinates) {
        this.gpxCoordinates = gpxCoordinates;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public UserLevelEnum getLevel() {
        return level;
    }

    public void setLevel(UserLevelEnum level) {
        this.level = level;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public User getAuthor() {
        return author;
    }

    public void setAuthor(User author) {
        this.author = author;
    }

    public String getVideoUrl() {
        return videoUrl;
    }

    public void setVideoUrl(String videoUrl) {
        this.videoUrl = videoUrl;
    }

    public Set<CategoryNameEnum> getCategories() {
        return categories;
    }

    public void setCategories(Set<CategoryNameEnum> categories) {
        this.categories = categories;
    }

    public Set<Picture> getPictures() {
        return pictures;
    }

    public void setPictures(Set<Picture> pictures) {
        this.pictures = pictures;
    }

}
```

[/slide]
