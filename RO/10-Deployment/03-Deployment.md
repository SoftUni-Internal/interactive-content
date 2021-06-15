# Heroku GitHub Deploys

[slide hideTitle]

# Enabling GitHub Integration

**Integrating** Heroku with **Github** enables helpful features like automatic **builds** and **releases**.

To enable Github integration, [go to your Heroku Dashboard](https://dashboard.heroku.com/apps).

**Choose your app** from the list and then click on the `Deploy` tab.

[image assetsSrc="JS-BackEnd-deployment-1.png" /]

Select GitHub as a **deployment method** and click `Connect to Github`.

[image assetsSrc="JS-BackEnd-deployment-2.png" /]

You will be prompted to give Heroku **access to your repositories**.

Then you will be taken back to the **Deploy** page.

[image assetsSrc="JS-BackEnd-deployment-3.png" /]

A **text area** will appear in the **Connect to Github** section.

Type the **name** of your repository and press `Search`.

Once your repository has been located, click `Connect`.

[/slide]


[slide hideTitle]

# Manual Deploys

You can **manually deploy** any branch of your GitHub repository.

Manual deploys can be helpful when you want to deploy a **test branch** temporarily, **without affecting** your **automatic deploy** settings.

[image assetsSrc="JS-BackEnd-deployment-4.png" /]

Choose the branch you want to deploy and click the `Deploy Branch` button.

[/slide]


[slide hideTitle]

# Automatic Deploys

When **automatic deploys** are **enabled** for a given branch, Heroku deploys your application **every time there is a change** in the codebase.

[image assetsSrc="JS-BackEnd-deployment-5.png" /]

Select the branch you want to be deployed automatically and then press `Enable automatic deploys`.

If your repository is configured to use **Continuous Integration**, you can also check the `Wait for CI to pass before deploy` checkbox.

This means Heroku will only deploy automatically if **all commit statuses** display `success`.

[/slide]

[slide hideTitle]

# Disconnecting from GitHub

To **disconnect** an application from GitHub, press the `Disconnect` button, located in the `Deploy` tab.

[image assetsSrc="JS-BackEnd-deployment-6.png" /]

You can also **disconnect your GitHub profile** entirely by [going to your account settings](https://dashboard.heroku.com/account/applications#third-party-applications).

[/slide]
