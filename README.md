# Silk examples

Starter projects for `silk init`. Each directory with a `silk.toml` is a template:

```sh
silk init --list            # list the templates here
silk init my-app -t hello   # same as -t silk-lang/examples/hello
```

| Template  | What it is                                        |
| --------- | ------------------------------------------------- |
| `hello`   | A program that logs a greeting                    |
| `library` | A library package with one function and its test |

## Adding a template

Add a directory with a `silk.toml` and give it a `[package].description`; `silk init --list` shows
it. `silk init` sets the new project's package name and `silk-version`, so the values here only
need to work for building the example itself.

A template can adjust the new project once it is copied with `[[post-init]]` entries:

```toml
[[post-init]]
run = ["scripts/post-init.sh"]
```

Each entry runs once in the new project's directory and is removed from its `silk.toml`.
