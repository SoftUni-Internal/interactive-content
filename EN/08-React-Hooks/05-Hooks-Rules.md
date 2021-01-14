# Rules of Hooks

[slide]

# Rules Overview

When we are using hooks, we have to follow two rules.

The first rule is that we can **only call them at the top level**.

This means that we cannot call them in **loop**, **conditions**, or **nested functions**.

Also, a good practice is to have the **same order** for each component.

That allows React to **preserve** the state **correctly** between components.

The second rule is that the **hooks only work in React function**.

We cannot call them from regular functions, but we can from **function components** or **custom hooks**.

When we are following these rules, we ensure that our stateful logic is easily readable.

We have some **Lint** rules that watch if these rules are followed.

[/slide]

[slide]

# Lint Plugin

Lint is a plugin that we need to install from npm.

We install it with the following command: `npm install eslint-plugin-react-hooks --save-dev`.

This tool monitor for rules that we have set in an eslint config file.

There are some predefined rules that we can use or customize.

You can find more about lint [here](https://www.npmjs.com/package/eslint-plugin-react-hooks).

Here is a configuration for hooks rules:

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

This configuration will throw an error when the rules are not followed.

[/slide]
