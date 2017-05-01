# Vuek - minimal vue boilerplate

> Vuek is an opinionated-featured VueJS 2.0 setup for Webpack

> The setup includes hot-reload, lint-on-save, unit testing, css extraction, vuex, advanced routing, i18n, SVG sprite sheets and scss with some helpers, pug(jade) for templates.

## What's different

This template is a fork of the official [Bourgeon](https://raw.githubusercontent.com/rayfranco/bourgeon/) template. A few more opinionated features and conventions are bundled with Vuek:

- **[VueX](https://rayfranco.github.io/bourgeon/store.html)** installed and ready to use
- **[Routing](https://rayfranco.github.io/bourgeon/routing.html)** using official [vue-router](https://github.com/vuejs/vue-router) and conventions
- **[i18n](https://rayfranco.github.io/bourgeon/i18n.html)** using [vue-i18n](https://github.com/kazupon/vue-i18n), [yaml-loader](https://github.com/okonet/yaml-loader) and conventions
- **[Store](https://rayfranco.github.io/bourgeon/store.html)** if not using vuex, a simple convention for sharing data between components
- **[SVG Sprites](https://rayfranco.github.io/bourgeon/svg.html)** using [svg-sprite-loader](https://github.com/kisenka/svg-sprite-loader) and conventions
- ftp-deploy

## Documentation

- [For this template](http://kosmos.github.io/vuek): common questions specific to this template are answered and each part is described in greater detail
- [For Vue 2.0](http://rc.vuejs.org/guide/): general information about how to work with Vue, not specific to this template

## Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli). **It is recommended to use npm 3+ for a more efficient dependency tree.**

``` bash
$ git clone git@github.com:kosmos/vuek.git
$ cd vuek
$ yarn
$ npm start
```

## What's Included

- `npm start`: first-in-class development experience.
  - Webpack + `vue-loader` for single file Vue components.
  - State preserving hot-reload
  - State preserving compilation error overlay
  - Lint-on-save with ESLint
  - Source maps

- `npm run build`: Production ready build.
  - JavaScript minified with [UglifyJS](https://github.com/mishoo/UglifyJS2).
  - HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
  - CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano).
  - All static assets compiled with version hashes for efficient long-term caching, and a production `index.html` is auto-generated with proper URLs to these generated assets.

- `npm run unit`: Unit tests run in PhantomJS with [Karma](http://karma-runner.github.io/0.13/index.html) + [Mocha](http://mochajs.org/) + [karma-webpack](https://github.com/webpack/karma-webpack).
  - Supports ES2015 in test files.
  - Supports all webpack loaders.
  - Easy mock injection.

- `npm run e2e`: End-to-end tests with [Nightwatch](http://nightwatchjs.org/).
  - Run tests in multiple browsers in parallel.
  - Works with one command out of the box:
    - Selenium and chromedriver dependencies automatically handled.
    - Automatically spawns the Selenium server.
