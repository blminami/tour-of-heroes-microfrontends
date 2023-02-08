const {
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'heroes-microapp',
  filename: 'remoteEntry.js',
  exposes: {
    './Module': './apps/heroes-microapp/src/app/heroes/heroes.module.ts',
  },
});
