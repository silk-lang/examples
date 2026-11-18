# My app

A Silk UI app written in [Loom](https://silk-ui-docs.juliaortiz-js.workers.dev/core/), Silk's own
UI framework: a model, messages, `update` and `view`, all in Silk. It runs in a desktop window
and in a browser page.

```sh
silk task dev                     # open the window; it restarts when src/ changes
silk task dev --platform web-dom  # serve it as a page on http://127.0.0.1:8090/ instead
silk task build --release         # write dist/window/ (a program) and dist/web-dom/ (a site)
```

The first `dev` builds the window, which takes a few minutes; after that a change relinks in
seconds.

| File | What it is |
| --- | --- |
| `src/app.silk` | The app. Start here |
| `src/tasks.silk` | Where the app runs, and the `dev` and `build` tasks |

A target is one line in `app()` in `src/tasks.silk`. `web-dom` drives the page's own elements;
uncomment `web-canvas` to draw the app on a WebGPU canvas exactly as the window does (Chrome or
Edge 137 and later). Docs: https://silk-ui-docs.juliaortiz-js.workers.dev/
