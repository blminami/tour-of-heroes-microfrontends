const {
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'dashboard-microapp',
  filename: 'remoteEntry.js',
  exposes: {
    './Module':
      './apps/dashboard-microapp/src/app/dashboard/dashboard.module.ts',
  },
});
