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

## Silk UI templates

Each `ui-*` template is a hello-world that runs with `silk task dev` right after `silk init`.
`src/tasks.silk` defines the app (what it is written in, where it runs) and the `dev` and
`build` tasks, all through one dependency, [silkui](https://github.com/silk-lang/silkui/tree/main/modules/silkui).
The JavaScript templates keep the app in a Vite project in `web/`; the Loom one keeps it in
`src/app.silk`.

The JavaScript templates install `@silkui/core`, `@silkui/react`, `@silkui/foldkit` and
`@silkui/vite` from npm, so they work once those packages are published. Until then, point
`web/package.json` at a silkui checkout (`"@silkui/core": "file:<silkui>/modules/js/packages/core"`
and so on, with `install-links=true` in `web/.npmrc`).

`silkui` is pinned to a silkui revision, and `ui-loom`'s `loom` to a silk-lang/loom one. The
generated hosts take their packages from those same dependencies, so bump each to a revision
that works with the other.

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
