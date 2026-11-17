# Tailwind counter

A Silk UI counter in Foldkit, styled with Tailwind CSS 4. It runs in a desktop window.

```sh
silk task dev
silk task build
```

Edit `web/src/app.css` or the literal classes in `web/src/` while the app runs. CSS updates preserve the counter value. `@tailwindcss/vite` produces ordinary CSS; `@silkui/vite` compiles it into `dist/app.sheet`, which the release pipeline embeds before the first frame. Release stylesheet adoption needs no stylesheet text compiler or raw CSS source.

The CSS also contains a hand-written `.counter-button` rule. You can use plain CSS without Tailwind by removing its import and Vite plugin. Style objects still work as inline declarations alongside classes.

`src/tasks.silk` defines the window and build tasks. The first development build installs the Vite dependencies and builds the native host. JavaScript templates currently support the window target.
