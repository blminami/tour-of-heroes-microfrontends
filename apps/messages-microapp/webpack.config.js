const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = (config, context) => {
  config.context = process.cwd();
  config.plugins.push(
    new ModuleFederationPlugin({
      name: "vue",
      library: { type: "var", name: "vue" },
      filename: "remoteEntry.js",
      exposes: {
        './web-components': 'apps/messages-microapp/src/bootstrap.ts',
      },
      shared: ["vue", "core-js"]
    }),
    new VueLoaderPlugin()
  );
  config.entry = 'apps/messages-microapp/src/main.ts';
  config.output = {
    publicPath: 'http://localhost:4203/',
  };
  config.devServer.headers = { 'Access-Control-Allow-Origin': '*' };
  config.resolve.extensions = ['.vue', '.js', '.ts'];
  config.module.rules = [
    {
      test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
      use: [{ loader: 'file-loader' }],
    },
    {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: ['file-loader'],
    },
    {
      test: /\.vue$/,
      use: 'vue-loader',
    },
    {
      test: /\.scss|\.css$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    },
  ];

  return config;
};
