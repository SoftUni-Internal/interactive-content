# App Preparation for Deployment

[slide hideTitle]

# App Preparation

## Track your codebase in a Git repository

To **initialize a Git repository**, open a command\-line window in your **root project directory** and type `git init`.

It is advisable to exclude **non-essential files and directories** that **take up space** from being committed to your repository.

Create a file called `.gitignore` and paste the following code inside:

```
node_modules
package-lock.json
```

**Node modules** can be **reinstalled** using `npm install`.

Next, type in `git add .` to **stage** all other files.

To make your first **commit** to the `master` branch, type:

`git commit -m "name-of-your-commit"`

You can **check the status of your repository** at any given time using `git status`.

## Creating a Github repository

It is recommended to create a **Github repository**, which you can later use to implement **automatic deploys**.

To start, [click here](https://github.com/new).

**Log in** with your Github account if you have not already, or click on `Create new account` if you do not have one.

Once logged in, choose a **name** for your repository and click on `Create repository`.

To **connect your local repository**, go to the **CLI** and type the following commands, replacing `your-username` and `the-name-of-your-repository` with your own:

```
git remote add origin https://github.com/your-username/the-name-of-your-repository.git
git branch -M main
git push -u origin main
```

## Add a Heroku Git Remote

To **deploy your application**, Heroku needs a version of your repository on a special Heroku\-hosted **remote server**.

To create a **new empty application on Heroku**, along with a linked Git repository, use `heroku create name-of-your-app`.

Your app name has to be **unique**.

You can also let Heroku **generate a name** by **not passing it in** as a parameter:

`heroku create`

To **confirm** that a remote named `heroku` has been **set** for your app, use the `git remote -v` command.

Next, **deploy** your application using `git push heroku master`.

To make sure there is at least **one active instance** of the app, type `heroku ps:scale web=1`.

You have created a **new process**, called `web`, which will **receive web traffic** when deployed.

You can visit your newly created app by simply typing `heroku open` or visiting `name_of_your_heroku_project.herokuapp.com`.

## Add a Procfile

Heroku uses a **Procfile** to ensure your application is running **as intended**.

It holds **commands**, which will be **executed** when bootstrapping the application.

In your app's **root directory**, create a new file and name it `Procfile`, with a capital 'P'.

Inside, you need to **specify** the **command** necessary to run the `web` process we created earlier.

If you have created a `start` script in `package.json`, paste the following code inside the `Procfile`:

`web: npm start`

Otherwise, you can just **run your main file**, most often `index.js` or `server.js`, using `node`:

`web: node index.js`

## Make sure you are listening on the correct port

When you run your application **locally**, the web server can listen on **any open port**.

However, on Heroku it must listen on a **specific** port.

If you are using Express, go to your server file and make sure your server is going to listen to `process.env.PORT`:

`app.listen(process.env.PORT);`

`process.env.PORT` is the variable Heroku will assign a **port number** to.

You can make sure your application will still **run locally** by using an `if` statement, as follows:

```js
let port = process.env.PORT;

if (port == null || port == '') {
 port = 5000;
}

app.listen(port);
```

## Use a Database Instead of Writing to Your Local Filesystem

Heroku uses Linux containers called **dynos** to run your code.

**Dynos** are **automatically replaced** every day, which results in **local data** being **dropped**.

If your application stores **data** in the local filesystem, you will need to set up a **database**.

Assuming your application uses **MongoDB** or a **similar non-relational database**, you are **ready to go**.

Another popular solution is **Heroku Postgres**, which you can learn more about [here](https://devcenter.heroku.com/articles/heroku-postgresql).

[/slide]

