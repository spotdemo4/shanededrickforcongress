# contributing

## requirements

- [nix](https://nixos.org/)

## getting started

```sh
nix develop
```

with [direnv](https://direnv.net/):

```sh
ln -s .envrc.project .envrc
direnv allow
```

install dependencies:

```sh
npm install
```

### run

with [npm](https://docs.npmjs.com/):

```sh
npm run dev
```

### format

```sh
nix fmt
```

with [oxfmt](https://oxc.rs/):

```sh
oxfmt --write .
```

### check

```sh
nix flake check
```

with [oxlint](https://oxc.rs/):

```sh
oxlint --deny-warnings
```

### build

```sh
nix build
```

with [npm](https://docs.npmjs.com/) (outputs to `dist/`):

```sh
npm run build
```
