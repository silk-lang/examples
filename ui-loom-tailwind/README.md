# Loom with Tailwind

A counter written in Silk and styled with Tailwind CSS 4. It runs in a native window, on a WebGPU canvas, or as browser DOM elements.

```sh
silk task dev                        # native window
silk task dev --target web-dom       # browser DOM
silk task dev --target web-canvas    # WebGPU canvas
silk task build --release            # release builds for all three targets
```

`silk/app.silk` uses literal `h.class("...")` strings. `styles/input.css` imports Tailwind and scans those Silk files with `@source`. The optional `ui-tailwind` helper produces `styles/app.css` before the UI build, and watches source and CSS edits during development. `App.stylesheet("styles/app.css")` then compiles the CSS for window and canvas or links it as a real stylesheet for DOM. CSS edits preserve the counter state.

No Node installation is required. The helper uses the project's `node_modules/.bin/tailwindcss` if present; otherwise it downloads the official standalone CLI pinned in `tailwind.lock.json`. The first download is about 100 MB and needs `curl`; later builds use the verified cache in `~/.silk/cache/tailwind/`. Commit the lock file and input CSS. The generated CSS is ignored.

For plain CSS, remove the helper calls and dependency, write `styles/app.css` directly and track it in Git. Keep `App.stylesheet` and the classes unchanged. Style objects can also be mixed with classes as inline declarations.

Development includes runtime CSS compilation; release embeds compiled sheets without linking the stylesheet text compiler. The standalone helper runs only in the tasks program. WebGPU needs a compatible Chrome or Edge browser. The helper currently runs on macOS and Linux; select its musl platform explicitly on Alpine.
