# My app

A Silk UI app written in React. It runs in a desktop window on the SilkJS
Engine, with no browser inside.

```sh
silk task dev     # open the window; edits to js/ show up without a restart
silk task build   # write the release program to dist/window/
```

The first `dev` installs the npm packages and builds the window, which takes a few
minutes; after that it starts in seconds.

| File | What it is |
| --- | --- |
| `js/App.tsx` | The app. Start here |
| `silk/tasks.silk` | What the app is written in, where it runs, and the `dev` and `build` tasks |
| `package.json`, `vite.config.js` | The Vite project, with `@silkui/vite` in its config. React stays your own dependency; `@silkui/react` renders it on the Silk UI tree |

To give the app Node's APIs (`fs`, `net`, `child_process`), add
`|> App.runtime(Runtime.node())` to `app()` in `silk/tasks.silk` and `Runtime` to its
import. That runtime has no hot reload yet: `dev` builds the bundle once. Docs: https://silk-ui-docs.juliaortiz-js.workers.dev/
