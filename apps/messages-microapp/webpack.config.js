const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { VueLoaderPlugin } = require('vue-loader');
const { dependencies } = require('../../../package.json');

module.exports = (config, context) => {
  config.context = process.cwd();
  config.plugins.push(
    new ModuleFederationPlugin({
      name: 'messages_microapp',
      library: { type: 'var', name: 'messages_microapp' },
      filename: 'remoteEntry.js',
      exposes: {
        './messages-wc': 'apps/messages-microapp/src/bootstrap.ts',
      },
      shared: {
        ...dependencies,
      },
    }),
    new VueLoaderPlugin()
  );
  config.entry = 'apps/messages-microapp/src/main.ts';
  config.output = {
    publicPath: 'auto',
  };
  // important workaround !!!
  config.optimization.runtimeChunk = false;
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
      test: /\.ts$/,
      use: ['ts-loader'],
    },
    {
      test: /\.scss|\.css$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    },
  ];

  return config;
};
