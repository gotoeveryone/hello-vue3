const path = require("path");
const { defineConfig } = require("@vue/cli-service");

const TSCONFIG_PATH = path.resolve(__dirname, "tsconfig.build.json");

module.exports = defineConfig({
  // transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        'vue-property-decorator': path.join(__dirname, 'node_modules/vue-facing-decorator/src/index.ts')
      }
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias.set("vue", "@vue/compat");

    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => {
        return {
          ...options,
          compilerOptions: {
            compatConfig: {
              MODE: 3,
            },
          },
        };
      });

    config.module
      .rule("ts")
      .use("ts-loader")
      .merge({
        options: {
          configFile: TSCONFIG_PATH
        }
      });

    config.plugin("fork-ts-checker").tap(args => {
      args[0].typescript.configFile = TSCONFIG_PATH;
      return args;
    });
  },
});
