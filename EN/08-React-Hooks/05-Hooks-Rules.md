# Rules of Hooks

[slide hideTitle]

# Rules Overview

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/09.ReactJS-React-Hooks/interactive-react-hooks-25-26-27-28-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

When we are using hooks, we have to follow two rules.

The first rule is that we can **only call them at the top level**.

This means that we cannot call them in **loop**, **conditions**, or **nested functions**.

Also, a good practice is to arrange them in the **same order** in every component.

That allows React to **preserve** the state **correctly** between the components.

The second rule is that a **hook only works in React functions**.

We cannot instantiate **hooks** from regular functions, we can only use them from **function components** or **custom hooks**.

When we are following these rules, we ensure that our logic is easy to read.

There are **Lint** rules that watch for following the mentioned above rules.

[/slide]

[slide hideTitle]

# Lint Plugin

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/09.ReactJS-React-Hooks/interactive-react-hooks-29-30-linter-plugin-config-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Lint** is a **plugin** that we need to **install** from **npm**.

We install it with the following command: `npm install eslint-plugin-react-hooks --save-dev`.

The `--save-dev` means that the plugin will be stored in the **dev dependencies** section in the `package.json` file. 

This section stores the **dependencies** used during the **development** of the application.

This tool **monitor** for rules set in an **eslint config file**.

There are some predefined rules that we can use or customize.

You can find more about lint [here](https://www.npmjs.com/package/eslint-plugin-react-hooks).

Here is a configuration for the **Hooks** rules:

```js
  {
    "plugins": [
      "react-hooks"
    ],
    "rules": {
      "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
      "react-hooks/exhaustive-deps": "warn" // Checks effect dependencies
    }
  }
```

This configuration will **throw an error** when the rules are **not** followed.

[/slide]
