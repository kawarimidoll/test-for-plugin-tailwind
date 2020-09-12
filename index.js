module.exports = (options, ctx) => {
  const { name } = require("./package");
  const { cwd, siteConfig, sourceDir, vuepressDir } = ctx;
  const { tailwindConfig } = options;
  const { logger } = require("@vuepress/shared-utils");

  const defaultTailwindConfig = () => {
    try {
      return require(`${cwd}/tailwind.config.js`);
    } catch (e) {
      return {
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
      };
    }
  };

  const plugins = [
    require("tailwindcss")(tailwindConfig || defaultTailwindConfig()),
    require("autoprefixer"),
  ];
  logger.tip(`[${name}] tailwindcss is enabled`);

  siteConfig.postcss = Object.assign(siteConfig.postcss || {}, { plugins });

  return { name };
};
