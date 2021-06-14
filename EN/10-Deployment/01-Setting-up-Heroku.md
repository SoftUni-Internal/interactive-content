# Setting up Heroku

[slide hideTitle]

# Set up: Installing Git

**Git** is a **version-control system** that helps you **keep track of changes** in your codebase.

The first step to **deploying** your **NodeJS application** is making sure you have Git **installed**.

Open a command\-line window and type in:

`git --version`

If the output shows a **version number**, you are **ready to go**.

If the command returns **unrecognized**, proceed to the following steps.

## Installing on Windows

To install Git on **Windows**, [click here](https://git-scm.com/download/win).

Choose the Git for your Windows version (**32-bit** or **64-bit**), and **download** it.

Then, **open the installation file** and go through the **setup process**.

Alternatively, you can [install GitHub Desktop](https://desktop.github.com/), which comes **bundled with Git** in addition to helping you **manage** your GitHub repositories.

## Installing on MacOS

Installing Git on **macOS** requires **Homebrew**.

To install **Homebrew**, open **Terminal** and type:

`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

Then, **install Git** by using the following command:

`brew install git`

You can also [install GitHub Desktop](https://desktop.github.com/) instead.

## Installing on Linux

If you are using **Ubuntu** or another **Debian-based distribution**, use `apt`:

`sudo apt install git-all`

For **RPM-based distributions**, such as **Fedora**, use `dnf`:

`sudo dnf install git-all`

If you are using a **different Linux distribution**, [go to Git's website](https://git-scm.com/download/linux).

[/slide]


[slide hideTitle]

# Set up: Installing Heroku

**Heroku** is one of the most popular **platform-as-a-service (PaaS)** solutions.

Through the Heroku Command Line Interface, we can **manage** our applications, **run** them locally, as well as **deploy** them.

You can **download** the Heroku CLI [here](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up).

Choose the installer for your operating system and follow the setup process.

An **account** is required to use **Heroku**.

Inside the **CLI**, type in `heroku login`.

This command will open a **login page** in your default browser.

If you **do not have** a Heroku account, click on `Sign up`.

After **registering** and **confirming your e-mail**, you will be prompted to create a **password**.

Once the setup is complete, you will be **automatically** logged into the Heroku CLI.

[/slide]
