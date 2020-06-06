module.exports = {
    stories: ["../stories/**/*.(ts|tsx|js|jsx|mdx)"],
    addons: [
        '@storybook/addon-actions/register',
        {
            name: "@storybook/addon-docs",
            options: {
                configureJSX: true,
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
        ],
      });
      config.resolve.extensions.push('.ts', '.tsx');
      return config;
    },
};