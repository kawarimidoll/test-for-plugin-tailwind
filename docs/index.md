# @kawarimidoll/vuepress-plugin-tailwind

[![GitHub package.json version](https://img.shields.io/github/package-json/v/kawarimidoll/vuepress-plugin-tailwind?logo=github&style=for-the-badge)](https://github.com/kawarimidoll/vuepress-plugin-tailwind/blob/master/package.json)
[![npm downloads](https://img.shields.io/npm/dt/@kawarimidoll/vuepress-plugin-tailwind?logo=npm&style=for-the-badge)](https://www.npmjs.com/package/@kawarimidoll/vuepress-plugin-tailwind)
[![Dependencies](https://img.shields.io/david/kawarimidoll/vuepress-plugin-tailwind?color=blue&logo=dependabot&style=for-the-badge)](https://github.com/kawarimidoll/vuepress-plugin-tailwind/pulls?q=dependabot)
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/kawarimidoll/vuepress-plugin-tailwind?logo=javascript&style=for-the-badge)](https://github.com/kawarimidoll/vuepress-plugin-tailwind/blob/master/index.js)
[![LICENSE](https://img.shields.io/github/license/kawarimidoll/vuepress-plugin-tailwind?style=for-the-badge)](https://github.com/kawarimidoll/vuepress-plugin-tailwind/blob/master/LICENSE)

A VuePress plugin to use [`tailwindcss`](https://github.com/tailwindcss/tailwindcss) easily.

With this plugin, you can use any classes defined by Tailwind CSS, and the unused classes are automatically purged (production only).

This plugin is based on [the official guide of Tailwind CSS](https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css).

## Usage

1. Install this plugin :

```sh
yarn add @kawarimidoll/vuepress-plugin-tailwind
```

2. Add `@tailwind` import statements to the beginning of `.vuepress/styles/index.styl` :

```styl
@tailwind base;
@tailwind components;
@tailwind utilities;

// Add your style definitions below...
```

3. Load this plugin in `.vuepress/config.js` :

```js
module.exports = {
  plugins: [
    "@kawarimidoll/tailwind",
    // with options
    // ["@kawarimidoll/tailwind", { tailwindConfig: { important: true } }]
  ],
};
```

:warning:
_These configuration files are not created automatically. You have to create them if not exist._

## Options

### tailwindConfig

This is the configuration object or path to the configuration file. The default value is :

```js
{
  corePlugins: { preflight: false },
  purge: {
    content: [
      `${sourceDir}/**/*.@(js|md|vue|html)`,
      `${vuepressDir}/**/*.@(js|md|vue|html)`,
    ],
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}
```

This default value is adjusted for VuePress from [the document](https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css).

- The original styles of Vuepress is not reset by `corePlugins`.
- The unused styles will be removed by `purge`. The styles used in source directory of Vuepress are protected by `content`.
- The future update is enabled by `future`.

The priorities of configuration is:
1. If there is input `tailwindConfig`, the value is used.
2. If there is `tailwind.config.js` in the same directory as `package.json`, the configuration file is used.
3. the default value above is used.

If you want to use this option, refer to [the Tailwind CSS configuration guide](https://tailwindcss.com/docs/configuration/).

:bulb:
_`sourceDir`, `vuepressDir` and `cwd` above are [Context API](https://vuepress.vuejs.org/plugin/context-api.html) of VuePress._

:warning:
_If you use `tailwindConfig`, the default value is overwritten, not merged._

## Versioning policy

Since v1.x, the versioning of this plugin will follow that of Tailwind.

For example, when there is a major version upgrade of Tailwind, this plugin also gets a major upgrade.

## License

[MIT](https://github.com/kawarimidoll/vuepress-plugin-tailwind/blob/master/LICENSE)
