# Loom with a stylesheet

A counter written in Silk and styled by one plain CSS file. It runs in a native window, on a WebGPU canvas, or as browser DOM elements.

```sh
silk task dev                        # native window
silk task dev --target web-dom       # browser DOM
silk task dev --target web-canvas    # WebGPU canvas
silk task build                      # release builds for all three targets
```

`styles/app.css` holds every style: the layout, the button states (`:hover`, `:active`, `:focus-visible`), a transition, and a theme made of custom properties. `silk/app.silk` only names classes with `h.class("...")`. The theme button adds `dark` to the page's classes, the sheet changes its variables, and every rule that reads them follows.

`App.stylesheet("styles/app.css")` in `silk/tasks.silk` adds the file to the app. The build compiles it for the window and the canvas, and links it as a real stylesheet for DOM. A release program carries the compiled sheet, not the CSS text or a CSS parser. Edit the file while `silk task dev` runs and the styles change without resetting the count. Add more files with more `App.stylesheet` calls, in cascade order.

Style objects (`h.style`) still work next to classes, as inline declarations: use them for values computed from your model. To write Tailwind classes instead, start from `ui-loom-tailwind`.

WebGPU needs a compatible Chrome or Edge browser.
