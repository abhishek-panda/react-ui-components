const path = require('path');

module.exports = {
    stories: ["../components/**/*.stories.(js|mdx)"],
    addons: [
        '@storybook/addon-actions/register',
        {
            name: "@storybook/addon-docs",
            options: {
              configureJSX: true,
              babelOptions: {},
              sourceLoaderOptions: null,
            },
        }
    ],
    webpackFinal: async config => {
      config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve('ts-loader'),
          },
          {
            loader: require.resolve("react-docgen-typescript-loader"),
            options: {
              tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
            },
          }
        ],
      });
      config.resolve.extensions.push('.ts', '.tsx');
      return config;
    },
};