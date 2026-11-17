# Counter with a stylesheet

A Silk UI counter in Foldkit, styled by one plain CSS file. It runs in a desktop window.

```sh
silk task dev
silk task build
```

`web/src/app.css` holds every style: the layout, the button states (`:hover`, `:active`, `:focus-visible`), a transition, and a theme made of custom properties. The app only sets class names. The theme button adds `dark` to the page's classes, the sheet changes its variables, and every rule that reads them follows.

`web/src/main.ts` imports the CSS file. `@silkui/vite` compiles it into `dist/app.sheet`, which a release build embeds and adopts before the first frame, so the program carries no CSS text and no CSS parser. Edit the file while `silk task dev` runs and the styles change without resetting the count.

Style objects still work next to classes, as inline declarations: use them for values computed from your state. To write Tailwind classes instead, start from the matching `-tailwind` template.

`src/tasks.silk` defines the window and the build tasks. The first development build installs the Vite dependencies and builds the native host. JavaScript templates currently support the window target.
