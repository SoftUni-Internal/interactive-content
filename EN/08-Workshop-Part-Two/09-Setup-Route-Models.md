[slide hideTitle]

# Setup Route Models

Before we move to the **Route** service, there are a few preparations that we need to do. We will need. As we previously did with the **User**, here we will also need **Binding**, **Service**, and **View** models.

In the previous workshop, we have already created **Binding** and **Service** models. Now we want to create a package for the **View** models. This is what the server will return to the **HTML**.

Create a **package** called **view** inside the **model**. Inside it we will create 2 classes:

- **RouteDetailsVM**
- **RouteVM**

[image assetsSrc="46-View-Models.png" /]

[/slide]

[slide hideTitle]

# Route Details View Model

For the **RouteDetailsVM** we will have fields for:

- **gpxCoordinates**
- **description**
- **level**
- **name**
- **videoUrl**
- **pictures**

Here is the full code for the model:

```java
package com.example.pathfinderproject.model.view;

import com.example.pathfinderproject.model.entity.Picture;
import com.example.pathfinderproject.model.entity.enums.UserLevelEnum;

import java.util.Set;

public class RouteDetailsVM {
    private String gpxCoordinates;
    private String description;
    private UserLevelEnum level;
    private String name;
    private String videoUrl;
    private Set<Picture> pictures;

    public RouteDetailsVM() {
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

    public String getVideoUrl() {
        return videoUrl;
    }

    public void setVideoUrl(String videoUrl) {
        this.videoUrl = videoUrl;
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

[slide hideTitle]

# Route View Model

The **RouteVM** will have fields for:

- **id**
- **name**
- **description**
- **pictureUrl**

Here is the full code for the model:

```java
package com.example.pathfinderproject.model.view;

public class RouteVM {
    private Long id;
    private String description;
    private String name;
    private String pictureUrl;

    public RouteVM() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPictureUrl() {
        return pictureUrl;
    }

    public void setPictureUrl(String pictureUrl) {
        this.pictureUrl = pictureUrl;
    }
}
```

[/slide]
