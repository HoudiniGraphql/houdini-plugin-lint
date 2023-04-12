<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/HoudiniGraphql/houdini/main/.github/assetss/logo_l.svg">
    <img height="140" alt="Houdini's logo (dark or light)" src="https://raw.githubusercontent.com/HoudiniGraphql/houdini/main/.github/assets/logo_d.svg">
  </picture>
  <br />
  <br />
  <strong>
    The disappearing GraphQL clients.
  </strong>
  <br />
  <br />
  <a href="https://npmjs.org/package/houdini-plugin-svelte-global-stores">
    <img src="https://img.shields.io/npm/v/houdini.svg" alt="version" />
  </a>
  <a href="https://github.com/HoudiniGraphql/houdini/actions">
    <img src="https://github.com/HoudiniGraphql/houdini/actions/workflows/tests.yml/badge.svg" alt="CI Tests" />
  </a>
  <a href="https://github.com/HoudiniGraphql/houdini">
    <img src="https://img.shields.io/github/stars/HoudiniGraphql/houdini.svg?label=stars" alt="github stars" />
  </a>
  <a href="https://npmjs.org/package/houdini">
    <img src="https://img.shields.io/npm/dm/houdini.svg" alt="downloads" />
  </a>
  <a href="https://github.com/HoudiniGraphql/houdini/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/HoudiniGraphql/houdini.svg?maxAge=2592000" alt="license" />
  </a>
</div>

---

# ➕ houdini-plugin-lint

This package provides some linting rules for houdini.

## Setup

To use this plugin, add it to the list of plugins in `houdini.config.js`:

```js
/// <references types="houdini-plugin-svelte-lint">

/** @type {import('houdini').ConfigFile} */
const config = {
  plugins: {
    "houdini-plugin-lint": {},
  },
};

export default config;
```

## Rules

### 1/ Fragment matching Component name

Fragments declared in a component must start with the same name as the component.

✅ In `CompA.svelte` or `CompA.tsx`, Fragments must start with `CompA`.

---

<a href="https://www.houdinigraphql.com">HoudiniGraphQL.com</a> 🚀
