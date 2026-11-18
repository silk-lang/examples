# Silk examples

Starter projects for `silk init`. Each directory with a `silk.toml` is a template:

```sh
silk init --list            # list the templates here
silk init my-app -t hello   # same as -t silk-lang/examples/hello
```

| Template  | What it is                                        |
| --------- | ------------------------------------------------- |
| `default` | What `silk init` creates without `-t`             |
| `hello`   | A program that logs a greeting                    |
| `library` | A library package with one function and its test |
| `ui-react` | A Silk UI app in React and TypeScript, in a window |
| `ui-foldkit` | A Silk UI app in Foldkit, in a window |
| `ui-js` | A Silk UI app in plain TypeScript, in a window |
| `ui-loom` | A Silk UI app in Loom, in a window and a browser page |
| `ui-react-tailwind` | React counter with Tailwind CSS |
| `ui-foldkit-tailwind` | Foldkit counter with Tailwind CSS |
| `ui-js-tailwind` | TypeScript counter with Tailwind CSS |
| `ui-loom-tailwind` | Loom counter with Tailwind CSS on window, canvas and DOM |
| `ui-react-css` | React counter styled by a plain CSS file, with a theme switch |
| `ui-foldkit-css` | Foldkit counter styled by a plain CSS file, with a theme switch |
| `ui-js-css` | TypeScript counter styled by a plain CSS file, with a theme switch |
| `ui-loom-css` | Loom counter styled by a plain CSS file, on window, canvas and DOM |

## Silk UI templates

Each `ui-*` template is a hello-world that runs with `silk task dev` right after `silk init`.

On Linux the window host builds against the X11, xkbcommon and Wayland headers:

```sh
sudo apt-get install -y libx11-dev libxkbcommon-dev libwayland-dev wayland-protocols
```
`src/tasks.silk` defines the app (what it is written in, where it runs) and the `dev` and
`build` tasks, all through one dependency, [silkui](https://github.com/silk-lang/silkui/tree/main/modules/silkui).
The JavaScript templates keep the app in a Vite project in `web/`; the Loom one keeps it in
`src/app.silk`.

The JavaScript templates install `@silkui/core`, `@silkui/react`, `@silkui/foldkit` and
`@silkui/vite` from npm. To try unreleased changes, point `web/package.json` at a silkui
checkout (`"@silkui/core": "file:<silkui>/modules/js/packages/core"` and so on, with
`install-links=true` in `web/.npmrc`).

`silkui` is pinned to a silkui revision, and the Loom templates' `loom` to a silk-lang/loom one. The
generated hosts take their packages from those same dependencies, so bump each to a revision
that works with the other.

There are three ways to style, and a template for each. The original templates use style
objects. The `*-css` variants use class names and one plain CSS file: custom properties for a
light and a dark theme, state selectors, a transition. The `*-tailwind` variants use Tailwind
classes: JavaScript ones run `@tailwindcss/vite` before `@silkui/vite`; Loom uses the separate
`ui-tailwind` build/watch helper, which can run without Node. Any other tool that produces
ordinary CSS works the same way as the plain file.

## Adding a template

`silk init` without a template uses `default`; `silk init -t minimal` makes the same kind of
project offline, from the compiler itself.

Add a directory with a `silk.toml` and give it a `[package].description`; `silk init --list` shows
it. `silk init` sets the new project's package name and `silk-version`, so the values here only
need to work for building the example itself.

A template can adjust the new project once it is copied with `[[post-init]]` entries:

```toml
[[post-init]]
run = ["scripts/post-init.sh"]
```

Each entry runs once in the new project's directory and is removed from its `silk.toml`.
