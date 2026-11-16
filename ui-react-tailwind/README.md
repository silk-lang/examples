# Tailwind counter

A Silk UI counter in React, styled with Tailwind CSS 4. It runs in a desktop window.

```sh
silk task dev
silk task build
```

Edit `web/src/app.css` or the literal classes in `web/src/` while the app runs. CSS updates preserve the counter value. `@tailwindcss/vite` produces ordinary CSS; `@silkui/vite` compiles it into `dist/app.sheet`, which the release pipeline embeds before the first frame. No CSS parser or stylesheet text is needed in the release app.

The CSS also contains a hand-written `.counter-button` rule. You can use plain CSS without Tailwind by removing its import and Vite plugin. Style objects still work as inline declarations alongside classes.

`src/tasks.silk` defines the window and build tasks. The first development build installs the Vite dependencies and builds the native host. JavaScript templates currently support the window target.

This feature branch needs the matching stylesheet-capable `@silkui/*` packages. Until those packages are published, use the checkout instructions in the [repository README](https://github.com/silk-lang/examples#silk-ui-templates).
