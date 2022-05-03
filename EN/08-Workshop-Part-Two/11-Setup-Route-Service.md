[slide hideTitle]

# Find Logged User

If we review our **Route** models, we will see that we have a field for an **author**. That means that when we make the **POST** request, we will need to get the user id and set it to that field.

In our **UserService**, we need to implement that method. In the **UserService** interface, we will have the method:

```java
User findUserEntity();
```

And then implement it in the **UserInterfaceImpl** class:

```java
@Override
    public UserServiceModel findById(Long id)
    {
        return userRepository.findById(id).map(u -> modelMapper.map(u, UserServiceModel.class)).orElse(null);
    }
```

Now in our **RouteService**, we will be able to use it.
[/slide]

[slide hideTitle]

# Interface for RouteService

In our **RouteService** interface, we will add 3 methods.

- The first method **findAllRouteViews** will return a list with all of our **Routes**. This will be used for the **all page of the routes**.
- We will have a void method **addNewRoute**, that will create a route in our database.
- The **findRouteById** will be used to display a route, on a details page.

```java
package com.example.pathfinderproject.service;

import com.example.pathfinderproject.model.service.RouteServiceModel;
import com.example.pathfinderproject.model.view.RouteDetailsVM;
import com.example.pathfinderproject.model.view.RouteVM;

import java.util.List;

public interface RouteService {
    List<RouteVM> findAllRoutesView();

    void addNewRoute(RouteServiceModel routeServiceModel);

    RouteDetailsVM findRouteById(Long id);
}
```

[/slide]

[slide hideTitle]

# Implement RouteService

From our **constructor** we will receive:

- **routeRepository**
- **modelMapper**
- **userService**
- **categoryService**

```java
package com.example.pathfinderproject.service.impl;

import com.example.pathfinderproject.model.entity.Route;
import com.example.pathfinderproject.model.service.RouteServiceModel;
import com.example.pathfinderproject.model.view.RouteDetailsVM;
import com.example.pathfinderproject.model.view.RouteVM;
import com.example.pathfinderproject.repository.RouteRepository;
import com.example.pathfinderproject.service.CategoryService;
import com.example.pathfinderproject.service.RouteService;
import com.example.pathfinderproject.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RouteServiceImpl implements RouteService {

    private final RouteRepository routeRepository;
    private final ModelMapper modelMapper;
    private final UserService userService;
    private final CategoryService categoryService;

    public RouteServiceImpl(RouteRepository routeRepository, ModelMapper modelMapper, UserService userService, CategoryService categoryService) {
        this.routeRepository = routeRepository;
        this.modelMapper = modelMapper;
        this.userService = userService;
        this.categoryService = categoryService;
    }
    public List<RouteVM> findAllRoutesView()
    {
        return routeRepository.findAll().stream().map(r -> {
            RouteVM routeVM = modelMapper.map(r, RouteVM.class);
            if(r.getPictures().isEmpty())
            {
                routeVM.setPictureUrl("/images/pic4.jpg");
            }
            else
            {
                routeVM.setPictureUrl(r.getPictures().stream().findFirst().get().getUrl());
            }
            return routeVM;
        }).collect(Collectors.toList());
    }

    @Override
    public void addNewRoute(RouteServiceModel routeServiceModel) {
        Route route = modelMapper.map(routeServiceModel, Route.class);
        route.setAuthor(userService.findUserEntity());
        route.setCategories(routeServiceModel
                .getCategories()
                .stream()
                .map(categoryService::findCategoryByName)
                .collect(Collectors.toSet()));
        routeRepository.save(route);
    }

    @Override
    public RouteDetailsVM findRouteById(Long id) {
        return routeRepository.findById(id).map( r -> modelMapper.map(r, RouteDetailsVM.class)).orElse(null);
    }
}
```

[/slide]
