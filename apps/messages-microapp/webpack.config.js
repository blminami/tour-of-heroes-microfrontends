const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { VueLoaderPlugin } = require('vue-loader');
const { dependencies } = require('../../../package.json');

module.exports = (config, context) => {
  config.context = process.cwd();
  config.plugins.push(
    new ModuleFederationPlugin({
      name: 'messages',
      filename: 'remoteEntry.js',
      exposes: {
        './Messages': 'apps/messages-microapp/src/main.ts',
      },
      shared: {
        ...dependencies,
      },
    }),
    new VueLoaderPlugin()
  );
  config.optimization.runtimeChunk = false;
  config.output = {
    uniqueName: 'messages',
    publicPath: 'http://localhost:4203/',
    filename: '[name][contenthash].js',
    clean: true,
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
