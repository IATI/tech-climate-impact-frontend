# Technical Climate Impact Dashboard

## Getting Started

### Node

- Recommended to use `nvm`
- `nvm use` to use the proper node version from `.nvmrc` file

### Package install

To install:

`npm install`

### Running local dev server

To run a development server using (`./envs/.env.development` vars):

`npm run dev`

To run a development server using (`./envs/.env.production` vars):

`npm run dev:production`

### Building for Deployment

To make a production build using (`./envs/.env.development` vars):

`npm run build:development`

To make a production build using (`./envs/.env.production` vars):

`npm run build:production`

To serve a production build locally for testing:

`npm run serve`

## Testing

### Open Cypress UI

`npm run cy:open`

### Run Cypress Tests from Command Line

`npm run cy:run`

## Linting and Formatting

ESLint and Prettier are employed for linting and formatting. Implemented following this guide:
https://vueschool.io/articles/vuejs-tutorials/eslint-and-prettier-with-vite-and-vue-js-3/

# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
