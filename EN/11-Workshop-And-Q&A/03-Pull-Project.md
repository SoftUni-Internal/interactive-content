[slide hideTitle]

# Pull Project

Now our project is safely pushed to the **public**. Everyone can see the project and **clone** it to their computer.

To test it you can try downloading it from another computer or stay on the same project.

Create a **local** directory, and inside it create a **docker-compose.yaml**.

[image assetsSrc="24-Docker-Compose-Prep.png" /]

```yml
version: "3.3"
services:
  db:
    image: mysql:5.7
    ports:
      - "3306:3306"
    command:
      ["--character-set-server=utf8mb4", "--collation-server=utf8mb4_bin"]
    environment:
      - MYSQL_DATABASE=mobilelele
      - MYSQL_ALLOW_EMPTY_PASSWORD="yes"
  pathfinder:
    image: {your username}/pathfinder:v1
    ports:
      - "8080:8080"
    environment:
      - MYSQL_HOST=db
```

Change the **image row** - **{your username}** with your **docker username**.

[/slide]

# Compose Project

[slide hideTitle]

Next compose your project with:

```cmd
docker-compose -f docker-compose.yaml up
```

[image assetsSrc="25-Docker-Compose.png" /]

This should locally start your project. You can test it by going to **localhost:8080**.

[image assetsSrc="26-Docker-Compose-2.png" /]

[/slide]
