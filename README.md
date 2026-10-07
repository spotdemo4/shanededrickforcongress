# shanededrickforcongress

[![check](https://trev.zip/llc/shanededrickforcongress/actions/workflows/check.yaml/badge.svg?branch=main&logo=forgejo&logoColor=%23bac2de&label=check&labelColor=%23313244)](https://trev.zip/llc/shanededrickforcongress/actions?workflow=check.yaml)
[![vulnerable](https://trev.zip/llc/shanededrickforcongress/actions/workflows/vulnerable.yaml/badge.svg?branch=main&logo=forgejo&logoColor=%23bac2de&label=vulnerable&labelColor=%23313244)](https://trev.zip/llc/shanededrickforcongress/actions?workflow=vulnerable.yaml)
[![nixpkgs](https://img.shields.io/endpoint?url=https%3A%2F%2Fnix-shield.trev.zip%2Fbadge%3Furl%3Dhttps%253A%252F%252Ftrev.zip%252Fllc%252Fshanededrickforcongress%252Fraw%252Fbranch%252Fmain%252Fflake.lock%26input%3Dnixpkgs&logoColor=%23bac2de&labelColor=%23313244&color=%235277C3)](https://nixos.org/)
[![node](https://img.shields.io/badge/dynamic/json?url=https://trev.zip/llc/shanededrickforcongress/raw/branch/main/package.json&query=%24.engines.node&logo=nodedotjs&logoColor=%23bac2de&label=version&labelColor=%23313244&color=%23339933)](https://nodejs.org/en/about/previous-releases)

parody campaign website for shane xD

**This is satire.** It is not affiliated with, authorized by, or paid for by Shane Dedrick, any candidate, campaign committee, or political party. Factual claims are sourced from [WLNS 6 News](https://www.wlns.com/your-local-election-hq/dedrick-michigan-congressional-race-controversy/); see `src/content.ts`.

built with [Solid 2.0](https://github.com/solidjs/solid) and [Vite](https://vite.dev/).

## deploying

[Cloudflare Pages](https://developers.cloudflare.com/pages/) settings:

| setting                | value           |
| ---------------------- | --------------- |
| build command          | `npm run build` |
| build output directory | `dist`          |
| `NODE_VERSION` env var | `24`            |

## contributing

see [CONTRIBUTING.md](CONTRIBUTING.md) for requirements and getting started
