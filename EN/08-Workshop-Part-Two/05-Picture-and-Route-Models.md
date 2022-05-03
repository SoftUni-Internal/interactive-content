[slide hideTitle]

# Add Picture Entity

The **Picture** class will have properties for:

- **title**
- **url**
- **author**
- **route**

This is the following code for the entity:

```java
package com.example.pathfinderproject.model.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="pictures")
public class Picture extends BaseEntity{

    private String title;
    private String url;
    private User author;
    private Route route;

    public Picture() {
    }

    @Column(nullable = false)
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Column(nullable = false, columnDefinition = "TEXT")
    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    @ManyToOne
    public User getAuthor() {
        return author;
    }

    public void setAuthor(User author) {
        this.author = author;
    }

    @ManyToOne
    public Route getRoute() {
        return route;
    }

    public void setRoute(Route route) {
        this.route = route;
    }
}
```

[/slide]

[slide hideTitle]

# Add Route Entity

This is one of the most complex entities. The **Route** class will have the following fields:

- **gpxCoordinates**
- **description**
- **level**
- **name**
- **author**
- **videoUrl**
- **categories**
- **pictures**

```java
package com.example.pathfinderproject.model.entity;

import com.example.pathfinderproject.model.entity.enums.UserLevelEnum;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "routes")
public class Route  extends BaseEntity{

    private String gpxCoordinates;
    private String description;
    private UserLevelEnum level;
    private String name;
    private User author;
    private String videoUrl;
    private Set<Category> categories;
    private Set<Picture> pictures;

    public Route() {
    }

    @Column(columnDefinition = "LONGTEXT")
    public String getGpxCoordinates() {
        return gpxCoordinates;
    }

    public void setGpxCoordinates(String gpxCoordinates) {
        this.gpxCoordinates = gpxCoordinates;
    }

    @Enumerated(EnumType.STRING)
    public UserLevelEnum getLevel() {
        return level;
    }

    public void setLevel(UserLevelEnum level) {
        this.level = level;
    }

    @Column(unique = true, nullable = false)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @ManyToOne
    public User getAuthor() {
        return author;
    }

    public void setAuthor(User author) {
        this.author = author;
    }

    @Column
    public String getVideoUrl() {
        return videoUrl;
    }

    public void setVideoUrl(String videoUrl) {
        this.videoUrl = videoUrl;
    }

    @Column(columnDefinition = "TEXT")
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @ManyToMany(fetch = FetchType.EAGER)
    public Set<Category> getCategories() {
        return categories;
    }

    public void setCategories(Set<Category> categories) {
        this.categories = categories;
    }

    @OneToMany(mappedBy = "route", fetch = FetchType.EAGER)
    public Set<Picture> getPictures() {
        return pictures;
    }

    public void setPictures(Set<Picture> pictures) {
        this.pictures = pictures;
    }
}
```

[/slide]
